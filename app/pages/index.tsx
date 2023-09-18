import React from 'react';
import Layout from '../layout'; // Assurez-vous d'importer correctement votre composant Layout
import Banner from '../components/home/Banner';
import Fleurs from '../components/home/Fleurs';
import Resine from '../components/home/Resine';
import Huile from '../components/home/Huile';

function HomePage() {
  return (
    <Layout>
      {/* Contenu de votre page d'accueil */}
       <Banner/>
        <Fleurs/>
        <Resine/>
        <Huile/>
    </Layout>
  );
}

export default HomePage;