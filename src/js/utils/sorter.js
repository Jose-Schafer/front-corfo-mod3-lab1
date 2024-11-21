export async function changeSortDirection(callback, sortAscending, setSortAscending, elementID) {
  console.log(`Change sort direction: ${sortAscending} -> ${!sortAscending}`)

  // Change sort direction
  setSortAscending(!sortAscending);

  // Change button text
  const button = document.getElementById(elementID);
  button.textContent = sortAscending ? "^" : "v";

  // Sort doctors
  callback(sortAscending);
}
