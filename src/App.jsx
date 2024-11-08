import { Header } from "./components/ui/Header";
import { PreviewSection } from "./components/ui/Main/PreviewSection";
import { FavouritesSection } from "./components/ui/Main/FavouritesSection";
import { listIcons, listPartnersImages } from "./components/constants";
import { SalesSection } from "./components/ui/Main/SalesSection";
import { PartnersSection } from "./components/ui/Main/PartnersSection";
import { Footer } from "./components/ui/Footer";
import { TittleProvider } from "./components/TittleContext";

function App() {
  return (
    <TittleProvider>
      <Header listIcons={listIcons} />
      <main className="main container">
        <PreviewSection />
        <FavouritesSection />
        <SalesSection />
        <PartnersSection listPartnersImages={listPartnersImages} />
      </main>
      <Footer />
    </TittleProvider>
  );
}

export default App;
