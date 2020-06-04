const Parser = require('rss-parser')
const express = require('express')

const app = express()
const parser = new Parser();
const url = 'http://feeds.bbci.co.uk/news/rss.xml';
const PORT = 3000;


app.use(express.static('./public'));

const getBBC = async () => {
 
    const feed = await parser.parseURL(url);

    return feed.items; 
};

app.get('/news', (req, res) => {
    getBBC().then((news) => {
        res.send(news);
    }).catch((e) => {
        res.status(500).send(e);
    })

})
 
app.listen(PORT);
