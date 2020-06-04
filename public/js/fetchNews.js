const drawForm = () => {
    let form = document.createElement("div");
    form.style.width = '15%';
    form.style.backgroundColor = '#f2f2f2';
    
    form.style.height = '200px';
    form.style.marginTop = '20px';
    form.style.borderRadius = '10px';

    return form;
}

const drawNews = (news) => {
    const container = document.getElementsByClassName('container')[0];

    news.forEach(item => {
        const form = drawForm()
        form.textContent = item.title;
        container.append(form);

        const link = document.createElement('a')    
        link.href = item.link;
        link.textContent = 'link'
        link.style.display = 'block'
        form.append(link)
       
    });

    // let divs = document.querySelectorAll('.container div')

    // for(let div of divs) {
    //     const link = document.createElement('a')
    //     link.textContent = item.link
    //     div.append(link)
    // }

}

const getNews = async () => {
    const response = await fetch('http://127.0.0.1:3000/news');
    const news = response.json()

    return news;
}

const main = async () => {
    const news = await getNews();
    drawNews(news);

}

main()