import {
  ApprovalIcon,
  PoolIcon,
  ProtecIcon,
  SnorkelIcon,
  SwimmingPoolIcon,
  ZoomOutIcon,
  OkHandIcon,
} from '@/components/icons';

// Hero Section
const heroSection = {
  title: 'Bring the swim school to',
  titleHighlight: 'your pool!™',
  // title: "Bring the swim school to your pool!™",
  desc: 'Book swim lessons at your home or community pool—fast progress and guaranteed results!',
};

// Why Choose Sunsational
const whyChooseSunsationalSection = {
  title: 'Why Choose Sunsational Swim School?',
  steps: [
    {
      image: <SnorkelIcon />,
      title: 'Water Safety,',
      titleHighlight: 'Made Simple',
      iconFrameColor: '#1A8DC6',
      rotateDeg: '',
      desc: 'Drowning is the #1 cause of death for children under 5, but formal swim lessons can reduce that risk by up to 88%. Our lessons focus on teaching lifesaving skills first, giving you peace of mind.',
    },
    {
      image: <PoolIcon />,
      title: 'Lessons at Your Home, ',
      titleHighlight: 'on Your Schedule',
      iconFrameColor: '#00ACB6',
      rotateDeg: '',
      desc: 'No more wasting time driving to lessons—our instructors come to your home or community pool at a time that works for you. Private lessons mean faster progress and less disruption to your routine.',
    },
    {
      image: <SwimmingPoolIcon />,
      title: 'Guaranteed Results, ',
      titleHighlight: 'Fast Progress',
      iconFrameColor: '#FEDF46',
      rotateDeg: '30deg',
      desc: 'We focus on results. Our “Learn to Swim Guarantee” ensures beginner swimmers (ages 3+) will swim to the side of the pool in 12 lessons—or we’ll keep going for free*.',
    },
    {
      image: <ApprovalIcon />,
      title: 'Certified & Experienced',
      titleHighlight: 'Instructors',
      iconFrameColor: '#F86008',
      rotateDeg: '35deg',
      desc: 'All Sunsational instructors are background-checked, CPR-certified, and experienced. They create a fun, supportive learning environment that helps swimmers gain confidence quickly.',
    },
  ],
  cardDesc:
    '“I am amazed with their progress after 12 lessons and it was one of the best investments I have ever made. I am now confident not only that my son can swim but if he were to fall into the water, I trust that he would come back up and make it out safely! That is a priceless feeling!”',
};

// Private Swimming CTA
const getPrivateSwimmingSection = {
  title: 'Get private swimming lessons at home!',
  desc: 'Start America’s #1 rated swimming lessons at your home pool as easy as 1,2,3',
};

// Testimonials
const thousandsOfFiveSection = {
  title: 'Thousands of Five Star Reviews and counting!',
  desc: 'Rated 4.9/5 Stars From Over 900+ Sunsational Swim School Reviews',
  steps: [
    {
      desc: '“Christine has been great! My kids enjoy swimming with her and she is very easy to work with...',
      name: 'Joselyn K',
      country: 'Las Vegas',
    },
    {
      desc: '“We have been having a great experience with Sunsational. First they worked hard to get us matched....',
      name: 'Neda',
      country: 'Arizona',
    },
    {
      desc: '“We had James for swimming lessons, and I cannot say enough good things about him. He was prompt every single day...',
      name: 'Raja',
      country: 'Atlanta',
    },
  ],
};

// Instructor Qualities
const whatMakesOurSwimSection = {
  title: 'What makes our Swim instructors Sunsational',
  steps: [
    {
      image: <ZoomOutIcon />,
      title: 'Vetted Swim Instructors',
      desc: 'Sunsational Swim School carefully screens each instructor to ensure they have the certifications, experience, and expertise needed to deliver effective swim lessons. Every swim instructor must also pass an extensive background check and be CPR certified.',
    },
    {
      image: <ProtecIcon />,
      title: 'Fully Insured for Peace of Mind',
      desc: 'Our company and our instructors are fully insured under a multi-million dollar general liability insurance policy, ensuring water safety and peace of mind for every lesson.',
    },
    {
      image: <OkHandIcon />,
      title: 'Risk-Free Guarantee',
      desc: 'Your satisfaction is our priority! If you’re not completely happy with your instructor after the first lesson, we’ll either restart your entire package with a new instructor or refund your purchase (minus the cost of one lesson) – the choice is yours!',
    },
  ],
};

// 100% Satisfaction Guarantee
const hundredSatisfaction = {
  title: '100% Satisfaction Guarantee',
  desc: "We're so confident in the quality of our swim instructors that we stand behind them with our Sunsational Instructor Guarantee! If your first lesson is anything less than sunsational, just let us know and we can either refund your unused lesson time or re-start your lesson package with a more suitable Instructor in [city], your choice!",
};

// Instructor CTA
const areYourSwim = {
  title: 'Are You A Swim Instructor?',
  desc: 'Find out how you can become a Sunsational instructor and enjoy flexible scheduling, competitive compensation, and a chance to make a difference!',
};

// Location Search CTA
const searchOurServiced = {
  title: 'Search our Serviced Locations',
  desc: 'Find out if a Sunsational Swim instructor is in your area',
};

// Footer
const footer = {
  desc: 'Our swim instructors travel to your home or community pool. Learn to Swim guaranteed with a Sunsational instructor!',
};

export {
  heroSection,
  whyChooseSunsationalSection,
  getPrivateSwimmingSection,
  thousandsOfFiveSection,
  whatMakesOurSwimSection,
  hundredSatisfaction,
  areYourSwim,
  searchOurServiced,
  footer,
};