import React from 'react'
import aboutlist from '../../utils/aboutList.json';
import DropdownSection from '../../components/Dropdown.jsx';

function about() {
  return (
    
          <div className="about-dropdown">
      {aboutlist.map((aboutlist, index) => (
        <DropdownSection key={index} title={aboutlist.title} content={<p>{aboutlist.content}</p>} />
      ))
      }
      {/* <DropdownSection title="Fiablité" content={<p>{aboutlist.content}</p>} />
      <DropdownSection title="Respect" content={<p>{aboutlist.Respect}</p>} />
      <DropdownSection title="Service" content={<p>{aboutlist.Service}</p>} />
      <DropdownSection title="Sécurité" content={<p>{aboutlist.Sécurité}</p>} />
       */}
    </div>
  )
}
export default about;