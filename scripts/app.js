const API_KEY= '42c0a64fe17a23f04605ab8ba63a9155';
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const urlT = `https://gnews.io/api/v3/search?q=nfl&max=6&image=require&token=42c0a64fe17a23f04605ab8ba63a9155`; // top news
const urlS = `https://gnews.io/api/v3/search?q=sports&max=6&image=require&token=42c0a64fe17a23f04605ab8ba63a9155`; // sports news
const urlE = `https://gnews.io/api/v3/search?q=tv&max=6&image=require&token=42c0a64fe17a23f04605ab8ba63a9155` // entertainment


// sports news
function sports() {
    fetch(proxyUrl + urlS)
    .then((response) => response.json())
    .then((data) => {
        let sports = data.articles;
        console.log("sports:", sports);

        function sportTemplate(sport) {
            return `
            <hr>
                <div class=card>
                    <img src='${sport.image}'>
                    <p class='card-text' id='title'>${sport.title}</p>
                    <a href='${sport.url}' target='_blank'>read more</a>
                </div>
            `
        }
        document.getElementById('sports').innerHTML = `
            <h4 class='grid-title'>Sports</h4>
            ${sports.map(sportTemplate).join('')}
        `
    })
    .catch((err) => console.log(err))
};

// main news
async function main() {
    const response =  await fetch(proxyUrl + urlT);
    const data = await response.json();
    let top = data.articles;
    console.log("top stories:", top);

    function topTemplate(top) {
        return `
        <hr>
            <div class=card>
                <img src='${top.image}'>
                <p class='card-text' id='title'>${top.title}</p>
                <a href='${top.url}' target='_blank'>read more</a>
            </div>
        `
    }

    document.getElementById('top').innerHTML = `
        <h4 class='grid-title'>Top Stories</h4>
        ${top.map(topTemplate).join('')}
    `
};

// entertainment news
async function et() {
    const response = await fetch(proxyUrl + urlE);
    const data = await response.json();
    let ent = data.articles;
    console.log("Entertainment:", ent);

    function entTemplate(ent) {
        return `
        <hr>
            <div class=card>
                <img src='${ent.image}'>
                <p class='card-text' id='title'>${ent.title}</p>
                <a href='${ent.url}' target='_blank'>read more</a>
            </div>
        `
    }

    document.getElementById('entertainment').innerHTML = `
        <h4 class='grid-title'>Entertainment</h4>
        ${ent.map(entTemplate).join('')}
    `
};

// show to the date 
var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
var show = month + "/" + day + "/" + year;
console.log(show);
document.getElementById('date').innerHTML = show;


sports();
main();
et();








