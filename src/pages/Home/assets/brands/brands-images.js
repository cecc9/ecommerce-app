import { nanoid } from "nanoid";

import adidas from "./adidas.png";
import calvin from "./calvin-klein.png";
import chanel from "./chanel.png";
import dg from "./dg.png";
import gucci from "./gucci.png";
import guess from "./guess.png";
import levis from "./levis.png";
import versace from "./versace.png";

export const brands = [
    { id: nanoid(), image: chanel },
    { id: nanoid(), image: calvin },
    { id: nanoid(), image: guess },
    { id: nanoid(), image: gucci },
    { id: nanoid(), image: dg },
    { id: nanoid(), image: adidas },
    { id: nanoid(), image: levis },
    { id: nanoid(), image: versace },
];
