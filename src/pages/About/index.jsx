import React from 'react'
import aboutlist from '../../utils/aboutList.json';
import DropdownSection from '../../components/Dropdown.jsx';
import Banner from '../../components/Banner.jsx';
import banniere from '../../banniere2.png';


function about() {
  return (
    <div className="app">
    <Banner className="banner" image={banniere} texte={""}/>
    <main>
          <div className="about-dropdown">
      {aboutlist.map((aboutlist, index) => (
        <DropdownSection key={index} title={aboutlist.title} content={<p>{aboutlist.content}</p>} />
      ))
    }
    </div>
    </main>
    </div>
  )
}
export default about;