
import { Cats} from '../types';
import cat1 from "../assets/images/cute-kitty-cat-head-1.png";
import cat2 from "../assets/images/cute-kitty-cat-head-2.png";
import cat3 from "../assets/images/cute-kitty-cat-head-3.png";
import cat4 from "../assets/images/cute-kitty-cat-head-4.png";
import cat5 from "../assets/images/cute-kitty-cat-head-5.png";
import cat6 from "../assets/images/cute-kitty-cat-head-6.png";
import cat7 from "../assets/images/cute-kitty-cat-head-7.png";
import cat8 from "../assets/images/cute-kitty-cat-head-8.png";


const catsArray = [
  {cat: cat1, value: 'cat1'},
  {cat: cat1, value: 'cat1'},
  {cat: cat2, value: 'cat2'},
  {cat: cat2, value: 'cat2'},
  {cat: cat3, value: 'cat3'},
  {cat: cat3, value: 'cat3'},
  {cat: cat4, value: 'cat4'},
  {cat: cat4, value: 'cat4'},
  {cat: cat5, value: 'cat5'},
  {cat: cat5, value: 'cat5'},
  {cat: cat6, value: 'cat6'},
  {cat: cat6, value: 'cat6'},
  {cat: cat7, value: 'cat7'},
  {cat: cat7, value: 'cat7'},
  {cat: cat8, value: 'cat8'},
  {cat: cat8, value: 'cat8'},
 
]

const catsIdArray = catsArray.reduce((red: Cats[], el, i) => {
  red.push({ ...el, id: `0${i}`, upside: false });
  return red;
}, []);

const generateNumbers = (arr: Cats[]): Cats[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export { catsIdArray, generateNumbers };