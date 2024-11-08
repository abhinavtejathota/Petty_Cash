document.addEventListener("DOMContentLoaded", () => {
  const incomeForm = document.getElementById("incomeForm");

  incomeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newIncomeHead = document.getElementById("newIncomeHead").value;
    const description = document.getElementById("description").value;

    if (newIncomeHead && description) {
      // Send the data to the server
      fetch("/addIncomeHead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newIncomeHead, description }),
      })
        .then((response) => response.text())
        .then((data) => {
          alert(data);
          incomeForm.reset();
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error submitting the form.");
        });
    } else {
      alert("Please fill out all fields.");
    }
  });
});
