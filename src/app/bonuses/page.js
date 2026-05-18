import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bonuses = [
{
number:"01",
title:"Free Market Targeting Audit",
desc:"We identify your best industries, locations, decision-makers, and service areas before launching outreach.",
},

{
number:"02",
title:"Custom Call Script & Objection Handling",
desc:"We create scripts for your industry including responses for common objections.",
},

{
number:"03",
title:"Email & LinkedIn Outreach Sequences",
desc:"We write professional outreach messages designed to start real conversations.",
},

{
number:"04",
title:"CRM & Lead Tracking Setup",
desc:"We help track every lead, conversation, appointment and follow-up.",
},

{
number:"05",
title:"Weekly Performance Report",
desc:"Clear reporting on calls, leads contacted, interested prospects and booked meetings.",
},

{
number:"06",
title:"Appointment Quality Filter",
desc:"We qualify prospects based on location, service need, decision-maker status and buying intent.",
},
];

export default function BonusesPage() {
return (
<main className="min-h-screen bg-[#05070d] text-white">

<Navbar/>

<section className="px-6 pt-40 pb-24">

<div className="mx-auto max-w-5xl text-center">

<p className="text-sm font-semibold tracking-[0.4em] text-cyan-300">
BONUSES INCLUDED
</p>

<h1 className="mt-6 text-5xl font-semibold">
Everything Included With Your Outreach System
</h1>

<p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
No hidden fees. No surprise add-ons.
Everything below comes included.
</p>

</div>

<div className="mx-auto mt-20 grid max-w-6xl gap-6 md:grid-cols-2">

{bonuses.map((item)=>(

<div
key={item.title}
className="rounded-[2rem] border border-cyan-300/10 bg-white/[0.03] p-8 hover:border-cyan-300/30"
>

<p className="text-cyan-300 text-sm">
{item.number}
</p>

<h2 className="mt-4 text-2xl font-semibold">
{item.title}
</h2>

<p className="mt-5 leading-8 text-gray-400">
{item.desc}
</p>

</div>

))}

</div>

</section>

<Footer/>

</main>
);
}