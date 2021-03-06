import React from "react";
import testimonialData from "../data/testimonials.json";

export default function Testimonial() {
  return (
    <div className="testimonial">
      <section className="testimonial-hero">
        <h1 className="title">Testimonials</h1>
        <p>Check out how enjoyable KWoC was for the previous participants</p>
      </section>
      <section className="testimonial-list">
        {testimonialData.testimonials.map((testimonial) => (
          <div className="testimonial-box">
            <div className="testimonial-header">
              <img src={testimonial.imageLink} alt="" />
              <div className="testimonial-header-column">
                <div className="testimonial-name">{testimonial.name}</div>
                <div className="testimonial-biotext">
                  <div>{testimonial.role}</div>
                </div>
                <a className="button" href={testimonial.blogLink}>
                  Blog
                </a>
              </div>
            </div>
            <div className="testimonial-desc">{testimonial.quote}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
