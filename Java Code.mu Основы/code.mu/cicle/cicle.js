document.write('<center>'+'Hello'+'</center>')
// 
// 
// 
console.log('for loop in JavaScript')
{
    for (let i=1; i<=9; i+=2) {
        console.log('five')
    }
}

{
    for (let i=10; i>0; i--) {
        console.log('ten')
    }
}

// 1
{
    for (let i=1; i<=100; i++) {
        console.log('from 1 to 100')
    }
}

// 2
{
    for (let i=11; i<=33; i++) {
        console.log('from 11 to 33')
    }
}

// 3
{
    for (let i=0; i<=100; i+=27) {
        console.log('from 0 to 100'+' '+i)
    }
}

// 4
{
    for (let i=1; i<=99; i+=13) {
        console.log('numbers from 1 to 99 odd - '+i)
    }
}

// 5
{
    for (let j=100; j>=0; j--) {
        console.log('from 100 to 0')
    }
}
// 
// 
//  
console.log('')
console.log('Перебор массива циклом for-of в JavaScript')
{
    let arr = ['a', 'b', 'c', 'd', 'e'];

    for (let elem of arr) {
        console.log(elem)
    }
}
// 
// 
// 
console.log('')
console.log('Перебор объекта циклом for-in в JavaScript')
{
    let obj = {x: 1, y: 2, z: 3}

    for (let key in obj) {
        console.log(key)
    }
}
console.log('')
{
    let obj = {x: 1, y: 2, z: 3}

    for (let key in obj) {
        console.log(obj[key])
    }  
}
// 
// 
// 
console.log('')
console.log('Цикл while в JavaScript')
{
    let i=1

    while (i<=100) {
        console.log('числа от 1 до 100')
        i++
    }
}

{
    let i=11

    while (i<=33) {
        console.log('числа от 11 до 33')
        i++
    }        
}

{
    let num=17
    let i=0

    while (num<1000) {
        i++
        num*=3
    }
    console.log(num+' — конечное число')
    console.log(i+' — кол-во итераций')
}
// 
// 
// 
console.log('')
console.log('for для массивов')
{
    let arr = ['a', 'b', 'c', 'd', 'e']

    for (let i=0; i<arr.length; i++) {
        console.log(arr[i])
    }
}
console.log('')
{
    let arr = ['a', 'b', 'c', 'd', 'e']

    for (let i=1; i<arr.length-1; i++) {
        console.log(arr[i])
    }
}
console.log('')
{
    let arr = ['a', 'b', 'c', 'd', 'e']

    for (let i=arr.length-1; i>=0; i--) {
        console.log(arr[i])
    }
}
console.log('') 
{
    let arr = ['a', 'b', 'c', 'd', 'e'];
        
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }  
}
// 
// 
// 
console.log('')
console.log('Условия в циклах')
{
    let arr = [2, 5, 9, 15, 1, 4]

    for (let elem of arr) {
        if (elem>3 && elem<10) {
            console.log(elem)
        }
    }
}

{
    let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

    for (let key in obj) {
        if (obj[key]%2!=0) {
            console.log(obj[key])
        }
    }
}
// 
// 
// 
console.log('')
console.log('Накопление чисел в циклах')
{
    let res=0

    for (let i=2; i<=100; i++) {
        res+=i
    }
    console.log(res+' — сумма четных чисел от 2 до 100')
}

{
    let res=0

    for (let i=1; i<=99; i++) {
        if (i%2!=0) {
            res+=i
        }  
    }
    console.log(res+' — сумма нечетных чисел от 1 до 99')
}

{
    let res=0

    for (let i=1; i<=20; i++) {
        if (Number(res*=i)==Number(0)) {
            res++
        }
    }
    console.log(res+' — произведение целых чисел от 1 до 20')
}
// 
// 
// 
console.log('')
console.log('Накопление элементов массивов в циклах ')
{
    let arr = [2, 5, 9, 3, 1, 4]
    let res=0

    for (let elem of arr) {
        res+=elem
    }
    console.log(res)
}

{
    let arr = [2, 5, 9, 3, 1, 4]
    let res=0

    for (let elem of arr) {
        if (elem%2==0) {
            res+=elem
        }
    }
    console.log(res)
}

