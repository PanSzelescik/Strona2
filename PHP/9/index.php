<?php
$dochod = 5000;
$kwota_wolna = 436.20;
$oprocentowanie = 0.19;

$podatek = round(($dochod - $kwota_wolna) * $oprocentowanie, 2);
echo $podatek;