export default function Header() {
  return (
    <div id="steps" className="flex flex-col gap-20">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-5xl">Adoption Process</h1>
        <span className="font-extralight text-2xl lg:text-3xl">How can i adopt a pet?</span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-20">
        <div className="flex flex-col flex-grow items-center bg-whiteDetail text-center rounded-3xl">
          <span className="bg-blueDetail rounded-full py-4 px-8 text-6xl text-whiteDetail font-bold relative -top-12">
            1
          </span>
          <div className="flex flex-col gap-10 items-center px-16 pb-12 lg:p-16 lg:pt-4">
            <h1 className="font-bold text-3xl">Choose Pet</h1>
            <p className="font-light text-xl leading-10">
              Choose the pet you want to adopt and check the details such as
              age, healthstatus and ask all those questions you have so that
              this experience issuccessful and wonderful.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-grow items-center bg-whiteDetail text-center rounded-3xl">
          <span className="bg-blueDetail rounded-full py-5 px-8 text-6xl text-whiteDetail font-bold relative -top-12">
            2
          </span>
          <div className="flex flex-col gap-10 items-center px-16 pb-12 lg:p-16 lg:pt-4">
            <h1 className="font-bold text-3xl">Adoption Form</h1>
            <p className="font-light text-xl leading-10">
              Fill in the complete information in the adoption process, remember
              that this step is the most important of all, since we try to make
              everything as legal and transparent as possible.
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-grow items-center bg-whiteDetail text-center rounded-3xl">
          <span className="bg-blueDetail rounded-full py-5 px-8 text-6xl text-whiteDetail font-bold relative -top-12">
            3
          </span>
          <div className="flex flex-col gap-10 items-center px-16 pb-12 lg:p-16 lg:pt-4">
            <h1 className="font-bold text-3xl">Pet Companion</h1>
            <p className="font-light text-xl leading-10">
              Take your pet home with you and start a new phase of your life
              accompanied by a loyal friend Who will always be there for you.
              Remember to keep everything up to date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
