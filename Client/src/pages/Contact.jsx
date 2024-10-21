import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import Words from "../canvas/word";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // New handleSubmit using fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Basic validation
    if (!form.name || !form.email || !form.message) {
      setErrorMessage("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setSuccessMessage('Email sent successfully');
        setForm({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setErrorMessage('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Error sending message. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div
      id="contact"
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] contact p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-zinc text-black py-4 px-6 placeholder:text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-zinc text-black py-4 px-6 placeholder:text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-zinc text-black py-4 px-6 placeholder:text-primary rounded-lg outline-none border-none font-medium"
            />
          </label>

          {errorMessage && (
            <div className="text-red-500">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="text-green-500">{successMessage}</div>
          )}

          <button
            type="submit"
            className="btn py-3 px-8 rounded-xl outline-none w-fit text-white font-light shadow-md shadow-primary transition-all duration-300 ease-in-out transform hover:bg-opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-primary"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Words />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
