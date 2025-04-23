import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Component/ui/button";
import { useInView } from "react-intersection-observer";
import "./Hero.css";  // Import the external CSS file

const Hero = () => {
  const [containerRef, containerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={containerInView ? "visible" : "hidden"}
          className="hero-content"
        >
          <motion.h1 variants={itemVariants} className="hero-title">
            Share Smarter, <br />
            <span>Track Better.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-description">
            Shorten and share everything—in a single link, then dive into{" "}
            <span className="font-medium">heat maps, bounce rates, and location insights</span> to uncover the story behind every click.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-button-group">
            <Button
              size="lg"
              className="hero-button hero-button-primary"
              onClick={() => {
                const element = document.querySelector("#get-started");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              Upload. Share. Analyze. For Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hero-button hero-button-outline"
              onClick={() => {
                const element = document.querySelector("#analytics");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              See It in Action
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-image-container"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <div className="hero-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=900&q=80"
              alt="Analytics dashboard preview"
              className="hero-image"
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.19, 1.0, 0.22, 1.0],
              }}
              className="hero-text-overlay"
            >
              <h3>See your content's impact</h3>
              <p>Real-time insights for every share</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
