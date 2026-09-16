'use client';

import { createContext, useContext, useState } from 'react';

import { Assistant } from './components/Assistant/Assistant';

interface AssistantContextValue {
  openAssistant: () => void;
  closeAssistant: () => void;
}

const AssistantContext = createContext<AssistantContextValue | null>(null);

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AssistantContext.Provider
      value={{
        openAssistant: () => setIsOpen(true),
        closeAssistant: () => setIsOpen(false),
      }}>
      {children}

      <Assistant isOpen={isOpen} onToggle={() => setIsOpen((current) => !current)} onClose={() => setIsOpen(false)} />
    </AssistantContext.Provider>
  );
}

export function useAssistant() {
  const context = useContext(AssistantContext);

  if (!context) {
    throw new Error('useAssistant must be used within AssistantProvider');
  }

  return context;
}
