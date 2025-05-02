"use client";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

interface ProductData {
  origin?: {
    coordinates: [number, number];
    name: string;
  };
  destination?: {
    coordinates: [number, number];
    name: string;
  };
}

export default function OriginAndDestination({
  productData,
}: {
  productData?: ProductData;
}) {
  const [distanceInKm, setDistanceInKm] = useState<string | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) return;

    if (!mapContainerRef.current) return;

    const origin = productData?.origin?.coordinates || [35.689247, 51.389015];
    const destination = productData?.destination?.coordinates || [
      29.591192, 52.583425,
    ];

    const map = L.map(mapContainerRef.current).setView(origin, 7);
    mapRef.current = map;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(origin)
      .addTo(map)
      .bindPopup(productData?.origin?.name || "تهران")
      .openPopup();

    L.marker(destination)
      .addTo(map)
      .bindPopup(productData?.Coordinates?.Destination.name || "شیراز")
      .openPopup();

    const route = L.polyline([origin, destination], { color: "blue" }).addTo(
      map
    );

    const distance = map.distance(origin, destination);
    const distanceInKm = (distance / 1000).toFixed(2);
    setDistanceInKm(distanceInKm);

    map.fitBounds(route.getBounds());
  }, [productData]);

  return (
    <div className="!border-b-1 !border-b-gray-300 mb-4 pb-6">
      <h1 className="!text-xl !font-bold">مبدا و مقصد</h1>
      <div id="map" ref={mapContainerRef} style={{ height: "400px" }}></div>
      {distanceInKm && <p>فاصله بین دو شهر: {distanceInKm} کیلومتر</p>}
    </div>
  );
}
