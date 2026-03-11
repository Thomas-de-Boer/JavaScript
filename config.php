<?php
$host = "localhost";
$user = "root";
$password = "";
$database = "pokemon";
$port = 3307;

$conn = new mysqli($host, $user, $password, $database, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

ini_set('display_errors', '0');

header('Content-Type: application/json');

if (isset($_POST['pokemon'])) {
    $value = (string)$_POST['pokemon'];
    $search_type = "pokemon.name";

    if (filter_var($value, FILTER_VALIDATE_INT) !== false) {
        $search_type = "pokemon.id";
    }

    $sql = 'select pokemon.id, pokemon.name, species from pokemon
            join pokemon_types on pokemon.id = pokemon_types.pokemon_id
            join types on pokemon_types.type_id = types.id WHERE ' . $search_type . ' = "' . $value . '"';
    $result = $conn->query($sql);

    $data = [];

    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }

    echo json_encode($data);
}

if (isset($_POST['cat'])) {
    $url =  "https://cataas.com/cat" . "/" . $_POST["cat"] . "?json=true";
    $response = file_get_contents($url);
    $data = json_decode($response, true);
    echo "<img src='" . $data['url'] . "' alt='Image Not Available' width='100%' height='100%'/>";
}
