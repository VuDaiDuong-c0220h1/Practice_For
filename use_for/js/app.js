let text = ""
for (let i = 0; i < 6; i++ ){
    text += "The number is " + i + "<br/>"
}
document.getElementById("demo").innerHTML = text;

function showMessage() {
    let total = 0;
    let num = parseInt(document.getElementById("demo2").value);
    for (let a = 1 ; a <= num; a += 1 ){
        total = total + a ;
    }
    alert(total)
}
