window.onload = function () {
  const navScroll = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    // navScroll.classList.add("scrolled");
    // y값 스크롤이 70px보다 클때 변경하기
    console.log("스크롤 y 값:" , window.scrollY );
    if(window.scrollY > 70 ){
        navScroll.classList.add("scrolled");
    }
    else{
        navScroll.classList.remove("scrolled")
    }
  });
};
