import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

export const ContactForm = () => {
  const form = useRef();
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const messageRef = useRef();
  const [captchaVerified, setCaptchaVerified] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault();

    if(!captchaVerified){
      alert("Please verify the reCAPTCHA");
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((response) => {
        console.log(response);
        alert("Email sent successfully");
        userNameRef.current.value = '';
        userEmailRef.current.value = '';
        messageRef.current.value = '';
        setCaptchaVerified(false);
      })
      .catch(() => {
        console.log(error);
        alert("Something went wrong");
      });
  };

  const onCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  }

  return (
    <form
      ref={form}
      className="md:w-[25rem] bg-[#5C51D6]/80 rounded-lg top-[-9rem] 2xl:top-[-10rem] float-right xl:mr-48 font-poppins text-white shadow-2xl relative"
      onSubmit={(e) => sendEmail(e)}
    >
      <div className="form-title md:w-1/2 mx-auto max-w-lg p-4">
        <h2 className="text-2xl text-white w-full font-medium my-4">
          Get in touch
        </h2>
      </div>
      <div className="form-content w-4/5 mx-auto">
        <label className="block">Name</label>
        <input
          type="text"
          name="user_name"
          ref={userNameRef}
          className="shadow appearance-none bg-[#5c51d6]/90 rounded px-1 w-full focus:shadow-outline focus:outline-none focus:border focus:border-white text-white"
        />
        <label className="block mt-6">Email</label>
        <input
          type="email"
          name="user_email"
          ref={userEmailRef}
          className="shadow appearance-none bg-[#5c51d6]/90 rounded px-1 w-full focus:shadow-outline focus:outline-none focus:border focus:border-white text-white"
        />
        <label className="block mt-6">Message</label>
        <textarea
          name="message"
          ref={messageRef}
          className="resize-none shadow appearance-none bg-[#5c51d6]/90 rounded px-1 w-full focus:shadow-outline focus:outline-none focus:border focus:border-white text-white"
        />
        <ReCAPTCHA sitekey={import.meta.env.VITE_RECAPTCHA_KEY} onChange={onCaptchaChange} />
        <div className="submit mx-auto w-1/2">
          
          <button
            type="submit"
            className="transition duratio-100 my-4 p-4 border lg:hover:bg-white lg:hover:text-black"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};
