// ============================
//
// 看见内在
// 线上艺术展作品加载系统
//
// ============================


fetch("data/works.json")


.then(response => response.json())


.then(works => {


    const container = document.getElementById(
        "works-container"
    );


    works.forEach(work => {



        const card = document.createElement(
            "div"
        );


        card.className = "card";



        card.innerHTML = `


        <a href="${work.url}">


        <img src="${work.image}"
        alt="${work.title}">


        <h3>
        ${work.title}
        </h3>


        <p>
        作者：
        ${work.artist}
        </p>


        <p>
        ${work.keyword}
        </p>


        </a>


        `;



        container.appendChild(card);



    });



})


.catch(error => {


    console.log(
        "作品加载失败:",
        error
    );


});