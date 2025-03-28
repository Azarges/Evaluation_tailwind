import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between p-4 bg-white drop-shadow-lg">
      <div className="text-xl font-bold text-red-500">Airbed & Breakfast</div>
      <div className="text-gray-600 max-md:hidden">
        <a href="#" className="px-2 hover:text-gray-300">
          Maisons
        </a>
        <a href="#" className="px-2 hover:text-gray-300">
          Appartements
        </a>
        <a href="#" className="px-2 hover:text-gray-300">
          Villas
        </a>
      </div>
      <div className="md:hidden sm:visible">
        <i class="fa-solid fa-bars text-3xl"></i>
      </div>
    </div>
  );
}
