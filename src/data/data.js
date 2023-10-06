import mainimg from "../assets/img1.png";

import hightlightimg from "../assets/img3.png";
import rolls from "../assets/rolls.png";

import clip from "../assets/video/clip.mp4";
import car1 from "../assets/video/car1.jpg";
import car2 from "../assets/video/car2.jpg";
import car3 from "../assets/video/car3.jpg";

import porsche1 from "../assets/redcar.png";
import porsche2 from "../assets/greencar.png";
import porsche3 from "../assets/graycar.png";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";


import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";




import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const mainapi = {
  title: "Enjoy Driving With Us",
  subtitle: "All Models Available",
  img: mainimg,
  btntext: "Explore Car",
  videos: [
    { imgsrc: car1, clip: clip },
    { imgsrc: car2, clip: clip },
    { imgsrc: car3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Popular Sales",
  items: [
    {
      id: "0p0x1",
      title: "Car Model A",
      text: "Feel The Greatest",
      rating: "3.7",
      btn: "Rent Now",
      img: porsche2,
      price: "5000",
      color: "from-green-600 to-green-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0p0x2",
      title: "Car Model B",
      text: "Feel The Greatest",
      rating: "4.8",
      btn: "Rent Now",
      img: porsche1,
      price: "5000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Car Model C",
      text: "Feel The Greatest",
      rating: "2.3",
      btn: "Rent Now",
      img: porsche3,
      price: "5000",
      color: "from-gray-500 to-gray-500",
      shadow: "shadow-lg shadow-gray-500",
    },
  ],
};

const highlight = {
  heading: "Highlights",
  title: "Enjoy driving with us",
  text: "Making Cars For Our Clients Is The Best Job In The World.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  btn: "Explore More",
  url: "http://127.0.0.1:5173/",
  img: hightlightimg,
};

const features = {
  heading: "FEATURED",
  title: "Experience Best Things With US",
  text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  btn: "Explore More",
  url: "http://127.0.0.1:5173/",
  img: rolls,
};

const toprateslaes = {
  title: "Top Rated Sales",
  items: [
    {
      id: "0M0x1",
      title: "Super Car Model A",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img7,
      price: "1500",
      color: "from-green-600 to-green-600",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x2",
      title: "Super Car Model B",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img2,
      price: "2200",
      color: "from-red-500 to-red-500",
      shadow: "shadow-lg shadow-red-500",
    },
    {
      id: "0M0x3",
      title: "Super Car Model C",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img3,
      price: "1700",
      color: "from-gray-900 to-gray-900",
      shadow: "shadow-lg shadow-gray-900",
    },
    {
      id: "0M0x4",
      title: "Super Car Model D",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img4,
      price: "6330",
      color: "from-blue-900 to-blue-900",
      shadow: "shadow-lg shadow-blue-900",
    },
    {
      id: "0M0x5",
      title: "Super Car Model F",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img5,
      price: "9800",
      color: "from-red-900 to-red-500",
      shadow: "shadow-lg shadow-red-500",
    },
    {
      id: "0M0x6",
      title: "Super Car Model Z",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img6,
      price: "6500",
      color: "from-gray-500 to-gray-500",
      shadow: "shadow-lg shadow-gray-500",
    },
    {
      id: "0M0x7",
      title: "Super Car Model H",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img1,
      price: "8700",
      color: "from-blue-300 to-blue-300",
      shadow: "shadow-lg shadow-blue-300",
    },
    {
      id: "0M0x12",
      title: "Super Car Model X",
      text: "Some Description",
      rating: "5+",
      btn: "Buy Now",
      img: img8,
      price: "4900",
      color: "from-purple-900 to-purple-900",
      shadow: "shadow-lg shadow-purple-900",
    },
  ],
};


const story = {
  title: "Top Cars",
  news: [
    {
      title: "Model A",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: slide2,
      url: "http://127.0.0.1:5173/",
      like: "3/5",
      time: "11 Mins",
      by: "Rolls",
      btn: "Read More"
    },
    {
      title: "Model B",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: slide3,
      time: "41 Mins",
      like: "5/5",
      url: "http://127.0.0.1:5173/",
      by: "Rolls",
      btn: "Read More"
    },
    {
      title: "Model C",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: slide2,
      time: "2 Hours",
      url: "http://127.0.0.1:5173/",
      like: "5/5",
      by: "Rolls",
      btn: "Read More"
    },
    {
      title: "Model D",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      img: slide3,
      time: "7 Months",
      url: "http://127.0.0.1:5173/",
      like: "5/5",
      by: "Rolls",
      btn: "Read More"
    }
  ],
};


const footerAPI = {
  titles: [ {title: "About Cars"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Prupose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Gift Card Balance"},
      {link: "Contact Us"},
      {link: "FAQ"},
      {link: "Blog"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { mainapi, footerAPI, story, features, highlight, toprateslaes, popularsales };
