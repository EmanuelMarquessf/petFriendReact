export default function Header() {
  return (
    <div className="flex flex-row flex-grow bg-whiteDetail rounded-3xl">
      <div className="w-[270px] flex-grow h-96 bg-center bg-cover rounded-3xl" style={{ backgroundImage: `url("https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,}}>

      </div>
      <div className="flex flex-col justify-between p-6">
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-5xl">Name</h1>
          <ul className="font-extralight text-2xl list-item px-8">
            <li className="list-disc">Male</li>
            <li className="list-disc">2 Years</li>
            <li className="list-disc">Race</li>
            <li className="list-disc">Vacined</li>
          </ul>
        </div>
        <button className="text-whiteDetail bg-blueDetail py-2 rounded-xl text-lg">Adopt Me</button>
      </div>
    </div>
  )
}