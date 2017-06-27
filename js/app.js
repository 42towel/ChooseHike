'use strict';

var formParent = document.getElementById('formTrailSelector');
// on submit get the data, store it in localStorage, and send user to new trails.html
formParent.addEventListener('submit', function(e) {
  e.preventDefault();
  var region = e.target.regionForm.value;
  var difficulty = e.target.difficultyForm.value;
  window.location.href = 'trails.html';
});



function Trail(name, region, difficulty, elevation, quality, distance, imgUrl, mapUrl, description, source) {
  this.name = name;
  this.region = region;
  this.difficulty = difficulty;
  this.elevation = elevation;
  this.quality = quality;
  this.distance = distance;
  this.imgUrl = imgUrl;
  this.mapUrl = mapUrl;
  this.description = description;
  this.source = source;
}

var trails = [
  ['Seward Park', 'south', 'easy', 2, 2, 2, 'http://www.wta.org/site_images/hikes/seward-park_marley.jpeg/@@images/9013d4c3-61b0-4c3a-a384-5af755b530c8.jpeg', '', 'Located southeast from downtown Seattle, Seward Park resides on the Bailey Peninsula. The park is home to a variety of educational, recreational, and cultural activities. Visitors can enjoy a 2.4 mile bike and walking loop, an amphitheater, a native plant garden, an art studio, sheltered picnic areas, slightly more challenging hiking trails, a swimming beach, and more.' ],
  ['Lincoln Park', 'west', 'easy', 2, 1, 2, 'http://www.wta.org/site_images/hikes/dscn6977.jpg/@@images/4e590d0c-7479-40bd-8eb4-55b4c7ef51c3.jpeg', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.982881513204!2d-122.39895978525442!3d47.529196279179644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904139d8f5169d%3A0xe7921cfad18b2bfd!2sLincoln+Park!5e0!3m2!1sen!2sus!4v1498523071389" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>', 'Located on the western edge of West Seattle, Lincoln park offers 5 miles of trails, including a loop hike with bluff and beachfront views of Puget Sound, Vashon Island, and the Olympic Mountains. The park is family-friendly, with a wading pool, playground, bathroom facilities, ball fields, and multiple trail options.'],
  ['Franklin Falls', 'east', 'easy', 2, 2, 2, 'images/franklin_falls.jpg', 'https://goo.gl/maps/TBv5xjqZJwk', 'The trail to Franklin Falls combines history and natural beauty along a compact and easily accessible loop. A visit to the falls makes for a particularly enjoyable half-day\'s outing for anyone who wants to explore the Snoqualmie Pass Region but isn\'t looking for a demanding mountain hike.', '60 Hikes Within 60 Miles - Seattle'],
  ['Mount Si', 'east', 'hard', 5, 3, 4, 'images/mount_si.jpg', 'https://goo.gl/maps/pJR8X8MW1rF2', 'Just as no tourist can claim to have seen downtown Seattle without a visit to Pike Place Market, no Seattle [can claim to be a] hiker who fails to climb Mount Si. Easy to reach, physically challenging, and capped by a commanding view, the mountain known simply as Si is like a city park crossed with a serious Cascade Mountain Peak.', '60 Hikes Within 60 Miles - Seattle'],
  ['Mud Mountain Lake and White River Trail', 'south', 'hard', 4, 4, 4, 'images/mud_mountain_dam.jpg', 'https://goo.gl/maps/ctvaYHwkmjr', 'This one-of-a-kind trail follows the White River above Mud Mountain Dam, first on a high bluff and then right along the water, providing the unique opportunity to walk on a part-time lake bed. With year-round access, limited traffic, and a feel more like a riparian zone in eastern Washington than anything in the Cascades, this hike is unlike any other in the region.', '60 Hikes Within 60 Miles - Seattle'],
  ['Carkeek Park', 'north', 'easy', 2, 1, 2,'https://www.seattle.gov/images/Departments/ParksAndRecreation/Parks/ABC/CarkeekPark4.jpg','<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5369.197908575824!2d-122.37622430227975!3d47.71162317919178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549016bbf4365cc9%3A0x10f611edb87766b5!2sCarkeek+Park!5e0!3m2!1sen!2sus!4v1498524648141" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>','Carkeek Park is located in northwest Seattle, between 3rd Ave NW and Puget Sound. The park includes all of Piper\'s Creek (sometimes written without the apostrophe) plus the adjoining side hills and some side streams, plus a beach area. Park trails can be accessed from several points, and there is an access road that leads to a parking area near the beach. Park entrance is free, and official hours are daily, 6 a.m. to 10 p.m.'],
  ['Mt. Pilchuk', 'north', 'hard', 2, 1, 2,'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mount_Pilchuck_in_winter.jpg/1200px-Mount_Pilchuck_in_winter.jpg','<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42661.36135738642!2d-121.82202815283017!3d48.0651746936055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549ab43233fd5bad%3A0xf0dcde198862fd33!2sMt+Pilchuck!5e0!3m2!1sen!2sus!4v1498538592111" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>','Despite the foot traffic Wallace Falls sees as one of Washington’s most popular attractions, those who get out early on the trailhead will be rewarded with a serene tranquility that few other hikes in the area can offer. And unlike many trails, which sacrifice peripheral scenery on the journey for the prospect of a grand summit view, the Woody Trail is consistently gorgeous as you wind your way along the Wallace River and approach the nine dazzling falls.'],
  ['Gazzam Lake Nature Preserve', 'west', 'hard', 5, 3, 5, 'http://www.wta.org/site_images/hikes/close-beach-whitebark.jpg/@@images/2534d4fe-7ef6-4b0c-b05b-41654c2e5f48.jpeg', '"https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d172150.0915753973!2d-122.5637!3d47.6097!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d47.6097!2d-122.5637!5e0!3m2!1sen!2sus!4v1498579808329"', 'An easy route with a challenging finish, the main trail through Gazzam Lake Nature Preserve meanders through second-growth forest on Bainbridge Island, plunging down its finish at a small, scenic section of rocky beach. '],
];

//create parent for renderTrial
