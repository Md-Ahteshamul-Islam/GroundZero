import Link from "next/link";

const aiTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "Conversational AI assistant by OpenAI",
  },
  {
    id: "dalle",
    name: "DALL·E",
    description: "Generate images from text prompts",
  },
  {
    id: "gemini",
    name: "Gemini",
    description: "Google's next-gen multimodal AI",
  },
  {
    id: "fitroom",
    name: "Fitroom",
    description: "Try-on clothing using uploaded images",
  },
];

export default function PlaygroundPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to the AI Playground</h1>
      <p className="mb-6 text-gray-700">
        Click on any AI tool below to test and interact with it.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {aiTools.map((tool) => (
          <Link
            key={tool.id}
            href={`/playground/${tool.id}`}
            className="border rounded-lg p-4 shadow hover:shadow-md transition block bg-white"
          >
            <h2 className="text-xl font-semibold text-blue-700">{tool.name}</h2>
            <p className="text-gray-600">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
