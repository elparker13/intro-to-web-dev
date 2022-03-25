// Array of objects representing a todo list.
// Modify this array to contain your own list.
const mountainsArray = [
  {title: 'Why We Sleep', pages: 368, author: 'Mathew Walker' },
  {title: 'The Happiness Project', pages:343, author: 'Gretchen Rubin'},
  {title: 'How to Win Friends and Influence People', pages:291, author: 'Dale Carnegie'},
  {title: 'Checklist Manifesto', pages:208, author: 'Atul Gawande'},
  {title: 'Running for My Life', pages:240, author:'Lopez Lomong' },
  {title: 'Into Thin Air', pages:332, author: 'Jon Krakauer' },
  {title: 'Subtle Art of Not Giving a F*ck', pages:224, author: 'Mark Manson' },
  {title: 'Everything is F*cked', pages: 288, author: 'Mark Manson' },
  {title: 'Rich Dad, Poor Dad', pages: 195, author: 'Robert Kiyosaki' },
  {title: 'Rich Woman', pages:274, author: 'Kim Kiyosaki' },
  {title: 'Millionaire Next Door', pages:258, author: 'Thomas Stanley' },
  {title: 'The Cancer Diaries', pages:200, author: 'David Farmer' },


];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  mountainsArray.sort((a, b) => compare(a.title, b.title));

  loadTable();
  loadSmallestMountain();
  loadAverage ();
}

// Adds a task to the array and reloads the page content.
function addNewMountain() {
  const newBookTitle = document.getElementById('title-input').value;
  const newBookPages = document.getElementById('pages-input').value;
  const newBookAuthor = document.getElementById('author-input').value;
  const newBook = {title: newMountainTitle, pages: newMountainPages, author: newMountainAuthor};
  mountainsArray.push(newMountain);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', 'Index'));
  headerRowElement.appendChild(createElement('th', 'Title'));
  headerRowElement.appendChild(createElement('th', 'Pages'));
  headerRowElement.appendChild(createElement('th', 'Author'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < mountainsArray.length; i++) {
    const mountain = mountainsArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', book.title));
    rowElement.appendChild(createElement('td', book.pages));
    rowElement.appendChild(createElement('td', book.author));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest book.
function loadSmallestMountain(){
  // Assume the first book is shortest
  let smallestMountain = mountainsArray[0];

  // Starting with the second book, look for a shorter book
  for (let i = 0; i < mountainsArray.length; i++) {
    const mountain = mountainsArray[i];
    // If this book is shorter than the previous shortest, it's now the shortest
    if(book.pages < smallestMountain.pages) {
      smallestMountain = book;
    }
  }
  document.getElementById('smallest-mountain').innerText = smallestMountain.title;
}

//average pages in the books//
function loadAverage (){
  let total = 0;
 for(let i = 0; i < mountainsArray.length; i++){
    console.log (total)
   const book = mountainsArray[i];
    total += Number(book.pages);

 }
  let average = total / mountainsArray.length;
  console.log (average);
  document.getElementById('average-pages').innerText = average
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
