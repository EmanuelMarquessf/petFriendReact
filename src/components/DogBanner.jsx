export default function Header() {
  return (
    <div 
      className="flex flex-grow h-80 bg-grayDetail items-center justify-left bg-cover bg-right"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/2832119/pexels-photo-2832119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
      }}
    > 
      <div className="flex flex-col justify-center items-center h-full bg-grayDetail p-12">
          <div className="flex flex-col items-start">
            <span className="font-extralight text-5xl">Choose your</span>
            <span className="font-bold text-8xl">Dog</span>
          </div>
        </div>
      <div className="w-[50%] h-full bg-gradient-to-r from-grayDetail to-transparent">

      </div>
      
    </div>
  )
}