document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll(".code-box input");
    const correctPassword = "251267"; // รหัสผ่านที่ถูกต้อง
  
    // ให้เลื่อนไปยังกล่องถัดไปเมื่อพิมพ์
    inputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        if (input.value.length === 1 && index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      });
    });
  
    // ตรวจสอบรหัสผ่านเมื่อกรอกครบ
    inputs[inputs.length - 1].addEventListener("input", () => {
      const enteredPassword = Array.from(inputs).map(input => input.value).join("");
      if (enteredPassword === correctPassword) {
        // เปลี่ยนหน้า
        window.location.href = "nextpage.html";
      } else if (enteredPassword.length === 6) {
        alert("รหัสผ่านไม่ถูกต้อง!");
        inputs.forEach(input => (input.value = ""));
        inputs[0].focus();
      }
    });
  });
  