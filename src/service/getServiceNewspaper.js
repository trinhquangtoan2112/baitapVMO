import { apiKey } from './http';

export const getNewsForHomePage = async () => {

    return await apiKey.get("search", {
        'page-size': 150,
        'show-fields': 'trailText,byline',
        'show-elements': 'image'
    })
}
export const searchFromKeyWord = async (value) => {

    return await apiKey.get("search", {
        'q': value,
        'page-size': 40,
        'show-fields': 'trailText,byline',
        'show-elements': 'image'
    })
}
export const getContentNewFromID = async (id) => {
    return await apiKey.get(`${id}`, {
        'show-fields': 'trailText,byline',
        'show-blocks': 'all'
    })
}
export const getSectionFromID = async (id) => {
    return await apiKey.get(`${id}`, {
        'show-fields': 'trailText,byline',
        'page-size': 10,
        'show-elements': "image"
    })
}
export const getNewsPaperFromSection = async (url) => {
    return await apiKey.get(`${url}`, {
        'show-fields': 'trailText,byline',
        'page-size': 50,
        'show-elements': "image"
    })
}