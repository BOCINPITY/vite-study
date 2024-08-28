class User{}
function Userf(name){
    this.name = "clesbit"
}
const u1 = new Userf()
const u2 = new Userf()
Object.prototype.myToString = () => '666'
console.log(User.__proto__ === Userf.__proto__)
console.log(Userf.apply === Function.apply)
console.log(u1.__proto__ === Userf.prototype)
console.log(u1.myToString())
console.log(u1.myToString === u2.myToString)
console.log(Function.__proto__ === Function.prototype)
console.log(u1.__proto__)
console.log(Object.__proto__ === Function.__proto__)
console.log(typeof Userf.prototype)
