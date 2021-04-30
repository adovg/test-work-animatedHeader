// let myScroll = window.scrollY;
// console.log(myScroll);

// var height = document.body.scrollHeight;
// console.log(`scrollheight is ${height}` ); когда равен этому значению, снимаем фикс прыгаем к якорю

// let height = document.documentElement.clientHeight;
// console.log(height); или это вариант получения высоты

//let myCircleHeight = document.querySelector('.hero__content').clientHeight;  первый рабочий вариант 




// let myCircle = document.querySelector('.hero__content');
// let myCircleHeight = window.getComputedStyle(myCircle, ).height;
//  console.log(myCircleHeight);

//  window.onscroll = magic;

//  function magic(){
//    // 500 расстояние при котором событие произойдет 
//    if (window.pageYOffset > 0) {
// 	 section.style.height = '500px'
//    } else {
// 	 section.style.height = '200px'
//    }
//  }


// window.addEventListener('scroll', function() {
// 	console.log(pageYOffset + 'px');
// 	let myCircleHeight = document.querySelector('.hero__content').clientHeight;
// 	document.querySelector('.hero__content').clientHeight = myCircleHeight + pageYOffset

//   });

//   document.onmousewheel=document.onwheel=function(){ 
// 	return false;
// };


// var element = document.querySelector('.hero__content');
// var hp   = document.body.scrollHeight,
//     hw   = window.innerHeight,
//     smax = hp - hw,
//     smin = 0,
//     hmin = 450,
//     hmax = 450,
//     ds   = smax - smin,
//     dh   = hmax - hmin;

// window.addEventListener('scroll', function () {
//     var s = window.pageYOffset; // current scrollTop
// 	console.log(s);
//     var h = hmax - (dh * s) / ds;

//     element.style.height = h + 'px';
// });

// document.querySelector(".container").addEventListener("wheel", myFunction);

// function myFunction() {
// 	console.log()
//   this.style.fontSize = "35px";
// }

