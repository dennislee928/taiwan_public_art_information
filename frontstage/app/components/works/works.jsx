import React, { useState, useEffect } from "react";
import axios from "axios";

const PublicArtComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    district: "",
    name: "",
    creator: "",
    year: "",
    place: "",
    type: "",
    manager: "",
  });

  useEffect(() => {
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

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    setLoading(true);
    try {
      // Filter data based on input
      const filteredData = data.filter(
        (item) =>
          (!filters.district || item.district.includes(filters.district)) &&
          (!filters.name || item.name.includes(filters.name)) &&
          (!filters.creator || item.creator.includes(filters.creator)) &&
          (!filters.year || item.year.toString().includes(filters.year)) &&
          (!filters.place || item.place.includes(filters.place)) &&
          (!filters.type || item.type.includes(filters.type)) &&
          (!filters.manager || item.manager.includes(filters.manager))
      );
      setData(filteredData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Public Art Information</h1>
      <div>
        {Object.keys(filters).map((key) => (
          <input
            key={key}
            name={key}
            value={filters[key]}
            onChange={handleChange}
            placeholder={key}
          />
        ))}
        <button onClick={handleSearch}>Search</button>
      </div>
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
