import React, { Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";
import ZoomImage from "../../shared/components/ZoomImage";
import ReactPlayer from "react-player";

const content1 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      How the early pioneers of the smartphone almost made it big.
    </Typography>
    <Grid item style={{ textAlign: "center" }}>
      <ReactPlayer
        url="https://youtu.be/nJBxiZoDSYg"
        controls={true}
        fluid={true}
        width={220}
        height={120}
      />
    </Grid>
    <Typography paragraph>
      A decade before Steve Jobs introduced the iPhone, a tiny team of renegades
      imagined and tried to build the modern smartphone. Nearly forgotten by
      history, a little startup called Handspring tried to make the future
      before it was ready. In Springboard: the secret history of the first real
      smartphone, The Verge’s Dieter Bohn talks to the visionaries at Handspring
      and dives into their early successes and eventual failures.
    </Typography>
    <Typography paragraph>
      It’s a half-hour-long documentary featuring the key players at Palm and
      Handspring: Donna Dubinsky, Jeff Hawkins, Ed Colligan, and more. It’s one
      of our most ambitious video projects to date, and we can’t wait to show it
      to you.
    </Typography>
    <Typography paragraph>
      Handspring may no longer be a household name, but it was briefly one of
      the fastest growing businesses in American history, selling Visor personal
      digital assistants. But the company had bigger aspirations: it saw a
      mobile future and took the first steps toward what would become the modern
      smartphone — even as it faced skepticism from the entire industry.
    </Typography>
    <Typography paragraph>
      The dream of the Handspring Treo turned out to be too far ahead of its
      time — before either the technology inside smartphones or the industry
      that sold them was ready for it. And a number of bad internal decisions
      and outside disasters would stall Handspring long enough that Apple would
      go on to do what Handspring couldn’t.
    </Typography>
    <Typography paragraph>
      Springboard is also a look at an earlier time in tech — when the dot com
      bubble was bursting, but big tech hadn’t coalesced into five or six
      titanic monoliths. It was a time when many futures seemed possible, even
      one where a tiny startup could win the coming smartphone wars.
    </Typography>
    <Typography paragraph>
      Springboard is now streaming worldwide. You can watch it on The Verge’s
      new app on Android TV, Amazon Fire TV, Roku, or Apple TV.
    </Typography>
    <Typography paragraph>
      Visit your preferred streaming device’s app store and search for “The
      Verge,” or follow the instructions for each of the streaming devices you
      can use:
    </Typography>
    <Typography variant="h6" paragraph>
      AMAZON FIRE
    </Typography>
    <Typography paragraph>
      <li>From the Amazon Fire Home screen, select “Find.”</li>
      <li>Select “Search.”</li>
      <li>
        In the search box, type “The Verge” and then select the search icon.
      </li>
      <li>From the results feed, scroll down to “Apps & Games.”</li>
      <li>Scroll through until you find “The Verge.”</li>
      <li> Select “The Verge” and then click on “Download.”</li>
    </Typography>
    <Typography variant="h6" paragraph>
      ANDROID TV
    </Typography>
    <Typography paragraph>
      <li>From the Android TV Home screen, scroll to “Apps.”</li>
      <li>Select the Google Play store app.</li>
      <li>
        Navigate to the search bar on the upper right hand side and then type
        “The Verge.”
      </li>
      <li>Scroll through search results until you find “The Verge.”</li>
      <li> Select “The Verge” and click “Install.”</li>
    </Typography>
    <Typography variant="h6" paragraph>
      ROKU
    </Typography>
    <Typography paragraph>
      <li>From the Roku Home screen, scroll to “Streaming channels.”</li>
      <li>Scroll down to “Search Channels.”</li>
      <li>In the search box, type “The Verge.”</li>
      <li>Scroll through search results until you find “The Verge.”</li>
      <li>Select “The Verge” and then select “Add Channel.”</li>
    </Typography>
    <Typography variant="h6" paragraph>
      APPLE TV
    </Typography>
    <Typography paragraph>
      <li>From your Apple TV Home screen, scroll down to “App Store.”</li>
      <li>Navigate to the search bar and then type “The Verge.”</li>
      <li>Scroll through search results until you find “The Verge.”</li>
      <li>Select “The Verge” and click “Get.”</li>
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22906778/VRG_OTT_LandingPage_AmazonFireTV.jpg"
        }
        alt="netflix"
      />
    </Grid>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22906779/VRG_OTT_LandingPage_AndroidTV.jpg"
        }
        alt="netflix"
      />
    </Grid>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22957228/VRG_OTT_LandingPage_AppleTV.jpg"
        }
        alt="netflix"
      />
    </Grid>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/uploads/chorus_asset/file/22906781/VRG_OTT_LandingPage_Roku.jpg"
        }
        alt="netflix"
      />
    </Grid>
  </Fragment>
);

const content2 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Hours viewed ‘is a slightly better indicator of the overall success of our
      titles’
    </Typography>
    <Typography paragraph>
      Netflix will change the public-facing metrics it uses to rank the most
      popular titles on its streaming service, the company announced Tuesday.
    </Typography>
    <Typography paragraph>
      In the past, the company has ranked titles based on the completion of at
      least the first two minutes of a film or TV show in its first 28 days on
      the service. More recently, however, the company has released rankings
      based on the total number of hours a movie or series is viewed — a metric
      it will shift to moving forward beginning later this year, the company
      said in a letter to shareholders.
    </Typography>
    <Typography paragraph>
      “There is some difference in rankings [...] but we think engagement as
      measured by hours viewed is a slightly better indicator of the overall
      success of our titles and member satisfaction,” the company said. “It also
      matches how outside services measure TV viewing and gives proper credit to
      rewatching.”
    </Typography>
    <Typography variant="h6" paragraph>
      NETFLIX SAYS HOURS VIEWED “IS A SLIGHTLY BETTER INDICATOR OF THE OVERALL
      SUCCESS OF OUR TITLES”
    </Typography>
    <Typography paragraph>
      The change will not only shift one of its key public ranking systems from
      viewers to hours viewed but should, in theory, make its rankings a little
      easier to understand. While the company does track things like completion
      of its titles internally, the 2-minute metric was confusing and had the
      potential to misrepresent the true success of a series or film (for
      example, if an account holder watched only the first two minutes but then
      bailed).
    </Typography>
    <Typography paragraph>
      Additionally, the company said, “we will start to release title metrics
      more regularly outside of our earnings report so our members and the
      industry can better measure success in the streaming world.” Transparency
      around streaming figures — and the accuracy with which services track
      their titles — has been called for by industry figures who say that
      streaming services aren’t forthright about success metrics, complicating
      everything from cast and crew payouts to contract negotiations.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/p3T0bjEFX3TEv-Uchb9mwDzyA0s=/0x0:1600x900/920x0/filters:focal(0x0:1600x900):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22883359/Netflix_Code_Conference_V2.001_X3.jpg"
        }
        alt="netflix"
      />
    </Grid>
    <Typography paragraph>
      Netflix co-CEO and chief content officer Ted Sarandos last month at
      CodeCon shared rankings of Netflix’s top titles based on both the 2-minute
      metric and the hours watched metric, and a side-by-side comparison showed
      that — while overlap was certainly visible — the different metrics changed
      the title rankings noticeably.
    </Typography>
    <Typography paragraph>
      What’s certain is that by many of its metrics, its Korean drama Squid Game
      has been a massive success on the platform. Citing internal documents,
      Bloomberg reported last week that the company estimated “89% of people who
      started the show watched at least 75 minutes (more than one episode), and
      66% of viewers, or 87 million people, have finished the series in the
      first 23 days.”
    </Typography>
    <Typography paragraph>
      Last week, the company announced the series had become its biggest ever
      series at launch. In its shareholders letter on Tuesday, the company
      revealed that a “mind-boggling” 142 million households globally had tuned
      into the show, based on its 2-minute metric.
    </Typography>
  </Fragment>
);

