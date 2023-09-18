import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../layout';
import { flowerList } from '../datas/flowerList'; // Importez vos données de fleurs ici

function ProductPage() {
  const router = useRouter();
  const { id } = router.query; // Récupérez l'ID de la fleur depuis l'URL

  // Recherchez la fleur correspondante dans vos données de fleurs
  const flower = flowerList.find((f) => f.id === id);

  if (!flower) {
    // Gérez le cas où la fleur n'est pas trouvée
    return (
      <Layout>
        <div>Fleur non trouvée</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="flower-details">
        <img src={flower.cover.src} alt={flower.name} />
        <h1>{flower.name}</h1>
        <p>{flower.category}</p>
        <p>Luminosité : {flower.light}</p>
        <p>Arrosage : {flower.water}</p>
        <p>Prix : ${flower.price}</p>
        {/* Affichez d'autres détails de la fleur ici */}
      </div>
    </Layout>
  );
}

export default ProductPage;