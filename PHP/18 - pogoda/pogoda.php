<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Prognoza pogody Wrocław</title>
    <link rel="stylesheet" href="styl2.css">
</head>
<body>
    <div id="gorny" class="flex">
        <div id="gorny-lewy">
            <img src="logo.png" alt="meteo">
        </div>
        <div id="gorny-srodkowy">
            <h1>Prognoza dla Wrocławia</h1>
        </div>
        <div id="gorny-prawy">
            <p>maj, 2019 r.</p>
        </div>
    </div>
    <div id="glowny">
        <table border="1">
            <tr>
                <th>DATA</th>
                <th>TEMPERATURA W NOCY</th>
                <th>TEMPERATURA W DZIEŃ</th>
                <th>OPADY [mm/h]</th>
                <th>CIŚNIENIE [hPa]</th>
            </tr>
            <?php
            $mysqli = mysqli_connect('localhost', 'root', '', 'prognoza');
            $zapytanie = "SELECT * FROM `pogoda` WHERE `miasta_id` = 1 ORDER BY `data_prognozy` ASC";
            $query = mysqli_query($mysqli, $zapytanie);
            while ($row = mysqli_fetch_assoc($query)) {
                ?>
                <tr>
                    <td><?php echo $row["data_prognozy"]?></td>
                    <td><?php echo $row["temperatura_noc"]?></td>
                    <td><?php echo $row["temperatura_dzien"]?></td>
                    <td><?php echo $row["opady"]?></td>
                    <td><?php echo $row["cisnienie"]?></td>
                </tr>
                <?php
            }
            mysqli_close($mysqli);
            ?>
        </table>
    </div>
    <div class="flex">
        <div id="dolny-lewy">
            <img src="obraz.jpg" alt="Polska, Wrocław">
        </div>
        <div id="dolny-prawy">
            <a href="kwerendy.txt">Pobierz kwerendy</a>
        </div>
    </div>
    <footer>
        <p>Stronę wykonał: XYZ</p>
    </footer>
</body>
</html>