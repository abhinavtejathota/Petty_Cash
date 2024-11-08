document.addEventListener("DOMContentLoaded", function () {
  const cashBook = document.getElementById("cashBook");
  const openingBalance = document.getElementById("openingBalance");
  const incomeTotal = document.getElementById("incomeTotal");
  const expenseTotal = document.getElementById("expenseTotal");
  const closingBalance = document.getElementById("closingBalance");

  function addRow(date, incomeHead, incomeAmount, expenseHead, expenseAmount) {
    const row = cashBook.insertRow(-1);
    row.insertCell(0).textContent = date;
    row.insertCell(1).textContent = incomeHead;
    row.insertCell(2).textContent = incomeAmount;
    row.insertCell(3).textContent = expenseHead;
    row.insertCell(4).textContent = expenseAmount;
  }

  // Add initial data
  addRow();
  addRow();
  addRow();
  addRow();
  addRow();

  // Add event listeners for submit buttons
  document.querySelectorAll(".submit-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const form = this.closest("div");
      const head = form.querySelector("select").value;
      const amount = form.querySelector('input[type="number"]').value;
      const description = form.querySelector("textarea").value;

      if (amount && description) {
        const date = new Date().toLocaleDateString();
        if (form.classList.contains("income-form")) {
          addRow(date, head, amount, "", "");
        } else {
          addRow(date, "", "", head, amount);
        }
        // Reset form fields
        form.querySelector('input[type="number"]').value = "";
        form.querySelector("textarea").value = "";
        // Update totals (simplified)
        updateTotals();
      } else {
        alert("Please fill in all fields");
      }
    });
  });

  function updateTotals() {
    // This is a simplified version. In a real application, you'd recalculate based on all rows
    let income = parseFloat(incomeTotal.textContent);
    let expense = parseFloat(expenseTotal.textContent);
    let opening = parseFloat(openingBalance.textContent);
    let closing = opening + income - expense;
    closingBalance.textContent = closing.toFixed(2);
  }
});
