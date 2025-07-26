import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">
        Hi, This is Ahtesham <span className="animate-pulse">🔥</span>
      </h1>
      <p className="text-lg text-gray-800">
        Senior Software Engineer | AI Practitioner | DevOps Enthusiast
      </p>
      <p className="text-gray-600">
        Welcome to <strong>Ground Zero</strong> — the origin of my journey into AI,
        software craftsmanship, and automation.
        <br />
        This site serves as both my interactive resume and an evolving AI lab.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/playground"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Visit AI Playground →
        </Link>

        <a
           href="/assets/resume/Md_Ahteshamul_Islam_SE.pdf"
          download
          className="inline-block px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded hover:bg-blue-50"
        >
          📥Download My Resume ↓
        </a>

        <Link
          href="/project/list"
          className="inline-block px-6 py-3 border border-gray-400 text-gray-700 font-medium rounded hover:bg-gray-100"
        >
          View Completed Projects →
        </Link>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">🔧 Tech Skills Snapshot</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>C#, .NET (Core/Framework/5–7), ASP.NET MVC, Entity Framework, Linq2DB</li>
          <li>JavaScript, TypeScript, React, Next.js, Tailwind, Bootstrap</li>
          <li>SQL Server, MariaDB, FluentMigrator, RDLC</li>
          <li>Auth: OKTA, JWT, Social Auth</li>
          <li>Testing: Jest, xUnit, Moq</li>
          <li>AI Tools: LangChain, Prompt Engineering, Chatbot Architectures</li>
          <li>Tools: GitHub, Postman, Swagger, SignalR, NopCommerce</li>
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold mb-2">📬 Contact</h2>
        <p className="text-gray-700">
          📍 House #19, Lane #N/1, Eastern Housing, Block –J, Section 12, Mirpur, Dhaka-1216 <br />
          📞 +8801723250082 / +8801882438635 <br />
          ✉️ md.ahteshamul.islam01@gmail.com <br />
          🔗 <a href="https://www.linkedin.com/in/md-ahteshamul-islam-b42135167/" className="text-blue-600 hover:underline" target="_blank">LinkedIn</a> | 
          <a href="https://github.com/Md-Ahteshamul-Islam" className="text-blue-600 hover:underline ml-1" target="_blank">GitHub</a>
        </p>
      </div>
    </section>
  );
}
