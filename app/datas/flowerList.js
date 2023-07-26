import monstera from "../../public/images/flowers/monstera.jpeg";
import lyrata from "../../public/images/flowers/lyrata.jpeg";
import pothos from "../../public/images/flowers/pothos.jpeg";
import succulent from "../../public/images/flowers/succulent.jpeg";
import olivier from "../../public/images/flowers/olivier.jpeg";
import basil from "../../public/images/flowers/basil.jpeg";
import calathea from "../../public/images/flowers/calathea.jpeg";
import cactus from "../../public/images/flowers/cactus.jpeg";

export const flowerList = [
  {
    name: "monstera",
    category: "classique",
    id: "1ed",
    bestSale: true,
    light: 2,
    water: 3,
    cover: monstera,
    price: 15,
    width: 200,
    height: 150,
  },
  {
    name: "ficus lyrata",
    category: "classique",
    id: "2ab",
    light: 3,
    water: 1,
    cover: lyrata,
    price: 16,
    width: 200,
    height: 150,
  },

  {
    name: "pothos argenté",
    category: "classique",
    id: "3sd",
    light: 1,
    water: 2,
    cover: pothos,
    price: 9,
    width: 200,
    height: 150,
  },
  {
    name: "calathea",
    category: "classique",
    id: "4kk",
    light: 2,
    water: 3,
    cover: calathea,
    price: 20,
    width: 200,
    height: 150,
  },
  {
    name: "olivier",
    category: "extérieur",
    id: "5pl",
    light: 3,
    water: 1,
    cover: olivier,
    price: 25,
    width: 200,
    height: 150,
  },

  {
    name: "cactus",
    category: "plante grasse",
    id: "8fp",
    light: 2,
    water: 1,
    cover: cactus,
    price: 6,
    width: 200,
    height: 150,
  },
  {
    name: "basilique",
    category: "extérieur",
    id: "7ie",
    bestSale: true,
    light: 2,
    water: 3,
    cover: basil,
    price: 5,
    width: 200,
    height: 150,
  },
  {
    name: "succulente",
    category: "plante grasse",
    id: "9vn",
    light: 2,
    water: 1,
    cover: succulent,
    price: 8,
    width: 200,
    height: 150,
  },
];
