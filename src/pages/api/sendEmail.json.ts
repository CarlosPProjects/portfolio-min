import type { APIRoute } from "astro";
import { Resend } from "resend";

const { RESEND_API_KEY } = import.meta.env;

const resend = new Resend(RESEND_API_KEY);

export const POST: APIRoute = async ({ params, request }) => {
  const { name, from, message } = await request.json();

  const { data, error } = await resend.emails.send({
    from,
    to: ["cg9822@gmail.com"],
    subject: "Contact - Portfolio",
    html: `<p>Name: ${name}</p><p>Message: ${message}</p>`,
  });

  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
    })
  );
};
