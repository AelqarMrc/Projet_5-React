// App.js
import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner.jsx';
import logementsdata from '../../utils/logements.json';
import Locations from '../../components/Locations.jsx';
import '../../assets/scss/index.scss';
import banniere from '../../banniere.png';

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    setLogements(logementsdata)
  }, [])

  return (
    <div className="App">
      <Banner image={banniere} texte={"Chez vous, partout et ailleurs"}/>
      <main>
      <Locations logements={logements} />
      </main>
    </div>
  );
}

export default Home;
