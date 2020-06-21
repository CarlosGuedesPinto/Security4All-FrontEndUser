import {get, post, put, remove} from '../Utils/https'

export function getAllAchievements() {
    return get("/achievement/all")
}

export function editAchievement(body) {
    return put("/achievement", body)
}

export function addAchievement(body) {
    return post("/achievement", body)
}

export function removeAachievement(body) {
    return remove("/achievement", body)
}