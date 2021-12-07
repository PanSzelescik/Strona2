<?php
$dochod = 5000;
define('KWOTA_WOLNA', 436.20);
define('OPROCENTOWANIE', 0.19);

$podatek = round(($dochod - KWOTA_WOLNA) * OPROCENTOWANIE, 2);
echo $podatek;