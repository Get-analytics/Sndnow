import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { notification } from "antd";
import { SmileOutlined, CloseCircleOutlined } from '@ant-design/icons';

const ContactForm = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const openNotification = (type, message, description) => {
    notification.open({
      message,
      description,
      icon: type === "success" ? (
        <SmileOutlined style={{ color: "#108ee9" }} />
      ) : (
        <CloseCircleOutlined style={{ color: "#ff4d4f" }} />
      ),
      placement: 'bottomRight',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Create a hidden form dynamically
      const formElement = document.createElement('form');
      formElement.method = 'POST';
      formElement.action = 'https://formsubmit.co/sendnow.live@gmail.com'; 

      // Add form fields
      Object.keys(formData).forEach((key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formData[key];
        formElement.appendChild(input);
      });

      // Additional hidden fields
      const subjectInput = document.createElement('input');
      subjectInput.type = 'hidden';
      subjectInput.name = '_subject';
      subjectInput.value = 'New Contact Form Submission';
      formElement.appendChild(subjectInput);

      const captchaInput = document.createElement('input');
      captchaInput.type = 'hidden';
      captchaInput.name = '_captcha';
      captchaInput.value = 'false';
      formElement.appendChild(captchaInput);

      const nextInput = document.createElement('input');
      nextInput.type = 'hidden';
      nextInput.name = '_next';
      nextInput.value = window.location.href;
      formElement.appendChild(nextInput);

      document.body.appendChild(formElement);
      formElement.submit();
      document.body.removeChild(formElement);

      openNotification(
        "success",
        "Message Sent Successfully!",
        "Your message has been successfully sent."
      );

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      openNotification(
        "error",
        "Failed to Send Message",
        `Error: ${error.message || 'Unknown error'}`
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#7C5832] mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions or need help with your analytics? Our team is ready to assist you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-lg mx-auto bg-[#F8F6F3] p-8 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border-gray-300 focus:border-[#7C5832] focus:ring-[#7C5832] p-2 rounded-md"
              />
              {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="w-full border-gray-300 focus:border-[#7C5832] focus:ring-[#7C5832] p-2 rounded-md"
              />
              {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="w-full min-h-[120px] border-gray-300 focus:border-[#7C5832] focus:ring-[#7C5832] p-2 rounded-md"
              />
              {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-[#7C5832] hover:bg-[#7C5832]/90 text-white py-2 rounded-[25px] transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
