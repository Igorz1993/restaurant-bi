'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Onboarding() {
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [msg, setMsg] = useState('');

  const handleSave = async () => {
    const { error } = await supabase.from('iiko_tokens').insert({
      api_url: url,
      api_token: token
    });
    setMsg(error ? `❌ ${error.message}` : '✅ Сохранено!');
    setUrl('');
    setToken('');
  };

  return (
    <main className="flex flex-col max-w-sm mx-auto mt-24 gap-4">
      <h1 className="text-2xl font-semibold mb-2">Подключение iiko</h1>

      <input
        className="border p-2 rounded"
        placeholder="https://your-iiko.com/api/..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <input
        className="border p-2 rounded"
        placeholder="Токен API"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="bg-indigo-600 text-white rounded p-2 hover:bg-indigo-700 disabled:opacity-50"
        disabled={!url || !token}
      >
        Сохранить
      </button>

      {msg && <p>{msg}</p>}
    </main>
  );
}