{
    let arr = [2, 5, 9, 3, 1, 4]
    let res=0

    for (let elem of arr) {
        res+=elem**2
    }
    console.log(res)
}   

{
    let arr = [2, 5, 9, 3, 1, 4]
    let res=0

    for (let elem of arr) {
        if (Number(res*=elem)==Number(0)) {
            res++
        }
        res*=elem
    }
    console.log(res) 
}
// 
// 
// 
console.log('')
console.log('Формирование строк через циклы')
{
    let str=''

    for (let i=1; i<=5; i++) {
        str+='— '
    }
    console.log(str)
}

{
    let str=''

    for (let i=1; i<=9; i++) {
        str+=i
    }
    console.log(str)
}

{
    let str=''

    for (let i=9; i>=1; i--) {
        str+=i
    }
    console.log(str)
}

{
    let str='—'

    for (let i=1; i<=9; i++) {
        str+=i+'—'
    }
    console.log(str)
}
// 
// 
// 
console.log('')
console.log('Цифры числа при переборе циклом')
{
    for (let j=10; j<1000; j++) {
        let str=String(j)
        
        console.log(str[0])
    }
}
    console.log('')
{
    for (let j=10; j<1000; j++) {
        let str=String(j)

        if (str.length>=2) {
            
            console.log(str[0]+str[1])
        }  
    }
}
    console.log('')
{
    for (let j=10; j<=1000; j++) {
        let str=String(j)

        if (str[0]==1) {
            
            console.log(str)
        }   
    }
}
    console.log('Офигенная задача:')
{
    for (let j=1; j<=1000; j++) {
        let str=String(j)

        if (str.length<2) {
        } else {
            if (Number(str[0])+Number(str[1])==5) {
                console.log(str+' — уф')
            }
        }

    }
}
// 
// 
// 
console.log('')
console.log('Инструкция break')
{
    let arr = [2, 5, 9, 15, 1, 4, 3, 7, 0, 13, 8]
    let j=0

    for (let elem of arr) {
        if (elem==0) {
            console.log(elem+'(элемент) — '+j+'(индекс)')
            break
        }
        j++
    }
}

{
    let arr = [2, 5, 9, 15, 1, 4, 3, -7, 0, 13, 8]
    let j=0
    let res=0

    for (let elem of arr) {
        j++
        if (elem>0) {
            res+=elem
            
        } else {
            j--
            break
        }
    }
    console.log(res+'(элемент) — '+j+'(итерация)')
}

{
    let arr = [2, 5, 9, 15, 1, 4, 3, 7, 0, 13, 8]
    let j=0

    for (let elem of arr) {
        if (elem==3) {
            console.log(elem+'(элемент) — '+j+'(индекс)')
            break
        }
        j++
    }
}

{
    let res=0
    let i=0

    for (let j=1; j<100; j++) {
        res+=j
        i++

        // console.log(res+'(сумма целых чисел, начиная с числа 1 > 100) — '+i+'(итерация)')
        if (res>100) {
            console.log(res+'(сумма целых чисел, начиная с числа 1 > 100 — '+i+'(итерация)')
            break
        }
    }
}
// 
// 
// 
console.log('')
console.log('Инструкция continue')
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let elem of arr) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue; // перейдем на новую итерацию цикла
	}
	
	console.log(result); // выполнится, если делится на 2 или 3
    }
}
// 
// 
// 
console.log('')
console.log('Вложенные циклы')
{
    let str=''

    for (let i=1; i<10; i++) {
        for (let j=1; j<=3; j++) {
            str+=i
            
        }
    }
    console.log(str)
}

{
    let str=''

    for (let i=1; i<=3; i++) {
        for (let j=1; j<=3; j++) {
            str+=String(i)+String(j)+' '
            
        }
    }
    console.log(str)
}
// 
// 
// 
console.log('')
console.log('Область видимости в циклах')
{
    for (let i = 1; i <= 3; i++) {
        let num = 3;
        console.log(num); // выведет 3
    }
}

{
    for (let i = 1; i <= 9; i++) {
        let num = 3;
    }
    
    // console.log(num); // выдаст ошибку — переменная объявленная внутри цикла не будет доступна снаружи самого цикла
}

{
    for (let i = 0; i <= 3; i++) {
        let num = 3; // переменная внутри цикла будет доступна во внутреннем цикле
        
        for (let j = 0; j <= 3; j++) {
            console.log(num); // выведет 3
        }
    }
}

