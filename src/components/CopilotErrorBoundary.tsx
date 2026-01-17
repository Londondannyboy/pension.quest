'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class CopilotErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error but don't crash the app
    console.warn('[CopilotKit] Agent connection failed:', error.message);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback or children without CopilotKit features
      return this.props.fallback || this.props.children;
    }

    return this.props.children;
  }
}
