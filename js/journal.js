'use strict';


var journal = document.getElementById('journal');
var key = 'storeJournal';
//constructor for Journal entries
function JournalEntry(trail, title, entry) {
  this.trail = trail;
  this.title = title;
  this.entry = entry;
}

function renderEntry() {
  var h2Title = document.createElement('h2');
  h2Title.textContent = this.title;
  var h3Trail = document.createElement('h3');
  h3Trail.textContent = this.trail;
  var pEntry = document.createElement('p');
  pEntry.textContent = this.entry;
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
