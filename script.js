fetch("data/works.json")

.then(res=>res.json())

.then(data=>{


let box=document
.getElementById(
"works-container"
);


data.forEach(work=>{


let card=document.createElement(
"div"
);


card.className="card";


card.innerHTML=`

<img src="${work.image}">


<h3>
${work.title}
</h3>


<p>
作者：${work.artist}
</p>


<p>
${work.description}
</p>


<hr>


<p>
创作者的话：

<br>

${work.words}

</p>


<p>

教师观察：

<br>

${work.teacher}

</p>

`;



box.appendChild(card);



});


});