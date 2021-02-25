'use strict';

// The Array of Image Objects!

const images = [
  {
    id: 0,
    title: "Little Laptop",
    description: "Just a little laptop on a neat and tidy table",
    width: 500,
    height: 333,
    localURL: "assets/images/little-laptop.jpg",
    imgURL: "https://picsum.photos/id/0/500/300",
    credit: "Alejandro Escamilla"
  },

  {
    id: 1,
    title: "Spiral Stars",
    description: "A blurry veiw of the galaxy",
    width: 500,
    height: 750,
    localURL: "assets/images/spiral-stars.jpg",
    imgURL: "https://picsum.photos/id/1042/500/300",
    credit: "Jeremy Thomas"
  },

  {
    id: 2,
    title: "Wastelands",
    description: "What appears to be a desolate forest",
    width: 500,
    height: 333,
    localURL: "assets/images/wasteland.jpg",
    imgURL: "https://picsum.photos/id/1028/500/300",
    credit: "Dikaseva"
  },

  {
    id: 3,
    title:"Another World",
    description: "Fantastic faraway Images from some Mars orbiter",
    width: 500,
    height: 313,
    localURL: "assets/images/another-world.jpg",
    imgURL: "https://picsum.photos/id/1032/500/300",
    credit: "NASA"
  },

  {
    id: 4,
    title: "The Beauty Of Nature",
    description: "A gorgeous view of a mountain and forest from below",
    width: 500,
    height: 333,
    localURL: "assets/images/the-beauty-of-nature.jpg",
    imgURL: "https://picsum.photos/id/1043/500/300",
    credit: "Christian Jeremy"
  },

  {
    id: 5,
    title: "Urban Decay",
    description: "The wear and tear on some old buildings",
    width: 500,
    height: 281,
    localURL: "assets/images/urban-decay.jpg",
    imgURL: "https://picsum.photos/id/1054/500/300",
    credit: "Sergio Rola"
  },

  {
    id: 6,
    title: "Some Wheat",
    description: "A fairly general image of some wheat",
    width: 500,
    height: 333,
    localURL: "assets/images/some-wheat.jpg",
    imgURL: "https://picsum.photos/id/107/500/300",
    credit: "Lukas Schweizer"
  },

  {
    id: 7,
    title: "Watch where you step!",
    description: "A lot of books laid out open on the floor.",
    width: 500,
    height: 333,
    localURL: "assets/images/watch-where-you-step.jpg",
    imgURL: "https://picsum.photos/id/1073/500/300",
    credit: "Patrick Tomasso"
  },

  {
    id: 8,
    title: "Big Bois",
    description: "An image of a couple walrus, sitting upon a rock.",
    width: 500,
    height: 357,
    localURL: "assets/images/big-bois.jpg",
    imgURL: "https://picsum.photos/id/1084/500/300",
    credit: "Jay Ruzesky"
  }
];

// Create an empty array
let image = '';

// For each object in the array, create the figure/figcaption elements and populate them with the array object items.
images.forEach(function(images){
  image += `<figure><h2>${images.title}</h2><img src="${images.localURL}" alt="${images.description}" width="${images.width}" height="${images.height}"><figcaption>${images.description}<br>Photo by: ${images.credit}<br>Original Image found <a href="${images.imgURL}">here</a></figcaption></figure>`;
});

// Output the HTML to the webpage
document.querySelector('.gallery').innerHTML = image;