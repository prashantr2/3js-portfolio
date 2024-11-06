import React, { useRef, useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const formRef = useRef(); 
  const msgRef = useRef();

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
    setLoading(true);
      
    let resp = null;
    try {
        resp = await axios.post('https://basic-email-sender.onrender.com/', {
            fromName: form.name,
            from: form.email,
            to: 'prashantrawat2mx@gmail.com',
            subject: 'Message from Portfolio',
            text: form.message
        }, {
            headers: {
                'customapitoken': 'myApiSecretToken'
            }
        }) 
    } catch (err) { 
       console.log(err); 
    }
    setLoading(false); 
    if (!resp || resp.status != 200) {
        msgRef.current.innerText = 'That didn\'t work, could you retry please?'
    } else {
        msgRef.current.innerText = 'Thank you for getting in touch!'
        setForm({ name: '', email: '', message: '' })
    }
    msgRef.current.style.display = 'block';
    setTimeout(() => {
        msgRef.current.style.display = 'none';
    }, 5000)
  }

  return (
    <section className="c-space my-20" id="contact">
        <div className="h-fit flex items-center justify-center flex-col min-w-full">
            {/* <img src="/assets/terminal.png" alt="terminal-bg" className="w-fit h-96 left-1/4" /> */}
            {/* <div className="contact-container p-16 rounded-3xl bg-[url('/assets/terminal.png')] bg-no-repeat bg-cover"> */}
            <div className="contact-container min-w-2/3 py-16 rounded-2xl border border-gray-700 bg-black-200">
                <div ref={msgRef} className="hidden rounded-2xl text-white absolute right-10 p-2 border border-white-500">
                </div>
                <div className="absolute top-0 left-0 rounded-t-2xl w-full h-6 bg-gradient-to-r from-black-300 via-white-600 to-black-300 flex gap-1 items-center px-3">
                    <div className="rounded-full h-2 w-2 bg-red-500 drop-shadow-terminal-red" />
                    <div className="rounded-full h-2 w-2 bg-yellow-500 drop-shadow-terminal-yellow" />
                    <div className="rounded-full h-2 w-2 bg-green-500 drop-shadow-terminal-green" />
                    <div className="text-white-500 ml-auto" >+</div>
                </div>
                <h3 className="head-text">Let's talk</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                </p>
                <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
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
                    <button className="field-btn" type="submit" disabled={loading}>
                        {loading ? 'Sending...': 'Send Message' }
                        <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                    </button>
                </form>
                <h1 className="text-2xl mt-5 mb-3 text-white">Connect with me on:</h1>    
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                    <a target="_blank" className="col-start-1 col-span-1 text-white hover:underline text-xl flex w-28 justify-between center" href="https://www.linkedin.com/in/prashant-rawat-61494b189/">
                        <span> LinkedIn </span>
                        <img src="/assets/linkedin.svg" alt="linkedin" className="h-6 w-6" />
                    </a>
                    <a target="_blank" className="col-start-2 lg:col-start-3 col-span-1 text-white hover:underline text-xl flex w-28 justify-between center" href="https://github.com/pacifier121">
                        <span> GitHub </span>
                        <img src="/assets/github.svg" alt="github" className="h-6 w-6" />
                    </a>
                    <a target="_blank" className="col-start-1 col-span-1 text-white hover:underline text-xl flex w-28 justify-between center" href="https://mail.google.com/mail/?view=cm&fs=1&to=prashantrawat2mx@gmail.com">
                        <span> Email </span>
                        <img src="/assets/gmail.svg" alt="gmail" className="h-6 w-6" />
                    </a>
                    <a target="_blank" className="col-start-2 lg:col-start-3 col-span-1 text-white hover:underline text-xl flex w-28 justify-between center" href="tel:+916395982706">
                        <span> Phone </span>
                        <img src="/assets/phone.svg" alt="phone" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}
