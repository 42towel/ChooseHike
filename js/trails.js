'use strict';
var key = 'selectionCriteria';
var selectionCriteria = retrieveSelectionCriteria();

// function Trail(name, region, difficulty, elevation, quality, distance, imgUrl, mapUrl, description, source) {
//   this.name = name;
//   this.region = region;
//   this.difficulty = difficulty;
//   this.elevation = elevation;
//   this.quality = quality;
//   this.distance = distance;
//   this.imgUrl = imgUrl;
//   this.mapUrl = mapUrl;
//   this.description = description;
//   this.source = source;
// }

var trails = [
  {
    trail: 'Seward Park',
    region: 'south',
    difficulty: 'easy',
    elevation: 2,
    quality: 2,
    distance: 2,
    imgUrl: 'http://www.wta.org/site_images/hikes/seward-park_marley.jpeg/@@images/9013d4c3-61b0-4c3a-a384-5af755b530c8.jpeg',
    map: 'map placeholder',
    description: 'Located southeast from downtown Seattle, Seward Park resides on the Bailey Peninsula. The park is home to a variety of educational, recreational, and cultural activities. Visitors can enjoy a 2.4 mile bike and walking loop, an amphitheater, a native plant garden, an art studio, sheltered picnic areas, slightly more challenging hiking trails, a swimming beach, and more.',
    source: 'source placeholder'
  },
  {
    trail: 'Lincoln Park',
    region: 'west',
    difficulty: 'easy',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl:  'http://www.wta.org/site_images/hikes/dscn6977.jpg/@@images/4e590d0c-7479-40bd-8eb4-55b4c7ef51c3.jpeg',
    map: 'https://goo.gl/maps/yAYQJDnsr8S2',
    description: 'Located on the western edge of West Seattle, Lincoln park offers 5 miles of trails, including a loop hike with bluff and beachfront views of Puget Sound, Vashon Island, and the Olympic Mountains. The park is family-friendly, with a wading pool, playground, bathroom facilities, ball fields, and multiple trail options.',
    source: 'source placeholder'
  },
  {
    trail: 'Franklin Falls',
    region: 'east',
    difficulty: 'easy',
    elevation: 2,
    quality: 2,
    distance: 2,
    imgUrl: 'images/franklin_falls.jpg',
    map: 'https://goo.gl/maps/TBv5xjqZJwk',
    description: 'The trail to Franklin Falls combines history and natural beauty along a compact and easily accessible loop. A visit to the falls makes for a particularly enjoyable half-day\'s outing for anyone who wants to explore the Snoqualmie Pass Region but isn\'t looking for a demanding mountain hike.',
    source: '60 Hikes Within 60 Miles - Seattle'
  },
  {
    trails: 'Mount Si',
    region: 'east',
    difficulty: 'hard',
    elevation: 5,
    quality: 3,
    distance: 4,
    imgUrl: 'images/mount_si.jpg',
    map: 'https://goo.gl/maps/pJR8X8MW1rF2',
    description: 'Just as no tourist can claim to have seen downtown Seattle without a visit to Pike Place Market, no Seattle [can claim to be a] hiker who fails to climb Mount Si. Easy to reach, physically challenging, and capped by a commanding view, the mountain known simply as Si is like a city park crossed with a serious Cascade Mountain Peak.',
    source: '60 Hikes Within 60 Miles - Seattle'
  },
  {
    trail: 'Mud Mountain Lake and White River Trail',
    region: 'south',
    difficulty: 'hard',
    elevation: 4,
    quality: 4,
    distance: 4,
    imgUrl: 'images/mud_mountain_dam.jpg',
    map: 'https://goo.gl/maps/ctvaYHwkmjr',
    description: 'This one-of-a-kind trail follows the White River above Mud Mountain Dam, first on a high bluff and then right along the water, providing the unique opportunity to walk on a part-time lake bed. With year-round access, limited traffic, and a feel more like a riparian zone in eastern Washington than anything in the Cascades, this hike is unlike any other in the region.',
    source: '60 Hikes Within 60 Miles - Seattle',
  },
  {
    trail: 'Carkeek Park',
    region: 'north',
    difficulty: 'easy',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl:  'https://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/ABC/CarkeekPark4.jpg',
    map:'placeholder',
    description: 'Carkeek Park is located in northwest Seattle, between 3rd Ave NW and Puget Sound. The park includes all of Piper\'s Creek (sometimes written without the apostrophe) plus the adjoining side hills and some side streams, plus a beach area. Park trails can be accessed from several points, and there is an access road that leads to a parking area near the beach. Park entrance is free, and official hours are daily, 6 a.m. to 10 p.m.'
  },
  {
    trail: 'Mt. Pilchuk',
    region: 'north',
    difficulty: 'hard',
    elevation: 2,
    quality: 1,
    distance: 2,
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mount_Pilchuck_in_winter.jpg/1200px-Mount_Pilchuck_in_winter.jpg',
    mapUrl: 'placeholder',
    description: 'Despite the foot traffic Wallace Falls sees as one of Washington’s most popular attractions, those who get out early on the trailhead will be rewarded with a serene tranquility that few other hikes in the area can offer. And unlike many trails, which sacrifice peripheral scenery on the journey for the prospect of a grand summit view, the Woody Trail is consistently gorgeous as you wind your way along the Wallace River and approach the nine dazzling falls.'
  },
  {
    Trail: 'Gazzam Lake Nature Preserve',
    region: 'west',
    difficulty: 'hard',
    elevation: 5,
    quality: 3,
    distance: 5,
    imgUrl: 'http://www.wta.org/site_images/hikes/close-beach-whitebark.jpg/@@images/2534d4fe-7ef6-4b0c-b05b-41654c2e5f48.jpeg',
    mapUrl: 'placeholder',
    description: 'An easy route with a challenging finish, the main trail through Gazzam Lake Nature Preserve meanders through second-growth forest on Bainbridge Island, plunging down its finish at a small, scenic section of rocky beach.'
  }
];

console.log(trails);
//createOrUpdateEntries
function retrieveSelectionCriteria() {
  var stringifiedSelectionCriteria = localStorage.getItem(key);
  selectionCriteria = JSON.parse(stringifiedSelectionCriteria);
  return selectionCriteria;
}

//turn array to objects
//event listener
//render function
