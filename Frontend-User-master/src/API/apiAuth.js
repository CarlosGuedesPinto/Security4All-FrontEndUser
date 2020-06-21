import {
    post, 
} from '../Utils/https'

//login
export function doLogin(data) {
    return post("/auth/login", data)
}
//register
export function doRegister(data) {
    return post("/user/firstRegister", data)
}