import Hero from '@/components/hero';
import ScaleImg from '@/public/scale.jpg';

export default function ScalePage() {
  return (
    <div>
      <Hero imgData={ScaleImg} alt='Scale' title='Scale' />
    </div>
  );
}
