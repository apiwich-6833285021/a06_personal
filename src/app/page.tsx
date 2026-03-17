import Banner from "@/components/Banner";
import CardPanel from "@/components/CardPanel";
import getVenues from "@/libs/getVenues";

export default async function Home() {
  const venuesData = await getVenues();
  const venues = venuesData.data.map((v) => ({
    name: v.name,
    picture: v.picture,
    id: v.id,
  }));

  return (
    <main>
      <Banner />
      <div className="p-8">
        <CardPanel venues={venues} />
      </div>
    </main>
  );
}
