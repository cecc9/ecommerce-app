import { nanoid } from "nanoid";

import original from "../assets/experiences/original.svg";
import fast from "../assets/experiences/fast.svg";
import satisfaction from "../assets/experiences/satisfaction.svg";
import shopping from "../assets/experiences/shopping.svg";

export const experiences = [
    {
        id: nanoid(),
        image: original,
        title: "Original Products",
        description:
            "We provide money back guarantee if the product are not original",
    },
    {
        id: nanoid(),
        image: satisfaction,
        title: "Satisfaction Guarantee",
        description:
            "Exchange the product you ve purchased if it doesn't fir on you",
    },
    {
        id: nanoid(),
        image: shopping,
        title: "New Arrival Everyday",
        description: "We updates our collections almost everyday",
    },
    {
        id: nanoid(),
        image: fast,
        title: "Fast & Free Shipping",
        description: "We offter fast and free shipping for our loyal customers",
    },
];
