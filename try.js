var pos = 0;
var turn = 0;
var words = ['Lattitude', 'Longitude', 'Velocity', '', 'Full of life']; // edit this array to add the words or the words to show
var speed = 100;
setTimeout(typeWriter, speed);
function typeWriter() {
    if (pos < words[turn].length) {
        document.getElementById("text-anim").innerHTML += words[turn].charAt(pos);
        pos++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(erase, speed + 100);
    }
}
function erase() {
    if (pos >= 0) {
        var str = words[turn].toString().substring(0, pos);
        document.getElementById("text-anim").innerHTML = str;
        pos--;
        setTimeout(erase, speed - 50);
    } else {
        turn++;
        if (turn >= words.length)
            turn = 0;
        setTimeout(typeWriter, speed);
    }
}
