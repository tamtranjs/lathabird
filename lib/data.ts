import { FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

type City = {
  name: string;
  type: string;
}

export const CityList: City[] = [
  { "name": "United States", "type": "country" },
  { "name": "New York", "type": "city" },
  { "name": "Los Angeles", "type": "city" },
  { "name": "Chicago", "type": "city" },
  { "name": "Houston", "type": "city" },
  { "name": "Vietnam", "type": "country" },
  { "name": "Ho Chi Minh City", "type": "city" },
  { "name": "Hanoi", "type": "city" },
  { "name": "Da Nang", "type": "city" },
  { "name": "Hoi An", "type": "city" },
  { "name": "Netherlands", "type": "country" },
  { "name": "Amsterdam", "type": "city" },
  { "name": "Rotterdam", "type": "city" },
  { "name": "Utrecht", "type": "city" },
  { "name": "Japan", "type": "country" },
  { "name": "Tokyo", "type": "city" },
  { "name": "Osaka", "type": "city" },
  { "name": "Kyoto", "type": "city" },
  { "name": "Nagoya", "type": "city" },
  { "name": "Germany", "type": "country" },
  { "name": "Berlin", "type": "city" },
  { "name": "Munich", "type": "city" },
  { "name": "Frankfurt", "type": "city" },
  { "name": "Hamburg", "type": "city" },
  { "name": "Australia", "type": "country" },
  { "name": "Sydney", "type": "city" },
  { "name": "Melbourne", "type": "city" },
  { "name": "Brisbane", "type": "city" },
  { "name": "Perth", "type": "city" },
  { "name": "Canada", "type": "country" },
  { "name": "Toronto", "type": "city" },
  { "name": "Vancouver", "type": "city" },
  { "name": "Montreal", "type": "city" },
  { "name": "Calgary", "type": "city" },
  { "name": "United Kingdom", "type": "country" },
  { "name": "London", "type": "city" },
  { "name": "Manchester", "type": "city" },
  { "name": "Birmingham", "type": "city" },
  { "name": "Glasgow", "type": "city" },
  { "name": "France", "type": "country" },
  { "name": "Paris", "type": "city" },
  { "name": "Marseille", "type": "city" },
  { "name": "Lyon", "type": "city" },
  { "name": "Toulouse", "type": "city" },
  { "name": "China", "type": "country" },
  { "name": "Beijing", "type": "city" },
  { "name": "Shanghai", "type": "city" },
  { "name": "Guangzhou", "type": "city" },
  { "name": "Shenzhen", "type": "city" },
  { "name": "India", "type": "country" },
  { "name": "Mumbai", "type": "city" },
  { "name": "Delhi", "type": "city" },
  { "name": "Bangalore", "type": "city" },
  { "name": "Kolkata", "type": "city" },
  { "name": "Brazil", "type": "country" },
  { "name": "São Paulo", "type": "city" },
  { "name": "Rio de Janeiro", "type": "city" },
  { "name": "Brasília", "type": "city" },
  { "name": "Salvador", "type": "city" }
]

type Destination = {
  image: string,
  place: string,
  hotels: string,
}

export const topDestination: Destination[] = [
  {
    image: "/images/listing/1.jpg",
    place: 'Rome, Italy',
    hotels: '3 Hotels'
  },
  {
    image: "/images/listing/2.jpg",
    place: 'Singapore',
    hotels: '3 Hotels'
  },
  {
    image: "/images/listing/3.jpg",
    place: 'Paris, France',
    hotels: '3 Hotels'
  },
  {
    image: "/images/listing/4.jpg",
    place: 'Goa, India',
    hotels: '3 Hotels'
  },
  {
    image: "/images/listing/5.jpg",
    place: 'Whistler, Canada',
    hotels: '3 Hotels'
  },
  {
    image: "/images/listing/6.jpg",
    place: 'Lumpur, Malaysia',
    hotels: '3 Hotels'
  },
  {
    image: "/images/listing/7.jpg",
    place: 'Sydney, Australia',
    hotels: '3 Hotels'
  },
  {
    image: "/images/listing/8.jpg",
    place: 'Virginia Beach',
    hotels: '3 Hotels'
  },
]

type Package = {
  id: number,
  image: string,
  tagText?: string,
  place: string,
  title: string,
  amount: string,
}

export const packages: Package[] = [
  {
    id: 1,
    image: "/images/listing/1.jpg",
    tagText: '10% Off',
    place: 'Dubai',
    title: 'Cuba Sailing Adventure',
    amount: '$ 58 / Day',
  },
  {
    id: 2,
    image: "/images/listing/2.jpg",
    place: 'Italy',
    title: 'Tour in New York',
    amount: '$ 58 / Day'
  },
  {
    id: 3,
    image: "/images/listing/3.jpg",
    place: 'Maldivas',
    title: 'Discover Greece',
    amount: '$ 58 / Day'
  },
  {
    id: 4,
    image: "/images/listing/4.jpg",
    place: 'USA',
    title: 'Museum of Modern Art',
    amount: '$ 58 / Day'
  },
  {
    id: 5,
    image: "/images/listing/5.jpg",
    place: 'Bali',
    title: 'Peek Mountain View',
    amount: '$ 58 / Day'
  },
  {
    id: 6,
    image: "/images/listing/6.jpg",
    tagText: '25% Off',
    place: 'Bangkok',
    title: 'Hot Baloon Journey',
    amount: '$ 58 / Day'
  },
  {
    id: 7,
    image: "/images/listing/7.jpg",
    place: 'Singapore',
    title: 'Orca Camp Kayaking Trip',
    amount: '$ 58 / Day'
  },
  {
    id: 8,
    image: "/images/listing/8.jpg",
    tagText: '20% Off',
    place: 'Thailand',
    title: 'Caño Cristales River Trip',
    amount: '$ 58 / Day'
  },
  {
    id: 9,
    image: "/images/listing/9.jpg",
    place: 'Pattaya',
    title: 'Osa Peninsula to Dominical',
    amount: '$ 58 / Day'
  },
  {
    id: 10,
    image: "/images/listing/10.jpg",
    place: 'Lakshadweep',
    title: 'History of The Emporer',
    amount: '$ 58 / Day'
  },
  {
    id: 11,
    image: "/images/listing/11.jpg",
    place: 'Paris',
    title: 'Wildness of Paris',
    amount: '$ 58 / Day'
  },
  {
    id: 12,
    image: "/images/listing/12.jpg",
    place: 'London',
    title: 'The Hills and Mountains',
    amount: '$ 58 / Day'
  },
]

export const footerSocial = [
  {
    icon: FiShoppingCart,
    link: 'https://1.envato.market/travosy-react'
  },
  {
    icon: FiDribbble,
    link: 'https://dribbble.com/shreethemes'
  },
  {
    icon: FiLinkedin,
    link: 'http://linkedin.com/company/shreethemes'
  },
  {
    icon: FiFacebook,
    link: 'https://www.facebook.com/shreethemes'
  },
  {
    icon: FiInstagram,
    link: 'https://www.instagram.com/shreethemes'
  },
  {
    icon: FiTwitter,
    link: 'https://twitter.com/shreethemes'
  },
  {
    icon: FiMail,
    link: 'mailto:support@shreethemes.in'
  },
]

export const footerCompany = [
  {
    name: 'About us',
    link: '/aboutus'
  },
  {
    name: 'Services',
    link: '/services'
  },
  {
    name: 'Team',
    link: '/team'
  },
  {
    name: 'Pricing',
    link: '/pricing'
  },
  {
    name: 'Blog',
    link: '/blogs'
  },
  {
    name: ' Login',
    link: '/login'
  },
]

export type Client = {
  image: string,
  desc: string,
  name: string,
  possition: string,
}

export const ClientData: Client[] = [
  {
    image: "/images/client/01.jpg",
    desc: '" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "',
    name: 'Calvin Carlo',
    possition: 'Manager'
  },
  {
    image: "/images/client/02.jpg",
    desc: '"The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century."',
    name: 'Christa Smith',
    possition: 'Manager'
  },
  {
    image: "/images/client/03.jpg",
    desc: '" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "',
    name: 'Jemina CLone',
    possition: 'Manager'
  },
  {
    image: "/images/client/04.jpg",
    desc: '" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "',
    name: 'Smith Vodka',
    possition: 'Manager'
  },
  {
    image: "/images/client/05.jpg",
    desc: '" There is now an abundance of readable dummy texts. These are usually used when a text is required. "',
    name: 'Cristino Murfi',
    possition: 'Manager'
  },
  {
    image: "/images/client/06.jpg",
    desc: '" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "',
    name: 'Cristino Murfi',
    possition: 'Manager'
  },
]

export const blogData: Blog[] = [
  {
    id: 1,
    image: "/images/blog/1.jpg",
    date: '13th Sep 2024',
    title: 'This Spanish city is a feast for the eyes: Travosy',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Travel',
    slug: "this-spanish-city-is-a-feast-for-the-eyes-travosy",
    author: {
      avatar: "/images/client/01.jpg",
      name: 'Calvin Carlo',
      role: 'Manager',
    }
  },
  {
    id: 2,
    image: "/images/blog/2.jpg",
    date: '29th Nov 2024',
    title: 'New Zealand’s South Island brims with majestic',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Tour',
    slug: "new-zealand-s-south-island-brims-with-majestic",
    author: {
      avatar: "/images/client/02.jpg",
      name: 'Christa Smith',
      role: 'Manager',
    }
  },
  {
    id: 3,
    image: "/images/blog/3.jpg",
    date: '29th Dec 2024',
    title: 'When you visit the Eternal Rome City: Travosy',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Tourist',
    slug: "when-you-visit-the-eternal-rome-city-travosy",
    author: {
      avatar: "/images/client/03.jpg",
      name: 'Jemina CLone',
      role: 'Manager',
    }
  },
  {
    id: 4,
    image: "/images/blog/4.jpg",
    date: '13th March 2024',
    title: 'My Story When I Backpacked Around The World',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Flight',
    slug: "my-story-when-i-backpacked-around-the-world",
    author: {
      avatar: "/images/client/04.jpg",
      name: 'Smith Vodka',
      role: 'Manager',
    }
  },
  {
    id: 5,
    image: "/images/blog/5.jpg",
    date: '5th May 2024',
    title: 'Organization of accounting at the enterprise',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Arab',
    slug: "organization-of-accounting-at-the-enterprise",
    author: {
      avatar: "/images/client/05.jpg",
      name: 'Cristino Murfi',
      role: 'Manager',
    }
  },
  {
    id: 6,
    image: "/images/blog/6.jpg",
    date: '19th June 2024',
    title: 'Three of the Best Day Trips to Make from Francisco',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Dubai',
    slug: "three-of-the-best-day-trips-to-make-from-francisco",
    author: {
      avatar: "/images/client/06.jpg",
      name: 'Cristino Murfi',
      role: 'Manager',
    }
  },
  {
    id: 7,
    image: "/images/blog/7.jpg",
    date: '20th June 2024',
    title: 'Why Do People Travel ? Reasons People Travel in 2023',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Maldivas',
    slug: "why-do-people-travel-reasons-people-travel-in-2023",
    author: {
      avatar: "/images/client/01.jpg",
      name: 'Calvin Carlo',
      role: 'Manager',
    }
  },
  {
    id: 8,
    image: "/images/blog/8.jpg",
    date: '31st Aug 2024',
    title: 'Jungles In Australia: Vermont’s Rugged, Retro Ski Mountain',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'News',
    slug: "jungles-in-australia-vermont-s-rugged-retro-ski-mountain",
    author: {
      avatar: "/images/client/02.jpg",
      name: 'Christa Smith',
      role: 'Manager',
    }
  },
  {
    id: 9,
    image: "/images/blog/9.jpg",
    date: '1st Sep 2024',
    title: 'Traveller Visiting Ice Cave With Amazing Eye-catching Scenes',
    desc: 'This is required when, for example, the final text is not yet available.',
    tag: 'Packages',
    slug: "traveller-visiting-ice-cave-with-amazing-eye-catching-scenes",
    author: {
      avatar: "/images/client/03.jpg",
      name: 'Jemina CLone',
      role: 'Manager',
    }
  },
]