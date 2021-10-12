const countries = [
    {
      image: "https://flagpedia.net/data/flags/w580/de.png",
      country: "Germany",
      population: "81,770,900",
      region: "Europe",
      capital: "Berlin"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/au.png",
      country: "Australia",
      population: "91,657,312",
      region: "Aus",
      capital: "Canberra"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/in.png",
      country: "India",
      population: "1,3179,984,812",
      region: "Asia",
      capital: "New Delhi"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/kr.png",
      country: "South Korea",
      population: "40,400,000",
      region: "Asia",
      capital: "Seoul"
    },
    {
      image: "https://flagpedia.net/data/flags/w580/us.png",
      country: "United States of America",
      population: "323,947,000",
      region: "North America",
      capital: "Washington,D.C"
    }
  ];
  

  const list = document.createElement("div");

  countries.forEach((con) => {
  // console.log(fav);
  const listItem = document.createElement("img");
  listItem.src = con.image;
  const listItem1 = document.createElement("h1");
  listItem1.innerText = con.country;
  const listItem2 = document.createElement("p");
  listItem2.innerText = con.population;

  const listItem3 = document.createElement("p");
  listItem3.innerText = con.region;


  const listItem4 = document.createElement("p");
  listItem4.innerText = con.capital;

  list.append(listItem,listItem1 , listItem2 , listItem3 , listItem4);
});

document.body.append(list);

