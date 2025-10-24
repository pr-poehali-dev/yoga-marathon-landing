import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Program from '@/components/Program';
import Results from '@/components/Results';
import Pricing from '@/components/Pricing';
import Reviews from '@/components/Reviews';
import Teacher from '@/components/Teacher';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Program />
      <Results />
      <Pricing />
      <Reviews />
      <Teacher />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;