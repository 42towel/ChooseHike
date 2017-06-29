'use strict';

var key = 'selectionCriteria';

var formParent = document.getElementById('formTrailSelector');

// on submit get the data, store it in localStorage, and send user to new trails.html
formParent.addEventListener('submit', function(e) {
  e.preventDefault();
  var region = e.target.regionForm.value;
  var difficulty = e.target.difficultyForm.value;
  var selectionCriteria = {
    region: region,
    difficulty: difficulty
  };
  createOrUpdateEntries(key, selectionCriteria);
  window.location.href = 'trails.html';
});

//createOrUpdateEntries
function createOrUpdateEntries(key, selectionCriteria) {
  var stringifiedCriteria = JSON.stringify(selectionCriteria);
  localStorage.setItem(key, stringifiedCriteria);
  return stringifiedCriteria;
}
