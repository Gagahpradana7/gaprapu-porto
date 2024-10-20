import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaEnvelopeOpenText, FaPhoneSquareAlt } from "react-icons/fa";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const info = [
    {
      icon: <FaPhoneSquareAlt />,
      description: "(+62) 819 3526 5629",
    },
    {
      icon: <FaEnvelopeOpenText />,
      description: "gagahpradanap@gmail.com",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_jx8bqgn",
        "template_v0ptz7g",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      );

      console.log(result.text);
      MySwal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full xl:p-0 p-8 xl:mt-0 mt-16">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 xl:text-6xl text-3xl"
          >
            Let`s <span className="text-accent">work</span> together.
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex-col flex gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                placeholder="Your Name"
                className="input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Message"
              className="textarea"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <div className="flex items-center w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all 
                duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all duration-500 text-sm">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <BsArrowRightCircle
                  className="-translate-y-[120px] opacity-0 
                  group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                />
              </button>
              <div className="flex ml-auto space-x-8 items-center">
                {info.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="text-accent">{item.icon}</div>
                    <div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
