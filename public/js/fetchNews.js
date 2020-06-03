const getNews = async () => {
    const response = await fetch('http://127.0.0.1:3000/news');
    const news = response.json()

    return news;
}


const drawNews = (news) => {

    news.forEach(item => {
        let form = document.createElement("div");
        form.style.width = '15%';
        form.style.backgroundColor = '#f2f2f2';
        
        form.style.height = '200px';
        form.style.marginTop = '20px'
        form.style.borderRadius = '10px'
        const container = document.getElementsByClassName('container')[0];

        container.append(form);
       
    });
}

const main = async () => {
    const news = await getNews();
    // const NewsNumber = news.length;
    drawNews(news);

}

main()