function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.querySelector('#box1').style.backgroundColor = "orange";
document.querySelector('#box2').style.backgroundColor = "turquoise";
document.querySelector('#box3').style.backgroundColor = "#FF10F0";
document.querySelector('#box4').style.backgroundColor = "#800080";
console.log("1233")

window.addEventListener("load", () => {

    document.querySelector('#box1').addEventListener('click', () => {
        document.querySelector('#box1').style.backgroundColor = "#ff0000";
        sleep(1000).then(r => document.querySelector('#box1').style.backgroundColor = "orange");
    });

    document.querySelector('#box3').addEventListener('click', () => {
        document.querySelector('#box2').style.backgroundColor = "beige";
        document.querySelector('#box2').innerText = "hallo hallo jij mens"
    });

    document.querySelector('#box2').addEventListener('click', () => {
        document.querySelector('#box2').style.backgroundColor = "turquoise";
        document.querySelector('#box2').innerText = ""
    });
});

