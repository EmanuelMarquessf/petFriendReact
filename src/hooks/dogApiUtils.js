async function fetchDogs() {
  const responseDogsImg = await fetch(
    "https://api.thedogapi.com/v1/images/search?limit=10"
  );
  const dataDogsImg = await responseDogsImg.json();

  const responseDogsName = await fetch(
    "https://tools.estevecastells.com/api/cats/v1?limit=10"
  );
  const dataDogsName = await responseDogsName.json();
  let dogs = [];


  for (let i = 0; i < 6; i++) {
    let dog = {
      id: dataDogsImg[i].id,
      name: dataDogsName[i],
      sex: Math.floor(Math.random() * 2),
      age: Math.floor(Math.random() * 5) + 1,
      url: dataDogsImg[i].url,
      vaccine: Math.floor(Math.random() * 2)
    };
    dogs.push(dog);
  }
  return dogs;
}


export default fetchDogs;