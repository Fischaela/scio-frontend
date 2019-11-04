export const API_URL_DEV = `http://localhost:8000/api`
export const API_URL_PROD = `https://shortcut.io/api`
export const SCIO_LOCALSTORAGE_ID = `SCIO`
export const URL_DEV = 'localhost:8000'
export const URL_PROD = 'shortcut.io'

const hostname = window && window.location && window.location.hostname

export let API_URL
switch (hostname) {
case URL_PROD:
  API_URL = API_URL_PROD
  break
default:
  API_URL = API_URL_DEV
}