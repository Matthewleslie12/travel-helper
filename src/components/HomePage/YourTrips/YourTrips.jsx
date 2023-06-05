import React, {useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import Images from "./Images";
import {auth} from "../../../utils/firebase";
import axios from "axios";

const YourTrips = () => {
  const [trips, setTrips] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const encodedUserId = encodeURIComponent(user.uid);
          const response = await axios.get(
            `http://localhost:8080/trips?userId=${encodedUserId}`
          );

          setTrips(response.data.trips);
        } else {
          setTrips([]);
        }
      } catch (error) {
        console.error("Error fetching trips:", error);
      }
    };

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
        fetchTrips();
      } else {
        setUserId(null);
        setTrips([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="px-6 pt-9">
      <h1 className="font-bold text-headerText">Your Trips</h1>
      {trips.length > 0 ? (
        trips.map((trip) => (
          <Images
            name={trip.title}
            image={trip.image_url}
            key={trip.id}
            rating={trip.rating}
            location={trip.location}
          />
        ))
      ) : (
        <p>
          It looks like you haven't made any trips yet! Click here to plan your
          first.
        </p>
      )}
    </div>
  );
};

export default YourTrips;
