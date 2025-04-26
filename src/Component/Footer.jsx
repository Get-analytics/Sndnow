import React from "react";
import { motion } from "framer-motion";
import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
} from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      category: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Integrations", href: "#" },
        { name: "Enterprise", href: "#" },
      ],
    },
    {
      category: "Company",
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "#contact" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-and-conditions" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <TwitterIcon className="w-5 h-5" />, href: "#" },
    { icon: <InstagramIcon className="w-5 h-5" />, href: "#" },
    { icon: <FacebookIcon className="w-5 h-5" />, href: "#" },
    { icon: <LinkedinIcon className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Column 1: Logo + Description + Social */}
          <motion.div
            className="w-full md:w-[22%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[#7C5832] font-bold text-2xl mb-4">
              send<span className="text-[#B79F85]">now</span>
            </div>
            <p className="text-gray-600 mb-4">
              Understand every click, view, and interaction with your shared content.
            </p>
            <div className="flex space-x-4 justify-start">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-gray-400 hover:text-[#7C5832] transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 & 3: Footer Links */}
          {footerLinks.map((category, idx) => (
            <motion.div
              key={idx}
              className="w-full md:w-[22%]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (idx + 1) }}
            >
              <h4 className="font-bold mb-4">{category.category}</h4>
              <ul className="space-y-2">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-[#7C5832] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Column 4: Contact Us */}
          <motion.div
            className="w-full md:w-[22%]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="text-sm text-gray-600 space-y-2">
             
              <p className="text-[#7C5832]">sendnow.live@gmail.com</p>
             
              <a
                href="https://x.com/carter_ale15512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7C5832] underline"
              >
                Alex Carter
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p>© {new Date().getFullYear()} Sendnow. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
