import {get, post} from '../Utils/https'

export function getAllAlerts() {
    return get("/alerts")
}

export function addAlert(body) {
    return post("/alerts", body)
}