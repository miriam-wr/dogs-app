 const BASE = 'https://dog.ceo/api'

export async function getAllBreeds() {
    // const url = `${BASE}/breeds/list/all`;
    const url = './breeds.json'
    return await fetch(url, {
        method: 'GET'
    }).then(res =>
        res.json()
    );
}

export async function getImageForBreed(breed) {
    const url = `${BASE}/${breed}/pug/images/random`;
    return await fetch(url, {
        method: 'GET'
    }).then(res =>
        res.json()
    );
}

