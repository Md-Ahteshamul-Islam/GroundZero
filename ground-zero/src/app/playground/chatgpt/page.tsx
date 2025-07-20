'use client'

import { useState } from 'react'

export default function ChatGPTPage() {
  const [prompt, setPrompt] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const sendPrompt = async () => {
    if (!prompt.trim()) return
    setLoading(true)
    setResponse('')

    try {
      const res = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      setResponse(data.result || 'No response')
    } catch (err) {
      console.error(err)
      setResponse('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">ChatGPT</h1>
      <p className="text-gray-700">Type a message and get a response from OpenAI&apos;s ChatGPT.</p>

      <textarea
        className="w-full p-4 border rounded-md resize-none"
        rows={4}
        placeholder="Ask me anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
        onClick={sendPrompt}
      >
        {loading ? 'Thinking...' : 'Ask GPT'}
      </button>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md whitespace-pre-wrap border">
          {response}
        </div>
      )}
    </div>
  )
}
