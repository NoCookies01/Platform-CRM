import { ADD_PRODUCT, API, DELETE_PRODUCT, GET_ALL, ORDER, ORDER_PRODUCT, PROCEED_ORDER, PRODUCT } from "./keys";
import IProduct from "../models/IProduct";
import { get, patch, post, remove } from "./axios";
import { IOrder } from "../models/IOrder";

export function GetAll() {
    return get<IProduct[]>(`${API}/${PRODUCT}/${GET_ALL}`);
}

export function AddProduct(product: any) {
    return post<IProduct[]>(`${API}/${PRODUCT}/${ADD_PRODUCT}`, product);
}

export function DeleteProduct(id: number) {
    return remove(`${API}/${PRODUCT}/${DELETE_PRODUCT}?id=${id}`);
}

export function ProceedOrder(product: IProduct) {
    return post(`${API}/${ORDER}/${PROCEED_ORDER}`, product);
}

export function OrderProduct(product: IProduct) {
    return patch<IProduct[]>(`${API}/${PRODUCT}/${ORDER_PRODUCT}`, product);
}