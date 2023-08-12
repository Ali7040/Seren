import React, { useState } from "react"

const Contact = () => {
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    const { value } = e.target
    setMessage(value)
  }

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
      <div className="w-[100%]">
      <button className="text-white cursor-pointer rounded-lg h-[34px] p-3  bg-gradient-linear-and-radial shadow-[0px_-1px_8px_#9375b6_inset,_0px_0px_5px_#fface4_inset,_0px_30px_30px_rgba(0,_0,_0,_0.4)] overflow-hidden flex flex-row py-3.5  box-border items-center justify-start">Sign up</button>
      </div>
    </div>
  )
}

export default Contact;