const content3 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Google’s custom silicon and more
    </Typography>
    <Typography paragraph>
      Google just wrapped up its Pixel 6 Fall Launch event, where it announced
      two new phones as well as a wealth of features that are supported by its
      new Tensor processor. Here are the biggest things Google announced during
      its live stream.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/6_--j5xAeTdBPY0KfUT01zCKn_c=/0x0:7645x4500/920x0/filters:focal(0x0:7645x4500):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22755114/Google_Pixel_6__Portfolio_Shot.jpg"
        }
        alt="pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      GOOGLE FINALLY SHOWS OFF THE PIXEL 6 AND PIXEL 6 PRO
    </Typography>
    <Typography paragraph>
      After months of leaks, we got the full details on Google’s Pixel 6 and
      Pixel 6 Pro phones — the Pixel 6 will sell for $599 and the Pixel 6 Pro
      for $899. Both will feature Google’s Tensor processor and a 50-megapixel
      camera (which bins images down to 12.5-megapixels during processing). The
      phones also feature an ultra-wide camera, and the Pro adds a telephoto
      camera and gives the selfie camera an upgrade with a wider lens and
      higher-resolution sensor. The Pro model is also physically larger, but
      it’s not a massive difference.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/hmdLsggvLLpjV4oEQEnWNBFHgbU=/0x0:1304x876/920x0/filters:focal(0x0:1304x876):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22939252/Screen_Shot_2021_10_19_at_1.08.09_PM.png"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      GOOGLE’S NEW PHONES ARE POWERED BY ITS TENSOR PROCESSOR
    </Typography>
    <Typography paragraph>
      Much of Google’s event focused on the Google-designed Tensor processor
      that powers the Pixel 6 and Pixel 6 Pro. Google showed off how the machine
      learning prowess of its chip would be able to help with tasks like voice
      recognition, making photos less blurry (and even automatically erasing
      unwanted people from the background), and real-time captions and
      translation. Outside of ML, Google says that it should be competitive with
      Qualcomm’s latest Snapdragon processors when it comes to overall CPU and
      GPU performance.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://img.connatix.com/de749c89-03aa-4d64-a473-24fd0331e9d7/83a60cff-0c0f-45dc-8a94-ee69bec10173.jpg?crop=728:481,smart&width=728&height=481&format=jpeg&quality=60&fit=crop"
        }
        alt="andriod 12"
      />
    </Grid>
    <Typography paragraph>
      Google also emphasized how the Tensor could help its phones be more
      personalized to you but didn’t go into much detail on how exactly that
      would work. Thankfully, we have our hands on the new phones, so we’ll be
      able to poke around at them. Speaking of those phones...
    </Typography>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
      crossorigin="anonymous"
    ></script>
    <Typography variant="h6" paragraph>
      GOOGLE SHOWED OFF THE RESULTS OF ITS CAMERA INCLUSIVITY WORK WITH REAL
      TONE
    </Typography>
    <Typography paragraph>
      At Google I/O 2021, Google announced it was working on making its cameras
      and photo processing better for people with darker skin, and today, we got
      to see some of those results. Google’s Real Tone tech, which will work
      both in its camera app and third-party ones, will try to accurately depict
      people’s skin tones instead of doing weird things with exposure and
      contrast like old phones used to do. Google’s before-and-after
      presentation was impressive, but we’ll have to see how it actually
      performs in the real world.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/uXkdh-klewAhDaA8XVpAya43DbM=/0x0:1920x1068/920x0/filters:focal(0x0:1920x1068):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22939407/google_pixel_tap_snap.jpg"
        }
        alt="header example"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      SNAPCHAT GETS A SPECIAL PLACE ON THE PIXEL
    </Typography>
    <Typography paragraph>
      You’ll be able to quickly access Snapchat’s camera by tapping the back of
      the Pixel, even from the lock screen. Of course, you’ll have to log into
      the phone to actually send the Snap to your friends, but it’s quite
      possibly the quickest way to send a Snap that we’ve seen yet.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://img.connatix.com/de749c89-03aa-4d64-a473-24fd0331e9d7/c73c0b42-d7a7-41ad-87dd-74c10af0e513.jpg?crop=728:481,smart&width=728&height=481&format=jpeg&quality=60&fit=crop"
        }
        alt="gif"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      GOOGLE’S TRYING TO MAKE PHONE TREES SUCK LESS
    </Typography>
    <Typography paragraph>
      Google announced a new Pixel phone feature, which aims to make calls to
      customer service lines less awful by trying to estimate how long you’ll
      have to wait on hold and giving you a written list of the phone tree
      options, so you don’t have to go “wait, what number do I press for this
      again?” Google’s also expanding its feature that lets you have your phone
      wait on hold for you to more countries.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/mlfdVKL_gnv4wN-nal39_a7ivMI=/0x0:1190x633/920x0/filters:focal(0x0:1190x633):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22939410/pixel_call.jpg"
        }
        alt="tress"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      PIXEL PASS GETS YOU GOOGLE’S PHONE AND SOME SUBSCRIPTION SERVICES
    </Typography>
    <Typography paragraph>
      Google didn’t announce it during the event itself, but it’s also launched
      Pixel Pass alongside the new phones. Pixel Pass lets you bundle a phone
      (and Google’s Preferred Care repair plan), cloud storage, YouTube Premium,
      and Google Play Pass, all in one monthly payment. Google’s charging $45
      per month for the plan with a Pixel 6 and $55 a month for the Pixel 6 Pro
      plan. According to the company, you’ll end up paying off your phone over
      the course of two years, and if you cancel Pixel Pass, you’ll have to pay
      off the remaining balance on your phone.
    </Typography>
    <Typography paragraph>
      Google says that subscribers to Google Fi, its cellular plan, will get $5
      off their monthly bill for subscribing to Pixel Pass.
    </Typography>
  </Fragment>
);

const content4 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Vojin Kusic, 72, says the home's front door also rotates so if his wife
      "spots unwanted guests heading our way, she can spin the house and make
      them turn away.”
    </Typography>
    <Typography paragraph>
      SRBAC, Bosnia-Herzegovina (AP) — It’s not exactly on par with India’s Taj
      Mahal, but a family house in a small town in northern Bosnia is in its own
      way a monument to love.
    </Typography>
    <Typography paragraph>
      The house in Srbac was designed and built by 72-year-old Vojin Kusic. With
      a green facade and red metal roof, it can rotate a full circle to satisfy
      his wife Ljubica’s shifting desires as to what she would like to see when
      she looks out of its windows.
    </Typography>
    <Typography paragraph>
      “After I reached an advanced age and after my children took over the
      family business, I finally had enough time to task myself with granting my
      wife her wish” to be able to change the position of rooms in her house
      whenever she wants, Kusic said.
    </Typography>
    <Typography paragraph>
      Many years ago when they married, Kusic had built another, typical house
      for himself and his wife in which they raised their three children. At the
      time, his wife wanted their bedrooms to face the sun, so they did. But
      this meant their living room faced away from the road. After a while, he
      says his wife complained that “she could not see people entering our front
      yard” and Kusic had to remodel everything.
    </Typography>
    <Typography paragraph>
      “I had to tear down the wall between our two bedrooms to turn them into a
      living room and move all (electrical) installations. It was a very
      demanding task, it took a lot from me, but I did what she wanted,” he
      said.
    </Typography>
    <Typography paragraph>
      Then six years ago, the only one of Kusic’s three children not to fly the
      nest, a son, got married and his parents decided to let him live on the
      top floor of their family house while they moved to the ground floor.
    </Typography>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
      crossorigin="anonymous"
    ></script>
    <Typography paragraph>
      “Once again, this time on the ground floor, I had to start tearing down
      some walls, at which point, to not wait for her to change her mind again,
      I decided to build a new, rotating house so that she can spin it as she
      pleases,” Kusic said.
    </Typography>
    <Typography paragraph>
      Kusic, who did not have a chance to go to college, designed and built his
      rotating house by himself, using electric motors and the wheels of an old
      military transport vehicle.
    </Typography>
    <Typography paragraph>
      “Now, our front door also rotates, so if she spots unwanted guests heading
      our way, she can spin the house and make them turn away,” he joked.
    </Typography>
    <Typography paragraph>
      In Bosnian, his wife’s name means “loved one.” She declined to be
      interviewed.
    </Typography>
  </Fragment>
);

