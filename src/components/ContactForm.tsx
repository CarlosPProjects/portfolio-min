import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (form.current) {
        await emailjs
          .sendForm(
            'service_22mhjda',
            'template_pwdykt2',
            form.current,
            'MkH0sbh-cWU1XdDVQ'
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        toast.success("Message sent successfully!");
        form.current?.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="flex flex-col gap-6" ref={form} onSubmit={handleSubmit}>
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
            aria-label="email"
            placeholder="Email*"
            className="flex-1 px-6 py-4 rounded-xl border border-[#8F98A6]"
            type="email"
            name="email"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full p-4 rounded-2xl bg-[#0A0908] text-white font-bold text-sm mt-10"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        progressStyle={{ backgroundColor: "gray" }}
      />
    </form>
  );
};

export default ContactForm;
