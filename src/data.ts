import { Project, Award, Participation } from "./types";

import portfolio01 from "@/assets/portfolio_01.png";
import portfolio02 from "@/assets/portfolio_02.png";
import portfolio03 from "@/assets/portfolio_03.png";
import portfolio04 from "@/assets/portfolio_04.png";
import portfolio05 from "@/assets/portfolio_05.png";
import portfolio06 from "@/assets/portfolio_06.png";
import portfolio07 from "@/assets/portfolio_07.png";
import portfolio08 from "@/assets/portfolio_08.png";
import portfolio09 from "@/assets/portfolio_09.png";
import portfolio10 from "@/assets/portfolio_10.png";
import portfolio11 from "@/assets/portfolio_11.png";
import portfolio12 from "@/assets/portfolio_12.png";
import portfolio13 from "@/assets/portfolio_13.png";
import portfolio14 from "@/assets/portfolio_14.png";
import portfolio15 from "@/assets/portfolio_15.png";

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "SAEPIAN GLITCH ASSEMBLY",
    imageTitle: "SAEPIAN\nGLITCH ASSEMBLY",
    logo: "/logos/portfolio_01_logo.png",
    category: "ART DIRECTION & IDENTITY",
    year: "2026",
    image: portfolio01,
    description: "An open-source sensory framework fusing aggressive high-contrast visual glitches with spatial physical installations around Seoul's dark alleys.",
    tags: ["WebGL", "Motion Design", "Identity", "Glitch Art"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "02",
    title: "THE MINIMALIST SUBTRACTION",
    imageTitle: "",
    logo: "/logos/portfolio_02_logo.png",
    category: "EDITORIAL & PACKAGING",
    year: "2025",
    image: portfolio02,
    description: "A philosophy-driven brand publication demonstrating how absolute subtraction (deleting everything non-essential) maximizes brand resonance.",
    tags: ["Premium Print", "Hot Foil", "Concept Design", "Booklets"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "03",
    title: "METROPOLIS SAEPIAN EXPERIMENT",
    imageTitle: "",
    logo: "/logos/portfolio_03_logo.png",
    category: "SPATIAL CHOREOGRAPHY",
    year: "2026",
    image: portfolio03,
    description: "Interactive architectural light installation utilizing signal-red and absolute black beams to reinterpret urban flows in industrial complexes.",
    tags: ["Interactive Map", "Laser Tech", "Generative Audio", "Installation"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "04",
    title: "ECHOES OF SILENCE",
    imageTitle: "",
    logo: "/logos/portfolio_04_logo.png",
    category: "SOUND & SCREENSCAPE",
    year: "2025",
    image: portfolio04,
    description: "A micro-website capturing the auditory emptiness of deep midnight. Awarded for its pure user-interactive physical typography.",
    tags: ["Web Audio API", "Interactive Typography", "Noir Sound"],
    featured: false,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "05",
    title: "RAW SIGNAL SYSTEM",
    imageTitle: "",
    logo: "/logos/portfolio_05_logo.png",
    category: "DIGITAL PROTOCOLS",
    year: "2026",
    image: portfolio05,
    description: "A custom kinetic-type-renderer for streaming telemetry data into giant high-contrast outdoor billboards.",
    tags: ["Canvas API", "Hardware Interface", "Real-Time Dev"],
    featured: false,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "06",
    title: "NEURAL INTERFERENCE LAB",
    imageTitle: "",
    logo: "/logos/portfolio_06_logo.png",
    category: "GENERATIVE EXPERIENCE",
    year: "2026",
    image: portfolio06,
    description: "An AI sandbox mapping real-time cognitive responses into interactive neural networks with abstract ink-bleed textures.",
    tags: ["WebGL", "AI Sandbox", "Real-Time", "Noir Texture"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "07",
    title: "VELOCITY DEVIATION",
    imageTitle: "",
    logo: "/logos/portfolio_07_logo.png",
    category: "MOTION & PHYSICS",
    year: "2025",
    image: portfolio07,
    description: "A study on algorithmic kinetic friction, mapping complex real-time physics data into fluid interface movements.",
    tags: ["Vector Math", "Canvas API", "Interactive"],
    featured: false,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "08",
    title: "LIQUID GEOMETRY LAB",
    imageTitle: "",
    logo: "/logos/portfolio_08_logo.png",
    category: "SENSORY CODING",
    year: "2026",
    image: portfolio08,
    description: "3D liquid mesh rendering utilizing noise-driven WebGL shaders to visualize abstract modern sculptures.",
    tags: ["WebGL", "Fluid Dynamics", "3D Render"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "09",
    title: "SIGNAL CONDUIT PROTOCOL",
    imageTitle: "",
    logo: "/logos/portfolio_09_logo.png",
    category: "HARDWARE INTERACTION",
    year: "2025",
    image: portfolio09,
    description: "Deep-level serial interface linking industrial controller signals to dynamic live typographic renders.",
    tags: ["Serial Link", "Hardware", "Interactive Typography"],
    featured: false,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "10",
    title: "THERMAL MATRIX SENSATION",
    imageTitle: "",
    logo: "/logos/portfolio_10_logo.png",
    category: "INSTALLATION DESIGN",
    year: "2026",
    image: portfolio10,
    description: "Sensory ambient installation recreating thermal dynamics in absolute dark with precise signal laser streams.",
    tags: ["Laser Tech", "Noir Sound", "WebGL"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "11",
    title: "THE COGNITIVE MATRIX",
    imageTitle: "",
    logo: "/logos/portfolio_11_logo.png",
    category: "NEURAL EXPERIENCE",
    year: "2026",
    image: portfolio11,
    description: "Transforming real-time ambient noise feeds into glowing code matrices that dynamically respond to viewer movement.",
    tags: ["Interactive Typography", "Web Audio API", "AI Sandbox"],
    featured: false,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "12",
    title: "DUST MATRIX CHRONICLE",
    imageTitle: "",
    logo: "/logos/portfolio_12_logo.png",
    category: "DIGITAL MONUMENTS",
    year: "2025",
    image: portfolio12,
    description: "Streaming telemetry chronological logs in beautiful monochrome dust particle configurations.",
    tags: ["Canvas API", "Live Feed", "Chrono Layout"],
    featured: false,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "13",
    title: "AMBIENT FLUID VECTOR",
    imageTitle: "",
    logo: "/logos/portfolio_13_logo.png",
    category: "ARTWORK & VISUALS",
    year: "2026",
    image: portfolio13,
    description: "Exploring mathematical vectors inside canvas viewports to produce breathtaking aesthetic flows on click triggers.",
    tags: ["WebGL", "Vector Math", "Interactive Map"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "14",
    title: "VECTOR SAEPIAN PATTERNS",
    imageTitle: "",
    logo: "/logos/portfolio_14_logo.png",
    category: "CREATIVE CODING",
    year: "2025",
    image: portfolio14,
    description: "An interactive editorial code publication presenting algorithmic pattern designs on ultra high-contrast displays.",
    tags: ["Web Audio API", "Concept Design", "Noir Sound"],
    featured: false,
    client: "",
    period: "",
    studio: "",
    link: "",
  },
  {
    id: "15",
    title: "RED SHIFT INTERSTELLAR",
    imageTitle: "",
    logo: "/logos/portfolio_15_logo.png",
    category: "SPATIAL EXPERIENCES",
    year: "2026",
    image: portfolio15,
    description: "An astronomical data-viz tracing deep space signal anomalies using high-rendering GL point maps.",
    tags: ["Interactive Map", "GL Rendering", "Live Feed"],
    featured: true,
    client: "",
    period: "",
    studio: "",
    link: "",
  }
];

export const PARTICIPATIONS: Participation[] = [
  // 2026
  {
    id: "p1",
    title: "Seoul Light Grid Installation",
    client: "Seoul Metropolitan Govt",
    category: "Spatial Media Wall",
    year: "2026"
  },
  {
    id: "p2",
    title: "Cybernetic Soundscapes Project",
    client: "Art Center Nabi",
    category: "Generative Performance",
    year: "2026"
  },
  {
    id: "p3",
    title: "Typo-Choreography Billboard",
    client: "COEX K-Pop Square",
    category: "Dynamic Vector Signage",
    year: "2026"
  },
  // 2025
  {
    id: "p4",
    title: "Minimalist Luxury Packaging",
    client: "Aesop Korea",
    category: "Brand Identity Design",
    year: "2025"
  },
  {
    id: "p5",
    title: "Kinetics of Friction Exhibit",
    client: "DDP Design Museum",
    category: "Physical Installation",
    year: "2025"
  },
  {
    id: "p6",
    title: "Fluidity Shaders Lab Research",
    client: "Tokio Arts Group",
    category: "WebGL Mobile Engine",
    year: "2025"
  },
  // 2024
  {
    id: "p7",
    title: "Asymmetric Modern Exhibitions",
    client: "MMCA Korea",
    category: "Interactive Design System",
    year: "2024"
  },
  {
    id: "p8",
    title: "Decentralized Audio Controls",
    client: "L-Acoustics Integration",
    category: "Real-Time Spatial Sound",
    year: "2024"
  },
  // 2023
  {
    id: "p9",
    title: "Monochrome Typography Identity",
    client: "Swiss Typography Center",
    category: "Editorial Print System",
    year: "2023"
  },
  {
    id: "p10",
    title: "High-Contrast Telemetry Render",
    client: "Tepco Labs Japan",
    category: "Real-Time Data Dashboard",
    year: "2023"
  },
  // 2022
  {
    id: "p11",
    title: "Abstract Thermal Sculpture Room",
    client: "Space Shinsegae Art dept",
    category: "Laser Interaction Lab",
    year: "2022"
  },
  {
    id: "p12",
    title: "Spring Motion Engine V2",
    client: "Creative Sandbox Seoul",
    category: "WebGL Graphics Catalyst",
    year: "2022"
  },
  // 2021
  {
    id: "p13",
    title: "Traditional Echoes Preservation",
    client: "National Museum of Korea",
    category: "Historical Preservation App",
    year: "2021"
  },
  {
    id: "p14",
    title: "Brutalist Coding Anthology Website",
    client: "Awwwards Showcase",
    category: "Virtual Exhibition Sandbox",
    year: "2021"
  },
  // 2020
  {
    id: "p15",
    title: "Urban Fluid Wave Simulation",
    client: "COEX Wave Screens Media",
    category: "Large-Scale Fluid Simulation",
    year: "2020"
  },
  {
    id: "p16",
    title: "Typographic Physical Soundboard",
    client: "Nexon Computer Museum",
    category: "Physical Tangible Controller",
    year: "2020"
  },
  // ETC
  {
    id: "p17",
    title: "Genesis Web Sound Ambient",
    client: "Personal Sound Archive",
    category: "Web Audio Experiment",
    year: "2019"
  },
  {
    id: "p18",
    title: "Noir Branding Blueprint Studio",
    client: "Swiss Design School Thesis",
    category: "Editorial Brand Research",
    year: "2018"
  },
  {
    id: "p19",
    title: "Analog Wave Distortion Renderer",
    client: "Tokyo Creative Club Expo",
    category: "CRT Vector Screen Installation",
    year: "2017"
  }
];

export const SPECIALTIES = [
  {
    number: "01",
    name: "BRAND IDENTITY & VISUAL SYSTEMS",
    desc: "로고, 컬러, 타이포그래피부터 적용 가이드까지, 일관된 브랜드 경험을 위한 시스템을 설계합니다"
  },
  {
    number: "02",
    name: "WEB DESIGN & PUBLISHING",
    desc: "반응형 레이아웃부터 퍼블리싱까지, 디자인이 실제로 작동하는 웹페이지가 되는 과정을 책임집니다"
  },
  {
    number: "03",
    name: "EDITORIAL & TYPOGRAPHY",
    desc: "가독성과 리듬을 고려한 타이포그래피로, 콘텐츠가 명료하게 전달되도록 만듭니다"
  }
];
