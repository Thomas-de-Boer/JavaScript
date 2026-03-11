function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let bril = {
    "naam": "brilsmurf",
    "wc-bril": 0,
    "zonnebril": 1,
    "kijkbril": 1,
    "lenssterkte": 0.3
}

isclicked = false

let link = "https://cataas.com/cat"

document.querySelector('#pokemon_form').addEventListener('submit', async function () {
    event.preventDefault();

    search = document.querySelector("#pokemon_search").value.toLowerCase()


    async function getPokemon(search) {

        const response = await fetch("config.php", {
            method: "POST",
            body: "pokemon=" + encodeURIComponent(search),
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });

        const json_result = await response.json();

        document.querySelector("#result_name").innerText = json_result[0]['name'];
        document.querySelector("#result_id").innerText = json_result[0]['id'];
        document.querySelector("#result_species").innerText = json_result[0]['species'];
        try {
            const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
            const data = await pokeResponse.json();

            document.querySelector("#result_image").src = data['sprites']['front_default'];
        } catch (err) {
            const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
            const data = await pokeResponse.json();
            document.querySelector("#result_image").src = data['sprites']['front_default'];
        }
    }

    getPokemon(search);
});


document.querySelector('#cat_form').addEventListener('submit', function () {
    event.preventDefault();

    const search = document.querySelector("#cat_search").value.toLowerCase()


    fetch("config.php", {
        method: "POST",
        body: "cat=" + encodeURIComponent(search),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
    })
        .then(response => response.text())
        .then(result => {
            document.querySelector("#result_cat").innerHTML = result;
    });
});

document.querySelector('#box1').style.backgroundColor = "orange";
document.querySelector('#box2').style.backgroundColor = "turquoise";
document.querySelector('#box3').style.backgroundColor = "#FF10F0";
document.querySelector('#box4').style.backgroundColor = "#800080";

window.addEventListener("load", () => {

    document.querySelector('#box1').addEventListener('click', () => {
        document.querySelector('#box1').style.backgroundColor = "#ff0000";
        sleep(1000).then(r => document.querySelector('#box1').style.backgroundColor = "orange");
    });

    document.querySelector('#box2').addEventListener('click', async() => {
        document.querySelector('#box2').style.backgroundColor = "turquoise";
        document.querySelector('#box2').innerText = ""
        const random_cat = await fetch(link)
        const data = await random_cat
        document.querySelector('#box3').innerHTML = "<img src='" + data.url + "' alt='' width='100%' height='100%'/>";
    });

    document.querySelector('#box3').addEventListener('click', () => {
        document.querySelector('#box2').style.backgroundColor = "beige";
        document.querySelector('#box2').innerText = "hallo hallo jij mens"
        document.querySelector('#box3').innerHTML = ""
    });

    document.querySelector('#box4').addEventListener("click", () => {
        if (isclicked === false) {
            isclicked = true
            document.querySelector('#box4').innerHTML = "<h2>Naam: " + (bril.naam) + "</h2>" +
                "<p>Wc-bril: " + (bril["wc-bril"]) +
                "<br>Zonnebril: " + (bril["zonnebril"]) +
                "<br>Kijkbril: " + (bril["kijkbril"]) +
                "<br>Lenssterkte: " + (bril["lenssterkte"]) + "</p>";
        } else {
            isclicked = false
            document.querySelector('#box4').innerHTML = "";
        }
    });
});

