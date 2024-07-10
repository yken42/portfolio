import React, { forwardRef } from "react";
import github from "../images/github.png";
import linkdin from "../images/linkdin.png";
import { ContactForm } from "./ContactForm";

export const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="bg-gradient-to-b from-[#2B20A0] to-[#0E0939] h-[45rem]">
      <div className="seperator-2"></div>
      <div className="contact md:flex justify-between mx-auto w-4/5">
        <div className="links sm:block sm:w-full md:w-1/4">
          <ul className="flex lg:mt-12 lg:ml-36 relative top-[28rem] sm:top-0">
            <li className="transition duration-150 w-24 px-4 mx-auto lg:hover:opacity-50">
              <a href="https://github.com/yken42" target="_blank">
                <img src={github} alt="GitHub" />
              </a>
            </li>
            <li className="transition duration-150 w-24 px-4 mx-auto lg:hover:opacity-50">
              <a
                href="https://www.linkedin.com/in/yair-ken-7a08b3236/"
                target="_blank"
              >
                <img src={linkdin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
        <ContactForm />

      </div>
      <div className="footer w-1/2 mx-auto text-center text-white relative top-12 ">
        <p>©2024 Yair Ken</p>
      </div>
    </div>
  );
});