const content5 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Egyptian man arrested after broadcasting face during robbery
    </Typography>
    <Typography paragraph>
      Egyptian social media users have hailed a man who inadvertently broadcast
      his face to thousands of people while stealing a journalist's phone as
      "the coolest thief in Egypt".
    </Typography>
    <Typography paragraph>
      Mahmoud Ragheb, a reporter for the news site Youm7, was livestreaming a
      report on social media when the thief drove by on a motorbike and seized
      his phone.
    </Typography>
    <Typography paragraph>
      The broadcast then revealed the young thief's face as he sped away from
      the scene casually smoking a cigarette.
    </Typography>
    <Typography paragraph>Police have since announced his arrest.</Typography>
    <Typography paragraph>
      According to Youm7, the incident happened on a bridge in Egypt's
      fourth-largest city, Shubra Al-Khaimah, where Mr Ragheb was reporting on
      the after-effects of a 6.2-magnitude earthquake that rattled parts of
      Egypt.
    </Typography>
    <Typography paragraph>
      Mr Ragheb was filming the bridge when his phone was grabbed roughly from
      his hands by the unnamed thief. Once the camera had stopped shaking it
      revealed the face of a young man smoking a cigarette and checking slightly
      nervously behind him to see if anyone was in pursuit.
    </Typography>
    <Typography paragraph>
      However, there was little sympathy for the intrepid reporter's plight,
      with most social media users focussing on the thief's relaxed demeanour as
      he snatched the phone and continued to pull on his cigarette as he made
      his escape.
    </Typography>
    <Typography paragraph>
      One user commented that they had "died from laughter," while another
      questioned why the man had bothered looking behind him while "the whole
      world is watching you".
    </Typography>
    <Typography paragraph>
      More than 20,000 people were watching the livestream when the theft took
      place and according to figures on Facebook, the video has since racked up
      more than 6.2 million views and 45,000 comments in a little over 24 hours.
    </Typography>
    <Typography paragraph>
      Sadly for the thief, broadcasting his face in this way made it relatively
      easy for authorities to track him down. The Ministry of the Interior
      announced last night that it has detained him.
    </Typography>
    <Typography paragraph>
      In a statement, the ministry said that the man is "jobless" and that he
      has since sold the stolen mobile to a trader.
    </Typography>
  </Fragment>
);
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
  crossorigin="anonymous"
></script>;

const content6 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      For many people of a certain age, the idea of flying taxis, ferrying
      people around cities, brings to mind the once popular animated TV series
      The Jetsons.
    </Typography>
    <Typography paragraph>
      The 1960s show depicted a family living in a futuristic metropolis where
      commuters headed to work in cars that soared through the air.
    </Typography>
    <Typography paragraph>
      Two decades into the 21st Century, and the science fiction dreams of the
      creators of The Jetsons are closer than ever to becoming a reality.
    </Typography>
    <Typography paragraph>
      With the likes of Uber and Boeing developing eVTOL (electric vertical
      take-off and landing) flying taxis, one report predicts that by 2040 there
      will be 430,000 such vehicles in operation around the world.
    </Typography>
    <Typography paragraph>
      This comes as delivery drones are also being increasingly developed and
      tested, with the global market for these tipped to be worth $5.6bn (£4bn)
      by 2028, according to one estimate.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/AA6D/production/_121092634_gettyimages-3225086.jpg"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      Did the The Jetsons correctly predict the future?
    </Typography>
    <Typography paragraph>
      To handle the demands of a future, in which drones and flying taxis (think
      large, multi-propeller drones) share airspace over busy conurbations,
      proponents of the technologies say cities will need to build lots of
      mini-airports, dubbed "skyports".
    </Typography>
    <Typography paragraph>
      These mini airports will be needed so that the taxis can land in the spots
      where people want to go.
    </Typography>
    <Typography paragraph>
      California-based firm, Joby Aviation, is at the forefront of developing
      flying taxis, having now carried out more than 1,000 test flights of its
      eVTOL craft.
    </Typography>
    <Typography paragraph>
      It hopes to get approval from US regulator, the Federal Aviation
      Administration (FAA), to begin commercial operations in 2024.
    </Typography>
    <Typography paragraph>
      Joby's piloted vehicle can carry four passengers, travel at up to 200 mph
      (322 km/ph), and has a range of more than 150 miles (241km).
    </Typography>
    <Typography paragraph>
      "We envisage offering our aerial ride-sharing service from locations near
      to where people live, work and want to go," says Oliver Walker-Jones, a
      spokesperson for Joby.
    </Typography>
    <Typography paragraph>
      "We are working closely with cities to ensure our service connects to
      other modes of transit, co-locating skyports with train stations, airports
      and other hubs."
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/F88D/production/_121092636_03_jobyaviation_aircraft.jpg"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      Joby's electric-powered flying taxi looks like a helicopter crossed with a
      fixed-wing aeroplane
    </Typography>
    <Typography paragraph>
      Joby has already partnered with US parking firm Reef Techology with the
      aim of turning the roofs of some of its carparks into skyports. And it has
      signed a similar deal with property business Related Companies, New York's
      largest landlord.
    </Typography>
    <Typography paragraph>
      "With these partners, we aim to build out skyports in initial launch
      markets that offer attractive savings on routes with high existing demand
      and frustrating levels of congestion on the ground," adds Mr Walker-Jones.
    </Typography>
    <Typography paragraph>
      While a network of skyports may seem far-fetched, the concept is already
      receiving considerable positive attention from a number of US city
      administrations.
    </Typography>
    <Typography paragraph>
      Houston, Los Angeles, and Orlando have already announced plans to
      establish infrastructure for flying taxis and other similar vehicles.
    </Typography>
    <Typography paragraph>
      Los Angeles mayor Eric Garcetti says the proposals for his city will
      "provide a template for how other local governments can take this new
      technology to even greater heights".
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/16A39/production/_121092729_gettyimages-178700704.jpg"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      A number of US cities see flying taxis as a way to help tackle road
      congestion
    </Typography>
    <Typography paragraph>
      In the UK, plans to build the country's first skyport in Coventry near the
      city's rugby and football stadium have the backing of the British
      government.
    </Typography>
    <Typography paragraph>
      Seeking to become the world's first operational hub for air taxis and
      cargo drones, it is being designed by a Hyundai-backed UK company called
      Urban Air Port (the firm has registered the name as a trademark).
    </Typography>
    <Typography paragraph>
      Billed as the "world's smallest airport", the firm hopes that the
      zero-emissions facility will be replicated around the globe to cut both
      road congestion and air pollution from cars and lorries.
    </Typography>
    <Typography paragraph>
      "Existing airports around the world are huge, and carbon hungry, with
      1.2km runways," says Urban Air Port founder and executive chairman Ricky
      Sandhu. "That's because of the technology and how the aircraft take off
      and land.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/CDF9/production/_121092725_smallurbanairportcoventry-copyrighturbanairport2.png"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      A computer generated impression of how the mini-airport in Coventry will
      look
    </Typography>
    <Typography paragraph>
      "[By contract], new vehicles can take-off vertically and land extremely
      accurately. There's going to be a whole new type of infrastructure needed
      to support those."
    </Typography>
    <Typography paragraph>
      Mr Sadhu adds that the initial site in Coventry - which is expected to
      become open in early 2022 - will serve as a "logistics demonstration."
    </Typography>
    <Typography paragraph>
      The project's designers believe that the concept will show how a network
      of small urban mobility hubs can be rapidly set up in cities of various
      sizes.
    </Typography>
    <Typography paragraph>
      "Our goal is to show that the turnaround time can be absolutely minimal,
      so that with a very small footprint, you can get high-capacity
      infrastructure that can support the vehicles," Mr Sadhu said.
    </Typography>
    <Typography paragraph>
      Experts, however, point to several challenges that stand in the way of
      flying taxis and skyports really taking off.
    </Typography>
    <Typography paragraph>
      "Whether and when we reach a point reminiscent of the Jetsons will depend
      on how the industry handles a number of key hurdles," says Jennifer
      Richter, a Washington-DC based lawyer who specialises in the law
      surrounding drones and air taxis.
    </Typography>
    <Typography paragraph>
      "These include public acceptance, high-volume manufacturing, digital,
      power and physical infrastructure investment, and the development of a
      highly-automated air traffic management system."
    </Typography>
    <Typography paragraph>
      Michael Taylor, a travel and technology expert at US business research
      group JD Power, says the main challenges are regulatory hurdles and air
      traffic control systems.
    </Typography>
    <Typography paragraph>
      "Imagine the regulation of air traffic routes, and then multiply that by a
      million," he says.
    </Typography>
    <Typography paragraph>
      "It's likely to start by establishing standard drone, or air taxi routes.
      Rules will be set, kinks worked out, and standards applied universally to
      minimise incidents."
    </Typography>
    <Typography paragraph>
      Regarding regulatory hurdles, the biggest barrier is that flying taxis
      have yet to be given authorisation to fly commercially by the relevant
      authorities, such as the Federal Aviation Administration (FAA) in the US,
      or the UK's Civil Aviation Authority (CAA).
    </Typography>
    <Typography paragraph>
      Both of these are, however, continuing to study the issue - the safety of
      such vehicles, and how authorisation can be formulated and subsequently
      monitored. At the CAA this work is being done by a specific innovation
      team.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/11C19/production/_121092727_gettyimages-454781577.jpg"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      Delivery drones have now been tested for a number of years
    </Typography>
    <Typography paragraph>
      Aaron Belbasis, an expert in emerging technology at engineering and design
      firm Aurecon, says that the health and safety issues are paramount.
    </Typography>
    <Typography paragraph>
      He points out that with more motorised vehicles in the air it is a
      statistical probability that more accidents will occur, adding that if a
      flying taxi fell in an uncontrolled way it "could amount to a descent with
      as much aerodynamic finesse as a rock, posing great danger to all
      on-board, and anyone or anything in the direct parabolic vicinity of the
      vehicle".
    </Typography>
    <Typography paragraph>
      Ricky Sadhu says his main concern is that investment in skyports and other
      infrastructure may lack behind investment in the eVTOL vehicles
      themselves.
    </Typography>
    <Typography paragraph>
      "I'm less concerned about regulation. What we're seeing is evolving
      quickly," he says.
    </Typography>
    <Typography paragraph>
      Mr Sadhu says that despite the challenges, there is already enormous
      demand and interest in skyports from cities across the US, Europe and
      Asia.
    </Typography>
    <Typography paragraph>
      "We're aiming to see 200 Urban Air Ports deployed within the next five
      years, globally," Mr Sadhu added. "But we think that's conservative,
      because big cities will need significantly more."
    </Typography>
  </Fragment>
);
<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
  crossorigin="anonymous"
