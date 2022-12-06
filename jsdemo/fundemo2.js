console.log('fun demo  2 loaded');

var n1 = 20;

function tp(){

    var n2 = 30;
    {
        var t1 = 3;
        let l1 = 55;
    }
    {
        console.log(n2);
        console.log(l1);
    }
    console.log(n2);
    console.log(t1);
   
}
function tp1(){
    console.log(n2);
    {

    }
}

tp();