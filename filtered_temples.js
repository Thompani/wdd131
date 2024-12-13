
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Cedar City Utah",
		location: "Cedar City, Utah, United States",
		dedicated: "2017, December, 10",
		area: 42657,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
	  },
	  {
		templeName: "Winter Quarters Nebraska",
		location: "Florence, Nebraska, United States",
		dedicated: "2001, April, 22",
		area: 16000,
		imageUrl: 
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
	  },
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "The Hague Netherlands",
		location: "Zoetermeer, Netherlands",
		dedicated: "2019, September, 8",
		area: 10500,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg"
	  },
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	}
  ];

  creatTempleCard(temples);

  // link  temples that are new
const linknewTemple = document.querySelector("#newTemple");

linknewTemple.addEventListener("click", () => {
	const heading = document.querySelector(".templeHome");
	heading.textContent = "Temples That are New";  
	heading.classList.remove("home");   
	heading.classList.add("new");  

	creatTempleCard(temples.filter(temple => {
		const dedicationDate = new Date(temple.dedicated);
		return dedicationDate.getFullYear() > 2000;  
	  }));
});

// link  temples that are old
const linkforoldTemple = document.querySelector("#oldTemple");

	linkforoldTemple.addEventListener("click", () => {
		const heading = document.querySelector(".templeHome");
		heading.textContent = "Temples that are Old";  
		heading.classList.remove("home");   
		heading.classList.add("old");  

		creatTempleCard(temples.filter(temple => {
			const dedicationDate = new Date(temple.dedicated);
			return dedicationDate.getFullYear() < 2000;  
		  }));
	
	});
	const linkforlargeTemple = document.querySelector("#largeTemple");

	linkforlargeTemple.addEventListener("click", () => {
		const heading = document.querySelector(".templeHome");
		heading.textContent = "Temples that are Large";  
		heading.classList.remove("home");   
		heading.classList.add("large");  

		creatTempleCard(temples.filter(temple => {
			return temple.area > 90000;  
		  }));
	
	});

	const linkforsmallTemple = document.querySelector("#smallTemple");

	linkforsmallTemple.addEventListener("click", () => {
		const heading = document.querySelector(".templeHome");
		heading.textContent = "Temples that are Small";  
		heading.classList.remove("home");   
		heading.classList.add("small");  

		creatTempleCard(temples.filter(temple => {
			return temple.area < 10000;  
		  }));
	
	});


const linkforHomeTemple = document.querySelector("#homeTemple");

linkforHomeTemple.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default anchor link behavior

  const heading = document.querySelector(".templeHome");
  heading.textContent = "All Temples";  
  heading.classList.remove("new", "old", "large");   
  heading.classList.add("home");  

  // Display all temples (no filtering)
  creatTempleCard(temples);
});


function creatTempleCard(filteredTemples){
	document.querySelector(".container").innerHTML = "";
	filteredTemples.forEach(temple => {
    let card = document.createElement("section");
	let templeNames = document.createElement("h3");
	let templeLocation = document.createElement("p");
	let templeDedication = document.createElement("p");
	let templeArea = document.createElement("p");
	let templeImg = document.createElement("img");
	
	templeNames.textContent = temple.templeName;
	templeLocation.innerHTML = `<span class="label">Location</span> ${temple.location}`;
	templeDedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
	templeArea.innerHTML = `<span class="label">Temple Size:</span> ${temple.area} sq ft`;
    templeImg.setAttribute('src', temple.imageUrl);
    templeImg.setAttribute('alt', `${temple.templeName} Temple`);
	templeImg.setAttribute("loading", "lazy");


    card.appendChild(templeNames);
	card.appendChild(templeLocation);
	card.appendChild(templeDedication);
	card.appendChild(templeArea);
    card.appendChild(templeImg);

	document.querySelector(".container").appendChild(card);
});
}
