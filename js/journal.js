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
  for (var i = 0; i < journalEntryArray.length; i++) {
    renderEntry(journalEntryArray[i]);
  }

}

submit.addEventListener('submit', function(e) {
  e.preventDefault();
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
  var div = document.createElement('div');
  var h2 = document.createElement('h2');
  h2.textContent = entry.title;
  var h3 = document.createElement('h3');
  h3.textContent = entry.trail;
  var hr = document.createElement('hr');
  var p = document.createElement('p');
  p.textContent = entry.entry;
  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(hr);
  div.appendChild(p);
  journal.appendChild(div);
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
