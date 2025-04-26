import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto bg-white text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-[#7C5832]">About Sendnow</h1>
      
      <p className="mb-4">
        Welcome to <strong>Sendnow</strong>, a platform designed to simplify how you share and track your content.
        Launched in <strong>April 2025</strong>, Sendnow empowers individuals and businesses to effortlessly share
        files, documents, images, videos, and even existing online links through easily shareable, shortened URLs.
      </p>

      <p className="mb-4">
        At Sendnow, we understand the importance of knowing how your content performs. That's why we provide
        comprehensive analytics, including <strong>heatmaps</strong>, <strong>session counts</strong>, 
        <strong> visitor demographics</strong>, <strong>engagement duration</strong>, and even detailed 
        <strong> video interaction insights</strong>. These features help you understand your audience 
        and optimize your content strategy.
      </p>

      <p className="mb-4">
        We offer a range of subscription plans to suit different needs — from our <strong>Free Plan</strong> 
        to more advanced options like <strong>Basic</strong>, <strong>Pro</strong>, and <strong>Enterprise</strong>.
        Each plan provides varying levels of storage, file size limits, link management features, and analytics capabilities.
        Learn more on our <a href="https://www.sendnow.live" className="text-[#7C5832] underline">Pricing Page</a>.
      </p>

      <p className="mb-4">
        Our mission is to provide a <strong>user-friendly</strong> and <strong>powerful tool</strong> 
        that streamlines content sharing and delivers valuable insights into audience engagement. 
        We’re continuously improving Sendnow and committed to providing excellent support to our users.
      </p>

      <p className="mb-4">
        <strong>Connect with us!</strong> For any inquiries or feedback, feel free to reach us at 
        <a href="mailto:sendnow.live@gmail.com" className="text-[#7C5832] underline ml-1">
          sendnow.live@gmail.com
        </a>. You can also follow
        <a
          href="https://x.com/carter_ale15512"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7C5832] underline ml-1"
        >
          Alex Carter
        </a> on X (Twitter) for updates and more.
      </p>

      <p className="mt-8 font-semibold text-gray-600">
        Thank you for choosing Sendnow!
      </p>
    </section>
  );
};

export default AboutUs;
