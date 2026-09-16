'use client';

import { useAssistant } from '../../AssistantProvider';

interface AssistantTriggerProps {
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

export function AssistantTrigger({ children, className, 'aria-label': ariaLabel }: AssistantTriggerProps) {
  const { openAssistant } = useAssistant();

  return (
    <button type="button" className={className} onClick={openAssistant} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
