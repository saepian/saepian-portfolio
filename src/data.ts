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
    title: "DEVKITPACK.COM",
    imageTitle: "SAEPIAN\nGLITCH ASSEMBLY",
    logo: "/logos/portfolio_01_logo.png",
    category: "WEBSITE",
    year: "2026",
    image: portfolio01,
    description: "DevKitPack은 개발자와 디자이너를 위한 미니멀 웹 유틸리티 모음 사이트입니다. 회원가입 없이 즉시 사용할 수 있는 포모도로 타이머, 단어 카운터, CSS 단위 변환기, JSON 포맷터 등을 제공하며, '단순하고 산만함 없는' 디자인 철학을 바탕으로 만들어졌습니다. Vite + React로 구축했고, 10개 언어 지원, SEO 최적화, AdSense 연동까지 포함한 풀스택 사이드 프로젝트입니다.",
    tags: ["DESIGN", "Web Publishing", "Planning", "Operations"],
    featured: true,
    client: "SAEPIAN",
    period: "2026.06 ~",
    studio: "SAEPIAN",
    link: "https://www.devkitpack.com",
  },
  {
    id: "02",
    title: "SAEPIAN.COM",
    imageTitle: "",
    logo: "/logos/portfolio_02_logo.png",
    category: "WEBSITE",
    year: "2026",
    image: portfolio02,
    description: "SAEPIAN은 크리에이티브 디자인 스튜디오의 포트폴리오 사이트입니다. 블랙×레드 컬러와 대형 타이포그래피, 글리치 효과로 강렬한 비주얼 아이덴티티를 표현했고, '본질만 남기고 덜어낸다'는 미니멀 철학을 인터랙티브한 사이버틱 인터페이스로 풀어냈습니다.",
    tags: ["DESIGN", "Web Publishing", "Planning", "Operations"],
    featured: true,
    client: "SAEPIAN",
    period: "2026.06 ~",
    studio: "SAEPIAN",
    link: "https://www.saepian.com",
  },
  {
    id: "03",
    title: "우리금융캐피탈 NEXT 정보계 구축 프로젝트",
    imageTitle: "",
    logo: "/logos/portfolio_03_logo.png",
    category: "SI Project",
    year: "2026",
    image: portfolio03,
    description: "솔루션 베이스의 전체 화면에 대한 기획, UI 디자인, 퍼블리싱을 단독으로 담당했습니다. 화면 기획부터 디자인 시스템 적용, 실제 코드 퍼블리싱까지 전 과정을 일관된 톤으로 작업하여 통일성 있는 사용자 경험을 구현했습니다.",
    tags: ["DESIGN", "Web Publishing", "Planning", "Operations"],
    featured: true,
    client: "우리금융캐피탈",
    period: "2025.11 ~ 2026.02",
    studio: "(주)펜타시스템",
    link: "",
  },
  {
    id: "04",
    title: "농협은행 생성형 AI 플랫폼 프로젝트 고도화",
    imageTitle: "",
    logo: "/logos/portfolio_04_logo.png",
    category: "SI Project",
    year: "2025",
    image: portfolio04,
    description: "내부 AI플랫폼 구축 프로젝트입니다. UI 디자인, 퍼블리싱 단독으로 담당하였으며 1차 완료 후 2차로 진행된 고도화 작업입니다.",
    tags: ["DESIGN", "Web Publishing"],
    featured: false,
    client: "농협은행",
    period: "2025.09 ~ 2025.10",
    studio: "(주)펜타시스템",
    link: "",
  },
  {
    id: "05",
    title: "우리은행 Gen-AI 플랫폼 구축 프로젝트",
    imageTitle: "",
    logo: "/logos/portfolio_05_logo.png",
    category: "SI Project",
    year: "2025",
    image: portfolio05,
    description: "내부 AI플랫폼 구축 프로젝트입니다. 고객사에서 제공된 디자인을 수정 보완하여 퍼블리싱작업 진행하였습니다. ",
    tags: ["DESIGN", "Web Publishing"],
    featured: false,
    client: "우리은행",
    period: "2025.06 ~ 2025.09",
    studio: "(주)펜타시스템",
    link: "",
  },
  {
    id: "06",
    title: "농협은행 생성형 AI 플랫폼 프로젝트",
    imageTitle: "",
    logo: "/logos/portfolio_06_logo.png",
    category: "SI Project",
    year: "2025",
    image: portfolio06,
    description: "내부 AI플랫폼 구축 프로젝트입니다. 1,2차로 나눠서 진행된 첫번째 프로젝트로 솔루션 기반의 화면기획, UI 디자인, 퍼블리싱 단독으로 작업하였습니다.",
    tags: ["DESIGN", "Web Publishing", "Planning"],
    featured: true,
    client: "농협은행",
    period: "2025.02 ~ 2025.03",
    studio: "(주)펜타시스템",
    link: "",
  },
  {
    id: "07",
    title: "우리금융그룹 데이터 플랫폼 프로젝트",
    imageTitle: "",
    logo: "/logos/portfolio_07_logo.png",
    category: "SI Project",
    year: "2024",
    image: portfolio07,
    description: "솔루션 베이스의 포탈 시스템 개발 프로젝트입니다. 화면기획, 디자인, 퍼블리싱을 단독 작업하였습니다.",
    tags: ["DESIGN", "Web Publishing", "Planning"],
    featured: false,
    client: "우리금융그룹",
    period: "2024.06 ~ 2024.10",
    studio: "",
    link: "",
  },
  {
    id: "08",
    title: "우리은행 CDP 프로젝트",
    imageTitle: "",
    logo: "/logos/portfolio_08_logo.png",
    category: "SI Project",
    year: "2023",
    image: portfolio08,
    description: "솔루션 베이서의 포탈 시스템 개발 프로젝트입니다. 화면기획, 디자인, 퍼블리싱을 단독 작업하였고 디자인의 화려함 보다는 기능위주로 구성하여 작업하였습니다.",
    tags: ["DESIGN", "Web Publishing", "Planning"],
    featured: true,
    client: "우린은행",
    period: "2023.02 ~ 2023.10",
    studio: "(주)펜타시스템",
    link: "",
  },
  {
    id: "09",
    title: "우체국 차세대 종합금융시스템 BI포탈 프로젝트",
    imageTitle: "",
    logo: "/logos/portfolio_09_logo.png",
    category: "SI Project",
    year: "2021",
    image: portfolio09,
    description: "우체국 차세대 프로젝트중 종합금융시스템 BI포탈 시스템의 화면기획, 디자인, 퍼블리싱을 담당하였습니다. 솔루션 기반의 포탈시스템으로 단독작업 하였습니다.",
    tags: ["DESIGN", "Web Publishing", "Planning"],
    featured: false,
    client: "우체국",
    period: "2021.10 ~ 2022.09",
    studio: "(주)펜타시스템",
    link: "",
  },
  {
    id: "10",
    title: "보건복지부 사회보장,사회서비스 프로젝트",
    imageTitle: "",
    logo: "/logos/portfolio_10_logo.png",
    category: "SI Project",
    year: "2021",
    image: portfolio10,
    description: "보건복지부 사회보장, 사회서비스 프로젝트입니다. 2가지 프로젝트를 동시 진행하였고 솔루션 기반의 작업이라 화면기회, 디자인, 퍼블리싱 등 모든 작업 단독으로 진행하였습니다.",
    tags: ["DESIGN", "Web Publishing", "Planning"],
    featured: true,
    client: "보건복지부",
    period: "2021.02 ~ 2021.03",
    studio: "(주)펜타시스템",
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
