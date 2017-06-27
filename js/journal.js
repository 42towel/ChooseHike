'use strict';


var journal = document.getElementById('journal');
var key = 'storeJournal';
var submit = document.getElementById('createEntry');
var journalEntryArray = retrieveEntries();

if (!journalEntryArray) journalEntryArray = [];
//constructor for Journal entries

printJournal();

function printJournal() {
  while (journal.firstChild) {
    journal.removeChild(journal.firstChild);
  }
  for (var i=0; i < journalEntryArray.length; i++) {
    renderEntry(journalEntryArray[i]);
  }
  
}

submit.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log("this just happened");
  var trail = e.target.trail.value;
  var title = e.target.title.value;
  var entry = e.target.entry.value;
  var myEntry = new JournalEntry(trail, title, entry);
  journalEntryArray.unshift(myEntry);
  printJournal();
  createOrUpdateEntries(journalEntryArray);
});


function JournalEntry(trail, title, entry) {
  this.trail = trail;
  this.title = title;
  this.entry = entry;
}

function renderEntry(entry) {
  var h2Title = document.createElement('h2');
  h2Title.textContent = entry.title;
  var h3Trail = document.createElement('h3');
  h3Trail.textContent = entry.trail;
  var pEntry = document.createElement('p');
  pEntry.textContent = entry.entry;
  journal.appendChild(h2Title);
  journal.appendChild(h3Trail);
  journal.appendChild(pEntry);
}


function createOrUpdateEntries(entries) {
  var stringifiedEntries = JSON.stringify(entries);
  localStorage.setItem(key, stringifiedEntries);
  return stringifiedEntries;
}

function retrieveEntries() {
  var stringifiedEntries = localStorage.getItem(key);
  var entries = JSON.parse(stringifiedEntries);
  return entries;
}
