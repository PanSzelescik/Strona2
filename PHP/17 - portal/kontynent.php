<div id="main">
    <?php
    require 'config.php';
    $items = 20;
    $continents = [
        'Europa' => [
            'type' => 1,
            'name' => 'Europe'
        ],
        'Azja' => [
            'type' => 1,
            'name' => 'Asia'
        ],
        'Ameryka Płd.' => [
            'type' => 1,
            'name' => 'South America'
        ],
        'Ameryka Płn.' => [
            'type' => 2,
            'name' => 'North America'
        ],
        'Afryka' => [
            'type' => 2,
            'name' => 'Africa'
        ],
        'Australia' => [
            'type' => 1,
            'name' => 'Oceania'
        ],
    ];

    $kontynent = @$_GET['kontynent'];
    $page = @$_GET['page'];
    if (!$page || $page < 1) {
        $page = 1;
    }

    if ($kontynent) {
        $continent = @$continents[$kontynent];
        if ($continent) {
            $type = $continent['type'];
            $name = $continent['name'];
            $query = select($type, $name, $page, $items);
            ?>
            <h2>
                <?php echo $kontynent ?>
            </h2>
            <table border="1">
                <tr>
                    <th>Kod</th>
                    <th>Nazwa</th>
                    <?php
                    if ($type === 1) {
                        ?>
                        <th>Głowa państwa</th>
                        <th>Rok uzyskania niepodległości</th>
                        <?php
                    } else {
                        ?>
                        <th>Stolica</th>
                        <?php
                    }
                    ?>
                </tr>
                <?php
                while ($row = mysqli_fetch_assoc($query)) {
                    ?>
                    <tr>
                        <td>
                            <?php echo $row['Code'] ?>
                        </td>
                        <td>
                            <?php echo $row['Name'] ?>
                        </td>
                        <?php
                        if ($type === 1) {
                            ?>
                            <td>
                                <?php echo $row['HeadOfState'] ?>
                            </td>
                            <td>
                                <?php echo $row['IndepYear'] ?>
                            </td>
                            <?php
                        } else {
                            ?>
                            <td>
                                <?php echo $row['CityName'] ?>
                            </td>
                            <?php
                        }
                        ?>
                    </tr>
                    <?php
                }
                ?>
            </table>
            <div>
                <?php
                if ($page > 1) {
                    ?>
                    <a href="./index.php?kontynent=<?php echo $kontynent ?>&page=<?php echo $page - 1 ?>">⬅️Poprzednia strona</a>
                    <?php
                }
                if (mysqli_num_rows($query) === $items) {
                    ?>
                    <a href="./index.php?kontynent=<?php echo $kontynent ?>&page=<?php echo $page + 1 ?>">Następna strona➡️</a>
                    <?php
                }
                ?>
            </div>
            <?php
        }
    }
    ?>
</div>
