import { useEffect, useState } from "react";

const useUrbanCategory = () => {
  const [urbanCategory, setUrbanCategory] = useState([]);

  const fetchUrbanCategory = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );

      if (!response.ok) {
        const errorMessage = `Fetching urban elegance category failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const categoryData = await response.json();

      setUrbanCategory(categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrbanCategory();
  }, []);

  return { urbanCategory, fetchUrbanCategory };
};

export default useUrbanCategory;
