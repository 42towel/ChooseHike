'use strict';
var key = 'selectionCriteria';
var selectionCriteria = retrieveSelectionCriteria();
var imgDiv =  document.getElementById('img');
var ulParent = document.getElementById('featureList');
var mapDiv = document.getElementById('iframe');
var trailDiv = document.getElementById('trailName');
var citeDiv = document.getElementById('cite');

var trails = [
  {
    name: 'Seward Park',
    region: 'south',
    elevation: 2,
    quality: 4,
    distance: 2,
    imgUrl: 'images/seward_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43076.691630403126!2d-122.32806884815527!3d47.56208294368689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a210c77f0f1%3A0x3c791c08c886fbb8!2sSeward+Park!5e0!3m2!1sen!2sus!4v1498672560976'
  },
  {
    name: 'Mud Mountain Lake and White River Trail',
    region: 'south',
    elevation: 4,
    quality: 2,
    distance: 4,
    imgUrl: 'images/mud_mountain_dam.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d345890.98847749043!2d-122.3063491!3d47.3675832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490eea12daeb449%3A0x6952958a9193df81!2sMud+Mountain+Dam!5e0!3m2!1sen!2sus!4v1498671170654'
  },
  {
    name: 'Carbon River',
    region: 'south',
    elevation: 3,
    quality: 5,
    distance: 5,
    imgUrl: 'images/carbon_river.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21773.638716912767!2d-121.97894446220153!3d46.98713173855813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490dcdb3f881135%3A0xf83df36cf409f79b!2sCarbon+River+Ranger+Station!5e0!3m2!1sen!2sus!4v1498755782111'
  },
  {
    name: 'Nisqually National Wildlife Area',
    region: 'south',
    elevation: 1,
    quality: 5,
    distance: 3,
    imgUrl: 'images/nisqually_wildlife.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10869.367908138647!2d-122.7214312324478!3d47.07275703269652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54910912fec78425%3A0x66f51cfd6e6f5487!2sBilly+Frank+Jr.+Nisqually+National+Wildlife+Refuge!5e0!3m2!1sen!2sus!4v1498756267111'
  },
  {
    name: 'South Coldwater Trail',
    region: 'south',
    elevation: 3,
    quality: 3,
    distance: 3,
    imgUrl: 'images/coldwater_trail.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44102.531788496344!2d-122.2528489058629!3d46.30172935431981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5496a29af9bcfdff%3A0xae945e5cbbdfb8ed!2sJohnston+Ridge+Observatory!5e0!3m2!1sen!2sus!4v1498758506269'
  },
  {
    name: 'Lincoln Park',
    region: 'west',
    elevation: 2,
    quality: 5,
    distance: 2,
    imgUrl:  'images/lincoln_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86207.4462548341!2d-122.46680893982784!3d47.52919990131573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904139d8f5169d%3A0xe7921cfad18b2bfd!2sLincoln+Park!5e0!3m2!1sen!2sus!4v1498672726591'
  },
  {
    name: 'Gazzam Lake Nature Preserve',
    region: 'west',
    elevation: 5,
    quality: 3,
    distance: 5,
    imgUrl: 'images/gazzam_lake.jpg',
    citeUrl: 'https://www.flickr.com/photos/loneconspirator/3755432517/in/photostream/',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86049.93092807384!2d-122.63388725489848!3d47.62495829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54903967903f8299%3A0xc17e8d7c939c2191!2sGazzam+Lake+Nature+Preserve!5e0!3m2!1sen!2sus!4v1498672321752'
  },
  {
    name: 'Schmitz Preserve Park',
    region: 'west',
    elevation: 2,
    quality: 4,
    distance: 2,
    imgUrl: 'images/schmitz_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d43050.7483327131!2d-122.38992733567916!3d47.593626003196505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschmitz+park!5e0!3m2!1sen!2sus!4v1498751374702'
  },
  {
    name: 'Blake Island State Park',
    region: 'west',
    elevation: 2,
    quality: 2,
    distance: 4,
    imgUrl: 'images/blake_island.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d86117.25073107485!2d-122.46339803361965!3d47.584050420317176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sblake+island+state+park!5e0!3m2!1sen!2sus!4v1498751765863'
  },
  {
    name: 'Green Mountain - Gold Creek Trail',
    region: 'west',
    elevation: 3,
    quality: 4,
    distance: 3,
    imgUrl: 'images/gold_creek.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343501.67981191643!2d-122.6926593773973!3d47.73087868196898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490339243f8d50d%3A0xf689ee87c2c14107!2sGreen+Mountain!5e0!3m2!1sen!2sus!4v1498753558916'
  },
  {
    name: 'Carkeek Park',
    region: 'north',
    elevation: 2,
    quality: 5,
    distance: 2,
    imgUrl:  'images/carkeek_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85907.16058710117!2d-122.4422066398206!3d47.71162678871087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549016bbf4365cc9%3A0x10f611edb87766b5!2sCarkeek+Park!5e0!3m2!1sen!2sus!4v1498672238846'
  },
  {
    name: 'Mt. Pilchuk',
    region: 'north',
    elevation: 4,
    quality: 2,
    distance: 3,
    imgUrl: 'images/mount_pilchuck.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170738.09032246456!2d-122.15852582775993!3d48.037224266522855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549ab43233fd5bad%3A0xf0dcde198862fd33!2sMt+Pilchuck!5e0!3m2!1sen!2sus!4v1498672392420'
  },
  {
    name: 'Skagit Wildlife Area',
    region: 'north',
    elevation: 1,
    quality: 4,
    distance: 2,
    imgUrl: 'images/skagit_wildlife_area.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683766.5874832192!2d-122.93409322387531!3d47.97576932018909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548567eb925893ed%3A0xa58d13bda4252378!2sSkagit+Wildlife+Area!5e0!3m2!1sen!2sus!4v1498754396504'
  },
  {
    name: 'Lake Whatcom Trail',
    region: 'north',
    elevation: 1,
    quality: 4,
    distance: 4,
    imgUrl: 'images/lake_whatcom.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1359156.3346004644!2d-123.66288273928002!3d48.29126815194429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1slake+whatcom+trail!5e0!3m2!1sen!2sus!4v1498755462315'
  },
  {
    name: 'Beaver Pond Trail',
    region: 'north',
    elevation: 2,
    quality: 3,
    distance: 1,
    imgUrl: 'images/beaver_pond.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683879.4397714676!2d-122.95168893024751!3d47.96724693790275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54856be9607cbaf1%3A0x5e652eb3d1254043!2sBeaver+Pond+Dr+N%2C+Mt+Vernon%2C+WA+98274!5e0!3m2!1sen!2sus!4v1498756067337'
  },
  {
    name: 'Franklin Falls',
    region: 'east',
    elevation: 2,
    quality: 4,
    distance: 2,
    imgUrl: 'images/franklin_falls.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d344953.94342366717!2d-122.1012706!3d47.5103127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549a7911c980648f%3A0xbb344ec8fced0470!2sFranklin+Falls!5e0!3m2!1sen!2sus!4v1498672486005'
  },
  {
    name: 'Mount Si',
    region: 'east',
    elevation: 5,
    quality: 3,
    distance: 5,
    imgUrl: 'images/mount_si.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172177.41136555056!2d-122.0507899!3d47.6013995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907eec67c1eddb%3A0x856f14b890d4a9ba!2sMt+Si!5e0!3m2!1sen!2sus!4v1498672442210'
  },
  {
    name: 'Bandera Mountain',
    region: 'east',
    elevation: 4,
    quality: 4,
    distance: 5,
    imgUrl: 'images/bandera_mountain.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344441.0756813788!2d-122.25110389317179!3d47.5882942612679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490821acdc94e61%3A0x7aad30204b9d590a!2sBandera+Mountain!5e0!3m2!1sen!2sus!4v1498756734922'
  },
  {
    name: 'Rattlesnake Mountain',
    region: 'east',
    elevation: 3,
    quality: 4,
    distance: 5,
    imgUrl: 'images/rattlesnake_mountain.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d344527.051915793!2d-122.31684497343154!3d47.575228340962134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907d092b367683%3A0x58ac9644dd367c39!2sRattlesnake+Ridge!5e0!3m2!1sen!2sus!4v1498759333802'
  },
  {
    name: 'Boulder Cave',
    region: 'east',
    elevation: 1,
    quality: 4,
    distance: 1,
    imgUrl: 'images/boulder_cave.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174272.3530105703!2d-121.22509707870256!3d46.9615816403057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490ab4bf43de1cb%3A0x7735b9c562af4c95!2sBoulder+Cave+Trail!5e0!3m2!1sen!2sus!4v1498759161059'
  }
];

