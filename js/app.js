'use strict'

//arrray of trails
//['name', 'region', 'difficulty', 'elevation', 'quality', 'distance', 'imgUrl', 'mapUrl', 'description']
//rating system: length 1mi = 1, >=5 = 5, MathFloor
var trails = [
    ['Lincoln Park', 'west', 'easy', 2, 1, 2, 'http://www.wta.org/site_images/hikes/dscn6977.jpg/@@images/4e590d0c-7479-40bd-8eb4-55b4c7ef51c3.jpeg', '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2693.982881513204!2d-122.39895978525442!3d47.529196279179644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54904139d8f5169d%3A0xe7921cfad18b2bfd!2sLincoln+Park!5e0!3m2!1sen!2sus!4v1498523071389" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>', 'Located on the western edge of West Seattle, Lincoln park offers 5 miles of trails, including a loop hike with bluff and beachfront views of Puget Sound, Vashon Island, and the Olympic Mountains. The park is family-friendly, with a wading pool, playground, bathroom facilities, ball fields, and multiple trail options.'],
    ['Seward Park', 'south', 'easy', 2, 2, 2, 'http://www.wta.org/site_images/hikes/seward-park_marley.jpeg/@@images/9013d4c3-61b0-4c3a-a384-5af755b530c8.jpeg', < iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172388.17433190768!2d-122.42183369098669!3d47.537326982291574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3c791c08c886fbb8!2sSeward+Park!5e0!3m2!1sen!2sus!4v1498578987977" width = "600" height = "450" frameborder = "0" style = "border:0" allowfullscreen > < /iframe>, 'Located southeast from downtown Seattle, Seward Park resides on the Bailey Peninsula. The park is home to a variety of educational, recreational, and cultural activities. Visitors can enjoy a 2.4 mile bike and walking loop, an amphitheater, a native plant garden, an art studio, sheltered picnic areas, slightly more challenging hiking trails, a swimming beach, and more.' ],

    ['Gazzam Lake Nature Preserve', 'west', 5, 5, 3, 5, 'http://www.wta.org/site_images/hikes/close-beach-whitebark.jpg/@@images/2534d4fe-7ef6-4b0c-b05b-41654c2e5f48.jpeg', <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d172150.0915753973!2d-122.5637!3d47.6097!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d47.6097!2d-122.5637!5e0!3m2!1sen!2sus!4v1498579808329" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>, 'An easy route with a challenging finish, the main trail through Gazzam Lake Nature Preserve meanders through second-growth forest on Bainbridge Island, plunging down its finish at a small, scenic section of rocky beach. '],
    [], [],
      [],
      [],
      []
    ];


    //load in trail data
    //name
    //region
    //elevation
    //quality
    //distance
    //image url
    //map url
    //description
