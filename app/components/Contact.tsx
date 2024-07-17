"use client";
import React, { useState, useRef, RefObject } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    user_message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const object = {
      access_key: "26e2bbe4-41a4-48be-9ea1-46b1ebe3fa9f", // Replace with your actual access key
      ...formData,
    };

    try {
      const json = JSON.stringify(object);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: json,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);

      // Clear the form and update the form status
      setFormData({
        user_name: "",
        user_email: "",
        user_subject: "",
        user_message: "",
      });
      setFormStatus({ submitted: true, success: true, error: "" });
    } catch (error) {
      console.error("Error:", error);
      setFormStatus({
        submitted: true,
        success: false,
        error: "An error occurred. Please try again.",
      });
    }
  };

  const phoneNumber = "+917988064796";

  return (
    <section id="contact" className="pt-[5rem] pb-[3rem] bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading_text">Get in Touch</p>
          <h1 className="heading_primary">
            Let&#39;s Make Your <span className="text-yellow-300">Brand</span>{" "}
            Brilliant
          </h1>
          <p className="text-[15px] text-white  mt-3 opacity-75 mb-4">
            Ready to elevate your brand to new heights? Our dedicated team is
            here to help you shine. Let's create something amazing together!
          </p>
          <a
            href={`tel:${phoneNumber}`}
            className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold"
          >
            {phoneNumber}
          </a>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
            <input
              type="text"
              placeholder="Name"
              required
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            name="user_subject"
            value={formData.user_subject}
            onChange={handleChange}
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
          />
          <textarea
            placeholder="Message"
            rows={4}
            required
            name="user_message"
            value={formData.user_message}
            onChange={handleChange}
            className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
          ></textarea>
          <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-red-600 hover:bg-yellow-500 rounded-md px-4 transition-all duration-300 ease-in-out">
            Submit
          </button>
          {formStatus.submitted && (
            <div className="text-center">
              {formStatus.success ? (
                <span className="text-green-600 font-semibold">
                  Your message was sent successfully.
                </span>
              ) : (
                <span className="text-red-600 font-bold">
                  {formStatus.error}
                </span>
              )}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
