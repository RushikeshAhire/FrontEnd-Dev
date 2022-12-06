console.log('fun demo  3 loaded');

function lm(x, y) {
    console.log("hello lambda : " + (x + y));
}
lm = (x, y) => { 
    console.log("hello lambda : " + (x + y)) 
};

lm(2, 3);



// class Employee{ Employee()}
function Employee(id, fname) {
    this.id = id;
    this.fname = fname;
    this.fullName = function () {
        return this.id + " " + this.fname;
    }
    return this.id + " " + this.fname;
}

//res = new Employee(1, "nausad");
res2 = new Employee(2, "akhtar");
//e2 = res2.fullName();

console.log(res)