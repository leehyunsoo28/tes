/* strat */
const body = document.querySelector("body");
const poop = document.querySelector('.poop');
const display_none = document.querySelector(".display_none");


function startTransparency(){
	poop.style.transition="0.7s";
	poop.style.opacity=0;
	display_none.style.display="block";
	body.style.overflow="auto";
	setTimeout(function(){
		poop.style.display="none";
	},700);
}

/* skill */
let skill_div = document.querySelectorAll(".skill_div");
let test = false;

window.addEventListener("scroll", function () {
	let scrollY = window.scrollY;
	skill_div.forEach(function (ed) {
		ed.style.opacity = 0;
	});



	if (scrollY > 850 && !test) {

		skill_div.forEach(function (ed) { ed.style.display = "block"; });

		skill_div[0].style.animation="motion1 1.5s 0.0s forwards";
		skill_div[1].style.animation="motion2 1.5s 0.2s forwards";
		skill_div[2].style.animation="motion3 1.5s 0.4s forwards";
		skill_div[3].style.animation="motion4 1.5s 0.6s forwards";
		skill_div[4].style.animation="motion5 1.5s 0.8s forwards";

		test = true;

	}
});



/* 팝업 */
const menu = document.querySelectorAll(".menu");

const closea = document.querySelectorAll(".close");


/* 클릭시 팝업 창이 뜸*/
menu.forEach(function(menu){
	menu.addEventListener("click", function(e){
		let i=0;
		e.preventDefault();
		i = this.getAttribute("data-idx");
		pop[i].style.display="block";
		body.style.overflow="hidden";
	});
});

/* 클릭시 팝업 창이 사라짐*/
closea.forEach(function(closea){ 
	closea.addEventListener("click",function(e){// 각각의 close클릭했을때
		e.preventDefault();
		pop.forEach(function(pop){
			pop.style.display="none"; //팝업 다 안보이게함
		});
		body.style.overflow="auto"; //body스크롤 생김
	});
});



/* 자소서, 이력서 보이기 및 숨기기 */
const button = document.querySelectorAll(".button");
const vab = document.querySelectorAll(".vab");

vab.forEach(function(target) {
    target.style.display = "none";
});

button.forEach(function(item) {
    item.addEventListener("click", function(){
        vab.forEach(function(target){
            if (target.style.display === "none") {
                target.style.display = "block";
            } else {
                target.style.display = "none";
            }
        });
    });
});


const before = document.querySelector(".before");
const next = document.querySelector(".next");
const a = document.querySelectorAll(".a");

let currentIndex = 0; // 현재 보여지는 요소 인덱스

// 초기 설정: 첫 번째 요소만 보이게
a.forEach((el, i) => el.style.display = i === 0 ? "block" : "none");

// 다음 버튼 클릭
next.addEventListener("click", function() {
  a[currentIndex].style.display = "none";           // 현재 요소 숨김
  currentIndex = (currentIndex + 1) % a.length;     // 다음 인덱스 (마지막이면 처음으로)
  a[currentIndex].style.display = "block";          // 다음 요소 표시
});

// 이전 버튼 클릭
before.addEventListener("click", function() {
  a[currentIndex].style.display = "none";           
  currentIndex = (currentIndex - 1 + a.length) % a.length; // 첫 요소면 마지막으로
  a[currentIndex].style.display = "block";          
});















