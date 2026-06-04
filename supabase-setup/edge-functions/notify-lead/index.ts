// =====================================================================
// Edge Function: notify-lead
// Sends an email via Resend whenever a new lead row is inserted.
//
// Deploy in: Supabase Dashboard → Edge Functions → Create new function
//   Name: notify-lead
//   Verify JWT: OFF (trigger calls it with a shared secret instead)
//
// Required secrets (Project Settings → Edge Functions → Secrets):
//   RESEND_API_KEY    re_DWXP6Zfd_5ZucqRoTDoPvgsAYQuSAKq9R
//   NOTIFY_TO_EMAIL   ebukadave2009@gmail.com
//   TRIGGER_SECRET    (the random string below — keep it secret)
// =====================================================================

const RESEND_API_KEY  = Deno.env.get("RESEND_API_KEY")!;
const NOTIFY_TO_EMAIL = Deno.env.get("NOTIFY_TO_EMAIL")!;
const TRIGGER_SECRET  = Deno.env.get("TRIGGER_SECRET")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type, x-trigger-secret",
};

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.headers.get("x-trigger-secret") !== TRIGGER_SECRET) {
    return new Response(JSON.stringify({ error: "unauthorized" }), {
      status: 401,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let lead: Record<string, unknown> = {};
  try {
    lead = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid json" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const subject = `🔔 New lead: ${lead.name} — ${lead.service} (${lead.budget})`;

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px;margin:0 auto;color:#141414">
      <h2 style="margin:0 0 8px;font-size:20px">New lead from work-with-dave</h2>
      <p style="margin:0 0 20px;color:#666;font-size:13px">Saved to Supabase · ID ${esc(lead.id)}</p>

      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tbody>
          ${row("Name", lead.name)}
          ${row("Email", `<a href="mailto:${esc(lead.email)}" style="color:#0f766e">${esc(lead.email)}</a>`)}
          ${row("WhatsApp", `<a href="https://wa.me/${esc(String(lead.whatsapp).replace(/\D/g, ""))}" style="color:#0f766e">${esc(lead.whatsapp)}</a>`)}
          ${lead.company ? row("Company", lead.company) : ""}
          ${row("Service", lead.service)}
          ${row("Budget", lead.budget)}
          ${row("Timeline", lead.timeline)}
          ${lead.context ? row("Context", String(lead.context).replace(/\n/g, "<br>")) : ""}
        </tbody>
      </table>

      ${(lead.utm_source || lead.utm_medium || lead.utm_campaign || lead.referrer)
        ? `<h3 style="margin:24px 0 8px;font-size:14px;color:#666">Attribution</h3>
           <table style="width:100%;border-collapse:collapse;font-size:13px;color:#555">
             ${lead.utm_source   ? row("utm_source", lead.utm_source)     : ""}
             ${lead.utm_medium   ? row("utm_medium", lead.utm_medium)     : ""}
             ${lead.utm_campaign ? row("utm_campaign", lead.utm_campaign) : ""}
             ${lead.referrer     ? row("Referrer", lead.referrer)         : ""}
           </table>` : ""}

      <p style="margin:24px 0 0;color:#999;font-size:12px">Reply to this email to reach ${esc(lead.email)} directly.</p>
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Leads <onboarding@resend.dev>",
      to: [NOTIFY_TO_EMAIL],
      reply_to: String(lead.email ?? ""),
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend failed", res.status, detail);
    return new Response(JSON.stringify({ ok: false, status: res.status, detail }), {
      status: 502,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});

function row(label: string, value: unknown) {
  return `<tr>
    <td style="padding:6px 12px 6px 0;color:#666;width:120px;vertical-align:top">${esc(label)}</td>
    <td style="padding:6px 0;vertical-align:top">${typeof value === "string" && value.startsWith("<a ") ? value : esc(value)}</td>
  </tr>`;
}