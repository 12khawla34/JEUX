let container = document.querySelector('.container');
let btn = document.querySelector('.start_btn');
let scoreContainer = document.querySelector('.score');
let timeContainer = document.querySelector('.time')


btn.onclick = function () {
    let score = 0;
    let time = 10;
    container.innerHTML = "";

    let interval = setInterval(function showTarget() {
        //creation de cibles
        let target = document.createElement('img');
        target.id = "target";
        target.src = "silly.png";

        container.appendChild(target); 

        target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() * (600 - target.offsetHeight) + 'px';


        // faire disparaitre la cible
        setTimeout(function(){
            target.remove();
        }, 2000)

        //quand on clicke sur le target
        target.onclick = function(){
            score += 1;
            target.style.display = "none";          
        }
        time -= 1;

        scoreContainer.innerHTML = `score : ${score}`
        timeContainer.innerHTML = `temps : ${time}`

        //fin de jeux
        if (time == 0 ) {
            clearInterval(interval);
            container.innerHTML = "le jeux est termine";
        }

    }, 1000);


}