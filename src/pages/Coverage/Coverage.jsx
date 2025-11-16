import React, { useRef } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from "react-router";

const Coverage = () => {
  const position = [23.8041, 90.4152];
  const serviceCenter = useLoaderData();
  const mapRef = useRef(null)
//   console.log(serviceCenter);

  const handleSearch = e => {
     e.preventDefault()
     const location = e.target.location.value;
     const district = serviceCenter.find(c => c.district.toLowerCase().includes(location.toLowerCase()))

     if(district){
        const coord = [district.latitude, district.longitude]
        // go to the location by flying...
        mapRef.current.flyTo(coord, 13)
        // console.log(district, coord);
     }
      

  }

  return (
    <div>
      <SectionTitle title="We are available in 64 districts"></SectionTitle>
      <div className="py-6">
         <form onSubmit={handleSearch}>

            <label className="input">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
                >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
                </g>
            </svg>
            <input type="search" name="location" placeholder="Search" />
            </label>

         </form>
      </div>
      {/* map container */}
      <div className="border h-[705px]">
        <MapContainer 
        center={position}
        zoom={8} 
        scrollWheelZoom={false} 
        className="h-[700px]"
        ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
         {
            serviceCenter.map((center, index) =>  <Marker key={index} position={[center.latitude, center.longitude]}>
            <Popup>
              <strong>{center.district}</strong> <br /> Service Area: {center.covered_area.join(', ')}
            </Popup>
          </Marker>)
         }
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
