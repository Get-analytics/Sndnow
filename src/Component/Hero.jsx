import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Component/ui/button";
import { useInView } from "react-intersection-observer";

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
    <section className="pt-32 pb-20 md:py-28 lg:py-32 bg-[#F8F6F3]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={containerInView ? "visible" : "hidden"}
            className="max-w-xl text-left"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Share Smarter, <br /><span className="text-[#7C5832]">Track Better.</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg mb-8 text-gray-600">
              Shorten and share everything—in a single link, then dive into <span className="font-medium">heat maps, bounce rates, and location insights</span> to uncover the story behind every click.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#7C5832] hover:bg-[#7C5832]/90 text-white rounded-full px-6 py-2"
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
                className="border-[#7C5832] text-[#7C5832] hover:bg-[#7C5832] hover:text-white rounded-full px-6 py-2"
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
            className="relative shadow-xl rounded-2xl overflow-hidden bg-white p-3"
          >
            <div className="relative aspect-[5/3] rounded-xl overflow-hidden ">
              {/* Embed Vimeo video */}
              <iframe
                src="https://player.vimeo.com/video/1079069666?h=ada49f95c5&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                title="Sendnow | Upload. Share. Get analytics. All with a short URL."
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
