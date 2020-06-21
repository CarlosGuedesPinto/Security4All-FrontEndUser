import {
    get,
    post,
    put,
    remove
} from '../Utils/https'

export function getAllSensors() {
    return get("/sensors")
}

/*export function getAllSensorsReviews() {
    return get("/sensors")
}*/

export function getAllHouseSensors(id) {
    return get(`/sensors/house/${id}`)
}

/*export function getHouseInfo(id) {
    return get(`/`)
}*/

export function getSensorsScore(id) {
    return get(`/sensors/score/${id}`)
}


export function getSensorById(id) {
    return get(`/sensors/${id}`)
}

export function editSensor(body) {
    return put("/sensors", body)
}

export function addSensor(body) {
    return post("/sensors", body)
}

export function removeSensor(body) {
    return remove("/sensors", body)
}