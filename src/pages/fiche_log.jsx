import React from 'react';
import { useParams } from 'react-router-dom';
import records from "../data/logement.json";

const FicheLogement = () => {
  const { id } = useParams();
  const record = records.find(r => r.id === id);

  if (!record) {
    return <div>Logement not found</div>;
  }

  // Display the details of the record
  return (
    <div>
      <h1>{record.title}</h1>
      {/* other details */}
    </div>
  );
};

export default FicheLogement;

