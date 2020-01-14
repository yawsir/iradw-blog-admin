function postFetch(url, params) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(params)
    }).then(res => res.json())
}

function getFetch(url) {
    return fetch(url, {
        method: 'GET',
        credentials: 'include'
    })
    .then(res => res.json())
}

function now() {
    const date = new Date()
    const y = date.getFullYear()
    let m = date.getMonth()+1
    m = m < 10 ? '0'+m : m
    let d = date.getDate()
    d = d < 10 ? '0'+d : d
    return `${y}-${m}-${d}`
}

function localStorageSet(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function localStorageGet(key) {
    return JSON.parse(localStorage.getItem(key))
}

function localStorageRemove(key) {
    localStorage.removeItem(key)
}


export {postFetch, getFetch, now, localStorageSet, localStorageGet, localStorageRemove}