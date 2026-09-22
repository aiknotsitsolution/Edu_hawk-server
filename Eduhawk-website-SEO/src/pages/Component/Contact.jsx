import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Helmet } from "react-helmet-async";
// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    error: false,
  });
  const [errors, setErrors] = useState({});

  const recaptchaRef = useRef(null);

  const validateForm = () => {
    const nextErrors = {};
    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const message = formData.message.trim();
    const wordCount = message.length
      ? message.split(/\s+/).filter(Boolean).length
      : 0;

    if (!firstName) nextErrors.firstName = "First name is required";
    if (!lastName) nextErrors.lastName = "Last name is required";
    if (!email) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address";
    }
    if (phone && !/^\+?[0-9\s-]{7,15}$/.test(phone)) {
      nextErrors.phone = "Enter a valid phone number";
    }
    if (!message) nextErrors.message = "Message is required";
    else if (wordCount < 10) {
      nextErrors.message = "Message must contain at least 10 words";
    }

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: "", error: false });

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        loading: false,
        message: "Please fix the highlighted fields.",
        error: true,
      });
      return;
    }

    setErrors({});

    const captchaToken = recaptchaRef.current?.getValue();
    if (!captchaToken) {
      setStatus({
        loading: false,
        message: "Please complete the reCAPTCHA verification",
        error: true,
      });
      return;
    }

    try {
      const response = await fetch(
        "https://edu-hawk-server.onrender.com/api/contact/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone || undefined,
            subject: formData.subject,
            message: formData.message,
            captcha: captchaToken,
          }),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: "Thank you! Your message has been sent successfully.",
          error: false,
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
        setErrors({});
        recaptchaRef.current?.reset();
      } else {
        setStatus({
          loading: false,
          message: data.message || "Failed to send message. Please try again.",
          error: true,
        });
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatus({
        loading: false,
        message: "Network error. Please check your internet connection.",
        error: true,
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact MBBS Abroad Consultancy | EduHawk</title>
        <meta
          name="description"
          content="Contact EduHawk for MBBS abroad admission guidance, fees details and university selection support."
        />
        <meta
          name="keywords"
          content="contact mbbs consultancy, mbbs abroad contact, study abroad help "
        />
      </Helmet>
      <div className="min-h-screen bg-gray-50 font-poppins overflow-x-hidden">
        {/* Hero Section with New Background Image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/05/47/40/44/240_F_547404496_ZV5aB55KPrKJ90qzD2zhoPhNbjn07wX3.jpg')", // ← Yahan naya image daala hai
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 0, 0.60)", // Dark overlay for better text visibility
          }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-wider drop-shadow-2xl text-center"
          >
            CONTACT
          </motion.h1>
        </motion.section>

        {/* Form + Main Office Section */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="py-16 md:py-24 bg-gray-100"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* LEFT SIDE - FORM */}
              <motion.div
                variants={slideLeft}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-[#02145a] mb-6">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-8">
                  We're here to assist you with any inquiries. Feel free to
                  reach out!
                </p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                        placeholder="Your first name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.firstName}
                        </p>
                      )}
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition ${errors.lastName ? "border-red-500" : "border-gray-300"}`}
                        placeholder="Your last name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.lastName}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition ${errors.email ? "border-red-500" : "border-gray-300"}`}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                        placeholder="+91 .........."
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.phone}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`}
                      placeholder="How can we help you?"
                    />
                    <div className="mt-2 flex items-center justify-between text-sm">
                      {errors.message ? (
                        <p className="text-red-600">{errors.message}</p>
                      ) : (
                        <p className="text-gray-500">
                          Minimum 10 words required
                        </p>
                      )}
                      <span className="text-gray-500">
                        {
                          formData.message.trim().split(/\s+/).filter(Boolean)
                            .length
                        }{" "}
                        words
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex justify-center md:justify-start pt-4"
                  >
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LczDtQsAAAAAFPaJwLYrIPrE6FI69tzbXnFYodI"
                      theme="light"
                      size="normal"
                    />
                  </motion.div>

                  {status.message && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-center font-medium ${status.error ? "text-red-600" : "text-green-600"}`}
                    >
                      {status.message}
                    </motion.p>
                  )}

                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      disabled={status.loading}
                      whileHover={{ scale: status.loading ? 1 : 1.03 }}
                      whileTap={{ scale: status.loading ? 1 : 0.97 }}
                      className={`w-full bg-[#02145a] text-white py-4 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-3
                      ${status.loading ? "cursor-not-allowed bg-[#0f3a9e]" : "hover:bg-[#0a2a8c] hover:shadow-xl"}`}
                    >
                      {status.loading ? (
                        <div className="flex items-center gap-3">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="text-2xl"
                          >
                            🤖
                          </motion.div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              </motion.div>

              {/* RIGHT SIDE - Main Office + Quick Contact */}
              <motion.div
                variants={slideRight}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-[#02145a] mb-4">
                    Our Main Office
                  </h3>
                  <p className="text-gray-700 mb-6">
                    N-5, South Extension Part-1, New Delhi - 110049
                  </p>

                  {/* New: Horizontal Office Buttons */}

                  <div className="aspect-video rounded-lg overflow-hidden shadow-inner">
                    <iframe
                      src="https://www.google.com/maps?q=N-5%2C%20South%20Extension%20Part-1%2C%20New%20Delhi%20110049&output=embed"
                      title="EduHawk main office location"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div>
                  <h5 className="text-xl font-semibold text-[#02145a] mb-4">
                    Quick Contact
                  </h5>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <i className="fa-solid fa-phone mr-3 text-[#02145a]"></i>{" "}
                      +91-76329 49984
                    </li>
                    <li className="flex items-center">
                      <i className="fa-solid fa-envelope mr-3 text-[#02145a]"></i>{" "}
                      admin@eduhawk.in
                    </li>
                  </ul>

                  <div className="mb-8 mt-6 text-sm text-gray-400">
                    <h5 className="text-lg font-semibold text-[#02145a] mb-3">
                      Our Offices
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      <button className="px-5 py-2.5 border border-[#02145a] text-[#02145a] rounded-xl font-medium hover:bg-[#02145a] hover:text-white transition-all active:scale-95">
                        Delhi
                      </button>
                      <button className="px-5 py-2.5 border border-[#02145a] text-[#02145a] rounded-xl font-medium hover:bg-[#02145a] hover:text-white transition-all active:scale-95">
                        Patna
                      </button>
                      <button className="px-5 py-2.5 border border-[#02145a] text-[#02145a] rounded-xl font-medium hover:bg-[#02145a] hover:text-white transition-all active:scale-95">
                        Lucknow
                      </button>
                      <button className="px-5 py-2.5 border border-[#02145a] text-[#02145a] rounded-xl font-medium hover:bg-[#02145a] hover:text-white transition-all active:scale-95">
                        Bihar
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Branches Section with Phone Numbers */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#02145a] text-center mb-12">
              Our Branches
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Delhi Branch */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <h4 className="font-bold text-xl text-[#02145a] mb-3">
                  New Delhi
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  N-5, South Extension Part-1,
                  <br />
                  New Delhi - 110049
                </p>
                <p className="text-[#02145a] font-medium flex items-center gap-2">
                  <i className="fa-solid fa-phone"></i> +91 7319908359
                </p>
              </div>

              {/* Patna Branch */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <h4 className="font-bold text-xl text-[#02145a] mb-3">Patna</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  p-24, Dumraon Place,
                  <br />
                  Frazer Road, Patna, Bihar - 800001
                </p>
                <p className="text-[#02145a] font-medium flex items-center gap-2">
                  <i className="fa-solid fa-phone"></i> +91 7632949984
                </p>
              </div>

              {/* Bhopal Branch */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <h4 className="font-bold text-xl text-[#02145a] mb-3">
                  Bhopal
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  103, Goyal Vihar, Plot No.31-C,
                  <br />
                  Zone -II, M.P Nagar,
                  <br />
                  Bhopal, Madhya Pradesh 462011
                </p>
                <p className="text-[#02145a] font-medium flex items-center gap-2">
                  <i className="fa-solid fa-phone"></i> +91 9630736070
                </p>
              </div>

              {/* Lucknow Branch */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all">
                <h4 className="font-bold text-xl text-[#02145a] mb-3">
                  Lucknow
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  2nd Floor Noor Plaza Tedhi
                  <br />
                  Pulia Ring Road Near Lenskart showroom,
                  <br />
                  Kalyanpur Lucknow 226022
                </p>
                <p className="text-[#02145a] font-medium flex items-center gap-2">
                  <i className="fa-solid fa-phone"></i> +91 8400056046
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
