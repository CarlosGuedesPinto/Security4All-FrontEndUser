import {
    get,
    post,
    put,
    remove
} from '../Utils/https'

export function getAllOrders() {
    return get("/order")
}

export function editOrder(body) {
    return put("/order", body)
}

export function addOrder(body) {
    return post("/order/sensors", body)
}

export function removeOrder(body) {
    return remove("/order", body)
}