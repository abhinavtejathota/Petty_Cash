document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");
  const expenseHeadInput = document.getElementById("expenseHead");
  const descriptionInput = document.getElementById("description");

  submitBtn.addEventListener("click", function () {
    const expenseHead = expenseHeadInput.value;
    const description = descriptionInput.value;

    if (expenseHead && description) {
      console.log("New Expense Head:", expenseHead);
      console.log("Description:", description);
      // Here you can add code to send this data to a server or perform other actions
      alert("Expense submitted successfully!");
      expenseHeadInput.value = "";
      descriptionInput.value = "";
    } else {
      alert("Please fill in all fields.");
    }
  });
});
