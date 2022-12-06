function calc() {
    //   console.log("ok")
    n1obj = document.getElementById("n1");
    n1val = n1obj.value;
    n2obj = document.getElementById("n2");
    n2val = n2obj.value;
    oprobj = document.getElementById("opr");
    resobj = document.getElementById("res");

    oprval = oprobj.value

    switch (oprval) {
        case "add": {
            result = parseInt(n1val) + parseInt(n2val);
            resobj.innerText = result;
            break;
        }
        case "sub": {
            result = parseInt(n1val) - parseInt(n2val);
            resobj.innerText = result;
            if (result < 100) {
                resobj.style.color = "red"
                resobj.style.textShadow = "2px 2px gray"
            }
            else {
                resobj.style.color = "blue"
            }
            break;
        }
        case "mul": { }
    }

}