import { useState } from "react";
import emailjs from "@emailjs/browser";
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
/* eslint-enable no-unused-vars */

export default function Contact() {
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Grab form values
    const formData = new FormData(e.target);
    const from_name = formData.get("from_name");
    const from_email = formData.get("from_email");
    const message = formData.get("message");

    console.log("🚀 Sending Email with values:", { from_name, from_email, message });

    emailjs
      .sendForm(
        "service_ipeoylg",   // Service ID
        "template_ugp7pd6",  // Template ID
        e.target,
        "B_UQ8VEVZWIpgqKiA"  // Public Key
      )
      .then(
        (res) => {
          console.log("✅ SUCCESS:", res);
          setStatus("success");

          // Auto-remove popup after 3 seconds
          setTimeout(() => setStatus(null), 3000);
        },
        (error) => {
          console.error("❌ ERROR:", error);
          setStatus("error");

          // Auto-remove popup after 3 seconds
          setTimeout(() => setStatus(null), 3000);
        }
      );

    e.target.reset();
  };

  return (
    <motion.section
      id="contact"
      className="section text-center relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Contact Me
      </h2>

      <form onSubmit={sendEmail} className="max-w-lg mx-auto flex flex-col gap-4 card">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="p-3 rounded bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          className="p-3 rounded bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded bg-black/30 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        ></textarea>
        <button type="submit" className="btn-primary px-6 py-3 rounded-lg text-lg">
          🚀 Send Message
        </button>
      </form>

      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-lg text-white ${
              status === "success" ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {status === "success"
              ? "✅ Message sent successfully!"
              : "❌ Something went wrong. Please try again."}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
