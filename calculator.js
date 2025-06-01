const resultField = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      resultField.value = "";
    } else if (value === "=") {
      try {
        resultField.value = eval(resultField.value);
      } catch {
        resultField.value = "Error";
      }
    } else {
      resultField.value += value;
    }
  });
});
