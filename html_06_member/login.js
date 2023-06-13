document.addEventListener("DOMContentLoaded", () => {
  const login = () => {
    const login_from = document.querySelector("form#login_form");

    const userName = login_from.querySelector("input[name='userName']");
    const userPswd = login_from.querySelector("input[name='userPswd']");

    if (!userName.value) {
      alert("USER NAME은 반드시 입력해야합니다.");
      userName.focus();
      return false;
    }
    if (!userPswd.value) {
      alert("PASSWORD는 반드시 입력해야합니다.");
      userPswd.focus();
      return false;
    }
    login_from.submit();
  };
  document.querySelector("#login_btn").addEventListener("click", login);
  document.querySelector("#join_btn").addEventListener("click", () => {
    document.location.href = "join.html";
  });
});
