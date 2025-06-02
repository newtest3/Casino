let buttonClick = document.querySelector('.buttonClick');
let count = document.querySelector('.count');
count.textContent = 100;

let launchButton = new Audio('./soundForCasino/Launch_Button.mp3');
let twoCorrect = new Audio('./soundForCasino/2_Correct.mp3');
let threeCorrect = new Audio('./soundForCasino/3_Correct.mp3');
let finishGame = new Audio('./soundForCasino/Finish_Game.mp3');
let gameOver =  new Audio('./soundForCasino/Game_Over.mp3');

let imageGroup = document.querySelector('.imageGroup');

let image1 = document.createElement('img');
let image2 = document.createElement('img');
let image3 = document.createElement('img');


image1.src = "./img/" + random(1, 10) + ".jpeg";
image2.src = "./img/" + random(1, 10) + ".jpeg";
image3.src = "./img/" + random(1, 10) + ".jpeg";


let num = 100;

buttonClick.addEventListener('click', () => {
    launchButton.play();
    image1.classList.remove('shadowImg');
    image2.classList.remove('shadowImg');
    image3.classList.remove('shadowImg');

    image1.classList.remove('slideIn');
    image2.classList.remove('slideIn');
    image3.classList.remove('slideIn');

    image1.classList.add('slideOut');
    image2.classList.add('slideOut');
    image3.classList.add('slideOut');


    setTimeout(() => {
        image1.src = "./img/" + random(1, 10) + ".jpeg";
        image2.src = "./img/" + random(1, 10) + ".jpeg";
        image3.src = "./img/" + random(1, 10) + ".jpeg";

        setTimeout(() => image1.classList.add('slideIn'), 400);
        setTimeout(() => image2.classList.add('slideIn'), 1400);
        setTimeout(() => image3.classList.add('slideIn'), 2400);
    }, 1300);



    setTimeout(() => {
        if (image1.src === image2.src && image2.src === image3.src) {
            console.log(50);
            threeCorrect.play();
            image1.classList.add('shadowImg');
            image2.classList.add('shadowImg');
            image3.classList.add('shadowImg');
            setTimeout(() => {
                image1.classList.remove('shadowImg');
                image2.classList.remove('shadowImg');
                image3.classList.remove('shadowImg');
            }, 2000);

            num += 50;
        } else if (image1.src != image2.src && image2.src === image3.src) {
            console.log(20);
            image3.classList.add('shadowImg');
            image2.classList.add('shadowImg');
            setTimeout(() => {
                image2.classList.remove('shadowImg');
                image3.classList.remove('shadowImg');
            }, 2000);
            twoCorrect.play();
            num += 20;
        } else if (image1.src === image2.src && image2.src != image3.src) {
            console.log(20);
            image1.classList.add('shadowImg');
            image2.classList.add('shadowImg');
            setTimeout(() => {
                image1.classList.remove('shadowImg');
                image2.classList.remove('shadowImg');
            }, 2000);
            twoCorrect.play();
            num += 20;
        } else if (image1.src === image3.src && image1.src != image2.src) {
            console.log(20);
            image1.classList.add('shadowImg');
            image3.classList.add('shadowImg');
            setTimeout(() => {
                image1.classList.remove('shadowImg');
                image3.classList.remove('shadowImg');
            }, 2000);
            twoCorrect.play();
            num += 20;
        } else if (image1.src != image2.src && image1.src != image3.src && image2.src != image3.src) {
            console.log(-10);
            num -= 10;
        }
        count.textContent = num;
        if (num == 0) {
            // alert("You don't have coins!!!");
            gameOver.play();
            setTimeout(()=>window.location.reload(),1500);
            
        }
        if (num == 5000) {
            alert("You won a lot of coins!!!");
        }
    }, 4800);
});


imageGroup.append(image1);
imageGroup.append(image2);
imageGroup.append(image3);



function random(min, max) {
    return Math.ceil(Math.random() * ((max - min) + min));
}

