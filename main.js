// let myname = "Zhaniya",
//     a = +prompt("vvedite a")
//     b = +prompt("vvedite b")
//     c = +prompt("vvedite c")
// if (a<b && a<c) {
//     console.log("a")
// } else if ( b<c && b<a) {
//     console.log ("b")
// }
// else {
//     console.log("c")
// }
// let name = "Zhaniya",
//     m = +prompt("vvedite m")
//     n = +prompt("vvedite n")
//     x = +prompt("vvedite x")
// if (m>n && m>x) {
//     console.log("m")
// } else if ( n>x && n>m) {
//     console.log ("n")
// }
// else {
//     console.log("x")
// }

let a = prompt("vvedite imya")
if (a.length>3) {
    console.log("прошли первый этап")
} else if (a.length<3) {
    console.log("Вы некорректно ввели имя,попробуйте еще раз")
    a = prompt("vvedite imya")
}
let b = +prompt ("age")
if (b<14) {
    console.log("Вы должны бытть старше 14")
    b = +prompt ("age")
} else if (b>60) {
    console.log("попробуйте еще раз")
    b = +prompt ("age")
}
let c = prompt("явдяетесь ли Вы студентом?")
if (c=="Да") {
    console.log("True")
} 
else {
    console.log("Вы не можете посещать сайт")
    c = prompt("явдяетесь ли Вы студентом?")
}


// let name = prompt("Введите имя");
// alert(name)
// console.log(name.lenght);

// let age = prompt("")
// age = Number(age);
// console.log(typeof(age));

// let age = +prompt("Введите возвраст")
// console.log(age);
// let age = +prompt("Введите возвраст")
// console.log(age);
// let age = +prompt("Введите возвраст")
// console.log(age);