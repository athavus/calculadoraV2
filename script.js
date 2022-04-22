function tecla0() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 0
    } else {
        document.getElementById("visor").value = num + 0
    }
}

function tecla1() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 1
    } else {
        document.getElementById("visor").value = num + 1
    }
}

function tecla2() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 2
    } else {
        document.getElementById("visor").value = num + 2
    }
}

function tecla3() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 3
    } else {
        document.getElementById("visor").value = num + 3
    }
}

function tecla4() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 4
    } else {
        document.getElementById("visor").value = num + 4
    }
}

function tecla5() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 5
    } else {
        document.getElementById("visor").value = num + 5
    }
}

function tecla6() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 6
    } else {
        document.getElementById("visor").value = num + 6
    }
}

function tecla7() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 7
    } else {
        document.getElementById("visor").value = num + 7
    }
}

function tecla8() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 8
    } else {
        document.getElementById("visor").value = num + 8
    }
}

function tecla9() {
    var num = document.getElementById("visor").value;
    if (num === undefined) {
        document.getElementById("visor").value = 9
    } else {
        document.getElementById("visor").value = num + 9
    }
}

function teclaAC() {
    var object = document.getElementById('visor').value
    var newObject = object.slice(0, -1)
    document.getElementById('visor').value = newObject
}

function teclaPlus() {
    var object = document.getElementById('visor').value
    if (isNaN(object) == true || object == undefined) {
        alert("Você não pode digitar uma operação agora!")
    } else {
        document.getElementById('visor').value = object + "+"
    }
}

function teclaSub() {
    var object = document.getElementById('visor').value
    if (isNaN(object) == true || object == undefined) {
        alert("Você não pode digitar uma operação agora!")
    } else {
        document.getElementById('visor').value = object + "-"
    }
}

function teclaMult() {
    var object = document.getElementById('visor').value
    if (isNaN(object) == true || object == undefined) {
        alert("Você não pode digitar uma operação agora!")
    } else {
        document.getElementById('visor').value = object + "x"
    }
}

function teclaDiv() {
    var object = document.getElementById('visor').value
    if (isNaN(object) == true || object == undefined) {
        alert("Você não pode digitar uma operação agora!")
    } else {
        document.getElementById('visor').value = object + "÷"
    }
}

function teclaCE() {
    document.getElementById('visor').value = ""
}

function teclaEquals() {
    var object = document.getElementById('visor').value
    if (object.indexOf('+') > -1) {
        var objectSplit = object.split("+")
        var num1 = parseInt(objectSplit[0])
        var num2 = parseInt(objectSplit[1])
        var result = num1 + num2
        document.getElementById('visor').value = result
    } else if (object.indexOf('-') > -1){
        var objectSplit = object.split("-")
        var num1 = parseInt(objectSplit[0])
        var num2 = parseInt(objectSplit[1])
        var result = num1 - num2
        document.getElementById('visor').value = result
    } else if (object.indexOf('x') > -1){
        var objectSplit = object.split("x")
        var num1 = parseInt(objectSplit[0])
        var num2 = parseInt(objectSplit[1])
        var result = num1 * num2
        document.getElementById('visor').value = result
    } else if (object.indexOf('÷') > -1){
        var objectSplit = object.split("÷")
        var num1 = parseInt(objectSplit[0])
        var num2 = parseInt(objectSplit[1])
        var result = num1 / num2
        document.getElementById('visor').value = result
    }
}