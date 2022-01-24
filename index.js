let item = [];
let name = document.getElementById("name");
let date = document.getElementById("date");
let amount = document.getElementById("amount");
let table = document.getElementById("table");
let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (name.value != "" && date.value != "" && amount.value != "") {
    item.push({ name: name.value, amount: amount.value, date: date.value });
    name.value = "";
    amount.value = "";
    date.value = "";
  }
  Submit(item);
});
function Submit(itm) {
  let item1 = `<tr>
  <th>Name</th>
  <th>Date</th>
  <th>Amount</th>
  <th></th>
  </tr>`;

  for (let i = 0; i < itm.length; i++) {
    item1 += `<tr>
      <td>${itm[i].name}</td>
      <td>${itm[i].date}</td>
      <td>${itm[i].amount}</td>
      <td> <input type="button" value="X" onclick="remove(${i})" /></td>
      <tr> `;
  }
  table.innerHTML = item1;
}
function remove(index) {
  item.splice(index, 1);
  Submit(item);
}
