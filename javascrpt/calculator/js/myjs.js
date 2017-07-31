function addone(){
    document.calculator.display.value+=1;
}
function addtwo(){
    document.calculator.display.value+=2;
}
function addthree(){
    document.calculator.display.value+=3;
}
function addfour(){
    document.calculator.display.value+=4;
}
function addfive(){
    document.calculator.display.value+=5;
}
function addsix(){
    document.calculator.display.value+=6;
}
function addseven(){
    document.calculator.display.value+=7;
}
function addeight(){
    document.calculator.display.value+=8;
}
function addnine(){
    document.calculator.display.value+=9;
}
function addzero(){
    document.calculator.display.value+=0;
}
function plus(){
    document.calculator.display.value+="+";
}
function minus(){
    document.calculator.display.value+="-";
}
function mul(){
    document.calculator.display.value+="*";
}
function divider(){
    document.calculator.display.value+="/";
}
function modu(){
    document.calculator.display.value+="%";
}
function clr(){
    document.calculator.display.value="";
}

function result(){
    var ans=eval(document.calculator.display.value);
    document.calculator.display.value=ans;
}


