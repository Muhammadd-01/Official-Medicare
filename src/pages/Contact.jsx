import React, { useState, useContext } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { DarkModeContext } from "../App" // make sure this is correctly imported

function Contact() {
  const { darkMode } = useContext(DarkModeContext)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [feedback, setFeedback] = useState("")

  const handleContactSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", { name, email, message })
    alert("Thank you for contacting us. We will get back to you soon!")
    setName("")
    setEmail("")
    setMessage("")
  }

  const handleFeedbackSubmit = (e) => {
    e.preventDefault()
    console.log("Feedback submitted:", feedback)
    alert("Thank you for your feedback!")
    setFeedback("")
  }

  const cardStyle = darkMode
    ? "bg-[#0A2A43] text-white"
    : "bg-white text-gray-800"

  const inputStyle = darkMode
    ? "bg-[#081F5C] text-white border border-blue-300"
    : "bg-white text-gray-700 border border-gray-300"

  return (
    <>
      <Helmet>
        <title>Contact Us - MediNova</title>
        <meta name="description" content="Get in touch with MediNova. We're here to answer your questions and provide support." />
        <link rel="canonical" href="https://www.MediNova.com/contact" />
        <meta property="og:title" content="Contact MediNova - Get in Touch" />
        <meta property="og:description" content="Contact our team for any questions or support regarding our medical services." />
        <meta property="og:url" content="https://www.MediNova.com/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <motion.div
            className={`${cardStyle} rounded-lg shadow-lg p-8`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 ${inputStyle}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 ${inputStyle}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-bold mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 ${inputStyle}`}
                  rows="6"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Location Info */}
          <motion.div
            className={`${cardStyle} rounded-lg shadow-lg p-8`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Location</h2>
            <div className="mb-6">
              <p className="mb-2">123 Medical Street</p>
              <p className="mb-2">Health City, HC 12345</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p className="mb-2">Email: info@MediNova.com</p>
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767645"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Feedback Form */}
        <motion.div
          className={`${cardStyle} rounded-lg shadow-lg p-8 max-w-3xl mx-auto`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Provide Feedback</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <label htmlFor="feedback" className="block font-bold mb-2">
              Your Feedback:
            </label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className={`w-full px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500 ${inputStyle}`}
              rows="6"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Submit Feedback
            </button>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default Contact
