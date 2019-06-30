//~~~~~~~~~~~~~~~~~~~~~~~~~~Part1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write("<b>Part 1:</b>" + "<br />");
var MyObject = {
    Name: "Dima",
    Age: 34,
    Hair: "Brown"
};
for (var i in MyObject) {
    document.write(i + ": " + MyObject[i] + "<br />");
}
document.write("<hr />");

//~~~~~~~~~~~~~~~~~~~~~~~~~~Part2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write("<b>Part 2:</b>" + "<br />");

function func() {
    return MyObject.Name;
}

document.write(func(MyObject));
document.write("<hr />");
//~~~~~~~~~~~~~~~~~~~~~~~~~~Part3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write("<b>Part 3:</b>" + "<br />");
var MyArray = [1, 2, 3, 4, 5];
for (var i = 0; i < MyArray.length; i++) {
    document.write(MyArray[i] + " ");
}
document.write("<hr />");
//~~~~~~~~~~~~~~~~~~~~~~~~~~Part4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write("<b>Part 4:</b>" + "<br />");

function func2() {
    return MyArray;
}

document.write(func2(MyArray));
document.write("<hr />");
//~~~~~~~~~~~~~~~~~~~~~~~~~~Part5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.write("<b>Part 5:</b>" + "<br />");

for (var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write("FizzBuzz" + "<br />");
    } else if (i % 3 === 0) {
        document.write("Fizz" + "<br />");
    } else if (i % 5 === 0) {
        document.write("Buzz" + "<br />");
    } else {
        document.write(i + "<br />");
    }
}