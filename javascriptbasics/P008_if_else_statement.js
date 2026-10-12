let mark=89.99;

if(mark>=90){
    if(mark>=95){
        console.log("grade is A++")
    }else{
        console.log("grade is A");
        
    }
}
else {
    console.log("grade is B")
}

let colour="green";

switch(colour){
    case "red":
        console.log("STOP");
        break;
    case "green":
        console.log("GO");
        break;
    case "yellow":
        console.log("READY");
        break;
    default:
        console.log("Colour Error!");
        break;
}