></script>;

const content7 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      It has been quite a year for Jesse Lingard.
    </Typography>
    <Typography paragraph>
      He started it firmly out of the picture at Manchester United but a loan
      spell at West Ham reignited his form and now he's providing assists for
      Cristiano Ronaldo and finding himself a wanted man in the Premier League
      again.
    </Typography>
    <Typography paragraph>
      A return to the Hammers had appeared to be an option over the summer while
      Newcastle, fresh from their recent big-money takeover, are thought to be
      contemplating a move for the forward in January's transfer window.
    </Typography>
    <Typography paragraph>
      The Champions League has seen the best and worst of Lingard this season
      and he will be hoping to get another chance to make an impression when
      Manchester United host Atalanta on Wednesday evening.
    </Typography>
    <Typography paragraph>
      But does Lingard - who is out of contract next summer - see his long-term
      future at Old Trafford? Or would he be better off heading elsewhere?
    </Typography>
    <Typography variant="h6" paragraph>
      Lingard making an impact
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/C6CC/production/_121129805_lingard.png"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      Jesse Lingard, centre, won player and goal of the month while at West Ham
    </Typography>
    <Typography paragraph>
      Ask Lingard himself and he will probably say that moving to West Ham in
      the January transfer window was the best move he could have made.
    </Typography>
    <Typography paragraph>
      The 28-year-old had made just three appearances for Manchester United last
      season - all in cup competitions - but at the Hammers he quickly became an
      integral player for a side battling for the Champions League spots.
    </Typography>
    <Typography paragraph>
      Lingard scored an impressive nine goals from February onwards during his
      16-game spell at David Moyes' side, also chipping in with five assists.
    </Typography>
    <Typography paragraph>
      But despite that excellent form it still appeared difficult to see a
      future for him on his return to Manchester United, particularly with Bruno
      Fernandes playing in his favoured position and the summer arrivals of
      Ronaldo and Jadon Sancho adding to the competition for places.
    </Typography>
    <Typography paragraph>
      His cause was seemingly not helped with a costly mistake against Young
      Boys in last month's opening Champions League group stage match; his poor
      back pass handing the Swiss side an injury-time winner.
    </Typography>
    <Typography paragraph>
      But that has proven to be a blip in an otherwise good run of form, albeit
      as something of a super-sub.
    </Typography>
    <Typography paragraph>
      Four of his last six appearances for Manchester United have been off the
      bench and during that time he has scored twice and set up one goal -
      Ronaldo's last-minute winner against Villareal in their second Champions
      League game.
    </Typography>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
      crossorigin="anonymous"
    ></script>
    <Typography paragraph>
      Under Ole Gunnar Solskjaer, someone who as a player also earned the
      reputation as a super-sub, Lingard clearly has a role to play at the Red
      Devils.
    </Typography>
    <Typography variant="h6" paragraph>
      Jesse Lingard in 2021/22 so far for Man Utd
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={`${process.env.PUBLIC_URL}/images/sports.png`}
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      Should he be happy as a super-sub?
    </Typography>
    <Typography paragraph>
      It would appear that, however, is not how Lingard sees himself, having
      recently rejected a new contract and expressed concerns about how much
      game time he is going to get.
    </Typography>
    <Typography paragraph>
      At 28, Lingard is in his prime and arguably at the peak of his
      desirability for other teams.
    </Typography>
    <Typography paragraph>
      His resurgence, first at West Ham and latterly as a sub at United, has
      brought him back into England consideration after almost two years out in
      the international cold but, in the long term, Lingard will know Three
      Lions boss Southgate favours players who are regulars with their club.
    </Typography>
    <Typography paragraph>
      At United, though, he is at a club he has been a part of since he was a
      child, while the arrival of Ronaldo has given him the chance to play
      alongside someone he idolised as a youngster.
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={`${process.env.PUBLIC_URL}/images/sports2.png`}
        alt="google pixel"
      />
    </Grid>
    <Typography paragraph>
      Former Manchester City defender Micah Richards says the grass is not
      always greener on the other side.
    </Typography>
    <Typography paragraph>
      Speaking to BBC Radio 5 Live, Richards said: "It is a time at Manchester
      United where they believe they could genuinely challenge, so why would you
      not want to stay and be a part of that? I would rather be a part of
      something special than go for game time elsewhere.
    </Typography>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
      crossorigin="anonymous"
    ></script>
    <Typography paragraph>
      "I made the choice to leave Manchester City and go to Fiorentina. I went
      there and played 20 games, got injured, went to Aston Villa. Got
      relegated. Then I was fighting in the Championship to get back to the
      Premier League.
    </Typography>
    <Typography paragraph>
      "It might not be his journey but I wish I had stayed at Manchester City to
      be a part of it. It was perfect."
    </Typography>
    <Typography paragraph>
      Former Everton and Scotland midfielder Don Hutchinson believes Lingard
      will have a difficult decision to make though.
    </Typography>
    <Typography paragraph>
      He told BBC Radio 5 Live: "He has a future at Man Utd, but what does he
      see his future as? I don't think he is going to start many games. Bruno is
      their best 10 and that is Jesse's best position.
    </Typography>
    <Typography paragraph>
      "I think Lingard might get his minutes, but he is proving to everyone he
      is back. If he keeps playing the way he is playing, teams like Everton,
      Tottenham and West Ham will want him, because he is so good at what he
      does.
    </Typography>
    <Typography paragraph>
      "He turned down a contract at United and that shows what he is thinking.
      Ole will want to keep him but he will have a lot of teams chasing him."
    </Typography>
    <Typography variant="h6" paragraph>
      What does Lingard want to do?
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/88CA/production/_121081053_jesselingard.jpg"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      Jesse Lingard, left, has been back in the England squad following his good
      form at club level
    </Typography>
    <Typography paragraph>
      By his own admission, this season is a fresh start for Lingard.
    </Typography>
    <Typography paragraph>
      The loan spell at West Ham seems to have reinvigorated him both as a
      player and a person and, for now, he appears determined to make his mark
      at Old Trafford.
    </Typography>
    <Typography paragraph>
      Solskjaer said before Saturday's defeat by Leicester City: "Jesse has had
      a good start to the season - he's come on and scored a few goals. He knows
      what we want - we want to prolong his contract.
    </Typography>
    <Typography paragraph>
      "He is an important player, he deserves to play more. Hopefully we can get
      a deal sorted because we really rate him."
    </Typography>
    <Typography paragraph>
      However, Lingard recently said in a piece for The Players Tribune: "What
      you saw at West Ham was the player I can be when everything is coming
      together. Let's say it was an upgraded version of the old Jesse Lingard -
      Jesse 2.0.
    </Typography>
    <Typography paragraph>
      "I don't want to be the player who does well for just a few weeks or
      months. I want to show how many goals and assists I can get over 30-plus
      games."
    </Typography>
    <Typography paragraph>
      But will he get those 30-plus games at Manchester United this season? Time
      will tell.
    </Typography>
  </Fragment>
);

