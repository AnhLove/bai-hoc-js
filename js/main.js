/*
1.Alert
2.Console
3.Confirm : hien hop thoai "yes/no"
4.Prompt : hien them khung input
5.Set timeout : sau mot khoang thoi gian hien thong bao, chi chay 1 lan
6.Set interval : cach mot s chay 1 lan
*/

/*var fullName = " Tuan Anh ";

console.log(fullName);*/

/*setInterval(function () {
  console.log("day la log" + Math.random());
}, 1000);*/

/*
1.Toan tu so hoc - Arithmetic vd: a =1+2=3
2.Toan tu gán - Assignment Vd: fullNAme*/

//3.Toan tu so sanh - Comparison c=2 ; b=3 tim dk
/*var c = 2;
var b = 3;
if (c < b) {
  alert("Dung");
}*/

// 4.Toan tu logic - Logical 2 ve phai dunng
/*var a = 1;
var b = 2;
if (a > 0 && b > 0) {
  alert("ok dung r nha");
}*/

/** Toán tử số học
 + Cộng
 - Trừ
 * Nhân
 ** Lũy thừa 
 / chia
 % Chia lấy số dư
 ++ Tăng giá trị 1 số var a = 8
                      a++;
                      console.log(a)
 -- Giảm giá trị 1 số
 */

//Toán tử ++ --
// Prefix(tien to) var=6
/* +Viec 1 : +1 cho a, a = a+1 => a = 7
   +Viec 2 : Trả về â sau khi được +1
*/

//Postfix(hau to)
/* +Viec 1: 'a copy' , ' a copy' = 6
   +Viec 2: trừ 1 của â, a = a-1 => a=5
   +Viec 3: Trả về 'a copy'
   var a = 6;
   var output = a++;
   console.log('output:', output);
   console.log('a:', a);
*/
/*var number = 6;
var ouput = ++number * 2 - number-- * 2;
console.log("output: ", ouput);*/

// Toán tử gán

/* Toán Tử        VD           Tương đương
   =            x = y           x = y
   +=           x += y         x = x + y
   -=           x -= y         x = x - y
   *=           x *= y         x = x * y
   /=           x /= y         x = x / y
   **=          x **= y        x = x ** y
*/

// Toán tử chuỗi
/*var fistName = "Tuan";
var lastName = "Anh";

console.log(fistName + " " + lastName);*/

/*var name = "Anh";

name += " Love";

console.log(name);*/

/** Toán tử so sánh */

/* == --> Bằng
!= --> ko bằng
> --> lớn
< --> nhỏ
>= lớn hoặc bằng
<=  nhỏ hơn hoặc bằng */

/*var a = 1;
var b = 2;

if (a == b) {
  console.log("Dieu kien dung! ");
} else {
  console.log("Dieu kien sai!");
}*/

/**
 * Boolean
 
var a = 1;
var b = 2;
var isSuccess = a > b;
console.log(isSuccess);*/

/**
 * If - else
 

/**
 * 0
 * false
 * '' _ ""
 * underfined
 * NaN
 * null
 */
/*
var isSuccess = 1 < 2;
if (isSuccess) {
  console.log("Dieu kien dung!");
} else {
  console.log("Dieu kien sai!");
}*/

/**
 * Toan tu logic
 * 1 && - And
 * 2 || - Or
 * 3 ! - Not ; if (!(a > 0))
 */
/*
var a = 1;
var b = 2;
var c = 3;

if (a > 0 && b > 0 && c > b) {
  console.log("Dieu kien dung!");
} */

/* 
Kieu DL trong javascript
1. DL nguyen thuy - primitive Data
     -Number :var a = 1; cach KT: console.log(typeof a)
     -String :var fullName = " Tuan Anh ";
     -Boolean :var isSuccess = true;
     -Undefined : var age; ko gan gia tri
     -Null : var isNull = null; // nothing
     -Symbol : var id = Symbol('id'); // unique tinh duy nhat
2. DL phuc tap - Complex Data
     - Function 
     var myFunction = function() {
         alert('Hello');
     }
    myFunction();
     - Object
     var myObject = {
         name: 'Tuan Anh',
         age: 20,
         adress: 'Ha Noi'
         myFunction: function () {
         
         }
     };

     var myArray = [
         'Javascript'
         'PHP'
         'Ruby'
     ];
*/

