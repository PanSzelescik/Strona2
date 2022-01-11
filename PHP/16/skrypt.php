<?php
$imie = $_POST['imie'];
$nazwisko = $_POST['nazwisko'];
$data_urodzenia = $_POST['data_urodzenia'];
$miasto = $_POST['miasto'];
$wiek = $_POST['wiek'];

echo "Imię: $imie<br>Nazwisko: $nazwisko<br>Data urodzenia: $data_urodzenia<br>Miasto: $miasto<br>Wiek: $wiek";

$mysqli = mysqli_connect('localhost', 'root', '', 'auto');
$zapytanie = "INSERT INTO xxxxx.ludzie (imie, nazwisko, data_urodzenia, miasto, wiek) VALUES (\"$imie\", \"$nazwisko\", \"$data_urodzenia\", \"$miasto\", $wiek)";
$query = mysqli_query($mysqli, $zapytanie);
mysqli_close($mysqli);