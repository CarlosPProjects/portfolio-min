import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  if(!name || !email || !message){
    return new Response(null, {
      status: 400,
      statusText: 'Fields requireds not found'
    })
  }

  const send = await resend.emails.send({
    from: "portfolio@cgaravito.dev",
    to: "cg.fullstackdev@gmail.com",
    subject: "Portfolio - Contacto",
    html: `
    <p>${name} quiere contactarte </p>
    <p>${email}</p>
    <p>${message}</p>
    `,
    text: "Hi",
  });

  if (send.data) {
    return new Response(JSON.stringify({ message: send.data }), {
      status: 200,
      statusText: "OK",
    });
  } else {
    return new Response(JSON.stringify({ message: send.error }), {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
};
