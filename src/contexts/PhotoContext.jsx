import { createClient } from "pexels";
import { createContext, useState, useEffect } from "react";

// Creating a context for the photos
export const Context = createContext();

// Base URL for the API request
const baseURL =
  'https://api.pexels.com/v1/search?query="landscapes"&page=1&per_page=15';
// API key for the request
const API_KEY = "brpY71PQePaItUaAwStUi5qaptb94AvEzS4UW6XrsXllU0lcKOBWMmpw";

// Async promise function to get data from the API
// const getData = (setPhotos) => {
//   // Fetching data from the API
//   fetch(baseURL, {
//     headers: {
//       Authorization: API_KEY,
//     },
//   })
//     // Parsing the response to JSON
//     .then((res) => res.json())
//     .then((data) => {
//       // Mapping the photos data
//       const photos = data.photos.map((photo) => {
//         return {
//           id: photo.id,
//           src: photo.src.tiny,
//           liked: false,
//         };
//       });

//       // Setting the photos state
//       setPhotos(photos);
//     })
//     .catch((error) => console.error("Error:", error));
// };

//Using pexels
// Create a client
const client = createClient(API_KEY);

// Function to get data from the Pexels API
const getData = (setPhotos) => {
  client.photos
    .search({ query: "landscapes", per_page: 15, page: 1 })
    .then((data) => {
      // Mapping the photos data
      const photos = data.photos.map((photo) => {
        return {
          id: photo.id,
          src: photo.src.tiny,
          liked: false,
        };
      });

      // Setting the photos state
      setPhotos(photos);
    })
    .catch((error) => console.error("Error:", error));
};

// Provider component for  photos context
export function PhotoProvider({ children }) {
  // State for the photos
  const [photos, setPhotos] = useState([]);

  // useEffect hook to call the getData function one time
  useEffect(() => {
    getData(setPhotos);
  }, []);

  // Creating the global state and return
  const globalState = { fotos: photos, setFotos: setPhotos };

  return <Context.Provider value={globalState}> {children} </Context.Provider>;
}
