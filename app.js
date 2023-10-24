import { animals } from './animals'; //imports object from animal file.
import React from 'react'; //?????
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app'); //gets main with id of 'app'.
const root = createRoot(container); //creates a root for 'app' via container variable.

const title = ""; //how will this update?

//background image as ocean
const background = (
  <img 
  className = "background"
  alt = "ocean"
  src = "/images/ocean.jpg"
  />
);

//adding fun facts via event listener
const displayFact = e => 
{
  const animal = e.target.alt; //gets name of animal from alt. how does target work??
  const index = Math.floor(Math.random() * animals[animal].facts.length); //length of facts aray for said animal.
  const fact = animals[animal].facts[index]; //finds random index and store value.
  const p = document.getElementById("fact"); //gets empty p.
  p.innerHTML = fact; //cahnges innner html to d=fact from line 23.
};

//getting images from animal.js object
const images = []; //empty array to store images
for (const animal in animals)
{
//we can also create another const and assign the <img/> expression to it. we then push that const after the expressionn but still inside the for in loop.
  images.push( 
    <img 
    onClick = {displayFact}
    key = {animal} 
    className = "animal" 
    alt = {animal}
    src = {animals[animal].image} 
    {/* COMMENT: we can also do animals.animal.image*/} 
    aria-label = {animal}
    role = "button"
    />);
};

//main jsx const 
const animalFacts = (
  <div>
    <h1>{ title === "" ? "Click an animal for a fun fact!" : title }</h1>
    {background} 
    <div 
    className = "animals">
    {images}
    </div>
    <p id = "fact"></p>
  </div>
);

root.render(animalFacts);
