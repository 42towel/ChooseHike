'use strict';
var key = 'selectionCriteria';
var selectionCriteria = retrieveSelectionCriteria();
var imgDiv =  document.getElementById('img');
var regionDiv = document.getElementById('region');
var mapDiv = document.getElementById('iframe');
var diffDiv = document.getElementById('difficulty');
var trailDiv = document.getElementById('trailName');
var citeDiv = document.getElementById('cite');


var trails = [
  {
    name: 'Seward Park',
    region: 'south',
    difficulty: 'easy',
    elevation: 2,
    quality: 2,
    distance: 2,
    imgUrl: 'images/seward_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d43076.691630403126!2d-122.32806884815527!3d47.56208294368689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906a210c77f0f1%3A0x3c791c08c886fbb8!2sSeward+Park!5e0!3m2!1sen!2sus!4v1498672560976',
    description: 'Located southeast from downtown Seattle, Seward Park resides on the Bailey Peninsula. The park is home to a variety of educational, recreational, and cultural activities. Visitors can enjoy a 2.4 mile bike and walking loop, an amphitheater, a native plant garden, an art studio, sheltered picnic areas, slightly more challenging hiking trails, a swimming beach, and more.'
  },
  {
    name: 'Mud Mountain Lake and White River Trail',
    region: 'south',
    difficulty: 'hard',
    elevation: 4,
    quality: 4,
    distance: 4,
    imgUrl: 'images/mud_mountain_dam.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d345890.98847749043!2d-122.3063491!3d47.3675832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490eea12daeb449%3A0x6952958a9193df81!2sMud+Mountain+Dam!5e0!3m2!1sen!2sus!4v1498671170654',
    description: 'No details available.'
  },
  {
    name: 'Lincoln Park',
    region: 'west',
    difficulty: 'easy',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl:  'images/lincoln_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86207.4462548341!2d-122.46680893982784!3d47.52919990131573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904139d8f5169d%3A0xe7921cfad18b2bfd!2sLincoln+Park!5e0!3m2!1sen!2sus!4v1498672726591',
    description: 'Located on the western edge of West Seattle, Lincoln park offers 5 miles of trails, including a loop hike with bluff and beachfront views of Puget Sound, Vashon Island, and the Olympic Mountains. The park is family-friendly, with a wading pool, playground, bathroom facilities, ball fields, and multiple trail options.',
    source: 'source placeholder'
  },
  {
    name: 'Gazzam Lake Nature Preserve',
    region: 'west',
    difficulty: 'hard',
    elevation: 5,
    quality: 3,
    distance: 5,
    imgUrl: 'images/gazzam_lake.jpg',
    citeUrl: 'https://www.flickr.com/photos/loneconspirator/3755432517/in/photostream/',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86049.93092807384!2d-122.63388725489848!3d47.62495829999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54903967903f8299%3A0xc17e8d7c939c2191!2sGazzam+Lake+Nature+Preserve!5e0!3m2!1sen!2sus!4v1498672321752',
    description: 'An easy route with a challenging finish, the main trail through Gazzam Lake Nature Preserve meanders through second-growth forest on Bainbridge Island, plunging down its finish at a small, scenic section of rocky beach.'
  },
  {
    name: 'Carkeek Park',
    region: 'north',
    difficulty: 'easy',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl:  'images/carkeek_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85907.16058710117!2d-122.4422066398206!3d47.71162678871087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549016bbf4365cc9%3A0x10f611edb87766b5!2sCarkeek+Park!5e0!3m2!1sen!2sus!4v1498672238846',
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
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170738.09032246456!2d-122.15852582775993!3d48.037224266522855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549ab43233fd5bad%3A0xf0dcde198862fd33!2sMt+Pilchuck!5e0!3m2!1sen!2sus!4v1498672392420',
    description: 'Despite the foot traffic Wallace Falls sees as one of Washington’s most popular attractions, those who get out early on the trailhead will be rewarded with a serene tranquility that few other hikes in the area can offer. And unlike many trails, which sacrifice peripheral scenery on the journey for the prospect of a grand summit view, the Woody Trail is consistently gorgeous as you wind your way along the Wallace River and approach the nine dazzling falls.'
  },
  {
    name: 'Franklin Falls',
    region: 'east',
    difficulty: 'easy',
    elevation: 2,
    quality: 2,
    distance: 2,
    imgUrl: 'images/franklin_falls.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d344953.94342366717!2d-122.1012706!3d47.5103127!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549a7911c980648f%3A0xbb344ec8fced0470!2sFranklin+Falls!5e0!3m2!1sen!2sus!4v1498672486005',
    description: 'WTA has done trail work here for the last ten years, building walls and rocks steps and constructing bridges to make this trail as safe as possible for even the smallest of hikers. There are a few spots where bits of the trail have been washed out, or handrails haven’t been installed, but overall you can feel confident in bringing your youngsters here for a safe and fun day on the trail. The trail includes a number of stairs with a very gentle incline that is easily hiked. As you hike, you\'ll be enshrouded in a thick canopy of coniferous trees which makes it a great trail to do on a hot day.'
  },
  {
    name: 'Mount Si',
    region: 'east',
    difficulty: 'hard',
    elevation: 5,
    quality: 3,
    distance: 4,
    imgUrl: 'images/mount_si.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d172177.41136555056!2d-122.0507899!3d47.6013995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907eec67c1eddb%3A0x856f14b890d4a9ba!2sMt+Si!5e0!3m2!1sen!2sus!4v1498672442210',
    description: 'To call Mount Si a popular trail is an understatement. It is hiked each year by upwards of 100,000 people. Its rugged beauty and its proximity to Seattle all but guarantee that the parking lot is overflowing on any nice (and many a not-so-nice) day.'
  },
  {
    name: 'Schmitz Preserve Park',
    region: 'west',
    difficulty: '',
    elevation: 2,
    quality: 2,
    distance: 2,
    imgUrl: 'images/schmitz_park.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d43050.7483327131!2d-122.38992733567916!3d47.593626003196505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sschmitz+park!5e0!3m2!1sen!2sus!4v1498751374702',
    description: 'It\'s astonishing to find, in the middle of West Seattle, as many old growth trees as you might see in a whole season of hiking at Tiger Mountain. But Schmitz Preserve Park offers exactly that! The 53.1 acre park was formed from land donated to the city between 1908 and 1912, before the area had been completely logged. The largest parcel was donated by German immigrants Ferdinand and Emma Schmitz, after whom the park is named.'
  },
  {
    name: 'Blake Island State Park',
    region: 'west',
    difficulty: '',
    elevation: 2,
    quality: 4,
    distance: 4,
    imgUrl: 'images/blake_island.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d86117.25073107485!2d-122.46339803361965!3d47.584050420317176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sblake+island+state+park!5e0!3m2!1sen!2sus!4v1498751765863',
    description: 'Originally home to the Suquamish Indian tribe and legendary for being the supposed birthplace of Chief Sealth, over the years Blake Island has also served as a timber source, a private estate, Army base, and even a smuggler’s refuge. It now may be best known for Tillicum Village, a Native American re-enactment retreat accessible via ferry from nearby Seattle.'
  },
  {
    name: 'Green Mountain - Gold Creek Trail',
    region: 'west',
    difficulty: '',
    elevation: 3,
    quality: 2,
    distance: 3,
    imgUrl: 'images/gold_creek.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d343501.67981191643!2d-122.6926593773973!3d47.73087868196898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490339243f8d50d%3A0xf689ee87c2c14107!2sGreen+Mountain!5e0!3m2!1sen!2sus!4v1498753558916',
    description: 'The Gold Creek Trail up Green Mountain heads through a working forest, so be aware that there may be closures due to logging activity. However, DNR will often provide well-marked detours, so even if they\'re working away, you will have somewhere to hike on this hill.'
  },
  {
    name: 'Skagit Wildlife Area',
    region: 'north',
    difficulty: '',
    elevation: 1,
    quality: 2,
    distance: 2,
    imgUrl: 'images/skagit_wildlife_area.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d683766.5874832192!2d-122.93409322387531!3d47.97576932018909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548567eb925893ed%3A0xa58d13bda4252378!2sSkagit+Wildlife+Area!5e0!3m2!1sen!2sus!4v1498754396504',
    description: 'Each year, from fall to spring, this area is a bird paradise, with snow geese and trumpeter and tundra swans overwintering in huge numbers. There are several access points in the wildlife refuge. The Headquarters area has a 2-mile trail, and Big Ditch, Wylie Slough and Fir Island are also popular walking access areas.'
  },
  {
    name: '',
    region: 'north',
    difficulty: '',
    elevation: 0,
    quality: 0,
    distance: 0,
    imgUrl: '',
    mapUrl: '',
    description: ''
  },
  {
    name: '',
    region: 'north',
    difficulty: '',
    elevation: 0,
    quality: 0,
    distance: 0,
    imgUrl: '',
    mapUrl: '',
    description: ''
  },
  {
    name: '',
    region: 'east',
    difficulty: '',
    elevation: 0,
    quality: 0,
    distance: 0,
    imgUrl: '',
    mapUrl: '',
    description: ''
  },
  {
    name: '',
    region: 'east',
    difficulty: '',
    elevation: 0,
    quality: 0,
    distance: 0,
    imgUrl: '',
    mapUrl: '',
    description: ''
  },
  {
    name: 'Boulder Cave',
    region: 'east',
    difficulty: '',
    elevation: 1,
    quality: 4,
    distance: 1,
    imgUrl: 'images/boulder_cave.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174272.3530105703!2d-121.22509707870256!3d46.9615816403057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490ab4bf43de1cb%3A0x7735b9c562af4c95!2sBoulder+Cave+Trail!5e0!3m2!1sen!2sus!4v1498759161059',
    description: 'Boulder Cave formed more than 10 million years ago through a unique process. When the Yakima Basalt Formation--a series of lava flows with sediment deposits--covered the area. Devil Creek eventually eroded these deposits, causing sediment to collapse and the caves to form. A short hike to the natural wonders left behind by the erosion process makes this trail popular on summer weekends.'
  },
  {
    name: 'Carbon River',
    region: 'south',
    difficulty: '',
    elevation: 3,
    quality: 5,
    distance: 5,
    imgUrl: 'images/carbon_river.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21773.638716912767!2d-121.97894446220153!3d46.98713173855813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490dcdb3f881135%3A0xf83df36cf409f79b!2sCarbon+River+Ranger+Station!5e0!3m2!1sen!2sus!4v1498755782111',
    description: 'Carbon River Road is a 9.8 mile moderately trafficked out and back trail located near Buckley, Washington that features a river and is good for all skill levels. The trail offers a number of activity options and is best used from March until October.'
  },
  {
    name: 'Nisqually National Wildlife Area',
    region: 'south',
    difficulty: '',
    elevation: 1,
    quality: 5,
    distance: 3,
    imgUrl: 'images/nisqually_wildlife.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10869.367908138647!2d-122.7214312324478!3d47.07275703269652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54910912fec78425%3A0x66f51cfd6e6f5487!2sBilly+Frank+Jr.+Nisqually+National+Wildlife+Refuge!5e0!3m2!1sen!2sus!4v1498756267111',
    description: 'The refuge was created in 1974 to protect the diverse fish and wildlife that call the Nisqually River Delta home. In addition to a myriad bird species, harbor seals, otters, salmon, and many other animals enjoy these expansive tideflats, and interested hikers can while away many hours watching active wildlife. Before you start your hiking, you\'ll want to be sure and have binoculars.'
  },
  {
    name: 'South Coldwater Trail',
    region: 'south',
    difficulty: '',
    elevation: 3,
    quality: 3,
    distance: 3,
    imgUrl: 'images/coldwater_trail.jpg',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44102.531788496344!2d-122.2528489058629!3d46.30172935431981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5496a29af9bcfdff%3A0xae945e5cbbdfb8ed!2sJohnston+Ridge+Observatory!5e0!3m2!1sen!2sus!4v1498758506269',
    description: 'This early or late-season hike takes you for a ridge walk high above Coldwater Lake, which was not a standing body of water prior to the massive eruption of Mount St. Helens in 1980. You\'ll walk through a serene willow forest, marvel at the power of nature when you encounter twisted hulks of logging machinery, and see plenty of gnarled stumps where tall evergreens once stood.'
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
  // mapEl.textContent= 'click for map';
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

//createOrUpdateEntries
function retrieveSelectionCriteria() {
  var stringifiedSelectionCriteria = localStorage.getItem(key);
  selectionCriteria = JSON.parse(stringifiedSelectionCriteria);
  return selectionCriteria;
}


//turn array to objects
//event listener
//render function
