"use client";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios

const PublicArtComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data using axios
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/publicart");
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Public Art Information</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default PublicArtComponent;
