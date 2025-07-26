import Link from 'next/link';

const projects = [
  {
    title: 'Crowley LNG – Proof of Concept (Ongoing)',
    role: 'Tech Lead – Brain Station 23 | 2024–Present',
    description: `Led architecture and development of 3 cross-platform apps:
- Customer Portal – Next.js, React, TypeScript, Flowbite, Jest (80%+ coverage), ESLint
- Logistics & Maintenance Portal – with real-time SignalR workflows
- Driver Mobile App – (managed development lifecycle)
Unified authentication via OKTA (SSO), Architected backend on NopCommerce, implemented real-time chat across all platforms.`
  },
  {
    title: 'Cars.co.zw',
    role: 'Senior Developer | Brain Station 23',
    description: `NopCommerce-based classified site for buying/selling vehicles in Zimbabwe. Added Google & Facebook auth, syncing with Classified.co.zw, Tailwind, MariaDB, Linq2DB.`
  },
  {
    title: 'Always Food Safe (AFS)',
    role: 'Developer | Brain Station 23',
    description: `Built state-specific product sync logic and theme customization. Converted LINQ to stored procedures for performance.`
  },
  {
    title: 'Horeca Market Global',
    role: 'Developer | Brain Station 23',
    description: `Microservices-based B2B eCommerce platform with ERP-like modules for catalog, CRM, logistics, finance, and vendor management.`
  },
  {
    title: 'BGB Process Automations',
    role: 'Engineer | CDIP',
    description: `Built various ASP.NET apps for Border Guard Bangladesh: personnel management, motor equipment tracking, BSB security clearance software.`
  },
  {
    title: 'Chemycal',
    role: 'Support Dev | CDIP',
    description: `Added features, optimized performance in C#/ASP.NET site that aggregates and sells chemical news.`
  }
];

export default function ProjectList() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Project Portfolio</h1>
      {projects.map((proj, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-blue-600">{proj.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{proj.role}</p>
          <p className="text-gray-700 whitespace-pre-line">{proj.description}</p>
        </div>
      ))}
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}
