import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RedirectPage = () => {
  //   const history = useHistory();
  const { shortUrlId } = useParams();

  useEffect(() => {
    const fetchOriginalUrl = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${shortUrlId}`);
        console.log(response.data);
        // Redirect to the original URL
        window.location.href = response.data.originalUrl;
      } catch (error) {
        console.error("Error fetching original URL:", error);
        // Handle error
      }
    };

    fetchOriginalUrl();
  }, [shortUrlId]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
