import { React, useState } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isMessageSending, setIsMessageSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const form = useRef(null);
  const sendEmail = (e) => {
    setIsMessageSending(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pf79zwu",
        "template_td3huwe",
        form.current,
        "el2l-PAtOfI80gTh3"
      )
      .then(
        (result) => {
          setIsMessageSending(false);
          if (result.text === "OK") {
            setIsSuccess(true);
            setTimeout(() => {
              setIsSuccess(false);
            }, 5000);
            form.current.reset();
          } else {
            setIsFailed(true);
            setTimeout(() => {
              setIsFailed(false);
            }, 5000);
          }
        },
        (error) => {
          setIsMessageSending(false);
          console.log(error.text);
          setIsFailed(true);
          setTimeout(() => {
            setIsFailed(false);
          }, 5000);
        }
      );
  };

  return (
    <section id="contact">
      {isSuccess && (
        <div className="notification success">
          Thank you, message sent successfully!
        </div>
      )}
      {isFailed && (
        <div className="notification error">Failed to send message!</div>
      )}

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="text-light">ganeshpc0077@gmail.com</h5>
            <a
              href="mailto:ganeshpc0077@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5 className="text-light">ganeshpc007</h5>
            <a
              href="https://instagram.com/ganeshpc007"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaXTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5 className="text-light">@GaneshPC007</h5>
            <a
              href="https://twitter.com/GaneshPC007"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            autoComplete="off"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            autoComplete="off"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" id="sendMessage" className="btn btn-primary">
            {isMessageSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
