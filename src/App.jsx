import Header from "./components/header/Header";
import HeroArea from "./components/heroSection/HeroArea";
import LoadingSkeleton from "./components/loading/LoadingSkeleton";
import UrbanEleganceBoard from "./components/urbanElegance/UrbanEleganceBoard";
import { useUrbanData } from "./hooks";
import AddToCartProvider from "./provider/AddToCartProvider";
import UrbanDataProvider from "./provider/UrbanDataProvider";

function App() {
  const { loading } = useUrbanData();

  return (
    <AddToCartProvider>
      <UrbanDataProvider>
        {loading.state ? (
          <LoadingSkeleton />
        ) : (
          <>
            <Header />
            <HeroArea />
            <UrbanEleganceBoard />
          </>
        )}
      </UrbanDataProvider>
    </AddToCartProvider>
  );
}

export default App;
