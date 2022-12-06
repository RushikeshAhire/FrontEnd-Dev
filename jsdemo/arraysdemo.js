console.log("arrays page");

numbers = [5,5,6,7,8,"xxx",9];
numbers2 = [1,2,6,7,8,"xxx",9];
bb = numbers.concat(numbers2);
arr = new Array();
arr[6]="hello"

console.log(bb);

names = new Array(4,7,8,9);

for(uname in names){
  //  console.log(names[uname])
}
names.forEach(nn => {
   // console.log(nn);
});
console.log(numbers[5])
for(num in numbers){
   // console.log(numbers[num])
}

numbers[10] = 50;
numbers[3] = 55;
for(num in numbers){
  //  console.log(numbers[num])
}
