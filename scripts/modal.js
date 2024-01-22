$(document).ready(function(){

  // MODAL
  var modalText = {
    
      creativegan: {
        title: 'CreativeGAN',
        tag: 'ml',
        detail: "Conference paper by MIT DeCoDE lab accepted at ASME IDETC/CIE 2021 Conference. This paper proposes an automated method, named CreativeGAN, for generating novel designs. It does so by identifying components that make a design unique and modifying a GAN model such that it becomes more likely to generate designs with identified unique components. The method combines state-of-art novelty detection, segmentation, novelty localization, rewriting, and generative models for creative design synthesis. Using a dataset of bicycle designs, we demonstrate that the method can create new bicycle designs with unique frames and handles, and generalize rare novelties",
        pictures: '3',
        link: 'http://decode.mit.edu/projects/creativegan'
      },
    
      gancreate: {
        title: 'GANCREATE',
        tag: 'ml',
        detail: "Gancreate enables everyone to make videos easily. Users can quickly convert a script into an editable talking avatar and also animate it using AI motion transfer. Currently, there are 3 types of avatar, face portrait, full body 2d characters, and full body fashion models. Users can easily generate a unique avatar using our AI models. Furthermore, you can edit its attribute such as gender, age, realism and even mix between two avatars. Once you created an avatar, simply give a script or reference video as an input and the app will animate it accordingly.",
        pictures: '4',
        link: 'https://devpost.com/software/gancreate'
      },
    
      text2art: {
        title: 'Text2Art',
        tag: 'ml',
        detail: "Text2Art can generate all kind of arts from pixel art, drawings, photos, to paintings. In addition, Text 2Art also generates a video showing the process of how the art is generated.",
        pictures: '3',
        link: 'https://github.com/mfrashad/text2art'
      },
    
      clothinggan: {
        title: 'ClothingGAN',
        tag: 'ml',
        detail: "ClothingGAN is able to generate clothing images and mix these images. While mixing, you can control which structure or style that you want the clothing to copy. Additionally, you can edit the generated clothing with several given attributes such as dark color, jacket, dress, or coat.",
        pictures: '3',
        link: 'https://devpost.com/software/clothinggan'
      },
    
      aide_glass: {
        title: 'Aide Glass',
        tag: 'electronics',
        detail: "Aide Glass is a smart glasses that transcribes surrounding voices to text that will be shown on the lens. It aims to help hearing impaired people in communicating with normal people using a cheaper alternative solution than hearing aids or implants. The project uses Raspberry Pi, Python and React Native. <br><br>The project also won the Chairman's Award in 42nd Science & Engineering Design Exhibition in Malaysia out of 160 teams that participated.",
        pictures: '5',
        link: ''
      },
    
      photosketch: {
        title: 'PhotoSketch',
        tag: '',
        detail: "Hand-drawn sketch game prototyping tool app made for Hack & Roll Hackathon 2020 at NUS, Singapore organized by MLH (Major League Hacking). The app allows user to bring their hand-drawn sketch game design alive (currently limited to 2D platform game). <br>PhotoSketch uses Firebase for authentication and database, and use OpenCV hosted with Flask server to do image processing such as color filtering and game object type classification to produce the game map data. On the other hand the frontend is made using React Native. The app was built together with Chen Nuode.",
        pictures: '2',
        link: 'https://github.com/mfrashad/photosketch'
      },
    
      legacybrand: {
        title: 'Legacy Brand',
        tag: 'web',
        detail: "Legacy Brands is an online products and services subscription platform dedicated to rebuilding US inner cities. The website is made using Jekyll and integrated with Firebase authentication, Firebase cloud functions, and Stripe payment gateway for subscription system.",
        pictures: '2',
        link: 'https://www.inspiringamerica.org'
      },
    
      bustime: {
        title: 'Bustime',
        tag: 'mobile',
        detail: "Bustime is an app to track real-time location of public buses and predict their time of arrival made during 3 Days of Code Hackathon. The project consist of 2 apps, the first is Driver App for the bus driver to use which will track the bus location and the second is the user app which display the location, route and predicted time arrival of the bus to the user. Technology used are React Native as the mobile front-end and Node.js as the backend.",
        pictures: '4',
        link: ''
      },
    
      ioasis: {
        title: 'iOASIS',
        tag: 'mobile',
        detail: "A mobile app for UTP library. Students are able to search books availability from the app, manage their borrowing period, make appointment with librarians, and many more! The app was made with React Native.",
        pictures: '2',
        link: 'https://play.google.com/store/apps/details?id=com.utp.ioasis&hl=en'
      },
    
      istaid: {
        title: 'Istaid Center Website',
        tag: 'web',
        detail: "An non-profit organization website made with Ruby on Rails. Built with customized CMS (Content Management System) made from scratch using Postgresql as the database <br><br> Technologies Used:<br> • Materialize - CSS Framework<br> • Rails - Backend Framework<br> • Postgresql - Database<br> • Amazon EC2 - Hosting Server<br> • Cloudinary - Image Hosting<br>",
        pictures: '3',
        link: 'https://www.istaidcenter.com'
      },
    
      hazwan: {
        title: 'Hazwan & Alia Dental Clinic',
        tag: 'web',
        detail: "A landing page for dental clinic made with Jekyll with email-based appointment system using formspree.",
        pictures: '2',
        link: 'https://klinikpergigianhazwanalia.com'
      },
    
      dscutp: {
        title: 'DSC UTP',
        tag: 'web',
        detail: "Official website for Developer Student Clubs UTP (DSCUTP) made with Jekyll. DSC is a program by Google Developers for university students.",
        pictures: '2',
        link: 'https://dscutp.com'
      },
    
      dot_hit: {
        title: 'Dot Hit!',
        tag: 'mobile',
        detail: "Dot Hit is an 2D android game developed with Unity3D Game Engine. The game is available on Playstore<br> <br> What I learned:<br> - Improved my skills in photoshop<br> - Improved my skills in Unity3D<br> - Improved my skills in C#<br>",
        pictures: '3',
        link: 'https://play.google.com/store/apps/details?id=com.RashadProduction.Dot&hl=en'
      },
    
      cube_runner: {
        title: 'Cube Runner',
        tag: 'mobile',
        detail: "Cube Runner is a 3D android game developed with Unity3D game engine. It is an arcade endless runner game. It is available in playstore and have reached 1K+ installs.<br> <br> What I learned:<br> - Design Pattern (Singleton, Object Pool, Factory) <br> - Unity3D<br> - C#<br> - Graphic Design (Photoshop)<br> - Sound Editing (Audacity)<br> - Copywriting (Game description in Playstore)<br>",
        pictures: '5',
        link: 'https://play.google.com/store/apps/details?id=com.RashadProduction.CubeRunner&hl=en'
      },
    
      robocon_robot: {
        title: 'Autonomous Line Following Catapult (Robocon)',
        tag: 'electronics',
        detail: "A robot that will be passed a ball and throws the ball to enter 3 tall hoop with different height from a distance. The robot will navigate using white line provided on the the field. This robot was made for Robocon Malaysia 2018 Competition. I am mostly responsible for the code while the robot mechanic and circuitry was mostly done by other team member.<br> <br> What I did:<br> - Coded autonomous line following algorithm with PID control<br> - Integrated the code to work with mecanum wheel<br> - Integrated the code for pressure controller (throwing mechanism)<br> - Coded positioning algorithm to recieve passed ball accurately",
        pictures: '6',
        link: ''
      },
    
      quote_generator: {
        title: 'Quote Generator',
        tag: 'web',
        detail: "A site which generates a random quote fetched by API call made for FreeCodeCamp",
        pictures: '3',
        link: 'https://mfrashad.github.io/quote-generator/'
      },
    
      merchant_portal: {
        title: 'Merchant Portal',
        tag: 'web',
        detail: "A merchant portal developen during Can You Hack It Hackathon 2018 for CashBear app",
        pictures: '3',
        link: 'https://mfrashad-merchant-portal.herokuapp.com'
      },
    
      url_shortener: {
        title: 'URL Shortener Microservice',
        tag: 'web',
        detail: "An API made with Express.js, Node.js and MongoDB that returns shortened URL in JSON format and hosted in Heroku.",
        pictures: '3',
        link: 'https://mfrashad-urlshortener.herokuapp.com/'
      },
    
      twitchtv: {
        title: 'TwitchTV Online Tracker',
        tag: 'web',
        detail: "Project made for FreeCodeCamp using TwitchTv JSON API",
        pictures: '3',
        link: 'https://mfrashad.github.io/twitchtv-online-tracker/'
      },
    
    
      mit_research: {
        title: 'Research with MIT',
        tag: 'work',
        detail: "● Joined and collaborated with MIT DeCoDE Lab for 10 months.<br> ● Co-authored “CreativeGAN: Editing Generative Adversarial Network for Creative Design Synthesis” paper for ASME IDETC-CIE 2021 conference and contributed 80% of the experiment.<br> ● Trained segmentation, generative, and anomaly detection network on a new dataset and integrated the networks for creative bike design synthesis.<br> ● Python, Tensorflow, PyTorch, OpenCV, High-Performance Computing (HPC).",
        pictures: '4',
        link: ''
      },
    
      dsc_flutter_1: {
        title: 'Flutter Workshop',
        tag: 'speaking',
        detail: "The workshop aim to introduce mobile app development to the students in our university. We guided them from installation and setup to the final result which is a movies app and stopwatch app.",
        pictures: '5',
        link: ''
      },
    
      ium2020: {
        title: 'iUM Disrupt Hackathon 2020',
        tag: 'competition',
        detail: "Led a team of 3 inn building a COVID-19 AI-based pre-assessment app along with doctor apppointment booking and E-medical record. Secured the 2nd Place out of 30+ teams (100+ participants).",
        pictures: '2',
        link: ''
      },
    
      dscutp_hack_intro: {
        title: 'DSCUTP Flutter Workshop',
        tag: 'speaking',
        detail: "Invited as speaker for DSCUTP Hackathon. Presented 'Introduction to Hakcathon'.",
        pictures: '2',
        link: ''
      },
    
      flutter_workshop2: {
        title: 'Flutter Workshop 2',
        tag: 'speaking',
        detail: "Organized another flutter technical workshop and was the speaker for the event.",
        pictures: '2',
        link: ''
      },
    
      voi: {
        title: 'Voice of Intern',
        tag: 'speaking',
        detail: "Invited to speak as a forum speaker in a live QnA regarding how I scored A in compulsory internship program (SIIP).",
        pictures: '2',
        link: ''
      },
    
      taces: {
        title: 'T-ACES International Webinar',
        tag: 'speaking',
        detail: "Invited as speaker for Telkom Annual Competition for English Society (T-ACES) Webinar. This is my first paid speaking gig and I shared on 'How to Overcome Your Fear of Starting Something New'.",
        pictures: '4',
        link: ''
      },
    
      sedex42: {
        title: '42nd Science & Engineering Design Exhibition',
        tag: 'competition',
        detail: "Won the Chairman's Award out of 160 teams that participated by presenting the project Aide Glass, a low cost transcribing smart glasses for the hearing impaired.",
        pictures: '4',
        link: ''
      },
    
      dsckitahack: {
        title: 'DSC Kita Hack',
        tag: 'competition',
        detail: "DSC Kita Hack is an online hackathon by DSC Malaysia and Google Developers during COVID-19 season. We built a food aid management system to ease the food distribution process and prevent hoarding and fraud during the COVID-19 crisis.",
        pictures: '2',
        link: ''
      },
    
      dsc_github: {
        title: 'DSC GitHub Workshop',
        tag: 'speaking',
        detail: "Hands-on Git & GitHub workshop conducted by Developer Student Club (DSC) UTP.",
        pictures: '3',
        link: ''
      },
    
      adc_github: {
        title: 'UTP App Dev Club Git & GitHub Workshop',
        tag: 'speaking',
        detail: "Organized and spoke for Git & GitHub workshop with UTP App Dev Club",
        pictures: '3',
        link: ''
      },
    
      lhdshare: {
        title: 'Local Hack Day: Share',
        tag: 'competition',
        detail: "Won the Best Open Source Project on GitHub’s award out of 292 participants globally in Local Hack Day: Share competition.",
        pictures: '2',
        link: ''
      },
    
      fave: {
        title: 'Fave Internship',
        tag: 'work',
        detail: "I interned as Software Engineer in Fave, a fintech startup in Malaysia. I was placed in Merchant Team which mostly deal with backend tasks related to Merchants (Business Partner who uses Fave).<br> <br> What I did:<br> - Learned to use various tool such as CircleCI, Jira, Sentry<br> - Refactored part of code base<br> - Wrote Unit Test<br> - Tracked and fixed bugs using sentry<br> - Designed new feature for Admin Tool used by Operation Team<br> - Automated PDF report generation and emailing.<br> - Practiced Agile Methodologies<br>",
        pictures: '5',
        link: ''
      },
    
      robocon18: {
        title: 'Robocon 2018',
        tag: 'competition',
        detail: "I participated in Robocon 2018 Malaysia along as Petrobot (Robotic Society in my university) member as the Main Programmer in the team.<br> <br> What I did:<br> - Coded autonomous line following algorithm with PID control<br> - Integrated the code to work with mecanum wheel<br> - Integrated the code for pressure controller (throwing mechanism)<br> - Coded positioning algorithm to recieve passed ball accurately",
        pictures: '5',
        link: ''
      },
    
      rpi_workshop: {
        title: 'Raspberry Pi Workshop',
        tag: 'speaking',
        detail: "The workshop aim to introduce Raspberry Pi to the students in our university. We guided them from installation and setup to the final result which is an LED controlled telegram bot.",
        pictures: '7',
        link: ''
      },
    
  };

  $('.gallery .button').on('click', function(){
    fillModal(this.id);
    $('.modal-wrap').addClass('visible');
  });

  $('.close').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  $('.mask').on('click', function(){
    $('.modal-wrap, #modal .button').removeClass('visible');
  });

  var carousel = $('#carousel'),
      slideWidth = 600,
      threshold = slideWidth/3,
      dragStart, 
      dragEnd;

  setDimensions();

  $('#next').click(function(){ shiftSlide(-1) })
  $('#prev').click(function(){ shiftSlide(1) })

  carousel.on('mousedown', function(){
    if (carousel.hasClass('transition')) return;
    dragStart = event.pageX;
    $(this).on('mousemove', function(){
      dragEnd = event.pageX;
      $(this).css('transform','translateX('+ dragPos() +'px)');
    });
    $(document).on('mouseup', function(){
      if (dragPos() > threshold) { return shiftSlide(1) }
      if (dragPos() < -threshold) { return shiftSlide(-1) }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
     slideWidth = $(window).innerWidth();
    }
    $('.carousel-wrap, .slide').css('width', slideWidth);
    $('.modal').css('max-width', slideWidth);
    $('#carousel').css('left', slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass('transition')) return;
    dragEnd = dragStart;
    $(document).off('mouseup')
    carousel.off('mousemove')
            .addClass('transition')
            .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
    setTimeout(function(){
      if (direction === 1) {
        $('.slide:first').before($('.slide:last'));
      } else if (direction === -1) {
        $('.slide:last').after($('.slide:first'));
      }
      carousel.removeClass('transition')
      carousel.css('transform','translateX(0px)'); 
    },600)
  }

  function fillModal(id) {
    $('#modal .title').text(modalText[id].title);
    $('#modal .detail').html(modalText[id].detail);
    $('#modal .tag').text(modalText[id].tag.toUpperCase());
    if (modalText[id].link) $('#modal .button').addClass('visible')
                                               .parent()
                                               .attr('href', modalText[id].link)

    $.each($('#modal li'), function(index, value ) {
      $(this).text(modalText[id].bullets[index]);
    });
    
    $('#modal .slide').remove();
    for(i=0; i<modalText[id].pictures;i++) {
      $('#modal #carousel').append(
        $("<div class='slide'></div>").css({
          width: $('.carousel-wrap').css('width'),
          background: "url('img/slides/" + id + '-' + i + ".webp') center center/cover",
          backgroundSize: 'cover'
        })
      );
    }
  }
})
