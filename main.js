// Лоческий оператор

// I if не полная форма логического оператора if(Если)

// if (Условие){
//     Инструкция
// }

// II if else Полная форма логического оператора else (В ином случае)

// if (Условие){
//     Инструкция1
// } else {
//     Инструкция2
// }

// III if else-if else

// if (условие){
//     Инструкция1
// } else if (Условие){
//     Инструкция2
// } else if (Условие){
//     Инструкция3
// }
// else{
//     ИнструкцияN
// }

// let ageUser = prompt("Сколько тебе лет? ")

// if (ageUser > 15){
//     alert("Ты большой дядя(тётя) ")
// } else if (ageUser > 0 && ageUser <15) {
//     alert("Ты ещё молод(а) ")
// } else {
//     alert("Ты кто ??")
// }

// let passworld = prompt("Ведите пароль -->")

// if (passworld == "112233"){
//     alert("Добро пожаловать")
// } else {
//     alert("Нет в системе")
// }

// Упращенная запись логического оператора

// let переменная = условие ? значение1 : значение2

// let ageUser = prompt("Сколько тебе лет ? ")

// let massege = (ageUser > 25) ? alert("Ты большой дядя(тётя)") : (ageUser > 0 && ageUser <15) ? alert("Ты ещё молод") : alert("Ты кто?");

// 3

// let a = prompt("1")
// let b = prompt("2")
// let c = prompt("3")

// if (a > 0 && b > 0 && c > 0) {
//     alert('все числа положительные')
// } else if ((a > 0 && b > 0 && c < 0)  (a > 0 && b < 0 && c > 0)  (a < 0 && b > 0 && c > 0)) {
//     alert("2 + ")
// } else if ((a > 0 && b < 0 && c < 0)  (a < 0 && b > 0 && c < 0)  (a < 0 && b < 0 && c > 0)) {
//     alert("1")
// } else {
//     alert("все числа отрицательные")
// }

// 12

// let a = prompt("1")
// let b = prompt("2")

// if ( a != b ) {
//     if (a > b) {
//         alert(a, b = a)
//     } else {
//         alert(b, a=b)
//     }
// } else {
//     alert(a=0, b=0)
// }
//begin1
// let a = prompt("Введите сторону квадрата:")
// let P = 4 * a
// alert(P)
// console.log(P)

//begin2
// let a = prompt("Введите сторону квадрата:")
// let S = a**2
// alert(S)
// console.log(S)

//begin3
// let a = prompt("Введите длину прямоугольника:")
// let b = prompt("Введите ширину прямоугольника:")
// let S = a * b
// alert(S)
// console.log(S)
// let P = (2*a)+(2*b)
// alert(P)
// console.log(P)

//begin4
// let d = prompt ("Введите диаметр окружности:")
// let n = 3.14
// let L = n*d
// alert(L)
// console.log(L)

//begin5
// let a = prompt("Введите длину ребра куба:")
// let V = a**3
// alert(V)
// console.log(V)
// let S = 6*(a**2)
// alert(S)
// console.log(S)

//begin6
// let a = prompt("Введите длину прямоугольного параллелепипеда:")
// let b = prompt("Введите ширину прямоугольного параллелепипеда:")
// let c = prompt("Введите высоту прямоугольного параллелепипеда:")
// let V = a*b*c
// alert(V)
// console.log(V)
// let S = 2*(a*b+b*c+a*c)
// alert(S)
// console.log(S)

//begin7
// let R = prompt("Введите радиус окружности:")
// let L = 2*n*R
// let n = 3.14
// alert(L)
// console.log(L)
// let S = n*(R**2)
// alert(S)
// console.log(S)

//begin8
// let a = Number(prompt("Введите первое число:"))
// let b = Number(prompt("Введите второе число:"))
// let Sa = (a+b)/2
// alert(Sa)
// console.log(Sa)

//begin9
// let a = prompt("Введите первое число:")
// let b = prompt("Введите второе число:")
// let Sg = (a*b)**0.5
// alert(Sg)
// console.log(Sg)

//begin10
// let a = Number(prompt("Введите первое ненулевое число:"))
// let b = Number(prompt("Введите второе ненулевое число:"))
// let ak = a**2
// let bk = b**2
// let Summ = ak+bk
// alert(Summ)
// console.log(Summ)
// let Raz = ak-bk
// alert(Raz)
// console.log(Raz)
// let Pr = ak*bk
// alert(Pr)
// console.log(Pr)
// let Ch = ak/bk
// alert(Ch)
// console.log(Ch)

//begin11
// let a = Number(prompt("Введите первое ненулевое число:"))
// let b = Number(prompt("Введите второе ненулевое число:"))
// let ap = Math.abs(a)
// let bp = Math.abs(b)
// let Summ = ap+bp
// alert(Summ)
// console.log(Summ)
// let Raz = ap-bp
// alert(Raz)
// console.log(Raz)
// let Pr = ap*bp
// alert(Pr)
// console.log(Pr)
// let Ch = ap/bp
// alert(Ch)
// console.log(Ch)

//begin12
// let a = Number(prompt("Введите длину первого катета:"))
// let b = Number(prompt("Введите длину второго катета:"))
// let c = (a**2+b**2)**0.5
// alert(c)
// console.log(c)
// let P = a+b+c
// alert(P)
// console.log(P)

//begin13
// let R1 = prompt("Введите радиус первого круга:")
// let R2 = prompt("Введите радиус второго круга:")
// let n = 3.14
// let S1 = n*(R1**2)
// alert(S1)
// console.log(S1)
// let S2 = n*(R2**2)
// alert(S2)
// console.log(S2)
// let S3 = S1-S2
// alert(S3)
// console.log(S3)

//begin14
// let L = prompt("Введите длину окружности:")
// let n = 3.14
// let R = L/(2*n)
// alert(R)
// console.log(R)
// let S = n*(R**2)
// alert(S)
// console.log(S)

//begin15
// let S = prompt("Введите площадь круга:")
// let n = 3.14
// let D = 2*(S/n)**0.5
// alert(D)
// console.log(D)
// let L = n*D
// alert(L)
// console.log(L)

//begin25
// let x = prompt("Введите значение х:")
// let y = 3*(x**6)-6*(x**2)-7
// alert(y)
// console.log(y)

//begin26
// let x = prompt("Введите значение х:")
// let y = 4*((x-3)**6)-7*((x-3)**3)+2
// alert(y)
// console.log(y)

//begin27
// let A = prompt("Введите число A:")
// let A2 = A**2
// let A4 = A**4
// let A8 = A**8
// alert(`A2 = ${A2}; A4 = ${A4}; A8 = ${A8}`)

//begin28
let A = prompt("Введите число A:")
let A2 = A**2
let A3 = A**3
let A15 = A**15
let A10 = A**10
let A5 = A**5
alert(`A2 = ${A2}; A3 = ${A3}; A5 = ${A5}; A10 = ${A10}; A15 = ${A15}`)