const button = document.querySelector('btn');


function submit(){
 window.alert('Your phone number has been submitted');
 document.getElementById("btn").style.display = "none";


 init();
 }


var sqSize=20,spacing=3,snakeLength,type=0,cutoff=10;
var width=22*sqSize+22*spacing,height=22*sqSize+23*spacing;
var nos=[],cells=[],out=[];
var playing=0,snakePos,moveDir=2,delta=1,pressed=0;  
var noCount=0,phNo="";

function init(){
    var canvas=document.getElementById("canvas"),overlay=document.getElementById("overlay");
    canvas.width=width;
    canvas.height=height;
    canvas.style.width=width;
    canvas.style.height=height;
    canvas.style.marginTop=""+(-height/2-3)+"px";
    canvas.style.marginLeft=""+(-width/2-3)+"px";
    overlay.style.width=""+width+"px";
    overlay.style.height=""+height+"px";
    overlay.style.lineHeight=""+height+"px";;
    overlay.style.marginTop=""+(-height/2)+"px";
    overlay.style.marginLeft=""+(-width/2)+"px";
    document.getElementById("insert").style.marginTop=""+(-height/2-50)+"px";
    document.getElementById("help").style.marginTop=""+(height/2+10)+"px";
    var url=window.location.href;
    if (url.endsWith("nine")){
    type=1;
    cutoff=9;
    }else if (url.endsWith("eight")){
    type=2;
    cutoff=8;
    }else if (url.endsWith("eleven")){
    type=3;
    cutoff=11;
    }
    start();
    setInterval(move,200);
    }

function start() {
        cells = [];
        out = [];
        snakeLength = 3;
        moveDir = 2;
        delta = 1;
        noCount = 0;
    
        for (i = 0; i < 506; i++) {
            cells.push(0);
        }
    
        for (i = 0; i < 11; i++) {
            out.push('X');
        }
    
        cells[463] = 1;
        cells[464] = 2;
        cells[465] = 3;
        snakePos = 465;
        playing = 0;
    
        if (type == 0) {
            document.getElementById("insert").innerHTML = "Insert phone number: XXX-XXX-XXXX";
        } else if (type == 1) {
            document.getElementById("btn").style.display = "none";
        }
    
        var overlay = document.getElementById("overlay");
        overlay.style.display = "block";
        overlay.style.backgroundColor = "rgba(255,255,255,0.8)";
        overlay.innerHTML = "Press enter to start";
        overlay.style.lineHeight = "" + height + "px";
        overlay.style.fontSize = "35px"; 
    
        generate();
        paint();
    }
    

function move(){
    if (playing==1){
    if (cells[snakePos+delta]>0){
        playing=0
        document.getElementById("overlay").style.display="block";
        document.getElementById("overlay").style.backgroundColor="rgba(255,100,100,0.8)";
        document.getElementById("overlay").innerHTML="WEIRD NUMBER";
    }else{
        if (moveDir==0){
        delta=-1;
        }else if (moveDir==1){
        delta=-22;
        }else if (moveDir==2){
        delta=1;
        }else if (moveDir==3){
        delta=22;
        }
        snakePos+=delta;
        for (i=0;i<506;i++){
        if (cells[i]>0){cells[i]--;}
        }
        if ((snakePos-delta)%22==21&&moveDir==2){snakePos-=22;}
        else if((snakePos-delta)%22==0&&moveDir==0){snakePos+=22;}
        else if(snakePos>506){snakePos-=506;}
        else if(snakePos<0){snakePos+=506;}
        cells[snakePos]=snakeLength;
        paint();
    }
    }
    pressed=0;
    }

function generate(){
    var rand;
    nos=[];
    for (i=0;i<100;i++){nos.push(10)}
    for (i=0;i<10;i++){
    for (n=0;n<10;n++){
        for (m=0;m>=0;m++){
        rand=Math.floor(Math.random()*100);
        if (nos[rand]==10){
            nos[rand]=i;
            break;
        }
        }
    }
    }
    overlay.style.fontSize = "35px"; 
    }

function changeDir(e){
    if (e.keyCode>36&&e.keyCode<41&&Math.abs(moveDir-(e.keyCode-37))!=2){
    if (pressed==0){moveDir=e.keyCode-37;}
    pressed=1;
    }else if(e.keyCode==27){
    start();
    }else if(e.keyCode==13){
    playing=Math.abs(playing-1);
    if (playing==1){
        document.getElementById("overlay").style.display="none";
        document.getElementById("btn").style.display="none";
        document.getElementById("overlay").style.lineHeight=""+height+"px";;
    }else{
        document.getElementById("overlay").style.display="block";
    }
    }
    }



function paint(){
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.clearRect(0,0,width,height);
    var count=0;
    for (h=0;h<23;h++){
    for (w=0;w<22;w++){
        ctx.fillStyle="#ddd";
        ctx.fillRect(spacing+w*(sqSize+spacing),spacing+h*(sqSize+spacing),sqSize,sqSize);
        if (h%2==1&&w!=0&&w!=21&&h<20&&w%2==((h+1)/2)%2){
        if (nos[count]<10){
            ctx.fillStyle="#ff715b";
            ctx.fillRect(spacing+w*(sqSize+spacing),spacing+h*(sqSize+spacing),sqSize,sqSize);
            ctx.fillStyle="white";
            ctx.font = ""+(sqSize-1)+"px Arial";
            ctx.fillText(""+nos[count],spacing+w*(sqSize+spacing)+4.5,spacing+h*(sqSize+spacing)+sqSize-3);
            if (snakePos==h*22+w){
            out[noCount]=nos[count];
            if (type==0){
                phNo=""+out[0]+""+out[1]+""+out[2]+"-"+out[3]+""+out[4]+""+out[5]+"-"+out[6]+""+out[7]+""+out[8]+""+out[9]+"";
            }else if (type==1){
                phNo=""+out[0]+""+out[1]+""+out[2]+" "+out[3]+""+out[4]+""+out[5]+" "+out[6]+""+out[7]+""+out[8]+"";
            }else if (type==2){
                phNo=""+out[0]+""+out[1]+" "+out[2]+""+out[3]+" "+out[4]+""+out[5]+" "+out[6]+""+out[7]+"";
            }else if (type==3){
                phNo=""+out[0]+""+out[1]+""+out[2]+""+out[3]+""+out[4]+" "+out[5]+""+out[6]+""+out[7]+" "+out[8]+""+out[9]+""+out[10]+"";
            }
            document.getElementById("insert").innerHTML="Insert phone number: "+phNo+"";
            for (a=0;a<506;a++){
                if (cells[a]>0&&cells[a]!=snakeLength){cells[a]++;}
            }
            nos[count]=10;
            noCount++;
            snakeLength++;
            if (noCount==cutoff){
                playing=0;
                document.getElementById("btn").style.display="block";
                document.getElementById("overlay").style.display="block";
                document.getElementById("overlay").style.lineHeight=""+(height-100)+"px";;
                document.getElementById("overlay").innerHTML="<spec>"+phNo+"</spec>";
                overlay.style.fontSize = "35px"; 
                sessionStorage.setItem("number",phNo);
            }
            }
        }
        count++;
        }
        if (cells[h*22+w]>0){
        ctx.fillStyle= "#0b6623";
        ctx.fillRect(spacing+w*(sqSize+spacing),spacing+h*(sqSize+spacing),sqSize,sqSize);
        overlay.style.fontSize = "35px"; 
        }
    }
    }
    }