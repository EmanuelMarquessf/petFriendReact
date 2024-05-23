import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Steps from "../components/Steps";
export default function Home() {
  
  return (
    <>
      <Header />
      <main className="md:mx-12 xl:mx-40 2xl:mx-48 my-14">
        <Carrousel />
        <Steps />
      </main>
    </>
  );
}