main();
function main() {
  var regionalTrails = selectRegion();
  var bestTrail = selectTrail(regionalTrails);
  renderTrail(bestTrail);
}

function selectRegion() {
  if (selectionCriteria.region === 'no_preference') {
    return trails;
  }
  var result = [];
  for (var i = 0; i < trails.length; i++) {
    if (selectionCriteria.region === trails[i].region) {
      result.push(trails[i]);
    }
  }
  return result;
}

function selectTrail(trailList) {
  var concordanceArray = [];
  var bestComparison = null;
  //get array of concordance values
  for (var i = 0; i < trailList.length; i++) {
    var comparison = 0;
    comparison += Math.abs(trailList[i].distance - selectionCriteria.distance);
    comparison += Math.abs(trailList[i].elevation - selectionCriteria.elevation);
    comparison += Math.abs(trailList[i].quality - selectionCriteria.quality);
    concordanceArray.push(comparison);
    if (bestComparison === null) {
      bestComparison = comparison;
    } else {
      if (comparison < bestComparison) {
        bestComparison = comparison;
      }
    }
  }
  var bestTrailIndex = concordanceArray.indexOf(bestComparison);
  return trailList[bestTrailIndex];
}

function renderTrail(trail) {

  var trailEl = document.createElement('h2');
  trailEl.textContent = trail.name;
  trailDiv.appendChild(trailEl);

  var regionEl = document.createElement('li');
  regionEl.textContent = 'Region: ' + trail.region;
  ulParent.appendChild(regionEl);

  var elevationEl = document.createElement('li');
  elevationEl.textContent = 'Elevation: ' + trail.elevation;
  ulParent.appendChild(elevationEl);

  var qualityEl = document.createElement('li');
  qualityEl.textContent = 'Trail Quality: ' + trail.quality;
  ulParent.appendChild(qualityEl);

  var distanceEl = document.createElement('li');
  distanceEl.textContent = 'Distance: ' + trail.distance;
  ulParent.appendChild(distanceEl);

  var mapEl = document.createElement('iframe');
  mapEl.setAttribute('src', trail.mapUrl);
  mapEl.textContent = 'click for map';
  mapDiv.appendChild(mapEl);

  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', trail.imgUrl);
  imgDiv.appendChild(imgEl);

  if (trail.name === 'Gazzam Lake Nature Preserve') {
    var citeEl = document.createElement('a');
    citeEl.setAttribute('href', trail.citeUrl);
    citeEl.textContent = 'image citation';
    citeDiv.appendChild(citeEl);
  }
}


function retrieveSelectionCriteria() {
  var stringifiedSelectionCriteria = localStorage.getItem(key);
  selectionCriteria = JSON.parse(stringifiedSelectionCriteria);
  return selectionCriteria;
}
