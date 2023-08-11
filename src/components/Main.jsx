import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  return (
    <div className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
      <form className='mt-12 flex flex-col gap-8'>
        <label className='flex flex-col'>
          <textarea
            rows={7}
            value={message}
            onChange={handleChange}
            style={{ backgroundColor: "#121831" }}
            placeholder='Here, the story begins.'
            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
          />
        </label>
      </form>
    </div>
  );
};

export default Contact;
