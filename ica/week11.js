console.log("test");
//tests to make sure js is linked correctly

const x = 1;
const y = 2;
//x and y will always be equal to 1 and 2

if (x===y){
    console.log("Success");
}
else {
    console.log("Fail");
}
//Double and triple equals check if two variables are equal to each other

const btn = document.querySelector("button");
const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
//defines variables, context is 2d

document.addEventListener("DOMContentLoaded", () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
})
//size of canvas

function random(number) {
    return Math.floor(Math.random () * number);

}
//generates random number
//math.floor rounds down

console.log(random(2));


function draw(){
    //console.log("TEST");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i<200; i++){
    //runs 100 times, 0 to 99, adds 1 every time
        ctx.beginPath();
        //start drawing
        if (i>70){
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let color = "rgba("+red+","+green+","+blue+",0.5)"
        ctx.fillStyle = color
        //fill color
        }
        else {
            ctx.fillStyle = "rgba(240,100,220,0.5)"
            //fill color
        }
        ctx.arc(
            random(canvas.width),
            random(canvas.height),
            random(50),
            0,
            2 * Math.PI,
        );
        //draw circle
        ctx.fill();
    }

}
btn.addEventListener("click", draw);
//when button is clicked, draw