import {
    get,
    put
} from '../Utils/https'

export function getAllUsers() {
    return get("/user")
}

export function getAllUsersSensors(id) {
    return get(`/user/sensors/${id}`)
}

export function getUserById(id) {
    return get(`/user/${id}`)
}
export function editUser(body) {
    return put("/user", body)
}

export function getUserSpaces(id) {
    return get(`/user/spaces/${id}`)
}

export function getUserHouseByID() {
    return get(`/user_house`)
}