document.addEventListener("DOMContentLoaded", () => {
  const d_code = document.querySelector("#d_code");
  const d_name = document.querySelector("#d_name");
  const d_tel = document.querySelector("#d_tel");
  const d_manager = document.querySelector("#d_manager");
  const d_managerTel = document.querySelector("#d_managerTel");
  const saveBtn = document.querySelector("#save");

  const btnSaveOnClick = () => {
    const sCodeText = d_code.value;
    const sNameText = d_name.value;
    const sTelText = d_tel.value;
    const sManagerText = d_manager.value;
    const sManagerTelText = d_managerTel.value;

    if (!sCodeText) {
      alert("거래처코드는 반드시 입력해야 합니다.");
      d_code.focus();
      return false;
    }
    if (!sNameText) {
      alert("거래처명은 반드시 입력해야 합니다.");
      d_name.focus();
      return false;
    }
    if (!sTelText) {
      alert("대표전화는 반드시 입력해야 합니다.");
      d_tel.focus();
      return false;
    }
    if (!sManagerText) {
      alert("담당자는 반드시 입력해야 합니다.");
      d_manager.focus();
      return false;
    }
    if (!sManagerTelText) {
      alert("담당자번호는 반드시 입력해야 합니다.");
      d_managerTel.focus();
      return false;
    }
  };

  saveBtn.addEventListener("click", btnSaveOnClick);
});
