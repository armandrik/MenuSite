import { Header } from "./components/header/Header";
import { HeroSection } from "./components/heroSection/HeroSection";

function App() {
  return (
    <div dir="rtl">
      <Header />
      <HeroSection/>
      <div className="h-[1000px] bg-gray-50 dark:bg-gray-900"></div>
    </div>
  );
}

export default App;
