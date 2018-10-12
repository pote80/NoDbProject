export const getQuote = function(){
    return fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res => res.json())
}