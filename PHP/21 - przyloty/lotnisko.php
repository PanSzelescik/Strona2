<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Port Lotniczy</title>
    <link rel="stylesheet" href="styl5.css">
</head>
<body>
    <div class="flex" id="baner">
        <div id="baner1">
            <img src="zad5.png" alt="logo lotnisko">
        </div>
        <div id="baner2">
            <h1>Przyloty</h1>
        </div>
        <div id="baner3">
            <h3>przydatne linki</h3>
            <a href="kwerendy.txt">Pobierz...</a>
        </div>
    </div>
    <div id="glowny">
        <table border="1">
            <tr>
                <th>czas</th>
                <th>kierunek</th>
                <th>numer rejsu</th>
                <th>status</th>
            </tr>
            <?php
            $mysqli = mysqli_connect('localhost', 'root', '', 'egzamin');
            $zapytanie = "SELECT `czas`, `kierunek`, `nr_rejsu`, `status_lotu` FROM `przyloty` ORDER BY `dzien` ASC";
            $query = mysqli_query($mysqli, $zapytanie);
            while ($row = mysqli_fetch_assoc($query)) {
                ?>
                <tr>
                    <td><?php echo $row["czas"]?></td>
                    <td><?php echo $row["kierunek"]?></td>
                    <td><?php echo $row["nr_rejsu"]?></td>
                    <td><?php echo $row["status_lotu"]?></td>
                </tr>
                <?php
            }
            mysqli_close($mysqli);
            ?>
        </table>
    </div>
    <div class="flex" id="stopka">
        <div id="stopka1">
            <?php
            if (!isset($_COOKIE['ciastko'])) {
                ?>
                <p><b>Dzień dobry! Strona lotniska używa ciasteczek</b></p>
                <?php
                setcookie('ciastko', 'ciastko', time() + (2 * 60 * 60));
            } else {
                ?>
                <p><i>Witaj ponownie na stronie lotniska</i></p>
                <?php
            }
            ?>
        </div>
        <div id="stopka2">
            Autor: 00000000000
        </div>
    </div>
</body>
</html>