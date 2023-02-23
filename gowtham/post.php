<!DOCTYPE html>
<head>
</head>
    <body>
    <form method="POST" action="testing.php">
        <input name="data" type="text">
        <input type ="submit" value="send">
    </form>
</body>
</html>


<?php

if (isset($_REQUEST["data"])) {
    $data = trim($_REQUEST["data"]);
    if (strlen($data) > 0) {
        echo "Data sent: $data";
    } else {
        echo "Data sent but EMPTY";
    }
} else {
    echo "NO DATA sent";
}

?>




