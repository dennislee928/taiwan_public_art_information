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
        const sanitizedData = sanitizeJSON(response.data);
        const jsonData = JSON.parse(sanitizedData); // Parse JSON string into object
        const rowData = jsonData?.GenericData?.Dataset?.ROW || [];
        setData(rowData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  //
  const sanitizeJSON = (jsonString) => {
    // Remove invalid characters from JSON string
    return jsonString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
  };
  //
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Public Art Information</h1>
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <p>地區: {item.district}</p>
            <p>作品名稱: {item.name}</p>
            <p>作者: {item.creator}</p>
            <p>年份: {item.year}</p>
            <p>地點: {item.place}</p>
            <p>作品型態: {item.type}</p>
            <p>管理單位: {item.manager}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublicArtComponent;
