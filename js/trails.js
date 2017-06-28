'use strict';
var key = 'selectionCriteria';
var selectionCriteria = retrieveSelectionCriteria();
var imgDiv =  document.getElementById('img');
var regionDiv = document.getElementById('region');
var mapDiv = document.getElementById('iframe');
var diffDiv = document.getElementById('difficulty');
var trailDiv = document.getElementById('trailName');

var trails = [
  {
    name: 'Seward Park',
    region: 'south',
    difficulty: 'easy',
    elevation: 2,
    quality: 2,
    distance: 2,
    imgUrl: 'images/seward_park.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43076.691630403126!2d-122.32806884815527!3d47.56208294368689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a210c77f0f1%3A0x3c791c08c886fbb8!2sSeward+Park!5e0!3m2!1sen!2sus!4v1498672560976",
    description: 'Located southeast from downtown Seattle, Seward Park resides on the Bailey Peninsula. The park is home to a variety of educational, recreational, and cultural activities. Visitors can enjoy a 2.4 mile bike and walking loop, an amphitheater, a native plant garden, an art studio, sheltered picnic areas, slightly more challenging hiking trails, a swimming beach, and more.',
    source: 'source placeholder'
  },
  {
    name: 'Lincoln Park',
    region: 'west',
    difficulty: 'easy',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl:  'images/lincoln_park.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86207.4462548341!2d-122.46680893982784!3d47.52919990131573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904139d8f5169d%3A0xe7921cfad18b2bfd!2sLincoln+Park!5e0!3m2!1sen!2sus!4v1498672726591",
    description: 'Located on the western edge of West Seattle, Lincoln park offers 5 miles of trails, including a loop hike with bluff and beachfront views of Puget Sound, Vashon Island, and the Olympic Mountains. The park is family-friendly, with a wading pool, playground, bathroom facilities, ball fields, and multiple trail options.',
    source: 'source placeholder'
  },
  {
    name: 'Franklin Falls',
    region: 'east',
    difficulty: 'easy',
    elevation: 2,
    quality: 2,
    distance: 2,
    imgUrl: 'images/franklin_falls.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d344953.94342366717!2d-122.1012706!3d47.5103127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549a7911c980648f%3A0xbb344ec8fced0470!2sFranklin+Falls!5e0!3m2!1sen!2sus!4v1498672486005",
    description: 'The trail to Franklin Falls combines history and natural beauty along a compact and easily accessible loop. A visit to the falls makes for a particularly enjoyable half-day\'s outing for anyone who wants to explore the Snoqualmie Pass Region but isn\'t looking for a demanding mountain hike.',
    source: '60 Hikes Within 60 Miles - Seattle'
  },
  {
    name: 'Mount Si',
    region: 'east',
    difficulty: 'hard',
    elevation: 5,
    quality: 3,
    distance: 4,
    imgUrl: 'images/mount_si.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172177.41136555056!2d-122.0507899!3d47.6013995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907eec67c1eddb%3A0x856f14b890d4a9ba!2sMt+Si!5e0!3m2!1sen!2sus!4v1498672442210",
    description: 'Just as no tourist can claim to have seen downtown Seattle without a visit to Pike Place Market, no Seattle [can claim to be a] hiker who fails to climb Mount Si. Easy to reach, physically challenging, and capped by a commanding view, the mountain known simply as Si is like a city park crossed with a serious Cascade Mountain Peak.',
    source: '60 Hikes Within 60 Miles - Seattle'
  },
  {
    name: 'Mud Mountain Lake and White River Trail',
    region: 'south',
    difficulty: 'hard',
    elevation: 4,
    quality: 4,
    distance: 4,
    imgUrl: 'images/mud_mountain_dam.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d345890.98847749043!2d-122.3063491!3d47.3675832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490eea12daeb449%3A0x6952958a9193df81!2sMud+Mountain+Dam!5e0!3m2!1sen!2sus!4v1498671170654",
    description: 'This one-of-a-kind trail follows the White River above Mud Mountain Dam, first on a high bluff and then right along the water, providing the unique opportunity to walk on a part-time lake bed. With year-round access, limited traffic, and a feel more like a riparian zone in eastern Washington than anything in the Cascades, this hike is unlike any other in the region.',
    source: '60 Hikes Within 60 Miles - Seattle',
  },
  {
    name: 'Carkeek Park',
    region: 'north',
    difficulty: 'easy',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl:  'images/carkeek_park.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85907.16058710117!2d-122.4422066398206!3d47.71162678871087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549016bbf4365cc9%3A0x10f611edb87766b5!2sCarkeek+Park!5e0!3m2!1sen!2sus!4v1498672238846",
    description: 'Carkeek Park is located in northwest Seattle, between 3rd Ave NW and Puget Sound. The park includes all of Piper\'s Creek (sometimes written without the apostrophe) plus the adjoining side hills and some side streams, plus a beach area. Park trails can be accessed from several points, and there is an access road that leads to a parking area near the beach. Park entrance is free, and official hours are daily, 6 a.m. to 10 p.m.'
  },
  {
    name: 'Mt. Pilchuk',
    region: 'north',
    difficulty: 'hard',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl: 'images/mount_pilchuck.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170738.09032246456!2d-122.15852582775993!3d48.037224266522855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549ab43233fd5bad%3A0xf0dcde198862fd33!2sMt+Pilchuck!5e0!3m2!1sen!2sus!4v1498672392420",
    description: 'Despite the foot traffic Wallace Falls sees as one of Washington’s most popular attractions, those who get out early on the trailhead will be rewarded with a serene tranquility that few other hikes in the area can offer. And unlike many trails, which sacrifice peripheral scenery on the journey for the prospect of a grand summit view, the Woody Trail is consistently gorgeous as you wind your way along the Wallace River and approach the nine dazzling falls.'
  },
  {
    name: 'Gazzam Lake Nature Preserve',
    region: 'west',
    difficulty: 'hard',
    elevation: 5,
    quality: 3,
    distance: 5,
    imgUrl: 'images/gazzam_lake.jpg',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86049.93092807384!2d-122.63388725489848!3d47.62495829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54903967903f8299%3A0xc17e8d7c939c2191!2sGazzam+Lake+Nature+Preserve!5e0!3m2!1sen!2sus!4v1498672321752",
    description: 'An easy route with a challenging finish, the main trail through Gazzam Lake Nature Preserve meanders through second-growth forest on Bainbridge Island, plunging down its finish at a small, scenic section of rocky beach.'
  }
];

