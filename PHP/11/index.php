<?php
define('PI', 3.14159);
$r = 2;

$pole = 4 * PI * ($r ** 2);
$pole_2 = round($pole, 2);
$pole_1 = round($pole, 1);
$pole_0 = round($pole, 0);
$objetosc = 4 / 3 * PI * ($r ** 3);
$objetosc_2 = round($objetosc, 2);
$objetosc_1 = round($objetosc, 1);
$objetosc_0 = round($objetosc, 0);
echo "Pole: $pole_2, $pole_1, $pole_0<br>Objętość: $objetosc_2, $objetosc_1, $objetosc_0";