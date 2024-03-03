import { nanoid } from "nanoid";

import paypal from "../assets/paypal.svg";
import visa from "../assets/visa.svg";
import mastercard from "../assets/mastercard.svg";

export const paymentMethods = [
    {
        id: nanoid(),
        image: mastercard,
    },
    {
        id: nanoid(),
        image: visa,
    },
    {
        id: nanoid(),
        image: paypal,
    },
];