const content8 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      Man Utd 0-5 Liverpool: Mohamed Salah hits hat-trick and Paul Pogba sees
      red in shambolic Man Utd show to pile pressure on Ole Gunnar Solskjaer
    </Typography>
    <Typography paragraph>
      Manchester United suffered their heaviest ever Old Trafford defeat against
      Liverpool as Jurgen Klopp’s side romped to a stunning 5-0 win on Sunday.
    </Typography>
    <Typography paragraph>
      Mohamed Salah scored a hat-trick, while Naby Keita and Diogo Jota also
      netted for the rampant visitors.
    </Typography>
    <Typography paragraph>
      After one of the darkest days in United’s history that happened today,
      here are six of their other nightmare Premier League defeats:
    </Typography>
    <Typography variant="h6" paragraph>
      Newcastle 5 Manchester United 0, 1996
    </Typography>
    <Typography paragraph>
      Philippe Albert’s stunning lob over Peter Schmeichel capped a memorable
      victory as Kevin Keegan’s men, who also scored through Darren Peacock,
      David Ginola, Les Ferdinand and Alan Shearer, thrashed their title rivals.
    </Typography>
    <Typography variant="h6" paragraph>
      Southampton 6 Manchester United 3, 1996
    </Typography>
    <Typography paragraph>
      Just a week after losing 5-0 to Newcastle, United crashed again, with Egil
      Ostenstad’s hat-trick, an Eyal Berkovic brace and Matt Le Tissier’s gem
      capitalising on Roy Keane’s red card.
    </Typography>
    <Typography variant="h6" paragraph>
      Chelsea 5 Manchester United 0, 1999
    </Typography>
    <Typography paragraph>
      Gus Poyet scored after just 27 seconds, triggering a Blue day for United
      in west London, with Chris Sutton, Jody Morris, another Poyet strike and a
      Henning Berg own goal completing the visitors’ humiliation after Nicky
      Butt’s dismissal.
    </Typography>
    <Typography variant="h6" paragraph>
      Manchester United 1 Liverpool 4, 2009
    </Typography>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
      crossorigin="anonymous"
    ></script>
    <Typography paragraph>
      Fernando Torres ran riot, with Steven Gerrard, Fabio Aurelio and Andrea
      Dossena also on target and Nemanja Vidic dismissed for United, who
      survived the onslaught well enough to beat the Reds in the title race.
    </Typography>
    <Typography variant="h6" paragraph>
      Manchester United 1 Manchester City 6, 2011
    </Typography>
    <Typography paragraph>
      This was the first time United had conceded six goals at Old Trafford
      since 1930, their heaviest home defeat for 56 years triggered by doubles
      for Mario Balotelli and Edin Dzeko, as well as strike each by Sergio
      Aguero and David Silva.
    </Typography>
    <Typography variant="h6" paragraph>
      Manchester United 1 Tottenham 6, 2020
    </Typography>
    <Typography paragraph>
      United went in front courtesy of a Bruno Fernandes penalty inside the
      opening two minutes, but Anthony Martial’s dismissal was the signal for
      Son Heung-min and Harry Kane to score twice, while Tanguy Ndombele and
      Serge Aurier also netted as Jose Mourinho enjoyed a memorable return to
      his former club.
    </Typography>
  </Fragment>
);

const content9 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      It’s also got a new moderation tool for admins
    </Typography>
    <Typography paragraph>
      Facebook will start demoting all Groups content from people who have
      violated its policies elsewhere across the platform. The move is supposed
      to limit rulebreakers from reaching other people in a community, and it
      builds on existing policies that prevent them from posting, commenting, or
      inviting others.
    </Typography>
    <Typography paragraph>
      In a blog post, Facebook says it will also add a new “Flagged by Facebook”
      feature that shows group administrators content that’s been flagged for
      removal. The admins can choose to remove the content or to ask for a
      review if they believe it’s appropriate, with the goal of getting
      administrators involved before Facebook steps in and issues a strike that
      could affect the group itself.
    </Typography>
    <Typography paragraph>
      Facebook has paid increasing attention to groups since the 2020 US
      presidential election, where they were used to spread false information
      about voting. It’s also facing increased scrutiny over extremism and other
      harmful content on the platform thanks to documents leaked by former
      Facebook employee Frances Haugen, who recently testified before Congress.
      Earlier this week, Facebook indicated that it’s also expecting a slew of
      new stories based on “thousands of pages of leaked documents.”
    </Typography>
    <Typography paragraph>
      While the company characterized the upcoming reports as “an orchestrated
      ‘gotcha’ campaign,” it’s also promoted its efforts to reduce hateful or
      false content while offering greater transparency around moderation. A
      September update offered detail about content that it demoted as
      problematic but didn’t entirely remove, including posts by accounts that
      had violated its rules in the past.
    </Typography>
  </Fragment>
);

