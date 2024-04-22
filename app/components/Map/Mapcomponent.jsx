"use client";
import React, { useEffect } from "react";

export default function StyledMapSelection({ apiKey }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&v=weekly&solution_channel=GMP_CCS_styledmap_v1`;
    script.defer = true; // กำหนดให้โหลด script แบบ asynchronous
    document.head.appendChild(script); // เพิ่ม <script> element เข้าไปใน <head> ของเอกสาร HTML
    
    const initMap = () => {
      let map;
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 13.839150428771973, lng: 100.5619888305664 },
        zoom: 15,
        mapTypeControl: true,
      });

      map.setOptions({
        styles: [
          {
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
          {
            elementType: "labels.text.fill",
            stylers: [{ color: "#949494" }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f5f5" }],
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#bdbdbd" }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
          },
          {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#757575" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#dadada" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#616161" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#e5e5e5" }],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#eeeeee" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#c9c9c9" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9e9e9e" }],
          },
        ],
      });

      // Create an info window
      const contentString = `
        <div>
          <div>
            <p>
            503/36 SoiVibhavadi42 yak4-4 Ladyao Chatucha
            </p>
            <p>
              <a href='https://maps.app.goo.gl/qdZhhVAn9ZATdKNA9'>
                DIRECTION
              </a>
            </p>
          </div>
        </div>`;

      const infoWindow = new window.google.maps.InfoWindow({
        content: contentString,
      });

      // Create a marker and open info window on marker click
      const marker = new window.google.maps.Marker({
        position: { lat: 13.839150428771973, lng: 100.5619888305664 },
        map: map,
        title: "Greenbox Design",
      });

      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    };

    window.initMap = initMap;

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  return (
    <div className=" w-full px-20 pt-40">
      <div id="map" className=" w-full h-[500px]"></div>
    </div>
  );
}
