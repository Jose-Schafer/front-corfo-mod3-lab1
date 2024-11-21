export async function changeSortDirection(callback: Function, getSortAscending: Function, setSortAscending: Function, elementID: string) {
  console.log(`Change sort direction: ${getSortAscending()} -> ${!getSortAscending()}`)

  // Change sort direction
  setSortAscending((prevSortAscending) => !prevSortAscending);

  // Change button text
  const button = document.getElementById(elementID);

  if (button) {
    button.textContent = getSortAscending() ? "^" : "v";

    // Sort doctors
    callback(getSortAscending);
  }
}
