
import React, { useState } from 'react'

const insuranceTypes = [
  { name: 'Health Insurance', tags: ['individual', 'family'] },
  { name: 'Car Insurance', tags: ['vehicle', 'driver'] },
  { name: 'Liability Insurance', tags: ['general', 'home'] },
  { name: 'Travel Insurance', tags: ['trip', 'medical'] },
  { name: 'Home Insurance', tags: ['property', 'theft'] },
]

export default function App() {
  const [query, setQuery] = useState('')

  const filtered = insuranceTypes.filter(type =>
    type.name.toLowerCase().includes(query.toLowerCase()) ||
    type.tags.some(tag => tag.includes(query.toLowerCase()))
  )

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Insurance Finder</h1>
      <input
        type="text"
        placeholder="Search by need..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <ul className="space-y-2">
        {filtered.map((type, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <div className="font-semibold">{type.name}</div>
            <div className="text-sm text-gray-500">{type.tags.join(', ')}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
