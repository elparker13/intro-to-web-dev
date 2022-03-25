// Array of objects representing a todo list.
// Modify this array to contain your own list.
const mountainArray = [
  {name: 'Mount Elbert', elevation: 14.440, distance: 5.5},
  {name: 'Mount Massive', elevation: 14.428, distance: 6.8},
  {name: 'Mount Harvard', elevation: 14.421, distance: 7.0},
  {name: 'Blanca Peak', elevation: 14.351, distance: 9.6},
  {name: 'La Plata Peak', elevation: 14.343, distance: 4.75},
  {name: 'Uncompahgre Peak', elevation: 14.321, distance: 3.5},
  {name: 'Crestone Peak', elevation: 14.300, distance: 7.0},
  {name: 'Mount Lincoln', elevation: 14.293, distance: 2.75},
  {name: 'Castle Peak', elevation: 14.279, distance: 3.0},
  {name: 'Grays Peak', elevation: 14.278, distance: 3.5},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  mountainArray.sort((a, b) => compare(a.name, b.name));

  loadTable();
  loadSmallestMountain();
  loadAverage ();
}

// Adds a task to the array and reloads the page content.
function addNewMountain() {
  const newMountainName = document.getElementById('name-input').value;
  const newMountainElevation = document.getElementById('elevation-input').value;
  const newMountainDistance = document.getElementById('distance-input').value;
  const newMountain = {name: newMountainName, elevation: newMountainElevation, distance: newMountainDistance};
  mountainArray.push(newMountain);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Name'));
  headerRowElement.appendChild(createElement('th', 'Elevation'));
  headerRowElement.appendChild(createElement('th', 'Distance'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < mountainArray.length; i++) {
    const mountain = mountainArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', mountain.name));
    rowElement.appendChild(createElement('td', mountain.elevation));
    rowElement.appendChild(createElement('td', mountain.distance));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the smallest mountain.
function loadSmallestMountain(){
  // Assume the first mountain is smallest
  let smallestMountain = mountainArray[0];

  // Starting with the second mountain, look for a smallet mountain
  for (let i = 0; i < mountainArray.length; i++) {
    const mountain = mountainArray[i];
    // If this mountain is smallet than the previous smallest, it's now the smallest
    if(mountain.elevation < smallestMountain.elevation) {
      smallestMountain = mountain;
    }
  }
  document.getElementById('smallest-mountain').innerText = smallestMountain.name;
}

//average distance of hike on the mountains//
function loadAverage (){
  let total = 0;
 for(let i = 0; i < mountainArray.length; i++){
    console.log (total)
   const mountain = mountainArray[i];
    total += Number(mountain.distance);

 }
  let average = total / mountainArray.length;
  console.log (average);
  document.getElementById('average-distance').innerText = average
  }



// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}
