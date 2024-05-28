export default function Card(props) {
  const cat = {
    id: props.id,
    name: props.name,
    sex: props.sex ? 'Male' : 'Female',
    age: props.age,
    url: props.image,
    vaccine: props.vaccine ? 'Vacined' : 'No Vacined'
  };
  return (
    <div className="flex flex-row flex-grow bg-whiteDetail rounded-3xl">
      <div className="w-[170px] md:w-[250px] h-full md:h-80 bg-center bg-cover rounded-3xl" style={{ backgroundImage: `url(${cat.url})` }}>

      </div>
      <div className="flex flex-col  flex-grow justify-between p-6 gap-6 md:gap-0">
        <div className="flex flex-col w-full md:w-[180px] gap-10">
          <h1 className="font-bold text-xl">{cat.name}</h1>
          <ul className="font-extralight text-xl list-item px-4 md:px-8">
            <li className="list-disc">{cat.sex}</li>
            <li className="list-disc">{cat.age} Years</li>
            <li className="list-disc">{cat.vaccine}</li>
          </ul>
        </div>
        <button className="text-whiteDetail bg-blueDetail py-2 rounded-xl text-lg">Adopt Me</button>
      </div>
    </div>
  )
}