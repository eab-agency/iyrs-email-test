"use client";
import React from "react";

export interface PersonProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gradYear: string;
  permission: boolean;
}

export const FormModal = () => {
  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const firstname = formData.get("firstname") as string;
      const lastname = formData.get("lastname") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const gradYear = formData.get("gradYear") as string;

      const person: PersonProps = {
        firstName: firstname,
        lastName: lastname,
        email,
        phone,
        gradYear,
        permission: formData.get("permission") === "on",
      };

      // Send email to user
      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      });

      console.log("Email sent successfully!");

      // Perform any additional actions after successful email sending
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle error case
    }
  };
  return (
    <div id="modal" className="modal">
      <form
        className="rounded-lg shadow-xl flex flex-col px-8 py-8"
        onSubmit={handleSubmit}
      >
        {/* label and input for first name */}
        <label
          htmlFor="firstname"
          className="text-white font-light mt-4" // updated for white text
        >
          First name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="firstname"
          className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black" // updated for white bg & black text
        />
        <label
          htmlFor="lastname"
          className="text-white font-light mt-4" // updated for white text
        >
          Last name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="lastname"
          className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black" // updated for white bg & black text
        />

        <label
          htmlFor="email"
          className="text-white font-light mt-4" // updated for white text
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black" // updated for white bg & black text
        />

        {/* cell phone number input */}
        <label
          htmlFor="phone"
          className="text-white font-light mt-4" // updated for white text
        >
          Phone number<span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="phone"
          className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black" // updated for white bg & black text
        />

        {/* New checkbox field */}
        <div className="flex flex-col mt-4">
          <input
            type="checkbox"
            name="permission"
            id="permission"
            className="mr-2"
          />
          <label
            htmlFor="permission"
            className="text-white font-light flex items-center"
          >
            I give permission to Roanoke College to send me important updates
            via text messaging. (Standard message charges apply.)
          </label>
        </div>

        {/* New dropdown for graduation year */}
        <div className="flex flex-col mt-4">
          <label htmlFor="gradYear" className="text-white font-light">
            High School Graduation Year
          </label>
          <select
            name="gradYear"
            id="gradYear"
            className="bg-white border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-black"
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
          </select>
        </div>

        <div className="flex flex-row items-center justify-start">
          <button
            className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            type="submit"
          >
            Send
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-cyan-500 ml-2"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};
