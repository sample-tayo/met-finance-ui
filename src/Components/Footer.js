import React from "react";
import Button from "./Button";

export default function Footer() {
  return (
    <div className="footer">
      <div className="section-before">
        <p>Get the app now and make your transactions seamlessly</p>
        <Button Children="Download now" />
      </div>
      <section>
        <h5>Met Finance</h5>
        <p>
          Met cloud provides the next generation of developers everything they
          need to succed in a competitive. Sovlandevs provides the next
          generation of developers everything they need to succed in a
          competitive.
        </p>
      </section>

      <section>
        <h5>Quick Links</h5>
        <ul>
          <li>Course overview</li>
          <li>Testimonial</li>
          <li>Blog</li>
          <li>Events</li>
          <li>Course overview</li>
        </ul>
      </section>

      <section>
        <h5>Contact Us</h5>
        <ul>
          <li>bolaji_makinde@ymail.com</li>
          <li>+2349069137526</li>
        </ul>
      </section>
    </div>
  );
}
