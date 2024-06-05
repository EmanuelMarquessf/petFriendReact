

import Header from "../components/Header";
import Carrousel from "../components/Carrousel";
import Steps from "../components/Steps";
import CatSection from "../components/CatSection";
import DogSection from "../components/DogSection";
export default function Home() {
  
  return (
    <>
      {/* <Header /> */}
      <main className="flex flex-col gap-40 mx-2 md:mx-16 lg:mx-32 xl:mx-40 2xl:mx-40 my-14">
        <Carrousel />
        <Steps />
        <CatSection />
        <DogSection />
      </main>
    </>
  );
}
