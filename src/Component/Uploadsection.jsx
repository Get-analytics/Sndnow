import React from "react";
import { motion } from "framer-motion";
import { Link2, Upload } from "lucide-react";
import { useInView } from "react-intersection-observer";

const UploadSection = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      window.location.href = "https://dashboard.sendnow.live/login";
    }
  };

  const openFileDialog = () => {
    const fileInput = document.getElementById("file-upload");
    if (fileInput) {
      fileInput.click();
    }
  };

  const sectionStyle = {
    padding: "4rem 0",
    backgroundColor: "white",
  };

  const containerStyle = {
    maxWidth: "100%",
    padding: "0 1.5rem",
    margin: "0 auto",
  };

  const cardStyle = {
    maxWidth: "40rem",
    margin: "0 auto",
    backgroundColor: "#f8f6f3",
    borderRadius: "1rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    padding: "2rem",
  };

  const headingStyle = {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "#7c5832",
    textAlign: "center",
    marginBottom: "2rem",
  };

  const descriptionStyle = {
    textAlign: "center",
    color: "#4a4a4a",
    marginBottom: "3rem",
    maxWidth: "40rem",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const boxStyle = {
    border: "2px dashed #b79f85",
    borderRadius: "1rem",
    padding: "1.5rem",
  };

  const formGridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  };

  const formGroupStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  };

  const labelStyle = {
    fontWeight: "500",
    fontSize: "1.125rem",
  };

  const inputWrapperStyle = {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center",
  };

  const inputStyle = {
    flex: "1",
    padding: "0.75rem",
    border: "1px solid #d1d5db",
    borderRadius: "9999px",
    outline: "none",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "0.75rem",
    backgroundColor: "#7c5832",
    color: "white",
    borderRadius: "9999px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#7c5832cc",
  };

  const iconStyle = {
    width: "1.25rem",
    height: "1.25rem",
  };

  const noteStyle = {
    fontSize: "0.875rem",
    color: "#6b7280",
  };

  const hiddenStyle = {
    display: "none",
  };

  return (
    <section id="get-started" style={sectionStyle} ref={sectionRef}>
      <div style={containerStyle}>
        <motion.div
          style={cardStyle}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            style={headingStyle}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stop Sending Blind—Get Data That Matters
          </motion.h2>

          <motion.p
            style={descriptionStyle}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ditch the guessing game. Sendnow turns your file shares into intel missions, packing heatmaps, session stats, bounce rates, location insights, and video‑play patterns—all in one dashboard.
          </motion.p>

          <motion.div
            style={boxStyle}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div style={formGridStyle}>
              {/* URL Input */}
              <motion.div
                style={formGroupStyle}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 style={labelStyle}>Enter your URL</h3>
                <div style={inputWrapperStyle}>
                  <input
                    type="text"
                    placeholder="Paste the URL"
                    style={inputStyle}
                  />
                  <button
                    onClick={() => window.open("https://dashboard.sendnow.live/login", "_blank")}
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#7c5832cc")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#7c5832")}
                  >
                    <Link2 style={iconStyle} />
                  </button>
                </div>
                <p style={noteStyle}>
                  Note: Paste any publicly accessible link to generate a shareable short URL and gather engagement analytics.
                </p>
              </motion.div>

              {/* File Upload */}
              <motion.div
                style={formGroupStyle}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h3 style={labelStyle}>Drop Your Content</h3>
                <div style={inputWrapperStyle}>
                  <input
                    readOnly
                    value="Upload Your Files"
                    style={{ ...inputStyle, color: "#9ca3af", cursor: "default" }}
                  />
                  <input
                    type="file"
                    id="file-upload"
                    style={hiddenStyle}
                    onChange={handleFileChange}
                  />
                  <button
                    onClick={openFileDialog}
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#7c5832cc")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#7c5832")}
                  >
                    <Upload style={iconStyle} />
                  </button>
                </div>
                <p style={noteStyle}>
                  Note: Upload PDFs, Docs, PPTs, images, or videos. Maximum file size varies by plan—upgrade anytime for higher limits and advanced analytics.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UploadSection;
