import {
    get,
    put,
    postQr
} from '../Utils/https'

//login
export function GetUserById(id) {
    return get(`/user/${id}`)
}
//register
/* eslint-disable */
export function EditUserById(id, body) {
    return put(`/user/${id}`, body)
}
export function GetQrCode(id) {
    return postQr("https://api.qr-code-generator.com/v1/create/", {
        "frame_name": "no-frame",
        "qr_code_text": `${id}`,
        "image_format": "SVG",
        "qr_code_logo": "scan-me-square"
    })
}