import type { APIRoute } from "astro";
import { Resend } from "resend";

export const prerender = false;

const { RESEND_API_KEY } = import.meta.env;

if (!RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is not defined");
}

const resend = new Resend(RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { from, to, subject, html, text } = body;

  if (!to || !from || !subject || !html || !text) {
    return new Response(null, {
      status: 400,
      statusText: "Did not provide the right data",
    });
  }

  const send = await resend.emails.send({
    from,
    to,
    subject,
    html,
    text,
  });

  if (send.data) {
    return new Response(
      JSON.stringify({
        message: send.data,
      }),
      { status: 200, statusText: "OK" }
    );
  } else {
    return new Response(
      JSON.stringify({
        message: send.error,
      }),
      { status: 400, statusText: "Bad Request" }
    );
  }
};