// TOAN TU SO SANH - P2

/**
 * === so sanh value va data
 * !==
 * != : khac
 *
 * VD:var a = 1;
 *    var b = '1';
 *    console.log(a !==b);
 */

// Cau lenh dieu kien
// phep so sanh luon tra ve bolean
// Toan tu logical luon tra tai ve cua no

/*var a = 1;
var b = 2;*/

// var result = "A" && "B" && "C"; // gia tri nao false se return
// var result = "A" || "B" || "C"; // gia tri nao true se return
// console.log("result", result);

// if (result) {
//   console.log("A < B");
// } else {
//   console.log("A > B");
// }

/*
Chuỗi Trong JS

1. Tạo chuỗi
    - Các cách tạo chuỗi 
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type 
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi 
4. Chú ý độ dài khi viết Coder var fullName = "Tuan Anh 'trum Kinh'" 
+ "Tuan Anh 'trum Kinh'";
console.log(fullName.length);
5. Template string ES6


var fistName = "Tuan ";
var lastName = "Anh";
console.log(`Toi la: ${fistName} + ${lastName}`);*/

// Find index : tim vitri
/*var myString = 'Hoc JS tai F8!';
console.log(myString.indexOf('JS'));*/

// CUt string
/*var myString = 'Hoc JS tai F8!';
console.log(myString.slice(4))*/

// Replace : thay the
/*var myString = 'Hoc JS tai F8!';
console.log(myString.replace('JS', 'Javascript'));
/JS/g : thay the tat ca JS*/

// Convert to upper case : chuyen doi tat ca thanh chu Hoa
/*var myString = 'Hoc JS tai F8!';
console.log(myString.toUpperCase());*/
// Convert to lower case : chuyen doi tat ca thanh chu thuong

// Trim : loai bo khoang trang
/* console.log(myString.trim())*/

// Split : tim diem chung de chuyen thanh array
/*var language = 'Javascript, PHP, Ruby';
console.log(language.split(', '));*/

// Get a character by index
/*const myString = 'Tuan Anh';
console.log(myString[0])
.charAt*/

/*
Kieu so (Number) trong Javascript

1 Tạo giá trị Number
 - Các cách tạo 
 - Dùng cách nào ? Tại sao?
 - Kiểm tra data type
2 Làm việc vs Number 
 - To string console.log(age.toString())
 - To Fixed

*/

/*var age = 20
var PI  = 3.14;

var result = 20 / 1;

console.log(result)
console.log(PI.toFixed(0))*/

//kiem tra NaN  console.log(isNaN(result))

/*
Mảng trong Javascript - Array 

1. Tạo mảng 
    - Cách tạo 
    - Sử dụng cách nào? Tại sao?
    - Kiểm tra data type :console.log(typeof languages)
    - KTra array 1 so TH : console.log(Array.isArray())
2. Truy xuất mảng 
    - Độ dài mảng :console.log(languages.length)
    - Lấy phần tử theo index :console.log(languages[])
*/

/*var languages = [
    'Javascript',
    'PHP',
    'Ruby'
]; 

console.log(languages.slice(-3, -2))*/

//console.log(languages.length)

/* Lam viec voi array

1. To string
2. Join : console.log(languages.join(' ')) // xoa bo va chu dinh lien vs nhau
3. Pop : console.log(languages.pop()) //xoa phan tu cuoi mang tra ve phan tu da xoa
4. Push : console.log(languages.push('Dart')) , them phan tu o cuoi mang
5. Shift : console.log(languages.shift()) // xoa phan tu dau mang
6. Unshift : console.log(languages.unshift('Dart')) , them phan tu o dau mang
7. Splicing : languages.splice(1, 1)
console.log(languages) //xoa vi tri bat ky trong array , co the them 1 element bang ''
8. Concat : console.log(languages.concat(languages2)) // hop nhat 2 element
9. Slicing : console.log(languages.slice(1)) // cat mang thuoc vi tri element
*/

/* Ham trong JS

1. Ham ?
  - Mot khoi mã
  - làm việc cụ thể

2. Loại hàm
- Built-in
-Tự định nghĩa

3. tính chất
- ko thực thi định nghĩa 
- sẽ thực thi khi dc gọi
- có thể nhận tham số 
- có thể trả về 1 giá trị 

4. Tạo hàm đầu tiên
*/

