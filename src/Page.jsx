import { useContext } from "react";
import Header from "./components/header/Header";
import HeroArea from "./components/heroSection/HeroArea";
import UrbanEleganceBoard from "./components/urbanElegance/UrbanEleganceBoard";
import { UrbanDataContext } from "./context";
import LoadingSkeleton from "./components/loading/LoadingSkeleton";
export default function Page() {
  const { loading } = useContext(UrbanDataContext);
  return (
    <div>
      {loading.state ? (
        <LoadingSkeleton />
      ) : (
        <>
          <Header />
          <HeroArea />
          <UrbanEleganceBoard />
        </>
      )}
    </div>
  );
}
