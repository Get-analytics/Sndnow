import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <header className="terms-header">
        <h1>Sendnow - Terms and Conditions</h1>
        <p>Last Updated: April 25, 2025</p>
      </header>

      <section className="terms-content">
        <p>
          Welcome to Sendnow! These Terms and Conditions ("Terms") govern your access to and use of the Sendnow web application, website, and related services (collectively, the "Service") provided by Sendnow ("Sendnow," "we," "us," or "our"). Our contact details are: sendnow.live@gmail.com.
        </p>
        <p>
          Please read these Terms carefully before using the Service. By accessing or using the Service, you agree to be bound by these Terms and our Privacy Policy <a href="https://www.sendnow.live/privacy-policy" target="_blank" rel="noopener noreferrer">sendnow.live/privacy-policy</a>. If you do not agree to these Terms, you may not access or use the Service.
        </p>

        <h2>1. Description of Service</h2>
        <p>
          Sendnow provides a service that allows registered users ("Users," "you") to:
        </p>
        <ul>
          <li>Upload files including PDFs, documents (DOC, PPT, etc.), images, and videos.</li>
          <li>Add links to existing online content.</li>
          <li>Generate shortened, shareable URLs ("Shortened Links") for the uploaded files or provided links.</li>
          <li>Access analytics regarding the engagement with the content shared via Shortened Links. Analytics features may include, but are not limited to, heat maps, overall session counts, unique visitors, bounce rates, viewer location, time spent, return user identification, video watch time, video seek/rewind data (collectively, "Analytics").</li>
        </ul>
        <p>
          The availability of specific features, storage limits, file size limits, link limits, link expiry/retention periods, and analytics capabilities depend on the User's selected subscription plan, the details of which can be found on our Pricing Page: <a href="https://www.sendnow.live/" target="_blank" rel="noopener noreferrer">Sendnow Pricing</a> and are incorporated into these Terms by reference.
        </p>

        <h2>2. User Accounts</h2>
        <ul>
          <li><strong>Registration:</strong> To access certain features, you must register for an account. You agree to provide accurate, current, and complete information during registration and keep your account information updated.</li>
          <li><strong>Security:</strong> You are responsible for safeguarding your account password and for any activities or actions under your account.</li>
          <li><strong>Eligibility:</strong> You must be at least 18 years old or the age of legal majority in your jurisdiction to use the Service.</li>
        </ul>

        <h2>3. Subscription Plans, Fees, and Payment</h2>
        <ul>
          <li><strong>Plans:</strong> Sendnow offers various subscription plans, including a Free Plan and paid plans (e.g., Basic, Pro, Enterprise).</li>
          <li><strong>Fees:</strong> Paid Subscription Plans require payment of fees as described on the Pricing Page.</li>
          <li><strong>Payment:</strong> You agree to provide a valid payment method and authorize us (or our third-party payment processor) to charge your payment method for the Fees.</li>
        </ul>

        <h2>4. User Content</h2>
        <p>
          "User Content" means any files, data, text, images, videos, links, or other materials that you upload, submit, store, send, or receive through the Service.
        </p>

        {/* Continue with other sections similarly... */}
        
        <h2>15. Miscellaneous</h2>
        <ul>
          <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and Sendnow regarding the Service.</li>
          <li><strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, the remaining provisions will remain in effect.</li>
          <li><strong>Contact:</strong> If you have any questions about these Terms, please contact us at sendnow.live@gmail.com</li>
        </ul>
      </section>
    </div>
  );
}

export default TermsAndConditions;
