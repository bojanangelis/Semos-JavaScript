import { atom } from "recoil";

export const product = atom({
    key: 'product', 
    default: { name: 'product 1', img: 'somme url', id: 123412 }
})