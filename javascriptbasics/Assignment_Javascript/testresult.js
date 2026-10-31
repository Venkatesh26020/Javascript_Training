// HTTP Status code

let status_code=600;

if(status_code>=100 && status_code<200){
    if(status_code>=200 && status_code<300){
        console.log("Successful");
    }
    else if(status_code>=300 && status_code<400){
        console.log("Rediretional");
    }
    else if(status_code>=400 && status_code<500){
        console.log("Client Error");
    }
    else if(status_code>=500 && status_code<600 ){
        console.log("Server Error")
    }
    else{
        console.log("Informational")
    }
}
else{
    console.log("Unknown Error");
}