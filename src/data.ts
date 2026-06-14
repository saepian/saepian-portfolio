import { Project, Award, Participation } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "SAEPIAN GLITCH ASSEMBLY",
    category: "ART DIRECTION & IDENTITY",
    year: "2026",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200",
    description: "An open-source sensory framework fusing aggressive high-contrast visual glitches with spatial physical installations around Seoul's dark alleys.",
    tags: ["WebGL", "Motion Design", "Identity", "Glitch Art"],
    featured: true
  },
  {
    id: "02",
    title: "THE MINIMALIST SUBTRACTION",
    category: "EDITORIAL & PACKAGING",
    year: "2025",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
    description: "A philosophy-driven brand publication demonstrating how absolute subtraction (deleting everything non-essential) maximizes brand resonance.",
    tags: ["Premium Print", "Hot Foil", "Concept Design", "Booklets"],
    featured: true
  },
  {
    id: "03",
    title: "METROPOLIS SAEPIAN EXPERIMENT",
    category: "SPATIAL CHOREOGRAPHY",
    year: "2026",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    description: "Interactive architectural light installation utilizing signal-red and absolute black beams to reinterpret urban flows in industrial complexes.",
    tags: ["Interactive Map", "Laser Tech", "Generative Audio", "Installation"],
    featured: true
  },
  {
    id: "04",
    title: "ECHOES OF SILENCE",
    category: "SOUND & SCREENSCAPE",
    year: "2025",
    image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1200",
    description: "A micro-website capturing the auditory emptiness of deep midnight. Awarded for its pure user-interactive physical typography.",
    tags: ["Web Audio API", "Interactive Typography", "Noir Sound"],
    featured: false
  },
  {
    id: "05",
    title: "RAW SIGNAL SYSTEM",
    category: "DIGITAL PROTOCOLS",
    year: "2026",
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=1200",
    description: "A custom kinetic-type-renderer for streaming telemetry data into giant high-contrast outdoor billboards.",
    tags: ["Canvas API", "Hardware Interface", "Real-Time Dev"],
    featured: false
  },
  {
    id: "06",
    title: "NEURAL INTERFERENCE LAB",
    category: "GENERATIVE EXPERIENCE",
    year: "2026",
    image: "https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=1200",
    description: "An AI sandbox mapping real-time cognitive responses into interactive neural networks with abstract ink-bleed textures.",
    tags: ["WebGL", "AI Sandbox", "Real-Time", "Noir Texture"],
    featured: true
  },
  {
    id: "07",
    title: "VELOCITY DEVIATION",
    category: "MOTION & PHYSICS",
    year: "2025",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1200",
    description: "A study on algorithmic kinetic friction, mapping complex real-time physics data into fluid interface movements.",
    tags: ["Vector Math", "Canvas API", "Interactive"],
    featured: false
  },
  {
    id: "08",
    title: "LIQUID GEOMETRY LAB",
    category: "SENSORY CODING",
    year: "2026",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200",
    description: "3D liquid mesh rendering utilizing noise-driven WebGL shaders to visualize abstract modern sculptures.",
    tags: ["WebGL", "Fluid Dynamics", "3D Render"],
    featured: true
  },
  {
    id: "09",
    title: "SIGNAL CONDUIT PROTOCOL",
    category: "HARDWARE INTERACTION",
    year: "2025",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",
    description: "Deep-level serial interface linking industrial controller signals to dynamic live typographic renders.",
    tags: ["Serial Link", "Hardware", "Interactive Typography"],
    featured: false
  },
  {
    id: "10",
    title: "THERMAL MATRIX SENSATION",
    category: "INSTALLATION DESIGN",
    year: "2026",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200",
    description: "Sensory ambient installation recreating thermal dynamics in absolute dark with precise signal laser streams.",
    tags: ["Laser Tech", "Noir Sound", "WebGL"],
    featured: true
  },
  {
    id: "11",
    title: "THE COGNITIVE MATRIX",
    category: "NEURAL EXPERIENCE",
    year: "2026",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
    description: "Transforming real-time ambient noise feeds into glowing code matrices that dynamically respond to viewer movement.",
    tags: ["Interactive Typography", "Web Audio API", "AI Sandbox"],
    featured: false
  },
  {
    id: "12",
    title: "DUST MATRIX CHRONICLE",
    category: "DIGITAL MONUMENTS",
    year: "2025",
    image: "https://images.unsplash.com/photo-1550537687-c91072c4792d?q=80&w=1200",
    description: "Streaming telemetry chronological logs in beautiful monochrome dust particle configurations.",
    tags: ["Canvas API", "Live Feed", "Chrono Layout"],
    featured: false
  },
  {
    id: "13",
    title: "AMBIENT FLUID VECTOR",
    category: "ARTWORK & VISUALS",
    year: "2026",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1200",
    description: "Exploring mathematical vectors inside canvas viewports to produce breathtaking aesthetic flows on click triggers.",
    tags: ["WebGL", "Vector Math", "Interactive Map"],
    featured: true
  },
  {
    id: "14",
    title: "VECTOR SAEPIAN PATTERNS",
    category: "CREATIVE CODING",
    year: "2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    description: "An interactive editorial code publication presenting algorithmic pattern designs on ultra high-contrast displays.",
    tags: ["Web Audio API", "Concept Design", "Noir Sound"],
    featured: false
  },
  {
    id: "15",
    title: "RED SHIFT INTERSTELLAR",
    category: "SPATIAL EXPERIENCES",
    year: "2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200",
    description: "An astronomical data-viz tracing deep space signal anomalies using high-rendering GL point maps.",
    tags: ["Interactive Map", "GL Rendering", "Live Feed"],
    featured: true
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
