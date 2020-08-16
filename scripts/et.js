const API_KEY = '88cbb71bd9c54332899953287b7b567e';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
const urlE = `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&pageSize=6&apiKey=${API_KEY}` // entertainment
const urlM = `https://newsapi.org/v2/everything?q=movies&pageSize=4&apiKey=${API_KEY}`
const urlTv = `https://newsapi.org/v2/everything?q=cable&pageSize=4&apiKey=${API_KEY}`

// entertainment news
async function et() {
    const response = await fetch(proxyUrl + urlE);
    const data = await response.json();
    let ent = data.articles;
    //console.log(ent);

        var image = data.articles[0].urlToImage;
        var title = data.articles[0].title;
        var info = data.articles[0].description;
        var link = data.articles[0].url;
        
        document.getElementById('image').src = image;
        document.getElementById('title').innerHTML = title;
        document.getElementById('info').innerHTML = info;
        document.getElementById('link').href = link;

    
};

// movies section
async function movies() {
    const response = await fetch(proxyUrl + urlM);
    const data = await response.json();
    var movie = data.articles;
    console.log(data)

    function moviesTemplate(movie) {
        return `
        
            <div class=card>
                <img src='${movie.urlToImage}'>
                <p class='card-text' id='title'>${movie.title}</p>
                <a href='${movie.url}' target='_blank'>read more</a>
            </div>
        `
    }

    document.getElementById('grid').innerHTML = `
        ${movie.map(moviesTemplate).join('')}
    `
}

// tv section
async function tv() {
    const response = await fetch(proxyUrl + urlTv);
    const data = await response.json();
    var tv = data.articles;
    console.log(tv)

    function tvTemplate(tv) {
        return `
        
            <div class=card>
                <img src='${tv.urlToImage}'>
                <p class='card-text' id='title'>${tv.title}</p>
                <a href='${tv.url}' target='_blank'>read more</a>
            </div>
        `
    }

    document.getElementById('gridF').innerHTML = `
        ${tv.map(tvTemplate).join('')}
    `
}

// show to the date 
var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
var show = month + "/" + day + "/" + year;
console.log(show);
document.getElementById('date').innerHTML = show;

et();
movies();
tv();