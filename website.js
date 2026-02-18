function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getpicture() {
    return new Promise(await fetch("https://cataas.com/cat/funny"))
}

let bril = {
    "naam": "brilsmurf",
    "wc-bril": 0,
    "zonnenbril": 1,
    "kijkbril": 1,
    "lenssterkte": 0.3
}

isclicked = false

document.querySelector('#box1').style.backgroundColor = "orange";
document.querySelector('#box2').style.backgroundColor = "turquoise";
document.querySelector('#box3').style.backgroundColor = "#FF10F0";
document.querySelector('#box4').style.backgroundColor = "#800080";

window.addEventListener("load", () => {

    document.querySelector('#box1').addEventListener('click', () => {
        document.querySelector('#box1').style.backgroundColor = "#ff0000";
        sleep(1000).then(r => document.querySelector('#box1').style.backgroundColor = "orange");
    });

    document.querySelector('#box2').addEventListener('click', () => {
        document.querySelector('#box2').style.backgroundColor = "turquoise";
        document.querySelector('#box2').innerText = ""
        picture = getpicture()
        document.querySelector('#box3').innerHTML = "<img src='https://cataas.com/cat/funny' alt='' width='100%' height='100%'/>";
    });

    document.querySelector('#box3').addEventListener('click', () => {
        document.querySelector('#box2').style.backgroundColor = "beige";
        document.querySelector('#box2').innerText = "hallo hallo jij mens"
        document.querySelector('#box3').innerHTML = ""
    });

    document.querySelector('#box4').addEventListener("click", () => {
        if (isclicked === false) {
            isclicked = true
            document.querySelector('#box4').innerHTML = "<h2>naam: " + (bril.naam) + "</h2>" +
                "<p>wc-bril: " + (bril["wc-bril"]) +
                "<br>zonnenbril: " + (bril["zonnenbril"]) +
                "<br>kijkbril: " + (bril["kijkbril"]) +
                "<br>lenssterkte: " + (bril["lenssterkte"]) + "</p>";
        } else {
            isclicked = false
            document.querySelector('#box4').innerHTML = "";
        }

    });
});