const content10 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      The streaming service announced the movies and shows arriving soon.
    </Typography>
    <Typography paragraph>
      If you’re counting down the days until the holiday season commences, we’ve
      got good news. Netflix is due to add more than 100 titles in November,
      including a number of holiday-themed movies and series.
    </Typography>
    <Typography paragraph>
      The 2021 Netflix holiday slate includes Hallmark-style romances like “A
      Castle for Christmas” (premiering Nov. 26) and family comedies including
      the British film “Father Christmas Is Back” (Nov. 7). And Vanessa Hudgens
      returns as multiple lookalike characters in the third installment in the
      “Princess Switch” series, “The Princess Switch 3: Romancing The Star”
      (Nov. 18).
    </Typography>
    <Typography paragraph>
      For family-friendly fare, Michelle Obama’s “Waffles + Mochi” series
      returns on Nov. 23 for the special “Waffles + Mochi’s Holiday Feast.”
      Additionally, the winter-themed “Charlie’s Colorforms City: Snowy Stories”
      debuts on Nov. 30.
    </Typography>
    <Typography paragraph>
      Beyond the holiday realm, the documentary sequel “Tiger King 2” is bound
      to get some buzz when it premieres on Nov. 17. The same goes for “The
      Harder They Fall” (Nov. 3) ― a new Western produced by Jay-Z starring
      Idris Elba, Regina King, Zazie Beetz and Jonathan Majors.
    </Typography>
    <Typography paragraph>
      The action-comedy “Red Notice” (Nov. 12) also has an all-star cast,
      including Dwayne “The Rock” Johnson, Ryan Reynolds and Gal Gadot. As for
      TV, if you’re a fan of “Big Mouth” and “Narcos: Mexico,” you’ll get new
      seasons to binge on Nov. 5.
    </Typography>
    <Typography paragraph>
      Check out the full list of incoming movies and shows below. And if you
      want to stay informed of everything joining Netflix on a weekly basis,
      subscribe to the Streamline newsletter.
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 1
    </Typography>
    <Typography paragraph>
      <li>“The Claus Family” (Netflix Film)</li>
      <li>“21 Jump Street”</li>
      <li>60 Days In” (Season 6)</li>
      <li>“A River Runs Through It”</li>
      <li>“Addams Family Values”</li>
      <li>“American Gangster”</li>
      <li>“An Elf’s Story: The Elf on the Shelf”</li>
      <li>“Angry Birds” (Season 4)</li>
      <li>“Bella and the Bulldogs” (Season 2)</li>
      <li>“The Big Wedding”</li>
      <li>“Bram Stoker’s Dracula”</li>
      <li>“Elf Pets: Santa’s St. Bernards Save Christmas”</li>
      <li>“First Knight”</li>
      <li>“Forged in Fire” (Season 7)</li>
      <li>“Gather”</li>
      <li>“The General’s Daughter”</li>
      <li>“It Follows”</li>
      <li>“Johnny Mnemonic”</li>
      <li>“JoJo’s Bizarre Adventure: Golden Wind”</li>
      <li>“Last Action Hero”</li>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
        crossorigin="anonymous"
      ></script>
      <li>“Moneyball”</li>
      <li>“Montford: The Chickasaw Rancher”</li>
      <li>“My Dad’s Christmas Date”</li>
      <li>“The Nightingale”</li>
      <li>“Total Recall </li>
      <li>“Snakes on a Plane”</li>
      <li>“Stripes”</li>
      <li>“Tagged”</li>
      <li>“Te Ata”</li>
      <li>“Texas Rangers”</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 2
    </Typography>
    <Typography paragraph>
      <li>“Camp Confidential: America’s Secret Nazis” (Netflix Documentary)</li>
      <li>“Ridley Jones” (Season 2, Netflix Family)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 3
    </Typography>
    <Typography paragraph>
      <li>“The Harder They Fall” (Netflix Film)</li>
      <li>“Lords of Scam” (Netflix Documentary)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 4
    </Typography>
    <Typography paragraph>
      <li>“Catching Killers” (Netflix Documentary)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 5
    </Typography>
    <Typography paragraph>
      <li>“A Cop Movie” (Netflix Documentary)</li>
      <li>“Big Mouth” (Season 5, Netflix Series)</li>
      <li>“The Club” (Netflix Series)</li>
      <li>“Glória” (Netflix Series)</li>
      <li>“Love Hard” (Netflix Film)</li>
      <li>“Meenakshi Sundareshwar” (Netflix Film)</li>
      <li>“Narcos: Mexico” (Season 3, Netflix Series)</li>
      <li>“The Unlikely Murderer” (Netflix Series)</li>
      <li>“We Couldn’t Become Adults” (Netflix Film)</li>
      <li>“Yara” (Netflix Film)</li>
      <li>“Zero to Hero” (Netflix Film)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 6
    </Typography>
    <Typography paragraph>
      <li>“Arcane” (Netflix Series)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 7
    </Typography>
    <Typography paragraph>
      <li>“Father Christmas is Back” (Netflix Film)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 9
    </Typography>
    <Typography paragraph>
      <li>“Swap Shop” (Netflix Series)</li>
      <li>“Your Life Is a Joke” (Netflix Comedy)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 10
    </Typography>
    <Typography paragraph>
      <li>“Animal” (Netflix Documentary)</li>
      <li>“Gentefied” (Season 2, Netflix Series)</li>
      <li>“Passing” (Netflix Film)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 11
    </Typography>
    <Typography paragraph>
      <li>“Love Never Lies” (Netflix Series)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 12
    </Typography>
    <Typography paragraph>
      <li>“Legacies” (Season 3)</li>
      <li>“Red Notice ” (Netflix Film)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 14
    </Typography>
    <Typography paragraph>
      <li>“Mariah Carey’s All I Want For Christmas Is You”</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 15
    </Typography>
    <Typography paragraph>
      <li>“America’s Next Top Model” (Season 22)</li>
      <li>“America’s Next Top Model” (Season 22)</li>
      <li>“Kuroko’s Basketball: Last Game”</li>
      <li>“Lies and Deceit” (Netflix Series)</li>
      <li>“Survivor” (Season 16)</li>
      <li>“Survivor” (Season 37)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 16
    </Typography>
    <Typography paragraph>
      <li>“Johnny Test’s Ultimate Meatloaf Quest” (Netflix Family)</li>
      <li>“StoryBots: Laugh, Learn, Sing” (Netflix Family)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 17
    </Typography>
    <Typography paragraph>
      <li>“Christmas Flow” (Netflix Series)</li>
      <li>“Prayers for the Stolen” Netflix Film)</li>
      <li>“The Queen of Flow” (Season 2, Netflix Series)</li>
      <li>“Supergirl” (Season 6)</li>
      <li>“Tear Along the Dotted Line” (Netflix Series)</li>
      <li>“Tiger King 2” (Netflix Documentary)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 18
    </Typography>
    <Typography paragraph>
      <li>Carlos Ballarta: False Prophet” (Netflix Comedy)</li>
      <li>“Dogs in Space” (Netflix Family)</li>
      <li>“Lead Me Home” (Netflix Documentary)</li>
      <li>“The Princess Switch 3: Romancing the Star” (Netflix Film)</li>
    </Typography>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7844539134729812"
      crossorigin="anonymous"
    ></script>
    <Typography variant="h6" paragraph>
      Nov. 19
    </Typography>
    <Typography paragraph>
      <li>“Blown Away: Christmas” (Netflix Series)</li>
      <li>“Cowboy Bebop” (Netflix Series)</li>
      <li>“Dhamaka” (Netflix Film)</li>
      <li>“Extinct” (Netflix Family)</li>
      <li>“Hellbound” (Netflix Series)</li>
      <li>“Love Me Instead” (Netflix Film)</li>
      <li>“The Mind, Explained” (Season 2, Netflix Documentary)</li>
      <li>“Procession” (Netflix Documentary)</li>
      <li>“tick, tick...BOOM!” (Netflix Film)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 20
    </Typography>
    <Typography paragraph>
      <li>“New World” (Netflix Series)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 22
    </Typography>
    <Typography paragraph>
      <li>“Outlaws” (Netflix Film)</li>
      <li>“Vita & Virginia”</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 23
    </Typography>
    <Typography paragraph>
      <li>“Masters of the Universe: Revelation” (Part 2, Netflix Series)</li>
      <li>
        “Reasonable Doubt: A Tale of Two Kidnappings” (Netflix Documentary)
      </li>
      <li>“Waffles + Mochi’s Holiday Feast” (Netflix Family)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 24
    </Typography>
    <Typography paragraph>
      <li>“A Boy Called Christmas” (Netflix Film)</li>
      <li>“Bruised” (Netflix Film)</li>
      <li>“Robin Robin” (Netflix Family)</li>
      <li>“Selling Sunset” (Season 4, Netflix Series)</li>
      <li>“True Story” (Netflix Series)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 25
    </Typography>
    <Typography paragraph>
      <li>“F is for Family” (Season 5, Netflix Series)</li>
      <li>“Super Crooks” (Netflix Series)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 26
    </Typography>
    <Typography paragraph>
      <li>“A Castle For Christmas” (Netflix Film)</li>
      <li>
        “Dig Deeper: The Disappearance of Birgit Meier” (Netflix Documentary)”
      </li>
      <li>“Green Snake” (Netflix Film)</li>
      <li>“Light the Night” (Netflix Series)</li>
      <li>“School of Chocolate” (Netflix Series)</li>
      <li>“Spoiled Brats” (Netflix Film)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 28
    </Typography>
    <Typography paragraph>
      <li>“Elves” (Netflix Series)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 29
    </Typography>
    <Typography paragraph>
      <li>“14 Peaks: Nothing is Impossible” (Netflix Documentary)</li>
    </Typography>
    <Typography variant="h6" paragraph>
      Nov. 30
    </Typography>
    <Typography paragraph>
      <li>
        “Charlie’s Colorforms City: Classic Tales with a Twist” (Netflix Family)
      </li>
      <li>“Charlie’s Colorforms City: Snowy Stories” (Netflix Family)</li>
      <li>
        “Charlie’s Colorforms City: The Lost Valentines Musical” (Netflix
        Family)
      </li>
      <li>“Coming Home in the Dark”</li>
      <li>“More the Merrier” (Netflix Film)</li>
      <li>“The Summit of the Gods” (Netflix Film)</li>
    </Typography>
  </Fragment>
);

