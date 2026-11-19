import Hero from '@/components/hero';
import homeImg from '@/public/home.jpg';
export default function Home() {
  return (
    <main>
      <div>
        Home Page
        <Hero
          imgData={homeImg}
          alt='Car Factory'
          title='Profesional Cloud Hosting'
        />
      </div>
    </main>
  );
}
