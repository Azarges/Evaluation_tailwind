import React from "react";

export default function UnAvis({ avis }) {
  return (
    <div className="w-1/3 p-3 m-2 transition-transform duration-300 bg-white rounded-md max-md:w-auto drop-shadow-md hover:drop-shadow-xl hover:scale-102 hover:cursor-pointer">
      {/* Nom de l'avis */}
      <h2>{avis.name}</h2>
      {/* Message de l'avis */}
      <p className="text-gray-500">{avis.review}</p>
    </div>
  );
}
