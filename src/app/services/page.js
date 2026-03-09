import {
PiGear,
PiLightbulb,
PiTruck,
PiArrowRight,
PiBatteryCharging,
PiShieldCheck,
PiGlobe,
PiCheckCircle
} from "react-icons/pi";

import PageHeader from "@/components/pageHeader/PageHeader";
import Link from "next/link";

export default function ServicesPage() {

const services = [
{
title: "OEM Energy Storage",
desc: "Custom-engineered lithium battery storage systems designed for solar, industrial backup power and grid energy platforms.",
icon: <PiBatteryCharging />,
tag: "Manufacturing"
},
{
title: "ODM Solar Solutions",
desc: "Ready-to-market solar inverter and storage systems developed with certified design standards for rapid deployment.",
icon: <PiLightbulb />,
tag: "Design"
},
{
title: "Electric Mobility Power",
desc: "Battery platforms engineered for electric bikes, scooters and mobility vehicles with long cycle life.",
icon: <PiTruck />,
tag: "Mobility"
},
{
title: "Global Supply Network",
desc: "International logistics and factory-direct manufacturing enabling global brands to scale energy solutions efficiently.",
icon: <PiGlobe />,
tag: "Distribution"
}
];

return (

<main className="services-page">

<PageHeader
title="Industrial Expertise"
subtitle="Engineering the future of energy storage and electric mobility systems"
pageImage="/images/solarImg/panel.home.jpg"
/>

{/* ================= INTRO ================= */}

<section className="services-intro">

<div className="container">

<div className="services-intro__grid">

<div>

<span className="section-tag">20+ YEARS EXPERIENCE</span>

<h2 className="services-intro__title">
One-Stop Energy Solutions From Factory to Field
</h2>

</div>

<p className="services-intro__desc">

JoyHand combines industrial manufacturing precision with
advanced battery engineering. Our production facilities
deliver high-performance solar storage systems and electric
mobility batteries trusted by global brands.

</p>

</div>

</div>

</section>


{/* ================= SERVICE CARDS ================= */}

<section className="services-grid">

<div className="container">

<div className="services-grid__wrapper">

{services.map((service, idx) => (

<div key={idx} className="service-card">

<div className="service-card__icon">
{service.icon}
</div>

<span className="service-card__tag">
{service.tag}
</span>

<h3 className="service-card__title">
{service.title}
</h3>

<p className="service-card__desc">
{service.desc}
</p>

<Link href="/contact" className="service-card__link">

Request Specs
<PiArrowRight/>

</Link>

</div>

))}

</div>

</div>

</section>


{/* ================= RELIABILITY ================= */}

<section className="services-reliability">

<div className="container">

<div className="reliability-box">

<h2>Engineered for Reliability</h2>

<p>
Global brands trust JoyHand manufacturing
infrastructure for safety, consistency
and engineering excellence.
</p>

<div className="reliability-grid">

<div className="reliability-pill">

<PiShieldCheck className="reliability-pill__icon"/>

<div>

<h4>ISO/TS16949 Certified</h4>

<p>
Automotive-grade certification ensuring
strict production quality standards.
</p>

</div>

</div>

<div className="reliability-pill">

<PiGear className="reliability-pill__icon"/>

<div>

<h4>Advanced Engineering</h4>

<p>
Dedicated R&D teams developing
next-generation energy solutions.
</p>

</div>

</div>

</div>

</div>

</div>

</section>


{/* ================= PROCESS ================= */}

<section className="services-process">

<div className="container">

<span className="section-tag center">
OUR PROCESS
</span>

<h2 className="section-heading">
How We Deliver Global Energy Solutions
</h2>

<div className="process-grid">

<div className="process-step">

<PiCheckCircle/>

<h4>Consultation</h4>

<p>Understanding technical requirements and product goals.</p>

</div>

<div className="process-step">

<PiCheckCircle/>

<h4>Engineering Design</h4>

<p>Custom battery and solar architecture development.</p>

</div>

<div className="process-step">

<PiCheckCircle/>

<h4>Manufacturing</h4>

<p>Automated production ensuring consistent quality.</p>

</div>

<div className="process-step">

<PiCheckCircle/>

<h4>Global Delivery</h4>

<p>International logistics and post-production support.</p>

</div>

</div>

</div>

</section>


{/* ================= CTA ================= */}

<section className="services-cta">

<div className="container">

<div className="cta-card">

<h2>Start Your OEM / ODM Energy Project</h2>

<p>
Partner with JoyHand to develop solar storage,
battery systems and electric mobility solutions.
</p>

<Link href="/contact" className="btn btn--secondary">

Contact Our Global Offices

</Link>

</div>

</div>

</section>

</main>
);
}