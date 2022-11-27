import { StoreItem } from "./stroe-item.interface";

export interface Cart {
    userId: number;
    item: StoreItem,
    quantity: number
}