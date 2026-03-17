import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="p-8">
        <CardPanel />
      </div>
    </main>
  );
}
