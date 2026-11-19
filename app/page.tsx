import Hero from '@/components/hero';
import homeImg from '@/public/home.jpg';
export default function Home() {
  return (
    <main>
      <Hero
        imgData={homeImg}
        alt='Car Factory'
        title='Profesional Cloud Hosting'
      />
    </main>
  );
}
