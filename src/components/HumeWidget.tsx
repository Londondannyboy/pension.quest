'use client'

import { useState, useEffect, useCallback } from 'react'
import { VoiceProvider, useVoice } from '@humeai/voice-react'

const CONFIG_ID = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || ''

function VoiceControls({ accessToken }: { accessToken: string }) {
  const { connect, disconnect, status, messages } = useVoice()
  const [isPending, setIsPending] = useState(false)

  const handleConnect = useCallback(async () => {
    setIsPending(true)
    try {
      await connect({
        auth: { type: 'accessToken', value: accessToken },
        configId: CONFIG_ID,
      })
    } catch (e) {
      console.error('[Hume] Connect error:', e)
    }
    setIsPending(false)
  }, [connect, accessToken])

  const handleDisconnect = useCallback(() => {
    disconnect()
  }, [disconnect])

  const isConnected = status.value === 'connected'

  const lastMsg = [...messages].reverse().find((m: any) =>
    m.type === 'assistant_message' && m.message?.content
  ) as any

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        onClick={isConnected ? handleDisconnect : handleConnect}
        disabled={isPending}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${
          isConnected
            ? 'bg-green-500 hover:bg-green-600 animate-pulse'
            : isPending
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-purple-600 hover:bg-purple-700'
        }`}
      >
        {isPending ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
          </svg>
        )}
      </button>

      <p className="text-xs text-stone-400">
        {isPending ? 'Connecting...' : isConnected ? 'Listening...' : 'Voice'}
      </p>

      {isConnected && (
        <button
          onClick={handleDisconnect}
          className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded text-xs"
        >
          Stop
        </button>
      )}

      {lastMsg?.message?.content && (
        <div className="max-w-xs bg-stone-800 rounded-lg px-3 py-2 text-xs text-stone-200">
          {lastMsg.message.content.slice(0, 150)}
          {lastMsg.message.content.length > 150 && '...'}
        </div>
      )}
    </div>
  )
}

export function HumeWidget() {
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/hume-token')
      .then(res => res.json())
      .then(data => {
        if (data.accessToken) {
          setAccessToken(data.accessToken)
        } else {
          setError(data.error || 'No token received')
        }
      })
      .catch(err => {
        setError(err.message)
      })
  }, [])

  if (error) {
    return (
      <div className="flex flex-col items-center gap-2 text-center">
        <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center">
          <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-xs text-stone-400">Voice unavailable</p>
      </div>
    )
  }

  if (!accessToken) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
        <p className="text-xs text-stone-400">Loading voice...</p>
      </div>
    )
  }

  return (
    <VoiceProvider>
      <VoiceControls accessToken={accessToken} />
    </VoiceProvider>
  )
}
