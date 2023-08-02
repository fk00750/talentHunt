import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=919696220022&text=Hi",
      "_blank"
    );
  };

  return (
    <>
      <div className="whatsapp-widget">
        <button className="whatsapp-button" onClick={handleWhatsAppClick}>
          <IoLogoWhatsapp className="whatsapp-icon text-green-700 h-24 w-24" />
        </button>
      </div>
    </>
  );
}

export default WhatsAppWidget;
