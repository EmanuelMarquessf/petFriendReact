export default function Header() {
  return (
    <div className="gap-10 lg:gap-0 py-10 lg:py-0 flex flex-col lg:flex-row items-center justify-between bg-whiteDetail rounded-[50px]">
      <div className="order-2 lg:order-1 flex flex-col gap-10 lg:gap-24 items-center">
        <div className="text-center mx-16 lg:mx-24 flex flex-col gap-7">
          <h1 className="text-5xl lg:text-6xl font-bold text-blackTitle">
            Welcome <br></br> to PetFriend
          </h1>
          <h3 className="text-2xl lg:text-4xl">Let’s find a lovely pet or a friend</h3>
          <p className="font-extralight text-lg  lg:text-2xl text-secondaryText">
            No it easier than ever to find a friend <br></br> or a new replacement
            for the family.
          </p>
        </div>
        <a href="#steps" className="bg-blueDetail px-9 py-4 text-whiteDetail font-bold text-2xl rounded-full">Get Started</a>
      </div>
      <div
        className="order-1 lg:order-2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[1050px] lg:h-[800px] bg-cover bg-center rounded-full lg:rounded-l-[600px] lg:rounded-r-[50px]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2463238/pexels-photo-2463238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      ></div>
    </div>
  );
}
