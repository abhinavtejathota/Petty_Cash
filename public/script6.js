document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("#reportTable tbody");

  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  const datePairs = [
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
    ["", ""],
  ];

  datePairs.forEach(([rightDate, leftDate], index) => {
    const row = document.createElement("tr");
    const leftData = data[index] || {};

    row.innerHTML = `
            <td>${leftDate}</td>
            <td>${leftData.income ? leftData.income.toFixed(2) : ""}</td>
            <td>${leftData.expense ? leftData.expense.toFixed(2) : ""}</td>
            <td>${leftData.cb ? leftData.cb.toFixed(2) : ""}</td>
            <td>${rightDate}</td>
            <td></td>
            <td></td>
            <td></td>
        `;

    tableBody.appendChild(row);
  });
});
