console.log('fun demo  4 loaded');
emp1 = {
    id: 1,
    fname: 'naushad',
    city: 'mumbai'
};
emp2 = {
    id: 2,
    fname: 'akhtar',
    city: 'pune'
}
emps = [emp1, emp2]
emps2 = [{
    id: 4,
    fname: 'naushad',
    city: 'mumbai',
    phone: [{ home: 98898, office: 888888 }],
    getFullInfo: function (){
        return this.id + this.city + this.phone[0].home + this.phone[0].office;
    },
    getFullInfo1: (id,fname,city,phone)=>{
        return id ;
        //return "HEEEEE"
    }
}, {
    id: 3,
    fname: 'akhtar',
    city: 'pune'
}]

console.table(emps2[0].getFullInfo1())

