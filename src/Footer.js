// Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © 2023 by My Portfolio. All rights reserved.
        </p>
        <div className="flex items-center space-x-4">
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
    </footer>
  );
}

export default Footer;
