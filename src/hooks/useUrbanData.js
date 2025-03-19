import { useEffect, useState } from "react";

const useUrbanData = () => {
  const [urbanData, setUrbanData] = useState([]);

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);

  const fetchUrbanData = async () => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching urban elegance data...",
      });

      const response = await fetch(`https://fakestoreapi.com/products`);

      if (!response.ok) {
        const errorMessage = `Fetching urban elegance data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      setUrbanData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Fetching urban elegance data...",
    });
    fetchUrbanData();
  }, []);

  return { urbanData, loading, error };
};

export default useUrbanData;
