"use client";

import "./Contact.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_rdtxkeg",
        "template_xk4tzlg",
        formRef.current,
        "QuUjHm_Qpgwx_wdmp"
      )
      .then(
        () => {
          alert("✅ Gửi thành công!");
          formRef.current?.reset();
        },
        (error) => {
          alert("❌ Lỗi: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        Feel free to reach out for collaborations or just a friendly hello 👋
      </p>

      <div className="contact-content">
        {/* Form bên trái */}
        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="text" name="title" placeholder="Subject" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
          />
          <button type="submit">Send Message</button>
        </form>

        {/* Design bên phải */}
        <div className="contact-right">
          <img
            src="/images/profile-pic.jpg"  
            alt="Thank you"
            className="thanks-image"
          />
          <div className="contact-right-info">
            <p>
              <FaPhone /> <span>+84 859 081 481</span>
            </p>
            <p>
              <FaEnvelope /> <span>caovy2305@gmail.com</span>
            </p>
          </div>
          <p className="contact-quote">
            Let’s create something beautiful <span>Together!</span>
          </p>
        </div>
      </div>
    </section>
  );
}
