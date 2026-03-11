function setupAutocomplete(inputId, suggestionsId, jsonFile) {

    let options = [];

    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            options = data;
        });

    const search_bar = document.getElementById(inputId);
    const suggestions = document.getElementById(suggestionsId);

    search_bar.addEventListener("input", function() {
        let value = this.value.toLowerCase();
        suggestions.innerHTML = "";

        if (value === "") return;

        let filtered = options.filter(option =>
                option.toLowerCase().includes(value.toLowerCase())
            )
            .sort((a, b) => {
                const aStarts = a.toLowerCase().startsWith(value.toLowerCase());
                const bStarts = b.toLowerCase().startsWith(value.toLowerCase());

                if (aStarts && !bStarts) return -1;
                if (!aStarts && bStarts) return 1;
                return 0;
            });



        let option_count = 0;

        filtered.forEach(option => {

            if (option_count >= 7) return;

            let div = document.createElement("div");
            div.textContent = option;

            div.style.backgroundColor = '#D3D3D3';
            div.style.fontSize = '20px';
            div.style.border = '2px solid gray';
            div.style.borderRadius = '5px';
            div.style.marginTop = '5%';
            div.style.textWrap = 'inherit'

            option_count++;

            div.addEventListener("click", function() {
                search_bar.value = option;
                suggestions.innerHTML = "";
            });

            suggestions.appendChild(div);
        });
    });
}


setupAutocomplete('cat_search', 'suggestions_cat', 'json/tags.json')
setupAutocomplete('pokemon_search', 'suggestions_pokemon', 'json/pokemon.json')