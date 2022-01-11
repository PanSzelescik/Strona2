<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Odczyt</title>
</head>
<body>
    <form method="GET" action="./odczyt.php">
        <label>
            Podaj nazwisko:
            <input type="text" name="nazwisko"/>
        </label><br>
        <input type="submit" value="Sprawdź"/>
    </form>
    <div>
        <?php
        $nazwisko = @$_GET['nazwisko'];
        if ($nazwisko) {
            $mysqli = mysqli_connect('localhost', 'root', '', 'NAZWA_TABELI');
            $zapytanie = "SELECT * FROM ludzie WHERE nazwisko = \"$nazwisko\"";
            $query = mysqli_query($mysqli, $zapytanie);
            echo '<table border="1">';
            echo '<td>ID</td><td>Imię</td><td>Nazwisko</td><td>Data urodzenia</td><td>Miasto</td><td>Wiek</td>';
            while ($wiersz = mysqli_fetch_row($query)) {
                echo '<tr>';
                for ($i = 0; $i < 6; $i++) { 
                    echo '<td>';
                    echo $wiersz[$i];
                    echo '</td>';
                }
                echo '</tr>';
            }
            echo '</table>';
        }
        ?>
    </div>
</body>
</html>