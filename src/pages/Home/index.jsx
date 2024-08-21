// App.js
import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import logementsdata from '../../utils/logements.json';
import Gallery from '../../components/Gallery.jsx';
import '../../assets/scss/index.scss';


function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    setLogements(logementsdata)
  }, [])

  return (
    <div className="App">
      <Banner />
      <main>
      <Gallery logements={logements} />
      </main>
    </div>
  );
}

export default Home;
