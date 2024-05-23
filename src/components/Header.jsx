export default function Header(){

  return (
    <header className="bg-blackHeader flex flex-row justify-between items-center px-20">
      <img className="w-12 my-2" src="/logo.png" alt="" />
      <ul className="text-whiteDetail text-xl font-semibold flex flex-row py-1 justify-end gap-10">
        <li><a className="" href="">Home</a></li>
        <li><a href="">Adoption</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </header>
  )
}