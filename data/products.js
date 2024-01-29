export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  return matchingProduct;
}

export const products = [
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/lancic1.jpeg",
    name: "Ogrlica 4 srca",
    rating: {
      stars: 5,
      count: 3157,
    },
    priceFening: 1000,
    keywords: ["lancic", "privjesak", "srca", "gold"],
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/lancic2.jpeg",
    name: "Ogrlica 4 srca i sretna djetelina",
    rating: {
      stars: 5,
      count: 3157,
    },
    priceFening: 1890,
    keywords: ["lancic", "privjesak", "srca", "gold", "djetelina", "ogrlica"],
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/products/lancic3.jpeg",
    name: "Set ogrlica",
    rating: {
      stars: 4.5,
      count: 127,
    },
    priceFening: 2095,
    keywords: [
      "lancic",
      "privjesak",
      "srca",
      "gold",
      "djetelina",
      "ogrlica",
      "set",
    ],
  },
  {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: "images/products/setnausnica1.jpeg",
    name: "Set naušnica - goldy",
    rating: {
      stars: 5,
      count: 2197,
    },
    priceFening: 1199,
    keywords: ["naušnice", "set", "goldy"],
  },
  {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: "images/products/setnausnica2.jpeg",
    name: "Set naušnica -goldy2",
    rating: {
      stars: 4,
      count: 37,
    },
    priceFening: 1199,
    keywords: ["naušnice", "set", "goldy"],
  },
  {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: "images/products/setnausnica3.jpeg",
    name: "Set naušnica - goldy2",
    rating: {
      stars: 4.5,
      count: 317,
    },
    priceFening: 1200,
    keywords: ["naušnice", "set", "goldy"],
  },
  {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: "images/products/setnausnica4.jpeg",
    name: "Set naušnica - silver",
    rating: {
      stars: 4.5,
      count: 144,
    },
    priceFening: 1250,
    keywords: ["naušnice", "set", "silver"],
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Muške sunčane naočale Pilot",
    rating: {
      stars: 3.5,
      count: 42,
    },
    priceFening: 1690,
    keywords: ["sunglasses", "glasses", "accessories", "shades"],
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "images/products/straw-sunhat.webp",
    name: "Šešir - slamnati",
    rating: {
      stars: 4,
      count: 215,
    },
    priceFening: 1500,
    keywords: ["hats", "straw hats", "summer", "apparel"],
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "images/products/sky-flower-stud-earrings.webp",
    name: "Silver Sky Flower našnice",
    rating: {
      stars: 4.5,
      count: 52,
    },
    priceFening: 1799,
    keywords: ["jewelry", "accessories", "womens"],
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Žičane naušnice  - Gold",
    rating: {
      stars: 4.5,
      count: 117,
    },
    priceFening: 2400,
    keywords: ["accessories", "womens"],
  },
  {
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Ogledalo na stalku",
    rating: {
      stars: 4.5,
      count: 130,
    },
    priceFening: 1649,
    keywords: ["bathroom", "washroom", "mirrors", "home"],
  },
];
