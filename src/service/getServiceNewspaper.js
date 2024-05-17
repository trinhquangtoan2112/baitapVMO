import { apiKey } from './http';

export const getNewsForHomePage = () => {

    return apiKey.get("search", {
        'page-size': 150,
        'show-fields': 'trailText,byline',
        'show-elements': 'image'
    })
}

export const getContentNewFromID = (id) => {
    return apiKey.get(`${id}`, {
        'show-fields': 'trailText,byline',
        'show-blocks': 'all'
    })
}
export const getSectionFromID = (id) => {
    return apiKey.get(`${id}`, {
        'show-fields': 'trailText,byline',
        'page-size': 15,
        'show-elements': "image"
    })
}
export const getNewsPaperFromSection = (url) => {
    return apiKey.get(`${url}`, {
        'show-fields': 'trailText,byline',
        'page-size': 20,
        'show-elements': "image"
    })
}