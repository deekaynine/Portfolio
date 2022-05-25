import React from "react";

import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-white flex justify-center items-center p-4"
    >
      {/*Used getform.io for this form submission method*/}
      <form
        method="POST"
        action="https://getform.io/f/e9823a1c-61b8-49bd-bca0-2d7bffea9d9d"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div class="flex flex-col items-center pb-8">
          <p className="text-4xl font-bold flex  text-black">
            Contact
            <img src={mail} className="h-[40px] w-[40px] ml-3" alt="mail" />
          </p>
          <p className="text-black py-4">
            Submit the form below or shoot me an email -
            matthewtse123work@gmail.com
          </p>
        </div>
        <input
          className="bg-[#cd6f6] p-2 border-black border-2 "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#cd6f6] border-black border-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#cd6f6] p-2 border-black border-2"
          name="message"
          cols="10"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button className="text-black border-2 border-black hover:bg-black hover:text-white hover:border-white px-4 py-3 my-8 mx-auto flex items-center">
          Submit here!
        </button>
      </form>
    </div>
  );
};

export default Contact;
