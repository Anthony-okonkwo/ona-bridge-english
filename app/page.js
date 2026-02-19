import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AnyPhone from '../components/AnyPhone';
import { CourseCategories, BuiltForEveryone } from '../components/Grids';
import { LiveCoaching } from '../components/Coaching';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AnyPhone />
      <CourseCategories />
      <BuiltForEveryone />
      <LiveCoaching />
      <Footer />
    </main>
  );
}