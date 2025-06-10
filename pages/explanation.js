export default function Explanation() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold">📘 Concepts de Stockage Oracle</h2>
      <div>
        <h3 className="font-semibold">Tablespace</h3>
        <p>Un conteneur logique de stockage dans Oracle qui regroupe des datafiles.</p>
      </div>
      <div>
        <h3 className="font-semibold">Datafile</h3>
        <p>Un fichier physique sur disque où les données sont réellement stockées.</p>
      </div>
      <div>
        <h3 className="font-semibold">PCTFREE</h3>
        <p>Pourcentage d’un bloc réservé pour les mises à jour.</p>
      </div>
      <div>
        <h3 className="font-semibold">PCTUSED</h3>
        <p>Seuil de remplissage minimum pour qu’un bloc soit réutilisable.</p>
      </div>
      <div>
        <h3 className="font-semibold">Extent</h3>
        <p>Groupe de blocs alloués ensemble à une table ou un index.</p>
      </div>
    </div>
  );
}