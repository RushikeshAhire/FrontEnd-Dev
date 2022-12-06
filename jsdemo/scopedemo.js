console.log("scope demo page loaded");
//var x = 111;
//var x = 444;

x = 5555;

var x = 444;

//let y = 222;
y = 555;
a = 10;

for (i = 0; i < 5; i++) {
    let z = 333;

    {
        var y = 488;
    }
    {
        var y = 999;
    }
    console.log(y);
    //  console.log(x);
    //  console.log(i);
}

for (i = 0; i < 5; i++) {
    // console.log(z);
    // console.log(y);
    //  console.log(i);
}



