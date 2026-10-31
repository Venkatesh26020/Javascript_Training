// check whether even or not

let num=35;
if(num%2===0){
    console.log(`${num} is even`)
}else{
    console.log(`${num} is odd `)
}

// print the days of the week as per number

let day_num=1;

switch(day_num){
    case(1):{
        console.log('The Day is Monday');
        break;
    }
    case(2):{
        console.log('The Day is Tuesday');
        break;
    }
    case(3):{
        console.log('The Day is Wednesday');
        break;
    }
    case(4):{
        console.log('The Day is Thursday');
        break;
    }
    case(5):{
        console.log('The Day is Friday');
        break;
    }
    case(6):{
        console.log('The Day is Saturday');
        break;
    }
    case(7):{
        console.log('The Day is Sunday');
        break;
    }
    default:{
        console.log('Wrong Number')
    }

}