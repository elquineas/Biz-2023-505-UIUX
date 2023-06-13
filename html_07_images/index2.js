document.addEventListener("DOMContentLoaded", () => {
  const nav_ul = document.querySelector("nav ul");

  document.querySelector("li#home").addEventListener("click", () => {
    alert("11111");
  });
  document.querySelector("li#dept").addEventListener("click", () => {
    alert("22222");
  });
  document.querySelector("li#product").addEventListener("click", () => {
    alert("33333");
  });
  document.querySelector("li#logout").addEventListener("click", () => {
    alert("44444");
  });
  document.querySelector("li#admin").addEventListener("click", () => {
    alert("55555");
  });

  const nav_click = (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    if (nav_text === "Home") {
      document.location.href = "./index.html";
    } else if (nav_text === "거래처") {
      document.location.href = "./background.html";
    } else if (nav_text === "상품") {
      document.location.href = "./background2.html";
    } else if (nav_text === "로그아웃") {
      alert("logout");
    } else if (nav_text === "관리자") {
      document.location.href = "https://www.naver.com";
      alert("Admin Page");
    }
  };

  //   nav_ul.onClick = nav_click;
  //   nullpointexeption save 코드
  //   if (nav_ul) {
  //     nav_ul.addEventListener("click", nav_click);
  //   }
  // null safe 코드
  // 객체변수가 null이 아닐경우에만 함수 실행
  nav_ul?.addEventListener("click", nav_click);
  nav_ul?.addEventListener("click", nav_click);
});
