import {get, post, put, remove} from 'Utils/https'

export function getAllUsers() {
    return get("/user")
}