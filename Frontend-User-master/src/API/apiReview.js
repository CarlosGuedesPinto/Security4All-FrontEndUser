import {
    get,
    post
} from '../Utils/https'

export function getAllReviews(id) {
    return get(`/user/review/sensor/${id}`)
}

export function getAverageScore(id) {
    return get(`/sensors/score/average/${id}`)
}

export function postReviewText(body) {
    return post('/user/insert/review', body)
}

export function postReviewScore(body) {
    return post('​/sensors​/score', body)
}