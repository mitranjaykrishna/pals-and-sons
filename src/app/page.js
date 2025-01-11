import HeroSection from "@/components/HomePage/HeroSection";
import styles from "./page.module.css";
import HomeSection2 from "@/components/HomePage/HomeSection2";
import HomeSection3 from "@/components/HomePage/HomeSection3";

export default function Home() {
  return (
    <div className={``}>
      <main className={``}>
        <HeroSection />
        <HomeSection2 />
        <HomeSection3 />
      </main>
    </div>
  );
}