main();
function main() {
  //match selectionCriteria.region to the subset of trails in the correct region
  var regionalTrails = selectRegion();
  //select best match
  var bestTrail = selectTrail(regionalTrails);
  //render best trail
  renderTrail(bestTrail);
}
function selectRegion() {
  var result = [];
  for (var i = 0; i < trails.length; i++) {
    if (selectionCriteria.region === trails[i].region) {
      result.push(trails[i]);
    }
  }
  return result;
}

function selectTrail(trailList) {
  for (var i = 0; i < trailList.length; i++) {
    if (selectionCriteria.difficulty === trailList[i].difficulty) {
      return trailList[i];
    }
  }
}

function renderTrail(trail) {

  var trailEl = document.createElement('h1');
  trailEl.textContent = trail.name;
  trailDiv.appendChild(trailEl);

  var regionEl = document.createElement('p');
  regionEl.textContent = trail.region;
  regionDiv.appendChild(regionEl);

  var diffEl = document.createElement('p');
  diffEl.textContent = trail.difficulty;
  diffDiv.appendChild(diffEl);

  var mapEl = document.createElement('iframe');
  mapEl.setAttribute('src', trail.mapUrl);
  mapEl.textContent= 'click for map';
  mapDiv.appendChild(mapEl);

  var imgEl = document.createElement('img');
  imgEl.setAttribute('src', trail.imgUrl);
  imgDiv.appendChild(imgEl);
}

//createOrUpdateEntries
function retrieveSelectionCriteria() {
  var stringifiedSelectionCriteria = localStorage.getItem(key);
  selectionCriteria = JSON.parse(stringifiedSelectionCriteria);
  return selectionCriteria;
}

// <div class="embed-responsive embed-responsive-16by9">
// <iframe class="embed-responsive-item" src="//www.youtube.com/embed/wMuNjnNyaiA" allowfullscreen></iframe>
// </div>

//turn array to objects
//event listener
//render function
