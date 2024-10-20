import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaEnvelopeOpenText, FaPhoneSquareAlt } from "react-icons/fa";
import { fadeIn } from "../../variants";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const sweetAlertConfig = {
  success: {
    background: "#1a1a1a",
    color: "#ffffff",
    icon: "success",
    confirmButtonColor: "#3b82f6",
    title: "Success!",
    text: "Your message has been sent successfully.",
  },
  error: {
    background: "#1a1a1a",
    color: "#ffffff",
    icon: "error",
    confirmButtonColor: "#3b82f6",
    title: "Error!",
    text: "Failed to send message. Please try again.",
  },
  validation: {
    background: "#1a1a1a",
    color: "#ffffff",
    icon: "warning",
    confirmButtonColor: "#3b82f6",
  },
};

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

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (!name.trim()) {
      MySwal.fire({
        ...sweetAlertConfig.validation,
        title: "Name Required",
        text: "Please enter your name",
      });
      return false;
    }

    if (!email.trim()) {
      MySwal.fire({
        ...sweetAlertConfig.validation,
        title: "Email Required",
        text: "Please enter your email address",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      MySwal.fire({
        ...sweetAlertConfig.validation,
        title: "Invalid Email",
        text: "Please enter a valid email address",
      });
      return false;
    }

    if (!subject.trim()) {
      MySwal.fire({
        ...sweetAlertConfig.validation,
        title: "Subject Required",
        text: "Please enter a subject",
      });
      return false;
    }

    if (!message.trim()) {
      MySwal.fire({
        ...sweetAlertConfig.validation,
        title: "Message Required",
        text: "Please enter your message",
      });
      return false;
    }

    return true;
  };

  const showAlert = (config) => {
    MySwal.fire({
      ...config,
      customClass: {
        popup: "bg-gray-900 text-white",
        confirmButton:
          "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg",
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
      showAlert(sweetAlertConfig.success);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      showAlert(sweetAlertConfig.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full xl:p-0 p-8 xl:mt-0 mt-24">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12 xl:text-6xl text-3xl"
          >
            Let`s <span className="text-accent">connect.</span>
            <p className="text-white xl:text-base text-sm xl:mt-8 mt-4">
              Feel free to contact me, and I hope we can work together.
            </p>
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
                type="text"
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
            {/* Updated mobile responsive layout */}
            <div className="flex flex-col sm:flex-row items-center w-full gap-6 sm:gap-0">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn rounded-full border border-white/50 w-full sm:max-w-[170px] px-8 transition-all 
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
              <div className="flex flex-col sm:flex-row sm:ml-auto gap-4 sm:gap-8 items-center w-full sm:w-auto">
                {info.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm sm:text-base"
                  >
                    <div className="text-accent text-lg sm:text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="break-all sm:break-normal">
                        {item.description}
                      </p>
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
