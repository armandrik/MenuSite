import { AppFeature } from "./components/appFeature/AppFeature";
import { Faq } from "./components/FAQ/Faq";
import { Header } from "./components/header/Header";
import { HeroSection } from "./components/heroSection/HeroSection";
import { Plans } from "./components/plans/Plans";

function App() {
  return (
    <div dir="rtl" className="bg-gray-50 dark:bg-gray-900">
      <Header />
      <HeroSection />
      <AppFeature />
      <Plans />
      <Faq/>
    </div>
  );
}

export default App;
