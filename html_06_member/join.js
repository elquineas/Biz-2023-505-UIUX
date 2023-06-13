// JSON Javascript Object Notation
// 자바 스크립트에서 처음으로 사용하기시작한 독특한 data 객체
// INPUT_INDEX.USERNAME = 0과 유사한 코드
const INPUT_INDEX = {
  USERNAME: 0,
  PASSWORD: 1,
  RE_PASSWORD: 2,
  EMAIL: 3,
  TEL: 4,
};

document.addEventListener("DOMContentLoaded", () => {
  const join = () => {
    const join_inputs = document.querySelectorAll("#join_form input");
    if (!join_inputs[INPUT_INDEX.USERNAME].value) {
      alert("User Name is required.");
      join_inputs[INPUT_INDEX.USERNAME].focus();
      return false;
    }
    const input_password = join_inputs[INPUT_INDEX.PASSWORD].value;
    if (!input_password) {
      alert("Password is required.");
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }
    const password_check =
      /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (!password_check.test(input_password)) {
      alert(
        "Password must be 8 to 15 digits including \nspecial characters, uppercase and lowercase letters, and numbers."
      );
      join_inputs[INPUT_INDEX.PASSWORD].focus();
      return false;
    }

    const input_re_password = join_inputs[INPUT_INDEX.RE_PASSWORD].value;
    if (!input_re_password) {
      alert("Password Check is required.");
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }
    if (input_password !== input_re_password) {
      alert("Passwords do not match.");
      join_inputs[INPUT_INDEX.RE_PASSWORD].value = "";
      join_inputs[INPUT_INDEX.RE_PASSWORD].focus();
      return false;
    }

    const input_email = join_inputs[INPUT_INDEX.EMAIL].value;
    if (!input_email) {
      alert("E-Mail is required.");
      join_inputs[INPUT_INDEX.EMAIL].focus();
      return false;
    }
    const email_check =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!email_check.test(input_email)) {
      alert("Email format is incorrect.");
      join_inputs[INPUT_INDEX.EMAIL].focus();
      return false;
    }

    const input_tel = join_inputs[INPUT_INDEX.TEL].value;
    if (!input_tel) {
      alert("Phone is required.");
      join_inputs[INPUT_INDEX.TEL].focus();
      return false;
    }
    const tel_check = /^\d{3}-\d{3,4}-\d{4}$/;
    if (!tel_check.test(input_tel)) {
      alert(
        "The phone number format is incorrect.\nex) 000-000-0000, 000-0000-0000"
      );
      join_inputs[INPUT_INDEX.TEL].focus();
      return false;
    }
  };
  document.querySelector("#join_btn").addEventListener("click", join);
});
