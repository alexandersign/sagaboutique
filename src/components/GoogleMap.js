import React, { useEffect, useRef, useState } from 'react';

// Store locations with coordinates
const storeCoordinates = [
  {
    name: "Saga Boutique",
    address: "36 Georgiou A' Street, Limassol",
    phone: "+357 25 313126",
    lat: 34.6839,
    lng: 33.0553,
    type: "multi-brand",
    description: "Our flagship multi-brand boutique"
  },
  {
    name: "Saga Outlet",
    address: "83 Georgiou A' Street, Limassol",
    phone: "+357 25 321839",
    lat: 34.6845,
    lng: 33.0560,
    type: "multi-brand",
    description: "Designer pieces at outlet prices"
  },
  {
    name: "Baldinini",
    address: "205 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 025577",
    lat: 34.6870,
    lng: 33.0490,
    type: "mono-brand",
    description: "Italian luxury footwear"
  },
  {
    name: "Marc Cain — Limassol",
    address: "230 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 029400",
    lat: 34.6875,
    lng: 33.0485,
    type: "mono-brand",
    description: "German designer fashion"
  },
  {
    name: "Marc Cain — Paphos",
    address: "Kings Avenue Mall, Paphos",
    phone: "+357 26 020069",
    lat: 34.7720,
    lng: 32.4297,
    type: "mono-brand",
    description: "German designer fashion"
  },
  {
    name: "Bogner",
    address: "Natia House, Shop 6-7, Limassol",
    phone: "+357 25 028788",
    lat: 34.6850,
    lng: 33.0530,
    type: "mono-brand",
    description: "Luxury sportswear & ski fashion"
  },
  {
    name: "Peserico",
    address: "205 Arch. Makariou III Ave, Limassol",
    phone: "+357 25 020082",
    lat: 34.6870,
    lng: 33.0490,
    type: "mono-brand",
    description: "Italian refined tailoring"
  }
];

const GoogleMap = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    // Load Google Maps API script with proper API key
    const loadGoogleMapsAPI = () => {
      // Check if script already exists
      if (document.querySelector('script[src*="maps.googleapis.com"]')) {
        if (window.google && window.google.maps) {
          initializeMap();
        }
        return;
      }

      const script = document.createElement('script');
      // Use a more reliable API key or implement without API key for development
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap&libraries=places`;
      script.async = true;
      script.defer = true;
      
      // Add error handling for script loading
      script.onerror = () => {
        console.error('Failed to load Google Maps API');
        setMapError(true);
        showFallbackMap();
      };
      
      // Define the callback function globally
      window.initMap = () => {
        if (mapRef.current) {
          initializeMap();
        }
      };
      
      document.head.appendChild(script);
    };

    // Fallback map implementation
    const showFallbackMap = () => {
      if (mapRef.current) {
        mapRef.current.innerHTML = `
          <div class="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl overflow-hidden">
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            <div class="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
              <div class="mb-6">
                <svg class="w-16 h-16 text-white mx-auto mb-4 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <h3 class="text-2xl font-light text-white mb-2">Our Luxury Locations</h3>
                <p class="text-gray-300 text-sm">Experience high fashion across Cyprus</p>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                  <h4 class="text-white font-medium mb-1">Limassol</h4>
                  <p class="text-gray-300 text-sm">5 Premium Boutiques</p>
                </div>
                <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 border border-white border-opacity-20">
                  <h4 class="text-white font-medium mb-1">Paphos</h4>
                  <p class="text-gray-300 text-sm">1 Designer Store</p>
                </div>
              </div>
              <button 
                onclick="window.open('https://www.google.com/maps/search/Saga+Boutique+Limassol', '_blank')"
                class="mt-6 px-6 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white border-opacity-30"
              >
                View on Google Maps
              </button>
            </div>
          </div>
        `;
      }
    };

    // Try to load Google Maps, fallback to elegant display
    try {
      loadGoogleMapsAPI();
      // Set a timeout to show fallback if maps don't load
      setTimeout(() => {
        if (!mapError) {
          showFallbackMap();
        }
      }, 5000);
    } catch (error) {
      showFallbackMap();
    }

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
