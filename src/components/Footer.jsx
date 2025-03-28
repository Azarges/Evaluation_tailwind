import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center p-10 text-white bg-gray-800 max-md:flex-col">
      <div className="w-1/6 p-5 max-md:w-auto">
        <h3 className="font-medium">À propos</h3>
        <p>Nous aidons les voyageurs à trouver le logement idéal.</p>
      </div>

      <div className="flex flex-col p-5 w-1/8 max-md:w-auto">
        <h3 className="font-medium">Support</h3>
        <a href="#" className="w-fit hover:underline">
          Contact
        </a>
        <a href="#" className="w-fit hover:underline">
          FAQ
        </a>
      </div>

      <div className="flex flex-col p-5 w-1/8 max-md:w-auto">
        <h3 className="font-medium">Suivez-nous</h3>
        <a href="#" className="w-fit hover:underline">
          Facebook
        </a>
        <a href="#" className="w-fit hover:underline ">
          Instagram
        </a>
      </div>

      <div className="flex flex-col p-5 w-1/8 max-md:w-auto">
        <h3 className="font-medium">Mentions légales</h3>
        <a href="#" className="w-fit hover:underline">
          Conditions générales
        </a>
        <a href="#" className="w-fit hover:underline">
          Politique de confidentialité
        </a>
      </div>
    </div>
  );
}
