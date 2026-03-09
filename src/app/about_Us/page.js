import Image from "next/image";
import Link from "next/link";
import { PiLinkedinLogo, PiArrowRight } from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import Trustee from "@/components/Trustee/Trustee";

export default function AboutPage() {

const team = [
{
name: "Michael Zhang",
title: "Chief Executive Officer",
image: "/images/solarImg/panel.home.jpg",
bio: "Michael leads JoyHand’s global strategy and innovation across solar energy systems, battery storage platforms and electric mobility technologies."
},
{
name: "Sarah Chen",
title: "Head of Engineering",
image: "/images/solarImg/panel.home.jpg",
bio: "Sarah oversees engineering development of lithium battery storage systems and intelligent energy management platforms."
}
];

return (

<main className="about-page">

<PageHeader
title="About JoyHand"
pageImage="/images/pageHeadImg/pageheader1.jpg"
/>


{/* ================= INTRO ================= */}

<section className="about-intro">

<div className="container">

<div className="about-intro__grid">

<div className="about-intro__text">

<span className="section-tag">ABOUT JOYHAND</span>

<h1 className="about-intro__title">
A unique combination of solar energy and advanced battery technology
</h1>

<p>
JoyHand is a technology-driven manufacturer specializing in solar
energy systems, lithium battery storage, and electric mobility power
platforms. We partner with global brands to design and manufacture
reliable next-generation energy solutions.
</p>

<p>
Our engineering teams combine expertise in solar technology,
battery management systems, and intelligent power platforms
to deliver scalable and efficient energy products.
</p>

<p>
From solar inverters and energy storage systems to electric
mobility batteries, JoyHand helps companies accelerate the
transition toward clean and sustainable energy solutions.
</p>

</div>

<div className="about-intro__image">

<div className="about-intro__circle">

<Image
src="/images/solarImg/panel.home.jpg"
alt="Solar expertise"
fill
className="about-intro__img"
/>

</div>

</div>

</div>

</div>

</section>


{/* ================= CAPABILITIES ================= */}

<section className="capabilities">

<div className="container">

<h2 className="section-heading">
Our Core Capabilities
</h2>

<div className="capabilities__grid">

<div className="capabilities__card">

<h3>Solar Energy Systems</h3>

<p>
High-efficiency solar inverter systems designed for
residential, commercial and industrial installations.
</p>

<PiArrowRight className="card-arrow"/>

</div>

<div className="capabilities__card">

<h3>Energy Storage Technology</h3>

<p>
Advanced lithium battery storage platforms delivering
reliable backup power and energy optimization.
</p>

<PiArrowRight className="card-arrow"/>

</div>

<div className="capabilities__card">

<h3>Electric Mobility Power</h3>

<p>
Battery systems engineered for electric bikes,
scooters and mobility platforms worldwide.
</p>

<PiArrowRight className="card-arrow"/>

</div>

</div>

</div>

</section>


<Trustee />


{/* ================= TEAM ================= */}

<section className="team-section">

<div className="container">

<span className="section-tag center">
OUR TEAM
</span>

<h2 className="section-heading">
The People Powering JoyHand
</h2>

<div className="team-grid">

{team.map((member, idx) => (

<div key={idx} className="team-card">

<div className="member-header">

<div className="member-img">

<Image
src={member.image}
alt={member.name}
fill
/>

</div>

<div className="member-info">

<h4>{member.name}</h4>

<p>{member.title}</p>

<PiLinkedinLogo className="linkedin-icon"/>

</div>

</div>

<p className="member-bio">{member.bio}</p>

</div>

))}

</div>

</div>

</section>


{/* ================= CTA ================= */}

<section className="hiring-section">

<div className="container">

<div className="hiring-banner">

<div className="hiring-text">

<h4>Partner With JoyHand</h4>

<p>
Looking to develop solar energy systems, battery storage
solutions, or electric mobility products? Our team is ready
to collaborate with you.
</p>

</div>

<Link
href="/contact"
className="apply-btn"
>

Start a Project

<PiArrowRight/>

</Link>

</div>

</div>

</section>

</main>

);
}