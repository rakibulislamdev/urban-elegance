import Page from "./Page";
import AddToCartProvider from "./provider/AddToCartProvider";
import UrbanDataProvider from "./provider/UrbanDataProvider";

function App() {
  return (
    <AddToCartProvider>
      <UrbanDataProvider>
        <Page />
      </UrbanDataProvider>
    </AddToCartProvider>
  );
}

export default App;