// ten ham chua tu a-z A-Z 0-9 _ $

/*function showDialog() { //lam 1 vc cu the 
  alert  ('Hi chao cac ban'); // la mot khoi ma
}

showDialog();*/

// Tham số JS

/*function writelog(message, message2) { //day la tham so trong function
  console.log(message) // chi co tac dung trong ()
  console.log(message2)
  console.log(arguments)// chi goi arguments trong function
  var myString = '';
  for (var param of arguments){
    myString += `${param} - `
    console.log(param)
  }
  console.log(myString)
}

writelog('Test', 'Test_2');*/ // doi so trong write
// co the truyen moi KDL
//dinh nghia ra 1 tham so

//Return trong ham

/*var isConfirm = confirm('Message?');

console.log(isConfirm)*/

/*function cong(a, b) {
  return a + b ; //duoi return ko chay
}

var result = cong(2, 8);

console.log(result)
*/

/*function showMessage() {
  // trung ten thi no show cai sau cung
  function showMessage2() {
    console.log("Message 2");
  }
  showMessage2();
}

showMessage();*/

/*
    CaC loai function

    1. Declaration function :function showMessage() {} , co the dat showMessage(); truoc function
    2. Expression function : var showMessage2 = function() {}
    3. Arrow function
*/

// Object trong JS

/*var myInfo = {
  name: "Tuan Anh",
  age: 18,
  address: "Ha Noi, VN",
  [myKey]: "Anhlove15",
  getName: function () {
    // dat 1 function trong ob
    return this.address; //this chinh la bien myInfo
  },
};

var myKey = "name1"; // 1 key moi goi value trong key khac

delete myInfo.age; // xoa value

myInfo["my-email"] = "tuankaito5006@gmail.com"; // them 1 value ngoai object
console.log(myInfo.getName());*/

//function --> Phuong thuc / method
//others --> thuoc tinh / property

// Object constructor

/*function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
      return `${this.firstName} ${this.lastName}`
    }
}*/
// Object prototype - Basic
/*User.prototype.className = 'Linh';//prototype co the them thuoc tinh o ngoai
User.prototype.Name = 'Linh1';
User.prototype.getClassName = function() {
  return this.Name;
}

var author = new User('Tuan', 'Anh', 'Avatar');
var user = new User('Lan', 'Trinh', 'Avatar');
var user2 = new User('Khanh', 'Van', 'Avatar');

author.title = "Chia se dao tai FB";
user.comment = "Lieu co on ko vay";

console.log(user.className);
console.log(user2.getClassName());*/

// đối tượng Date

/*var date = new Date();
var month = date.getMonth() + 1;
var year = date.getFullYear();
var day = date.getDate();

console.log(`${day}/${month}/${year}`);*/
//developer.mozilla.org


// cau lenh re nhanh - if else
// var date = 9;

// if (date == 2) {
//    console.log('hom nay la thu 2');
// } else if (date == 3) {
//   console.log('hom nay la thu 3');
// } else {
//   console.log('ko biet')
// }


// toan tu 3 ngoi - ternary operator

var course = {
    name: 'Javascript',
    coin: 250
}

// if (course.coin > 260) {
//     console.log(`${course.coin} Coin`);
// } else {
//     console.log('Mien phi');
// }

// var result = course.coin > 0 ? `${course.coin} Coin` : 'Mien phi';
// console.log(result);

// var a = 1;
// var b = -2;

// var c = a < 0 ? a : b ;

// console.log(c);

/* Vong lap - Loop

*/
//1. for - lap vs dk dung
// var myArray = [
//   'Javascript',
//   'PHP',
//   'Java',
//   'Dart'
// ];

// var arrayLength = myArray.length;

// for (var i = 0; i < arrayLength; i++ ){
//   console.log(myArray[i]);
// }


//2. for/in - lap qua key doi tuong
// var myInfo = {
//     name: 'Tuan Anh',
//     age: 20,
//     address: 'Ha Noi, VN'
// };

// for (var key in myInfo) { 
//     console.log(myInfo[key]);
// };

// var myString = 'Javascript';


// for (var key in myString) {
//    console.log(myString[key]);
// };


//3. for/of - lap qua value cua ob

