import { type FC } from "react";

interface Props {}

const ContactForm: FC<Props> = ({}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { name, message } = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/sendEmail.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: 'cgaravito.dev',
          to: ["cg9822@gmail.com"],
          subject: "Contact - Portfolio",
          html: `<p>Name: ${name}</p><p>Message: ${message}</p>`,
          text: `Name: ${name}\nMessage: ${message}`,
        }),
      });
      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <textarea
        aria-label="message"
        placeholder="Write your message here*"
        cols={30}
        rows={6}
        className="w-full px-6 py-4 sm:p-8 rounded-xl border border-[#8F98A6]"
        name="message"
        required
      ></textarea>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold leading-10">Regards</p>
        <div className="flex flex-col sm:flex-row gap-5">
          <input
            type="text"
            aria-label="name"
            placeholder="Name*"
            className="flex-1 px-6 py-4 rounded-xl border border-[#8F98A6]"
            name="name"
            required
          />
          <input
            type="email"
            aria-label="email"
            placeholder="Email*"
            className="flex-1 px-6 py-4 rounded-xl border border-[#8F98A6]"
            name="email"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-4 rounded-2xl bg-[#0A0908] text-white font-bold text-sm mt-10"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
