class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }
    getCards() {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: this._headers
        })
            .then(this._getDataFromResponse)
    }
    _getDataFromResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
    }
}
const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
   
})
export default moviesApi