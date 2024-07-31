const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions')
const cities = [];

fetch(endpoint).then(res => res.json()).then(result => {
    cities.push(...result)
})

function handleSearch(searchText, cities) {
    const regex = new RegExp(searchText, 'gi');
    return cities.filter(item => {
        return item.city.match(regex) || item.state.match(regex)
    })
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displaySearchResults() {
    const matchedResults = handleSearch(this.value, cities)
    const regex = new RegExp(this.value, 'gi')
    const html = matchedResults.map(place => {
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
        return `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>

      </li>`
    }).join('')
    suggestions.innerHTML = html
}
searchInput.addEventListener("input", displaySearchResults)



