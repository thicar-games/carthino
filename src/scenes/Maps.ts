import { Scene } from 'phaser';
import L, { Map as LeafletMap, LatLngExpression } from 'leaflet';

export class Maps extends Scene {
  map: LeafletMap;

  constructor() {
    super({ key: 'Maps' });

    this.map = L.map("game-container").setView([0, 0], 18);
  }

  create(): void {  
    L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {}
    ).addTo(this.map);

    
    const userMarker = L.circleMarker(
      [0, 0], {
        radius: 8,
        fillColor: '#3388ff',
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8,
      }
    ).addTo(this.map);

    const pathCoordinates: LatLngExpression[] = [];

    L.polyline(pathCoordinates, {
      color: "#ff0000",
      weight: 3,
      opacity: 0.7
    }).addTo(this.map);

    const options = {
      enableHighAccuracy: true,
      maximumage: 0,
      timeout: 5000,
    };
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          userMarker.setLatLng([latitude, longitude]);
          this.map.setView([latitude, longitude], 18);
          pathCoordinates.push([latitude, longitude]);
        },
        (error) => {
          console.error('Geolocation error:', error);
        },
        options
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }
}
