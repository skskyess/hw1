// let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for (let i = 0; i <= a.length;i++) {
//     // console.log(a[i])
//     if (a[i] %2==0){
//         console.log(a[i])
//     }

// }

// console.log("hello"),



// let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// for (let i = 0;i <= a.length;i++) {
//     if(i==9) {
//         console.log("Выполнение прервано")
//         break;
//     } else if (a[i]%2==0) {
//         console.log(a[i], "  - четный")
//     } else if (a[i]%2!=0){
//         console.log(a[i]," - нечетный")
//     }
// }


// let a=[]

// let b =[]

// let i = 0;
// while(i < 100) {
//     if (i%5==0 || i%10==0){
//         console.log("нинада")
//     } else {
//         if (i%2==0){
//             a.push(i)
//             console.log(a)
//         } else if (i%2 != 0){
//             b.push(i)
//             console.log(b)
//         }
//             }
//     i++
// }
// console.log(a,b)



function f(n) {
    let a = 1;
    for(let i = 1; i <=n;i++) {
        a *= i;
    }
    return a;
}
for(let i = 0; i <= 15; i++ ){
    console.log(f(i));
}


function f() {
    let n1 = +prompt("первое число: ");
    let n2 = +prompt("второе число: ");

    if (n1 > n2){
        fact = n1
    } else {
        fact = n2
    }

    function factorial(a) {
        return a ? a * factorial(--a) : 1
    }
    console.log(`Факториал наибольшего числа равен: ${factorial(fact)}`);

    function a () {
        let zn = prompt("введите знак: ");  
    
        if (z == '+') {
            result = n1 + n2
            console.log(`Равно: ${result}`);
            alert(`Равно: ${result}`)
        } else if(z == '-') {
            result = n1 - n2
            console.log(`Равно: ${result}`);
            alert(`Равно: ${result}`)
        } else if(z == '*') {
            result = n1 * n2
            console.log(`Равно: ${result}`);
            alert(`Равно: ${result}`)
        } else if(z == '/') {
            result = n1 / n2
            console.log(`Равно: ${result}`);
            alert(`Равно: ${result}`)
        } else if (Number.isFinite(n1) ) {
            let n1 = +prompt("первое число: ");
        }
        else if (Number.isFinite(n1) ) {
            let n1 = +prompt("второе число: ");
        }

            return uslovie()
            let z = prompt("введите знак заново: "); 
        }
    }
    a()

    



f()



// let sendBut = document.querySelector('#send');
// let postsBlock = document.querySelector('.posts');

// sendBut.addEventListener('click',createPost);

// function createPost(){
//     let text = document.querySelector('#textPost').value;
//     let newPost = document.createElement('span');
//     newPost.textContent = text;
//     postsBlock.append(newPost);
// }