{
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            let num = 3;
        }
        
        // console.log(num); // выдаст ошибку — Переменные, объявленные во внутреннем цикле, недоступны снаружи:
    }
    
    // console.log(num); // выдаст ошибку — Переменные, объявленные во внутреннем цикле, недоступны снаружи:
}
// 
// 
// 
console.log('')
console.log('Заполнение массива')
{
    let arr=[]

    for (let i=1; i<=10; i++) { 
        arr.push(i)
    }
    console.log(arr)
}

{
    let arr=[]

    for (let i=1; i<=10; i++) {
        arr.push('x')
    }
    console.log(arr)
}

{
    let arr=[]

    for (let i=-10; i<=10; i++) { 
        arr.push(i)
    }
    
    let new_arr=[]

    for (let i=0; i<arr.length; i++) {
        if (arr[i]>0) {
            new_arr.push(arr[i])
        }
    }
    console.log(new_arr)
}
// 
// 
// 
console.log('')
console.log('Изменение массива в цикле')
{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }

    console.log(arr);
}

{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        arr[i]--;
    }

    console.log(arr);
}

{
    let arr = [1, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        arr[i]+=10
    }

    console.log(arr);
}
// 
// 
// 
console.log('')
console.log('Заполнение объектов через цикл')
{
    let keys = ['a', 'b', 'c', 'd', 'e'];
    let values = [1, 2, 3, 4, 5];
    let obj = {};

    for (let i = 0; i <= 4; i++) {
        obj[keys[i]] = values[i];
    }

    console.log(obj);
}

{
    let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    let arr2 = [1, 2, 3, 4, 5, 6, 7];
    let obj={}

    for (let i=0; i<=6; i++) {
        obj[arr1[i]]=arr2[i]
    }

    console.log(obj);
}

{
    let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5}
    let obj2={}

    for (let key in obj1) {
        if (obj1[key]%2==0) {
            obj2[key]=obj1[key]
        }
    }

    console.log(obj2);
}

{
    let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5}
    let obj2={}

    for (let key in obj1) {
        // let keys=obj1[key]
        // let values=keys
        obj2[obj1[key]]=key
    }
    console.log(obj2);  
}
// 
// 
// 
console.log('')
console.log('Изменение объектов через цикл')
{
    let obj = {a: 1, b: 2, c: 3};

    for (let key in obj) {
        obj[key] = obj[key] ** 2;
    }

    console.log(obj);
}

{
        let obj = {a: 1, b: 2, c: 3};

    for (let key in obj) {
        obj[key]++
    }

    console.log(obj);
}
// 
// 
// 
console.log('')
console.log('Работа с флагами')
{
    let arr = ['a', 'b', 'c', 'd', 'e']
    var flag=false

    for (let elem of arr) {
        if (elem=='c') {
            flag=true
        }
    }

    if (flag===true) {
        console.log('+++');
    } else {
        console.log('---');
    }
}

{ // задача на проверку простое ли число или нет
    let n=15
    let flag=false

    if (n==2 || n==3 || n==5) {
        flag=true
    } else {
        if (n%2==0 || n%3==0 || n%5==0) {
            flag=false
        } else {
            flag=true
        }
    }

    console.log(flag);
}
// 
// 
// 
console.log('')
console.log('Подсчет количества элементов в массиве')
{
    let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]
    let count=0

    for (let elem of arr) {
        if (elem==3) {
            count++
        }

        if (elem==2) {
            count++
        }
    }
    console.log(count);
}
// 
// 
// 
console.log('')
console.log('Объект с количеством элементов в массиве')
{
    let str='wWwherEee you my darling?'
    let count={}

    for (let i=0; i<str.length; i++) {
        if (count[str[i]]===undefined) {
            count[str[i]]=1
        } else {
            count[str[i]]++
        }
    }
    console.log(count);
}

{
    let str='wWwherEee you my darling?'
    let count={}

    for (let i=0; i<str.length; i++) {
        if (count[str[i]]===undefined) {
            count[str[i]]=1
        } else {
            count[str[i]]++
        }
    }
    console.log(count);
}
// 
// 
// 
console.log('')
console.log('Объект с количеством элементов в массиве')
{
    
}