const content11 = (
  <Fragment>
    <Typography variant="h6" paragraph>
      The company wants to move past the ‘confusion and awkwardness’ of sharing
      a name with its main app
    </Typography>
    <Typography paragraph>
      For the first time in 17 years, Mark Zuckerberg has a new job title.
    </Typography>
    <Typography paragraph>
      On Thursday, he officially became the CEO and chairman of Meta, the new
      parent company name for Facebook. The rebrand is about solidifying the
      social media giant as being about the metaverse, which Zuckerberg sees as
      the future of the internet. Zuckerberg is staying in control of
      everything. He told me in an interview that, unlike the founders of Google
      who stepped aside in 2015 when it became part of a holding company called
      Alphabet, he has no plans to give up the top job.
    </Typography>
    <Typography variant="h6" paragraph>
      “I THINK WE’RE BASICALLY MOVING FROM BEING FACEBOOK FIRST AS A COMPANY TO
      BEING METAVERSE FIRST.”
    </Typography>
    <Typography paragraph>
      Instead, the change is about recognizing a shift inside the company that’s
      already taken place. Zuckerberg has been pouring billions of dollars — at
      least $10 billion this year alone — into building the metaverse, an
      expansive, immersive vision of the internet taken from the pages of sci-fi
      novels like Snow Crash and Ready Player One. “I think we’re basically
      moving from being Facebook first as a company to being metaverse first,”
      he told me this week over the phone. While details are slim, a unified
      account system is going to be introduced to span all of the company’s
      social apps, the Oculus Quest headset, Portal, and future devices. That
      means you won’t need a Facebook account to use the Quest.
    </Typography>
    <Typography paragraph>
      The rebrand to Meta, announced by Zuckerberg today at the company’s annual
      Connect conference, has been a clandestine affair since he formally kicked
      off the project just over six months ago. The small handful of employees
      involved had to sign separate nondisclosure agreements, and Zuckerberg
      refused to tell me the name itself when we spoke the day before Connect.
      He said he had been thinking about rebranding the company ever since he
      bought Instagram and WhatsApp, in 2012 and 2014, but earlier this year he
      realized that it was time to make the change.
    </Typography>
    <Typography paragraph>
      “I think that there was just a lot of confusion and awkwardness about
      having the company brand be also the brand of one of the social media
      apps,” he said. “I think it’s helpful for people to have a relationship
      with a company that is different from the relationship with any specific
      one of the products, that can kind of supersede all of that.”
    </Typography>
    <Typography variant="h6" paragraph>
      RECENT LEAKS HAD “NOTHING TO BEAR” ON THE NAME CHANGE
    </Typography>
    <Typography paragraph>
      Zuckerberg knows that the timing of this rebrand is suspect. Over the past
      few weeks, the company has been hit with a nonstop barrage of criticism,
      thanks to leaked internal documents provided to the media by a former
      employee named Frances Haugen. Facebook is perhaps the most scrutinized
      company in the world right now, and its brand has soured in the eyes of
      young people. To the many critics, distancing the company brand and
      Zuckerberg from the name Facebook will be seen as an evasion tactic.
    </Typography>
    <Typography paragraph>
      According to Zuckerberg, the current cycle of bad news “had nothing to
      bear on this. Even though I think some people might want to make that
      connection, I think that’s sort of a ridiculous thing. If anything, I
      think that this is not the environment that you would want to introduce a
      new brand in.”
    </Typography>
    <Typography variant="h6" paragraph>
      Facebook’s new company name and logo
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/EXuD85lRZtaPidb4s5WnYoSTY4g=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22963952/06_211025_CompanyEC_16x9__30fps__1080_1.gif"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography paragraph>
      The metaverse as an idea isn’t new, but it wasn’t thrust into the
      mainstream conversation until Zuckerberg started talking about it publicly
      earlier this year. The concept originates from Snow Crash, a dystopian
      novel from the 1990s in which people flee the crumbling real world to be
      fully immersed in a virtual one. While he acknowledges that the origins of
      the word are a “con,” Zuckerberg is trying to reclaim the metaverse as a
      utopian idea that will unlock an entirely new economy of virtual goods and
      services.
    </Typography>
    <Typography paragraph>
      In the next decade, he thinks most people will be spending time in a fully
      immersive, 3D version of the internet that spans not just Meta’s hardware
      such as the Quest, but devices made by others. He’s pushing his teams to
      build technology that could one day let you show up in a virtual space as
      a full-bodied avatar, or appear as a hologram of yourself in the
      real-world living room of your friend who lives across the planet.
    </Typography>
    <Typography paragraph>
      He’s careful not to get into details, but he believes there will be a
      “pretty important role” for crypto technology like NFTs and smart
      contracts in the metaverse. “One of the big questions that people are
      going to have about virtual goods in the metaverse is, ‘Do I really get to
      own this thing?’” he told me. “‘Or is it just content that someone can
      basically just take away from me in the future?’ And I’m pretty sensitive
      to that given all the pressures that we’ve had to try to navigate around
      censorship, and what’s the definition of something that’s harmful versus
      when you have to get in the way of people being able to express
      something.”
    </Typography>
    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/QmH2k6ootLGSN4GZpUgsnOMrQAU=/0x0:2040x1360/920x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22888569/acastro_210929_4779_0001.jpg"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography variant="h6" paragraph>
      WHAT IS THE METAVERSE?
    </Typography>
    <Typography paragraph>
      It depends who you ask, but it usually refers to an array of
      interconnected digital spaces, sometimes in VR, sometimes experienced
      through a social network, and sometimes including real-time reference
      points to the physical world.
    </Typography>
    <Typography paragraph>
      The software underpinning Zuckerberg’s take on the metaverse is called
      Horizon. It’s part Minecraft meets Roblox with an application for work
      collaboration as well. Next year, the company plans to introduce Project
      Cambria, a high-end, mixed reality headset previewed at Connect that mixes
      virtual graphics with the real world in full color. It will have face and
      eye tracking to allow for more realistic avatars.
    </Typography>
    <Typography paragraph>
      Also in the works is a pair of AR glasses called Nazaré. While they are
      still several years out, to Zuckerberg they have the potential to be as
      widely used as mobile phones are today. The idea is that, unlike a VR
      headset that takes you out of the real world, Nazaré will look like a
      normal pair of glasses with displays capable of overlaying computing onto
      the world around you. “These products are becoming decreasingly like what
      you would think of as a social media product today,” he said. “And I think
      just having a different identify for that is important.”
    </Typography>
    <Typography paragraph>
      It’s unclear if this rebrand to Meta will achieve what Zuckerberg is
      aiming for, but there’s no question that it’s a bold move. The company is
      facing down new social media competitors, frustrated government
      regulators, and a new generation of potential users who view its core app
      as far from hip. The metaverse offers Zuckerberg a substantially new,
      maximalist direction to move toward. Now it needs to get to work.
    </Typography>
    <Typography paragraph>
      Below is a transcript of my full interview with Zuckerberg. It has been
      edited for length and clarity:
    </Typography>
    <Typography variant="h6" paragraph>
      Alex Heath: Can you explain why you’re doing this rebrand?
    </Typography>
    <Typography variant="h6" paragraph>
      Mark Zuckerberg:
    </Typography>
    <Typography paragraph>
      At a high level, we did this segment reporting change on Monday as part of
      earnings. So we’re now looking at our business as two different segments.
      One for the social apps and one for future platforms basically. And the
      idea is that the metaverse work that we’re doing is not about any one of
      those segments. It’s not like Reality Labs is doing the work building the
      metaverse. It goes across all of this. The metaverse is going to be both
      future platforms and social experiences.
    </Typography>
    <Typography paragraph>
      So we wanted to have a new brand identity that, as you reported, is
      directionally aligned with the future vision that we’re working towards.
      There’s sort of a higher-level brand identity goal and then there’s a more
      technical and functional goal. The higher-level piece is that Facebook is
      the iconic social media brand. And increasingly we’re doing more than
      that. People think of us as a social media company, but the way we think
      about ourselves is that we’re a technology company that builds technology
      to help people connect with each other. We think that makes us different
      from the other companies because everyone else is trying to work on how
      people interact with technology, where as we we build technologies so that
      people can interact with each other.
    </Typography>
    <Typography variant="h6" paragraph>
      A Meta logo replaced the “like” symbol that was previously in front of the
      company’s HQ
    </Typography>

    <Grid item>
      <ZoomImage
        style={{
          marginBottom: "10px",
          maxWidth: "100%",
          width: "100%",
          verticalAlign: "middle",
        }}
        src={
          "https://cdn.vox-cdn.com/thumbor/p4-X0La_taTRBxZQtIupNt7lyGw=/0x0:2040x1360/1120x0/filters:focal(0x0:2040x1360):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22964096/DSCF7682.jpg"
        }
        alt="google pixel"
      />
    </Grid>
    <Typography paragraph>
      For us, it was never just about social media, and increasingly we’re
      moving beyond that. It felt like having the brand of the company be tied
      to the idea of social media and one of the specific products that we’re
      building there — because we now have Instagram and WhatsApp growing to be
      really important as well — felt increasingly like it didn’t encompass
      everything that we were doing. So we wanted to shift that to have
      something that is more evocative of the vision that we’re moving towards.
    </Typography>
    <Typography paragraph>
      On a more functional and technical basis, I think that there was just a
      lot of confusion and awkwardness about having the company brand be also
      the brand of one of the social media apps. When people wanted to go sign
      into their Quest, we wanted them to sign in with their Facebook account
      because we wanted to have a single identity or account system for the
      company. Google has that, Apple has that. Microsoft has it. But for us,
      the issue is that if you’re signing into Quest or WhatsApp or Instagram
      with a Facebook account, I think that there was a confusion about, “Am I
      signing into this with my Facebook corporate account or is this going to
      be tied to my social media account?” People had concerns on Quest. “If I
      don’t want to use Facebook or if something happens and my account gets
      deactivated, is my device now going to get bricked?” That’s a concern that
      I think people shouldn’t have to have. People had concerns that, “If I
      sign into Instagram with this or if I sign into WhatsApp with it, does
      that mean that my data is somehow gonna get shared over here in a way that
      I didn’t want?”
    </Typography>
    <Typography paragraph>
      “IT’S HELPFUL FOR PEOPLE TO HAVE A RELATIONSHIP WITH A COMPANY THAT IS
      DIFFERENT FROM THE RELATIONSHIP WITH ANY SPECIFIC ONE OF THE PRODUCTS.”
    </Typography>
    <Typography paragraph>
      I think it’s helpful for people to have a relationship with a company that
      is different from the relationship with any specific one of the products,
      that can kind of supersede all of that. So from a functional perspective,
      I thought it was very important to have that. And as I looked out several
      years towards launching something like Nazaré, these products are becoming
      decreasingly like what you would think of as a social media product today.
      I think just having a different identify for that is important.
    </Typography>
    <Typography paragraph>
      When I thought about when was the best time to try to make that shift,
      it’s kind of like as soon as possible once you realize that you want to do
      that. So that’s what led us down this path. We’ve been thinking about it
      for a long time. I formally kicked off the project earlier this year. It
      was a little over more than six months ago. But this is a debate that
      we’ve been having for a long time inside the company, about whether we
      should do this. It’s something that I’ve been working with Alex Schultz on
      very closely since he became the CMO.
    </Typography>
  </Fragment>
);

