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





// 자소서
//토글 버튼
const cover_letter = document.querySelector(".cover_letter");
const information1 = document.querySelector(".information1");

cover_letter.addEventListener("click", () => {
    information1.classList.toggle("show");
});

// 슬라이드 버튼
const before1 = document.querySelector(".before1"); // 이전
const next1 = document.querySelector(".next1"); // 다음

const slides1 = document.querySelectorAll(".slides1"); // 모든 d 클래스
let i = 0;

// 현재 슬라이드 보여주기
function showSlide1(index) {
    slides1.forEach(slides1 => slides1.classList.remove("show"));
    slides1[index].classList.add("show");
}

// 초기 화면
showSlide1(i);

// 다음 버튼 클릭
next1.addEventListener("click", () => {
    i++;
    if (i >= slides1.length) i = 0;
    showSlide1(i);
});

// 이전 버튼 클릭
before1.addEventListener("click", () => {
    i--;
    if (i < 0) i = slides1.length - 1;
    showSlide1(i);
});

// 이력서
//토글 버튼
const resume = document.querySelector(".resume");
const information2 = document.querySelector(".information2");

resume.addEventListener("click", () => {
    information2.classList.toggle("show");
});

// 슬라이드 버튼
const before2 = document.querySelector(".before2"); // 이전
const next2 = document.querySelector(".next2"); // 다음

const slides2 = document.querySelectorAll(".slides2"); // 모든 d 클래스
let j = 0;

// 현재 슬라이드 보여주기
function showSlide2(index) {
    slides2.forEach(slides2 => slides2.classList.remove("show"));
    slides2[index].classList.add("show");
}

// 초기 화면
showSlide2(j);

// 다음 버튼 클릭
next2.addEventListener("click", () => {
    j++;
    if (j >= slides2.length) j = 0;
    showSlide2(j);
});

// 이전 버튼 클릭
before2.addEventListener("click", () => {
    j--;
    if (j < 0) j = slides2.length - 1;
    showSlide2(j);
});


// 다른 버튼을 클릭시 다른 것은 사라짐
cover_letter.addEventListener("click", () => {
    information1.style.display = "block";
    information2.style.display = "none";
});

resume.addEventListener("click", () => {
    information1.style.display = "none";
    information2.style.display = "block";
});


























