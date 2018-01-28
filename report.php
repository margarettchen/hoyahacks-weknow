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
    $date=$_POST['bear-dates'];
    $month=$_POST['bear-months'];
    $year=$_POST['bear-years'];
    $time=$_POST['time-entry'];
    $type = $_POST['assault-types'];
    $known = $_POST['yes-no'];
    echo $date, $month, $year, $type ,$known;

    $sql = "INSERT INTO uvaData VALUES ('$date','$month','$year','$time,','$type','$known')";

    if (mysqli_query($conn, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

?>