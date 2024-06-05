export default function Header() {
  return (
    <div 
      className="flex flex-grow h-80 bg-grayDetail items-center justify-end bg-no-repeat bg-left-top"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    > 
      <div className="w-[50%] h-full bg-gradient-to-l from-grayDetail to-transparent">

      </div>
      <div className="flex flex-col justify-center items-center h-full bg-grayDetail p-12">
        <div className="flex flex-col items-end">
          <span className="font-extralight text-5xl">Choose your</span>
          <span className="font-bold text-8xl">Cat</span>
        </div>
      </div>
    </div>
  )
}