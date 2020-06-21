import {get} from '../Utils/https'

export function getHouseById(id) {
    return get(`/house/${id}`)
}

export function getAllHouses() {
    return get(`/house`)
}