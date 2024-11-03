import React, { useRef, useState } from 'react'

export default function Contact() {
/*   const formRef = useRef(); 

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    
  const handleChange = ({ target: { name, value} }) => {
    setForm({ ...form, [name]: value }) 
  }
    
  const handleSubmit = async (e) => {
    e.preventDefault();    
      
  } */

  return (
    <section className="c-space my-20" id="contact">
        <div className="h-fit flex items-center justify-center flex-col">
            {/* <img src="/assets/terminal.png" alt="terminal-bg" className="w-fit h-96 left-1/4" /> */}
            <div className="contact-container p-16 rounded-3xl bg-[url('/assets/terminal.png')] bg-no-repeat bg-cover">
                <h3 className="head-text">Let's talk</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                </p>
{/*                 <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                    <label className="space-y-3">
                        <span className="field-label">Full Name </span>
                        <input type="text" name="name" value={form.name} onChange={handleChange} 
                               required className="field-input" placeholder="John Doe" />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Email</span>
                        <input type="email" name="email" value={form.email} onChange={handleChange} 
                               required className="field-input" placeholder="johndoe121@gmail.com" />
                    </label>
                    <label className="space-y-3">
                        <span className="field-label">Your Message</span>
                        <textarea type="text" name="message" value={form.message} onChange={handleChange} 
                               required rows={5} className="field-input" placeholder="Hi, I'm interested in...">
                        </textarea>
                    </label>
                    <a href="mailto:prashantrawat2mx@gmail.com" className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...': 'Send Message' }
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </a>
                </form> */}
                <h1 className="text-2xl mt-5 mb-3 text-white">Connect with me on:</h1>    
                <div className="flex flex-col gap-1">
                    <a target="_blank" className="text-white hover:underline text-xl flex w-28 justify-between center" href="https://www.linkedin.com/in/prashant-rawat-61494b189/">
                        <span> LinkedIn </span>
                        <img src="/assets/linkedin.svg" alt="linkedin" className="h-6 w-6" />
                    </a>
                    <a target="_blank" className="text-white hover:underline text-xl flex w-28 justify-between center" href="https://github.com/pacifier121">
                        <span> GitHub </span>
                        <img src="/assets/github.svg" alt="github" className="h-6 w-6" />
                    </a>
                    <a target="_blank" className="text-white hover:underline text-xl flex w-28 justify-between center" href="mailto:prashantrawat2mx@gmail.com">
                        <span> Email </span>
                        <img src="/assets/gmail.svg" alt="gmail" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
