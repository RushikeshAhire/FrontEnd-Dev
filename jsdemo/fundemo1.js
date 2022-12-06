console.log('fun demo loaded')

m1 = function (n1,n2,n3){
    len = arguments.length
    if(len>3){
        len = 3
    }
    switch(len){
        case 0 :{
            console.log("Kutch para de na");
            break;
        }
        case 1 :{
            console.log(n2);
            break;
        }
        case 2 :{
            console.log(n2);
            break;
        }
        case 3 :{
            console.log(n1+n2+n3);
            break;
        }default:{
            //console.log("Bus aur nahi")
        }
    }
}
//m1 = function( i,  j){

//     console.log("m1 method neeche")
// }
m1(1,5)
