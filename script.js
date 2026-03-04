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












