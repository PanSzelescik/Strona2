<?php
$mysqli = mysqli_connect('localhost', 'root', '', 'world');

function select($type, $name, $page, $items) {
    global $mysqli;
    $offset = ($page - 1) * $items;

    if ($type === 1) {
        $zapytanie = "SELECT Code, Name, HeadOfState, IndepYear FROM country WHERE Continent = \"$name\" LIMIT $offset, $items";
    } else if ($type === 2) {
        $zapytanie = "SELECT Code, country.Name, city.Name AS CityName FROM country INNER JOIN city ON country.Capital = city.ID WHERE Continent = \"$name\" LIMIT $offset, $items";
    }

    return mysqli_query($mysqli, $zapytanie);
}
