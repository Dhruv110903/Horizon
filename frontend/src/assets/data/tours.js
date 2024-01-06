import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";

const tours = [
  {
    id: "01",
    title: "Ajanta Caves",
    city: "Maharashtra",
    distance: 300,
    address:'Maharashtra',
    price: 10000,
    maxGroupSize: 10,
    desc: "The Ajanta Caves are 30 caves which have been carved into a giant cliff face.These marvellous caves are in a fantastic condition due to being “forgotten” until 1819 when a British tiger hunting party stumbled upon them.",
    reviews: [
      
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "The Golden Temple",
    city: "Punjab",
    distance: 400,
    address:'Punjab',
    price: 5000,
    maxGroupSize: 8,
    desc: "This majestic temple is a must-visit attraction for anyone; featuring stunning architecture and a grandiose atmosphere that is almost unmatchable. Built in 1604 the Golden Temple sits lower than its surrounding buildings and has 4 entrances which symbolise the fact that anyone is welcome no matter where you come from or what you believe.",
    reviews: [
     
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Mehrangarh Fort",
    city: "Rajhasthan",
    distance: 500,
    address:'Rajhasthan',
    price: 99,
    maxGroupSize: 8,
    desc: "Mehrangarh Fort is a tremendous sight whichever time of the day you decide to visit. Rising well above the city below, the fort is a totally imposing but strangely beautiful sight to behold. To get to the fort, visitors have to pass through 7 gates; many of which still bear battle scars dating back through the centuries.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  // {
  //   id: "04",
  //   title: "Beautiful Sunrise, Thailand",
  //   city: "Thailand",
  //   distance: 500,
  //   address:'London',
  //   price: 99,
  //   maxGroupSize: 8,
  //   desc: "this is the description",
  //   reviews: [
  //     {
  //       name: "jhon doe",
  //       rating: 4.6,
  //     },
  //   ],
  //   avgRating: 4.5,
  //   photo: tourImg04,
  //   featured: true,
  // },
  {
    id: "05",
    title: "Agra Fort",
    city: "Uttar Pradesh",
    distance: 500,
    address:'Uttar Pradesh',
    price: 9000,
    maxGroupSize: 8,
    desc: "Located close to the Taj Mahal, Agra Fort is an unmissable red fortress containing many traditional Indian wonders. The impression one gets from a visit to this fort is one of grandeur, with some of the buildings within its confines being constructed with marble. Its long and colourful history includes many instances of armies utilising the fort; something which is still the case today as the Indian Army still uses part of the fort! Visit Agra Fort and be blown away by the fabulous architecture.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Mysore Palace",
    city: "Karnataka",
    distance: 500,
    address:'Karnataka',
    price: 8000,
    maxGroupSize: 8,
    desc: "This established icon of India is simply stunning; Mysore Palace was built in 1912 and contains 18 decorative temples. The Palace is at the centre of The Old Fort complex which features many gardens and courtyards giving the whole area a regal feel. The armoury within the palace contains over 700 weapons and gives visitors an exciting glimpse into some of India’s past.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Darjeeling Himalayan Railway",
    city: "West Bengal",
    distance: 500,
    address:'West Bengal',
    price: 4500,
    maxGroupSize: 8,
    desc: "The Darjeeling Himalayan Railway makes this list because of the beautiful landscape you view during your journey with the steam locomotive. Opened in 1881, this railway was the first ever hill passenger railway and has achieved UNESCO World Heritage Site classification.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Taj Mahal",
    city: "Uttar Pradesh",
    distance: 500,
    address:'Uttar Pradesh',
    price: 6500,
    maxGroupSize: 8,
    desc: "The Taj Mahal really requires no introduction as one of the world’s most recognizable landmarks it is stunning in real life no matter how many pictures you have seen of it! Aesthetically perfect; this mausoleum is named by UNESCO as “the greatest architectural achievement in the whole range of Indo-Islamic architecture.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: false,
  },
];

export default tours;
