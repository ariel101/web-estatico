const targetDate = new Date("2026-06-11T00:00:00").getTime();

const countdown = () => {

    const now = new Date().getTime();

    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
};

setInterval(countdown, 1000);

countdown();

function checkAnswer(answer){

    const result = document.getElementById("result");

    if(answer === "Argentina"){
        result.innerHTML = "✅ Correcto. Argentina ganó el Mundial 2022.";
        result.style.color = "green";
    }
    else{
        result.innerHTML = "❌ Respuesta incorrecta.";
        result.style.color = "red";
    }
}