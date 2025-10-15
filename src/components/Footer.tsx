import React from "react";

const Footer = () => {
  return (
    <div className="footer sm:footer-horizontal footer-center bg-gray-900 text-white p-4 mt-12">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Hossahin
        </p>
      </aside>
    </div>
  );
};

export default Footer;
