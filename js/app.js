'use strict';

var key = 'selectionCriteria';

var formParent = document.getElementById('formTrailSelector');

// on submit get the data, store it in localStorage, and send user to new trails.html
formParent.addEventListener('submit', function(e) {
  e.preventDefault();
  var region = e.target.regionForm.value;
  // var difficulty = e.target.difficultyForm.value;
  var elevation = e.target.elevationForm.value;
  var distance = e.target.distanceForm.value;
  var quality = e.target.qualityForm.value;
  var selectionCriteria = {
    region: region,
    // difficulty: difficulty
    elevation: elevation,
    distance: distance,
    quality: quality
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
