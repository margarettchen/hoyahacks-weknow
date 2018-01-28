<?php
    $servername = "localhost";
    $username = "stellama_dbuser";
    $password = "GHLVbny7";
    $dbname = "stellama_reportDB";

    // Create connection
    $conn = mysqli_connect($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    }      
    $date=db_quote($_POST['bear-dates']);
    $month=db_quote($_POST['bear-months']);
    $year=db_quote($_POST['bear-years']);
    $type = db_quote($_POST['assault-types']);
    $known = db_quote($_POST['yes-no']);

    $result = db_query("INSERT INTO uvaData VALUES (" . $date . "," . $month . "," . $year . "," . $type . "," . $known . ")");

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

?>