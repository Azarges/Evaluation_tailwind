import React from "react";
import UnAvis from "./UnAvis";

export default function ListAvis() {
  const reviews = [
    {
      id: 1,
      name: "Sophie L.",
      review: "Super séjour ! Maison très propre et bien située.",
    },
    {
      id: 2,
      name: "Thomas B.",
      review: "Hôte très sympathique, je recommande à 100% !",
    },
    { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
  ];
  return (
    <div className="flex-col p-5 bg-gray-50">
      <h2 className="mx-3 text-2xl font-semibold ">Avis Clients</h2>
      <div className="flex max-md:flex-col ">
        {reviews.map((avis) => (
          <UnAvis avis={avis} key={avis.id} />
        ))}
      </div>
    </div>
  );
}
