import React, {useEffect, useState} from "react";
import axios from "axios";

const Masonry = ({showAllCards}) => {
  const [fetchedImages, setFetchedImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              count: showAllCards ? 11 : 4,
              client_id: "_w0gFibdd6nKcZjJ0frVzpVTgUdisl9DSZx8CHmX14Q",
            },
          }
        );
        setFetchedImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [showAllCards]);

  useEffect(() => {
    setRandomImages(fetchedImages);
  }, [fetchedImages]);

  return (
    <div className="columns-2 gap-3 pt-4 pb-16">
      {randomImages.map((image) => (
        <div
          className="relative mb-6 aspect-video w-full rounded-xl cursor-pointer"
          key={image.id}
        >
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            className="rounded-lg hover:bg-black"
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-80 flex items-center justify-center rounded-xl">
            <div className="absolute bottom-0 left-0 w-full rounded-lg opacity-100 text-white p-2">
              <p className="text-sm font-bold">{image.user.location}</p>
              <p className="text-sm font-medium">{image.user.name}</p>
              <p className="text-white text-md font-medium">View Trip</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;

// TODO change api call to match the call for travel places and once user clicks image, should show that destination with a premade itinerary. Change name for length of trip
