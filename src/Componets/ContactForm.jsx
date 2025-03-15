import React, { useState, useEffect } from "react";
import "./styles.css";

const ContactForm = ({ isMobile, showEmailInput }) => {
  const [email, setEmail] = useState("");
  const [placeholder, setPlaceholder] = useState("Email Address");
  const [loading, setLoading] = useState(false);
  const [statusClass, setStatusClass] = useState("");
  const api = import.meta.env.VITE_API_URL ;

  useEffect(() => {
    if (statusClass) {
      const timer = setTimeout(() => {
        setPlaceholder("Email Address");
        setStatusClass("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [statusClass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusClass("");

    if (!email.trim()) {
      setPlaceholder("⚠ Email is required.");
      setEmail("");
      setStatusClass("input-error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPlaceholder("⚠ Invalid email format.");
      setEmail("");
      setStatusClass("input-error");
      return;
    }

    if (email.endsWith("@ez.works")) {
      setPlaceholder("⚠ Emails ending with @ez.works are not allowed.");
      setEmail("");
      setStatusClass("input-error");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setPlaceholder("✅ Form Submitted");
        setEmail("");
        setStatusClass("input-success");
      } else {
        setPlaceholder(data.message || "⚠ An error occurred.");
        setEmail("");
        setStatusClass("input-error");
      }
    } catch (error) {
      setPlaceholder("⚠ Something went wrong. Try again.");
      setEmail("");
      setStatusClass("input-error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={`form-container ${isMobile ? "mobile" : "desktop"}`} onSubmit={handleSubmit}>
      {showEmailInput && (
        <input
          type="text"
          placeholder={placeholder}
          className={`input ${statusClass}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <button className="button" type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Contact Me"}
      </button>
    </form>
  );
};

export default ContactForm;