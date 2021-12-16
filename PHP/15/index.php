<?php
$mysqli = mysqli_connect('localhost', 'root', '', 'auto');
$zapytanie = 'SELECT * FROM samochody';
$query = mysqli_query($mysqli, $zapytanie);
echo '<table><tr><td>ID</td><td>Marka</td><td>Model</td><td>Rocznik</td><td>Kolor</td><td>Stan</td></tr>';
while ($row = mysqli_fetch_assoc($query)) {
    echo '<tr><td>'.$row['id'].'</td><td>'.$row['marka'].'</td><td>'.$row['model'].'</td><td>'.$row['rocznik'].'</td><td>'.$row['kolor'].'</td><td>'.$row['stan'].'</td></tr>';
}
echo '</table>';