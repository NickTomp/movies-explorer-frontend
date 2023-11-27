class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    //User
    register(password, email, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                "password": `${password}`,
                "email": `${email}`,
                "name": `${name}`
            })
        })
            .then(this._getDataFromResponse)
    }
    authorize(password, email) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                "password": `${password}`,
                "email": `${email}`
            })
        })
            .then(this._getDataFromResponse)
    }
    signOut() {
        return fetch(`${this._baseUrl}/signout`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers
        })
            .then(this._getDataFromResponse)
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers,
        })
            .then(this._getDataFromResponse)
    }
    editUserInfo(name, email) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                "name": `${name}`,
                "email": `${email}`
            })
        })
            .then(this._getDataFromResponse)
    }
    //Movies
   getSavedCards() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            credentials: 'include',
            headers: this._headers
        })
            .then(this._getDataFromResponse)
    }
    createCard(country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this._headers,
            body: JSON.stringify({
                "country": `${country}`,
                "director": `${director}`,
                "duration": `${duration}`,
                "year": `${year}`,
                "description": `${description}`,
                "image": `${image}`,
                "trailerLink": `${trailerLink}`,
                "nameRU": `${nameRU}`,
                "nameEN": `${nameEN}`,
                "thumbnail": `${thumbnail}`,
                "movieId": `${movieId}`
            })
        })
            .then(this._getDataFromResponse)
    }
    deleteCard(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._headers
        })
            .then(this._getDataFromResponse)
    }

    //_private
    _getDataFromResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status} - ${res.statusText}`);
    }
}
const mainApi = new MainApi({
    baseUrl: 'https://api.movies.ktomp.nomoredomainsrocks.ru',
    headers: {
        'Content-Type': 'application/json'
    }

})
export default mainApi