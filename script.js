function darab() {
    var number;
    var result = "<table>";

    number = Number(document.getElementById("number").value);

    for (var i = 1; i <= 11; i++) {
        result = result + "<tr><td>" + number + "</td><td>X</td><td>" + i + "</td><td>=</td><td>" + number * i + "</td></tr>";
    }
    result += "</table>";
    document.getElementById("result").innerHTML = result;
}



