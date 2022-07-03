import port1 from '../images/html-css.jpg';
import port2 from '../images/responsive.jpg';
import port3 from '../images/javascript.jpg';
import port4 from '../images/react.jpg';
import port5 from '../images/dark-theme.jpg';
import port6 from '../images/clone.jpg';
import port7 from '../images/landing_page.jpg';
import port8 from '../images/nft-game.png';
import port9 from '../images/nft.jpg';
import port10 from '../images/browser.png';
import port11 from '../images/github-profile-search.png';
import { FaGithubSquare, FaCode } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        category: 'Html & Css',
        link1: 'https://mockup-website-nirban256.netlify.app/',
        link2: 'https://github.com/nirban256/mockup-website',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port1,
        title: 'Mockup animation website',
        description: 'Website made with Html and Css with some animations'
    },
    {
        id: 2,
        category: 'Sass',
        link1: 'https://huddle-page-nirban256.netlify.app/',
        link2: 'https://github.com/nirban256/Huddle-landing-page-curved-section',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port7,
        title: 'Huddle-landing-page',
        description: 'Responsive website made with Sass'
    },
    {
        id: 3,
        category: 'BootStrap',
        link1: 'https://nirban256-bootsap-website.netlify.app/',
        link2: 'https://github.com/nirban256/Bootstrap-website',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port3,
        title: 'BootStrap Website',
        description: 'Website made using BootStrap CDN'
    },
    {
        id: 4,
        category: 'Css',
        link1: 'https://genuine-sable-f52f8f.netlify.app/',
        link2: 'https://github.com/nirban256/fylo-dark-theme-layout',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port5,
        title: 'Css Website',
        description: 'Dark theme website made with html and Css'
    },
    {
        id: 5,
        category: 'React Js',
        link1: 'https://open-ai-landingpage.netlify.app/',
        link2: 'https://github.com/nirban256/GPT3_Landing_Page',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port4,
        title: 'React Landing Page',
        description: 'Open Ai landing page made with ReactJS'
    },
    {
        id: 6,
        category: 'Css',
        link1: 'https://gentle-heliotrope-ff8396.netlify.app/',
        link2: 'https://github.com/nirban256/huddle-single-introductory-section',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port2,
        title: 'Introduction section',
        description: 'Huddle Introductory Section'
    },
    {
        id: 7,
        category: 'JavaScript',
        link1: 'https://microsoft-webpage-clone.netlify.app/',
        link2: 'https://github.com/nirban256/Microsoft-clone-page',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port6,
        title: 'Microsoft Web page Clone',
        description: 'A clone of the homepage of Microsoft'
    },
    {
        id: 8,
        category: 'Web3',
        link1: 'https://gck8sdx9taib.usemoralis.com/',
        link2: 'https://github.com/nirban256/Car_Slayer-NFT-Game',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port8,
        title: 'NFT Game - Car Slayer',
        description: 'A NFT based game made using Solidity and ReactJs'
    },
    {
        id: 9,
        category: 'Web3',
        link1: '',
        link2: 'https://github.com/nirban256/nft-minting',
        icon1: '',
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port9,
        title: 'NFT Minting Site',
        description: 'A NFT Minting website made with Solidity and ReactJs'
    },
    {
        id: 10,
        category: 'React Js',
        link1: 'https://goggle-clone-by-nirban.netlify.app/',
        link2: 'https://github.com/nirban256/goggle-search-app',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port10,
        title: 'Google Search Clone',
        description: 'A Google Search Clone using ReactJs and Google Search Api'
    },
    {
        id: 11,
        category: 'React Js',
        link1: 'https://github-profile-search-by-nirban.netlify.app/',
        link2: 'https://github.com/nirban256/github-profile-search',
        icon1: <FaCode size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port11,
        title: 'Github profile search',
        description: 'An application made using Github Api for searching Github profiles'
    }
]

export default projects;