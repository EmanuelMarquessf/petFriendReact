async function fetchCats() {
  const responseCatsImg = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );
  const dataCatsImg = await responseCatsImg.json();

  const responseCatsName = await fetch(
    "https://tools.estevecastells.com/api/cats/v1?limit=10"
  );
  const dataCatsName = await responseCatsName.json();
  let cats = [];


  for (let i = 0; i < 6; i++) {
    let cat = {
      id: dataCatsImg[i].id,
      name: dataCatsName[i],
      sex: Math.floor(Math.random() * 2),
      age: Math.floor(Math.random() * 5) + 1,
      url: dataCatsImg[i].url,
      vaccine: Math.floor(Math.random() * 2)
    };
    cats.push(cat);
  }
  return cats;
}

export default fetchCats;