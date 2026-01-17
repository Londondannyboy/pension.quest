'use client';

import { CopilotKit } from '@copilotkit/react-core';
import { CopilotErrorBoundary } from './CopilotErrorBoundary';

// CopilotKit runtime connects to Railway Pydantic AI agent via AG-UI protocol
// The agent named "pension-advisor" handles pension expert conversations
const RUNTIME_URL = '/api/copilotkit';

// Check if agent URL is configured (Railway deployment)
const AGENT_URL = process.env.NEXT_PUBLIC_AGENT_URL;
const isCopilotEnabled = Boolean(AGENT_URL);

export function Providers({ children }: { children: React.ReactNode }) {
  // If no agent URL configured, render without CopilotKit
  if (!isCopilotEnabled) {
    return <>{children}</>;
  }

  return (
    <CopilotErrorBoundary fallback={<>{children}</>}>
      <CopilotKit runtimeUrl={RUNTIME_URL} agent="pension-advisor">
        {children}
      </CopilotKit>
    </CopilotErrorBoundary>
  );
}
