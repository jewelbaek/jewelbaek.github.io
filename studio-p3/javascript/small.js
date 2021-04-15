console.log("is our script working");

// load the airtable library, call it "Airtable";
var Airtable = require("airtable");
// console.log(Airtable);

// use airtable library, connect to our base using API key;
var base = new Airtable({ apiKey: "keyqHyhH8ygrd2Utf" }).base(
  "appg20LjBJwHQvIO4"
);

// get our collection base, select all the records
// specify functions that will receive the data
base("toys").select({}).eachPage(gotPageOfToys, gotAllToys);

// an empty array to hold our data
var toys = [];


// callback function that receives our data
function gotPageOfToys(records, fetchNextPage) {
  console.log("gotPageOfToys()");
  // add the records from this page to our books array
  toys.push(...records);
  // request more pages
  fetchNextPage();
}


// call back function that is called when all pages are loaded
function gotAllToys(err) {
  console.log("gotAllToys()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading data");
    console.error(err);
    return;
  }

  // call function to show the books
  consoleLogToys();
  showToys();
}

// just loop through the books and console.log them
function consoleLogToys() {
  console.log("consoleLogToys()");
  toys.forEach(toy => {
    console.log("Toy:", toy);
  });
}

function filterByTag(event) {
  let allImages = document.querySelectorAll('.toy-image');
  allImages.forEach(function (item){
    if (item.classList.contains(event.target.dataset.size)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function showInfo(event) {
  //show modal for produce items only
  if (event.target.classList.contains('produce')) {
    infoDetails.innerHTML = `
      <h1>${event.target.dataset.name}</h1>
      <p>available: ${event.target.dataset.availability}</p>
    `;

    infoElement.classList.add('show');
  }
}

// look through our airtable data, create elements
function showToys() {
  console.log("showToys()");
  toys.forEach((toy) => {

    var toyImage = document.createElement("img");
    toyImage.classList.add("toy-image");
    toyImage.src = toy.fields.images[0].url;

    //adding a unified class
      img.classList.add('toys');

      // adding our produce type tags
      item.fields.Tags.forEach(function (tag) {
        img.classList.add(tag);
      });

      //associate name
      img.dataset.name = item.fields.Name;

      //associate the availability
      img.dataset.availability = item.fields.Availability;

    toyContainer.append(toyImage);

    // add titles to toyContainer
    var toyName = document.createElement("h1");
    toyName.classList.add("toy-name");
    toyName.innerText = toy.fields.name;
    toyContainer.append(toyName);

    var toySize = document.createElement("p");
    toySize.classList.add("toy-size");
    toySize.innerText = ("size: ")+toy.fields.size;
    toyContainer.append(toySize);

    var toyColor = document.createElement("p");
    toyColor.classList.add("toy-color");
    toyColor.innerText = ("color: ")+toy.fields.color;
    toyContainer.append(toyColor);

    var toySpecies = document.createElement("p");
    toySpecies.classList.add("toy-species");
    toySpecies.innerText = ("species: ")+toy.fields.species;
    toyContainer.append(toySpecies);

    var toyUniverse = document.createElement("p");
    toyUniverse.classList.add("toy-universe");
    toyUniverse.innerText = ("universe: ")+toy.fields.universe;
    toyContainer.append(toyUniverse);

    });
}

let toyFilter = '';
function filterByToy(event) {
  console.log(event)
}

let small-images = document.querySelectorAll('')
