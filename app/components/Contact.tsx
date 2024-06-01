"use client";

import { Span } from "next/dist/trace";
import React, { useState, useRef, RefObject } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form: RefObject<HTMLFormElement> = useRef(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(false);
    setSuccess(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current!,

        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY || "",
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current!.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  const phoneNumber = "+917988064796";
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <section id="contact" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className=" heading_text">Get in Touch</p>
          <h1 className=" heading_primary">
            Let's Make Your <span className="text-yellow-300">Brand</span>{" "}
            Brilliant
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            alias reiciendis at doloribus natus autem, aut mollitia laborum a
            cum?
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold"
          >
            {phoneNumber}
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              type="text"
              placeholder="Name"
              required
              name="user_name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="user_email"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            name="user_message"
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
          />
          <textarea
            placeholder="Message"
            rows={4}
            required
            name="user_message"
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white  bg-gray-800 rounded-md px-4 "
          ></textarea>
          <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-red-600 hover:bg-yellow-500 rounded-md px-4 transition-all duration-300 ease-in-out ">
            Submit
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message send successfully
            </span>
          )}
          {error && (
            <span className=" text-red-600 font-bold">
              Somthing went wrong!
            </span>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
