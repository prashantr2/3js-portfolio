import React from 'react'

export default function Footer() {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>
        <div className="flex gap-3">
            <a target="_blank" href="https://github.com/pacifier121" className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </a>
            <a target="_blank" href="https://x.com/_Lemon_Slayer_" className="social-icon">
                <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
            </a>
            <a target="_blank" href="https://www.instagram.com/__prashantr__" className="social-icon">
                <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
            </a>
        </div>
        <p className="text-white-500">© {new Date().getFullYear()} Prashant. All rights reserved. </p>
    </section>
  )
}
