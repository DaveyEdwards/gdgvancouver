const appConfig = {
  firebaseSettings: {
    meetupCloudFunctionUrl:
      'https://us-central1-gdgvancouver-e7a28.cloudfunctions.net/meetupEventsApi',
  },
  palette: {
    primary: {
      main: '#4285F4',
    },
    secondary: {
      main: '#EA4335',
    },
  },
  meetupName: 'GDG Cloud Vancouver',
  meetupUrl: 'https://www.meetup.com/GDGCloudVancouver/',
  logo: '/gdgcloud.svg',
  navigationItems: [
    {
      type: 'BUTTON',
      icon: 'home',
      title: 'Home',
      slug: `/`,
    },
    {
      type: 'BUTTON',
      icon: 'event',
      title: 'Events',
      slug: '/events',
    },
    {
      type: 'BUTTON',
      icon: 'collections',
      title: 'Photos',
      slug: '/photos',
    },
    {
      type: 'BUTTON',
      icon: 'info',
      title: 'About Us',
      slug: '/about',
    },
    {
      type: 'BUTTON',
      icon: 'live_help',
      title: 'Resources',
      slug: '/resources',
    },
    {
      type: 'BUTTON',
      src: '/wtm.svg',
      title: 'WomenTechmakers',
      href: 'https://wtmgdgvancouver.com/',
    },
  ],
  aboutUsDescription:
    'GDG Cloud Vancouver is local community-ran meetup for developers interested in resources and technology from Google Developers. We focus on Google Cloud Platform and Open Source technologies that are part of it.',
  organizers: [
    {
      name: 'Davey Edwards',
      description:
        'Davey is obsessed with learning and building new things.  His primary focus right now is excelling his ability to build planetary scale applications with Google Cloud Platform, React, Apollo, and GraphQL using TypeScript.  Some other interests include video creation, biohacking, 3d modeling, physically building things, and manufacturing.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fdaveypart2.jpg?alt=media&token=4ceeb18f-d617-4b49-8942-f32590148192',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/daveyedwards',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/daveysworlds/',
        },
        {
          name: 'Github',
          url: 'https://github.com/DaveyEdwards',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/davey-edwards-a22412137/',
        },
      ],
    },
    {
      name: 'Kyle Ahn',
      description:
        'Kyle Ahn is always interested in learning and trying out new things, solving challenges, meeting new people, getting help and helping people in need. All of which made him join GDGCV. He does legwork, deals with venue, sponsorship and MC the events. In his free time, he looks at kitten gifs.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fkyle2.jpg?alt=media&token=951c2cdb-3e2a-4be8-b327-ae31a99efb4f',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/yyssahn',
        },
        {
          name: 'Github',
          url: 'https://github.com/yyssahn/',
        },
        {
          name: 'Website',
          url: 'yoonsungahn.net',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/yoonsungahn/',
        },
      ],
    },
    {
      name: 'Piyali Dey',
      description:
        'Piyali has been involved with Google Developers Group since early 2017 and has served as an organizer for both GDG Silicon Valley and GDG Cloud Vancouver. At present, she is also leading Google’s WomenTechmakers program in Vancouver, BC area. Piyali is a passionate speaker, mentor and community builder.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fpiyali2.jpg?alt=media&token=77b657c3-7847-4c2d-9456-a1ae01b3d69c',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/piyalidey_WTM',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/piyalidey/',
        },
      ],
    },
    {
      name: 'Samuel Baruffi',
      description:
        'Samuel loves technology, he has been in the IT industry for 12+ years with experience in Infrastructure, Networking, and DevOps. For the last 4 years focusing on how to deliver fast quality code using a wide variety of tools and programming languages to apply the DevOps and Agile mindset in different corporations. Samuel is a cloud advocate, a fan of Kubernetes, microservices, serverless and of course GCP.  He loves meeting new people in the community and sharing experiences.',
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2Fsam.jpg?alt=media&token=24a827e5-3751-4506-baf5-fff5b3a4951e',
      actions: [
        {
          name: 'Twitter',
          url: 'https://twitter.com/SamuelBaruffi',
        },
        {
          name: 'Github',
          url: 'https://github.com/samuelbaruffi',
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/samuelbaruffi/',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/samuelbaruffi/',
        },
      ],
    },
  ],
  volunteers: [
    {
      name: 'Shreya Sharma',
      description:
        "Shreya is a continuosly evolving marketer who is obsessed with sharing the meaningful stories behind brands with their audience. Her interests range from Google Ads and Analytics to application of Reggio-Inspired curriculum to encourage creativity among children. In her spare time, she can be found consuming science fiction and 80's music.",
      img:
        'https://firebasestorage.googleapis.com/v0/b/gdgvancouver-e7a28.appspot.com/o/people%2FShreya.jpg?alt=media&token=7c2029e6-e936-4aac-9c09-39508661a62e',
      actions: [
        {
          name: 'Twitter',
          url: 'https://www.twitter.com/shreyaisms',
        },
      ],
    },
    {
      name: 'Hafiza Nayeema Shad',
      description:
        'Nayeema is inclined to learn new things and always love to solve programming challenges.  In her spare time she spends time with her daughters regarding programming, solving puzzles and reading books.',
      img: '',
      actions: [
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/hafiza-shad-36114419/',
        },
      ],
    },
  ],
  socialMedias: [
    {
      title: 'Twitter',
      url: 'https://twitter.com/gdgvancouver',
      iconSrc: 'twitter',
    },
    {
      title: 'Instagram',
      url: 'https://www.instagram.com/gdgcloudvancouver/',
      iconSrc: 'instagram',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/company/google-developer-group-vancouver',
      iconSrc: 'linkedin',
    },
    {
      title: 'WTM Twitter',
      url: 'https://twitter.com/GWTMVancouver',
      iconSrc: 'twitter',
    },
    {
      title: 'Meetup',
      url: 'https://www.meetup.com/GDGCloudVancouver/',
      iconSrc: 'meetup',
    },
  ],
};

export default appConfig;
