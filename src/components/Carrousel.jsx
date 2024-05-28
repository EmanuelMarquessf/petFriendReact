export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between bg-whiteDetail rounded-[50px]">
      <div className="flex flex-col gap-24 items-center">
        <div className="text-center mx-24 flex flex-col gap-7">
          <h1 className="text-4xl lg:text-6xl font-bold text-blackTitle">
            Welcome <br></br> to PetFriend
          </h1>
          <h3 className="text-4xl">Let’s find a lovely pet or a friend</h3>
          <p className="font-extralight text-2xl text-secondaryText">
            No it easier than ever to find a friend <br></br> or a new replacement
            for the family.
          </p>
        </div>
        <button className="bg-blueDetail px-9 py-4 text-whiteDetail font-bold text-2xl rounded-full">Get Started</button>
      </div>
      <div
        className="w-[1050px] h-[800px] bg-cover bg-center rounded-l-[600px] rounded-r-[50px]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2463238/pexels-photo-2463238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        }}
      ></div>
    </div>
  );
}
