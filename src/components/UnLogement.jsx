import React from "react";

export default function UnLogement({ logement }) {
  return (
    <div>
      <div className="p-3 m-3 bg-white w-72 rounded-xl hover:cursor-pointer">
        {/* Affichage de l'image */}
        <img
          src={logement.image}
          alt={logement.name}
          className="object-cover w-64 h-48 rounded-xl"
        />
        {/* Titre, localisation et prix */}
        <div className="pt-2">
          <p className="font-semibold">{logement.title}</p>
          <p className="text-gray-400 text-md ">{logement.location}</p>
          <p className="font-semibold text-red-600">
            {logement.price} € / nuit
          </p>
        </div>
      </div>
    </div>
  );
}
