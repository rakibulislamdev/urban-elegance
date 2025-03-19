import { UrbanDataContext } from "../context";
import { useUrbanData } from "../hooks";

export default function UrbanDataProvider({ children }) {
  const { urbanData, loading, error } = useUrbanData();

  return (
    <UrbanDataContext.Provider value={{ urbanData, loading, error }}>
      {children}
    </UrbanDataContext.Provider>
  );
}
