// About.js
import React from "react";
import profile from "./me.jfif";

function About() {
  return (
    <section id="about" className="py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <img
              src={profile}
              alt="Profile"
              className="rounded-full w-64 mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white lg:text-3xl">
              Welcome to Our Leather Shoe Factory!
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We take immense pride in crafting high-quality leather shoes that
              are designed to stand the test of time. With a legacy spanning
              decades, our shoe factory has been synonymous with craftsmanship
              and durability. Our team of skilled artisans meticulously
              handcraft each pair of shoes with attention to detail and
              precision. Whether you're looking for stylish formal shoes,
              comfortable casuals, or durable boots, we have a diverse range of
              designs to suit every occasion. Our commitment to using the finest
              materials ensures that our shoes not only look great but also
              provide unmatched comfort and support. At our factory, we
              prioritize customer satisfaction and strive to exceed expectations
              with every pair we create. Our dedication to excellence has earned
              us a loyal customer base that values the essence of true
              craftsmanship. Thank you for choosing us to be your trusted
              footwear companion. We invite you to explore our collection and
              experience the luxury of our premium leather shoes. Feel free to
              reach out to us with any inquiries or custom requirements. We're
              delighted to serve you!
            </p>
            <div className="mt-8 flex items-center space-x-4">
              {/* Add your social links here */}
              <a href="/#" rel="noreferrer" aria-label="Twitter">
                {/* Replace with your icon */}
                🐦
              </a>
              <a href="/#" aria-label="GitHub">
                {/* Replace with your icon */}
                🐙
              </a>
              <a href="/#" aria-label="LinkedIn">
                {/* Replace with your icon */}
                🔗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
