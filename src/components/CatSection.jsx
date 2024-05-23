import Banner from "../components/Banner";
import Card from "../components/Card";


export default function Header() {
  return (
    <div className="flex flex-col gap-14">
      <Banner></Banner>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-5xl">Adopt</h1>
          <span className="font-extralight text-3xl">Your Favourite one</span>
        </div>
        <div className="flex flex-row flex-wrap gap-10">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>

    </div>
  )
}