// var language = 'Java';

// for (var value of language) {
//     console.log(value);
// }

// var myInfo = {
//   name: 'Tuan Anh',
//   age: 20,
//   address: 'Ha Noi, VN'
// };

// for (var value of Object.keys(myInfo)){
//     console.log(myInfo[value]);
// }

//4.while - lap khi dieu kien dung
// var myArray = [
//   'Javascript',
//   'PHP',
//   'Java',
//   'CSS'
// ];

// var i = 0;
// while (i < myArray.length) {
//   console.log(myArray[i]);
//   i++;
// }

//5.do/while - lap it nhat 1 lan, sau do lap lai dk dung

// var i = 0;
// var isSuccess = false;

// do{
//   i++;

//   console.log('Nap the lan '  + i);

//   //VD nap the 
//   if (false){
//     isSuccess =true;
//   }

// }while (!isSuccess && i <= 3);


//BREAK & Continue

// for (var i = 0; i < 10; i++){
//   if (i % 2 != 0 ){
//     continue;
//   }
  
//   console.log(i);
  
// }

// Vong lap lồng nhau

// var myArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];

// for (var i = 0; i < myArray.length; i++) {
//   for (var j = 0; j < myArray[i].length; j++){
//     console.log(myArray[i][j]);
//   }
  
// }

// Loop...

// for (var i = 100; i > 0; i -= 5 ) {
//   console.log(i);
// }

/* Array methods:
    forEach()
    courses.forEach(function(course) {
  console.log(course);
});// call back
    
every() // tra ve bolean true or false
    var isFree = courses.every(function(course) {
  return course.coin == 0;
});// call back
console.log(isFree);
    
some() // chi can 1 dk dung
    
    find() // tim dc 1
    var course = courses.find(function(course) {
  return course.name == 'Ruby';
});
console.log(course);
    
filter()// tim dc nhieu 
    var course = courses.filter(function(course) {
  return course.name == 'Ruby';
});
console.log(course);



map()
function courseHandler(course, index, orginArray) {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText:` Gia: ${course.coin}`,
    index: index,
    orginArray: orginArray, //tra ve gia tri return de them dl moi
  };
}

var newCourses = courses.map(courseHandler);

console.log(newCourses);
    


reduce()
******Ly Thuyet
var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, orginArray) {
  i++;
  var total = accumulator + currentValue.coin;

  console.table({
      'Luot chay: ': i,
      'Bien luu tru: ': accumulator,
      'Gia khoa hoc: ': currentValue.coin,
      'Tich tru duoc: ': total,
  });

  return total ;
}

var totalCoin = courses.reduce(coinHandler, 0);// initial value

console.log(totalCoin);
********Van dung
var i = 0;

var totalcoin = courses.reduce(function(total, course) {
  i++;

  console.log(i, total, course);
    return total + course.coin;
}, 0);

console.log(totalcoin);
*/

var courses = [
    {
      id: 1,
      name: 'javascript',
      coin: 250
    },
    {
      id: 2,
      name: 'HTML, CSS',
      coin:0
    },
    {
      id: 3,
      name: 'Ruby',
      coin: 0
    },
    {
      id: 4,
      name: 'PHP',
      coin: 400
    },
    {
      id: 5,
      name: 'ReactJS',
      coin: 500
    } ,
    {
      id: 6,
      name: 'Ruby',
      coin: 10
    },
];

//dùng for of để tính tổng coin
// var totalCoin = 0;

// for (var course of courses) {
//   totalCoin += course.coin;
// }

// console.log(totalCoin);

//BT van dung reduce

// var dethArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var floatArray = dethArray.reduce(function(floatOutput, dethItem) {

//     return floatOutput.concat(dethItem) 
// }, []);

// console.log(floatArray);

var topics = [
  {
    topic:"Front-End",
    courses: [
        {
            id: 1,
            title: "HTML, CSS"
        },
        {
            id: 2,
            title: "Javascript"
        }
    ]
  },
  {
    topic: "Back-End",
    courses: [
        {
            id: 3,
            title: "PHP"
        },
        {
            id: 4,
            title: "NodeJS"
        }
    ]
  },
];

var newCourses = topics.reduce(function(course, topic) {
      return course.concat(topic.courses);
}, []);

console.log(newCourses);
