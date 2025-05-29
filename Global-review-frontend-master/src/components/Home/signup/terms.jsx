// import React from 'react'

// const terms = () => {
//   return (
//     <div>
//       <h1>Terms and Conditions</h1>
//     </div>
//   )
// }

// export default terms
import React from 'react';
import './Terms.css'; // make sure this path matches your project structure

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>

      <section className="terms-section">
        <h2>1. Account Registration</h2>
        <p>
          To access certain features, you must create an account. You agree to provide accurate, complete,
          and current information during registration and to update such information as needed.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all
          activities that occur under your account. Do not share your login details or use another user’s account.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Privacy and Data Use</h2>
        <p>
          By logging in, you consent to our collection and use of your personal data as outlined in our Privacy Policy.
          We do not share your personal information without your consent, except as required by law.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Review Submissions</h2>
        <p>
          All reviews must be truthful, respectful, and free of offensive or illegal content. We reserve the right to
          moderate or remove content that violates our standards.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Security</h2>
        <p>
          We use reasonable measures to protect your account, but we cannot guarantee complete security. You accept the
          inherent risks of using online services.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Termination</h2>
        <p>
          We may suspend or terminate your account at any time if you violate these Terms or engage in inappropriate or
          illegal activity.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Changes to Terms</h2>
        <p>
          We may update these Terms at any time. Continued use of the platform after such changes indicates your
          acceptance of the new Terms.
        </p>
      </section>

      <section className="terms-section">
        <h2>8. Consent</h2>
        <p>

            It is necessary to upload product image in order to write a review.
           Your username and product image will be displayed to everyone browsing our website.
        </p>
      </section>

      <p className="terms-footer">
        By using this platform, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
        <a href='/signin'> You may continue to register</a>
      </p>
    </div>
  );
};

export default Terms;
