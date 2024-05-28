

import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Steps from "../components/Steps";
import CatSection from "../components/CatSection";
export default function Home() {
  
  return (
    <>
      <Header />
      <main className="flex flex-col gap-40 md:mx-12 xl:mx-40 2xl:mx-40 my-14">
        <Carrousel />
        <Steps />
        <CatSection />
      </main>
    </>
  );
}