const posts = [
  {
    title:
      "SPRINGBOARD: THE SECRET HISTORY OF THE FIRST REAL SMARTPHONE IS OUT NOW",
    id: 1,
    date: "Updated on 26/10/2021, 11:23pm",
    src: "https://i.insider.com/557b54bceab8eaa870946c26?width=700&format=jpeg&auto=webp",
    snippet:
      " A decade before Steve Jobs introduced the iPhone, a tiny team of renegades imagined and tried to build the modern smartphone.",
    content: content1,
  },
  {
    title: "Netflix is shifting the way it ranks its most popular titles",
    id: 2,
    date: "Updated on 20/10/2021, 12:00pm",
    src: "https://cdn.vox-cdn.com/thumbor/zZIQcLnNLrUHGaddlINU5zDxF3U=/0x0:3840x1920/577x325/filters:focal(1696x298:2310x912):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70017846/SquidGame_Season1_Episode1_00_44_44_16.0.png",
    snippet:
      "Netflix will change the public-facing metrics it uses to rank the most popular.",
    content: content2,
  },
  {
    title: "The biggest announcements from Google’s Pixel 6 event",
    id: 3,
    date: "Updated on 20/10/2021, 12:32pm",
    src: "https://cdn.vox-cdn.com/thumbor/Syp3svugTUM4gJ-HxAYHIvzqRPg=/0x0:1919x1077/577x325/filters:focal(807x386:1113x692):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70016892/lcimg_e5568f90_70f5_4d74_938b_5d1c34060e11.0.jpg",
    snippet:
      "Google just wrapped up its Pixel 6 Fall Launch event, where it announced two new phones.",
    content: content3,
  },
  {
    title: "Bosnian Man Builds Rotating House As Monument Of Love For His Wife",
    id: 4,
    date: "Updated on 16/10/2021, 01:02pm",
    src: "https://img.huffingtonpost.com/asset/6164623e280000972ba730e5.jpeg?ops=scalefit_720_noupscale&format=webp",
    snippet:
      "Vojin Kusic, 72, says the home's front door also rotates so if his wife",
    content: content4,
  },
  {
    title: "Phone thief held after livestreaming his own face",
    id: 5,
    date: "Updated on 21/10/2021, 9:22am",
    src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/56C7/production/_121151222_046fce24-c3b1-47c2-89a0-d3d7e5d0b320.jpg",
    snippet: "Egyptian man arrested after broadcasting face during robbery",
    content: content5,
  },
  {
    title: "You may be able to book a flying taxi within three years",
    id: 6,
    date: "Updated on 21/10/2021, 9:22am",
    src: "https://ichef.bbci.co.uk/news/976/cpsprodpb/0E2D/production/_121092630_paulsciarraexecutivechairmanandjoebenbevirtfounderandchiefexecutiveofficerjobyaviation-1.jpg",
    snippet:
      "The bosses of Joby Aviation hope to be able to start commercial flights of their flying taxi in 2024",
    content: content6,
  },
  {
    title:
      "Jesse Lingard: What does future hold for Manchester United forward?",
    id: 7,
    date: "Updated on 21/10/2021, 4:00pm",
    src: "https://ichef.bbci.co.uk/onesport/cps/976/cpsprodpb/3AAA/production/_121081051_jesselingard.jpg",
    snippet:
      "Jesse Lingard has mainly been contributing from off the bench for Manchester United this season ",
    content: content7,
  },
  {
    title:
      "Manchester United’s worst and heaviest Premier League defeats since 1893",
    id: 8,
    date: "Updated on 25/10/2021, 06:18am",
    src: "https://e0.365dm.com/21/10/1600x900/skysports-man-utd-biggest-defeats_5558388.jpg?20211024205751",
    snippet:
      "Man Utd 0-5 Liverpool: Mohamed Salah hits hat-trick and Paul Pogba sees red",
    content: content8,
  },
  {
    title:
      "Facebook will start downranking your Groups posts if you break its rules",
    id: 9,
    date: "Updated on 21/10/2021, 4:00am",
    src: "https://cdn.vox-cdn.com/thumbor/Mfvp2mfH8SG231krn7CwvbxovwM=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70021135/mdoying_180118_2249_facebook_0708stills.0.jpg",
    snippet:
      "Facebook will start demoting all Groups content from people who have violated its policies",
    content: content9,
  },
  {
    title: "New On Netflix November 2021: 'Big Mouth,' 'Tiger King 2' And More",
    id: 10,
    date: "Updated on 21/10/2021, 3:02am",
    src: "https://img.huffingtonpost.com/asset/617079dc2000000b4e8d0baf.jpg?cache=3icJnVQbn8&ops=scalefit_720_noupscale&format=webp",
    snippet:
      "If you’re counting down the days until the holiday season commences, we’ve got good news",
    content: content10,
  },
  {
    title: "MARK ZUCKERBERG ON WHY FACEBOOK IS REBRANDING TO META",
    id: 11,
    date: "Updated on 29/10/2021, 3:02am",
    src: "https://cdn.vox-cdn.com/thumbor/TeloiEOpKWBG4oZXx8VeX-OqXls=/0x0:2048x1365/539x303/filters:focal(861x520:1187x846):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70058406/The_Verge_Mark_Zuckerberg_interview__1__01.0.jpg",
    snippet:
      "ForFor the first time in 17 years, Mark Zuckerberg has a new job title.",
    content: content11,
  },
];

export default posts;
