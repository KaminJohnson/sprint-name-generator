import data from './data.json';
import Generator from './generator';

export default function Home() {
  return (
    <main className="flex items-center flex-col">
      <div className="pt-8 text-3xl font-black">Sprint Name Generator</div>
      <Generator data={data} />
    </main>
  );
}
