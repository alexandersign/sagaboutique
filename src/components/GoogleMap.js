import React, { useEffect, useRef } from 'react';

// Store locations with coordinates
const storeCoordinates = [
  {
    name: "Saga Boutique",
    address: "36 Georgiou A' Street, Limassol",
    phone: "+357 25 313126",
    lat: 34.6839,
    lng: 33.0553,
    type: "multi-brand"
  },
  {
    name: "Saga Outlet",
    address: "83 Georgiou A' Street, Limassol",
    phone: "+357 25 321839",
    lat: 34.6845,
    lng: 33.0560,
    type: "multi-brand"
  },
  {
    name: "Baldinini",
    address: "205 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 025577",
    lat: 34.6870,
    lng: 33.0490,
    type: "mono-brand"
  },
  {
    name: "Marc Cain — Limassol",
    address: "230 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 029400",
    lat: 34.6875,
    lng: 33.0485,
    type: "mono-brand"
  },
  {
    name: "Marc Cain — Paphos",
    address: "Kings Avenue Mall, Paphos",
    phone: "+357 26 020069",
    lat: 34.7720,
    lng: 32.4297,
    type: "mono-brand"
  },
  {
    name: "Bogner",
    address: "Natia House, Shop 6-7, Limassol",
    phone: "+357 25 028788",
    lat: 34.6850,
    lng: 33.0530,
    type: "mono-brand"
  },
  {
    name: "Peserico",
    address: "205 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 020082",
    lat: 34.6870,
    lng: 33.0490,
    type: "mono-brand"
  }
];

const GoogleMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsAPI = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBhDwTtXJQGDwgEaAUn-U_UYiRLSCpr8Qw&callback=initMap`;
      script.async = true;
      script.defer = true;
      
      // Define the callback function globally
      window.initMap = () => {
        if (mapRef.current) {
          initializeMap();
        }
      };
      
      document.head.appendChild(script);
    };

    // Initialize the map
    const initializeMap = () => {
      // Center the map on Limassol, Cyprus
      const mapOptions = {
        center: { lat: 34.6839, lng: 33.0553 },
        zoom: 13,
        styles: [
          { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
          { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#263c3f" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#6b9a76" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#38414e" }],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#212a37" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#9ca5b3" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#746855" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#1f2835" }],
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ color: "#f3d19c" }],
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#2f3948" }],
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [{ color: "#d59563" }],
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#17263c" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#515c6d" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#17263c" }],
          },
        ],
      };

      mapInstanceRef.current = new window.google.maps.Map(mapRef.current, mapOptions);

      // Add markers for each store location
      storeCoordinates.forEach((store) => {
        // Create custom marker icon based on store type
        const markerIcon = {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: store.type === 'multi-brand' ? '#FFFFFF' : '#CCCCCC',
          fillOpacity: 1,
          strokeWeight: 1,
          strokeColor: '#000000',
          scale: 10,
        };

        const marker = new window.google.maps.Marker({
          position: { lat: store.lat, lng: store.lng },
          map: mapInstanceRef.current,
          title: store.name,
          icon: markerIcon,
          animation: window.google.maps.Animation.DROP
        });

        // Add info window with enhanced styling for each marker
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="color: black; padding: 10px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; font-size: 16px; border-bottom: 1px solid #eee; padding-bottom: 5px;">${store.name}</h3>
              <p style="margin: 5px 0; font-size: 14px;"><strong>Address:</strong> ${store.address}</p>
              <p style="margin: 5px 0; font-size: 14px;"><strong>Phone:</strong> ${store.phone}</p>
              <p style="margin: 8px 0 0 0; font-size: 12px; color: #666; font-style: italic;">${store.type === 'multi-brand' ? 'Multi-Brand Store' : 'Mono-Brand Store'}</p>
            </div>
          `,
          maxWidth: 300,
          pixelOffset: new window.google.maps.Size(0, -5)
        });

        // Add hover effect
        marker.addListener('mouseover', () => {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
          setTimeout(() => {
            marker.setAnimation(null);
          }, 750);
        });

        // Add click event
        marker.addListener('click', () => {
          // Close any open info windows
          if (window.currentInfoWindow) {
            window.currentInfoWindow.close();
          }
          
          infoWindow.open(mapInstanceRef.current, marker);
          window.currentInfoWindow = infoWindow;
        });
      });
    };

    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initializeMap();
    } else {
      loadGoogleMapsAPI();
    }

    // Cleanup function
    return () => {
      if (window.google && mapInstanceRef.current) {
        // Clean up map instance if needed
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg"
      style={{ minHeight: '400px' }}
    />
  );
};

export default GoogleMap;
