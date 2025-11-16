import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from "react-router";

const Coverage = () => {
  const serviceCenter = useLoaderData();
  console.log(serviceCenter);
  const position = [23.8041, 90.4152];


  return (
    <div>
      <SectionTitle title="We are available in 64 districts"></SectionTitle>
      <div>
        search box
      </div>
      {/* map container */}
      <div className="border h-[705px]">
        <MapContainer center={position} zoom={8} scrollWheelZoom={false} className="h-[700px]">
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
