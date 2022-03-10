<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forum o psach</title>
    <link rel="stylesheet" href="styl4.css">
</head>
<body>
    <div id="baner">
        <h1>Forum wielbicieli psów</h1>
    </div>
    <div class="flex">
        <div id="lewy">
            <img src="obraz.jpg" alt="foksterier">
        </div>
        <div class="prawy">
            <div id="prawy-gorny">
                <h2>Zapisz się</h2>
                <form method="post" action="logowanie.php">
                    <label>
                        login: 
                        <input type="text" name="login">
                    </label>
                    <br>
                    <label>
                        hasło: 
                        <input type="password" name="password">
                    </label>
                    <br>
                    <label>
                        powtórz hasło: 
                        <input type="password" name="password2">
                    </label>
                    <br>
                    <input type="submit" name="submit" value="Zapisz">
                </form>
                <p id="status">
                <?php
                $login = @$_POST['login'];
                $password = @$_POST['password'];
                $password2 = @$_POST['password2'];

                if (!$login || !$password || !$password2) {
                    echo 'wypełnij wszystkie pola';
                } else if ($password !== $password2) {
                    echo 'hasła nie są takie same, konto nie zostało dodane';
                } else {
                    $haslo = sha1($password);
                    $mysqli = mysqli_connect('localhost', 'root', '', 'psy');
                    $zapytanie = "SELECT `login` FROM `uzytkownicy` WHERE `login` = '$login'";
                    $query = mysqli_query($mysqli, $zapytanie);
                    if (mysqli_num_rows($query) > 0) {
                        echo 'login występuje w bazie danych, konto nie zostało dodane';
                    } else {
                        $zapytanie2 = "INSERT INTO `uzytkownicy` (`login`, `haslo`) VALUES ('$login', '$haslo')";
                        $query2 = mysqli_query($mysqli, $zapytanie2);
                        echo 'Konto zostało dodane';
                    }
                    mysqli_close($mysqli);
                }
                ?>
                </p>
            </div>
            <div id="prawy-dolny">
                <h2>Zapraszamy wszystkich</h2>
                <ol>
                    <li>właścicieli psów</li>
                    <li>weterynarzy</li>
                    <li>tych, co chcą kupić psa</li>
                    <li>tych, co lubią psy</li>
                </ol>
                <a href="regulamin.html">Przeczytaj regulamin forum</a>
            </div>
        </div>
    </div>
    <div id="stopka">
        Stronę wykonał: 00000000000
    </div>
</body>
</html>