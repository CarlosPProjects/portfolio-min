import { type FC } from "react";

interface Props {}

const ContactForm: FC<Props> = ({}) => {
  return (
    <form className="flex flex-col gap-6">
      <textarea
        aria-label="message"
        placeholder="Write your message here"
        cols={30}
        rows={6}
        className="w-full px-6 py-4 sm:p-8 rounded-xl border border-[#8F98A6]"
      ></textarea>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold leading-10">Regards</p>
        <div className="flex flex-col sm:flex-row gap-5">
          <input
            type="text"
            aria-label="name"
            placeholder="Name"
            className="flex-1 px-6 py-4 rounded-xl border border-[#8F98A6]"
          />
          <input
            type="email"
            aria-label="email"
            placeholder="Email"
            className="flex-1 px-6 py-4 rounded-xl border border-[#8F98A6]"
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
