import 'bootstrap';
import './scss/index.scss';

const axios = require('axios');

window.onload = function() {
    axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-09-16&sortBy=publishedAt&apiKey=3fccd8ef48ec443fbf6d35b8d3ec668e')
        .then(res => {
            const data = res.data;
            for(let value of data.articles) {
                console.log(value.author);
            }
        });
};
