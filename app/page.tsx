import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AcademiaSection from '@/components/AcademiaSection';
import ProgramasSection from '@/components/ProgramasSection';
import InstrutoresSection from '@/components/InstrutoresSection';
import HorariosSection from '@/components/HorariosSection';
import ContatoSection from '@/components/ContatoSection';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <main className="bg-luxury-black">
      <SmoothScroll />
      <Navigation />
      <HeroSection />
      <AcademiaSection />
      <ProgramasSection />
      <InstrutoresSection />
      <HorariosSection />
      <ContatoSection />
      <Footer />
    </main>
  );
}
