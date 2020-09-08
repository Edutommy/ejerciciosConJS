var bt = document.getElementById("bt");
var txt = document.getElementById("txt");
var res = document.getElementById("res");
var bt2 = document.getElementById("btsum");

bt.addEventListener("click", function () {
    var txt = document.getElementById("txt");
    if (txt.value == "") {
        alert("Enter your name");
        txt.focus();
    } else {
        //alert("Hi " + txt.value);
        res.style.color = "green";
        res.innerHTML += "Hi " + txt.value + "<br>";
        txt.value = "";
        txt.focus();
    }
});

btsum.addEventListener("click", () => {
    var txt1 = document.getElementById("n1");
    var txt2 = document.getElementById("n2");
    var res = document.getElementById("res2");

    var suma = parseInt(txt1.value) + parseInt(txt2.value);

    if (isNaN(suma)) {
        res.style.color = "red";
        res.innerHTML = "Hubo un problema con la suma :(";
    } else {
        res.style.color = "green";
        res.innerHTML = "Suma: " + suma;
    }

});