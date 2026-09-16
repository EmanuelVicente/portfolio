'use client';

import { useEffect, useRef, useState } from 'react';
import { askAssistant, type AssistantMessage } from '../../assistant.api';
import styles from './Assistant.module.css';

const MAX_HISTORY_MESSAGES = 20;

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
}

interface AssistantProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export function Assistant({ isOpen, onClose, onToggle }: AssistantProps) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: 'assistant',
      content: 'Hi! I can answer questions about Emanuel, his experience, skills and background.',
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      return;
    }

    triggerRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = input.trim();

    if (!question || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      role: 'user',
      content: question,
    };

    const history: AssistantMessage[] = messages.slice(-MAX_HISTORY_MESSAGES).map(({ role, content }) => ({
      role,
      content,
    }));

    setMessages((currentMessages) => [...currentMessages, userMessage].slice(-MAX_HISTORY_MESSAGES));

    setInput('');
    setIsLoading(true);

    try {
      const answer = await askAssistant(question, history);

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: answer,
      };

      setMessages((currentMessages) => [...currentMessages, assistantMessage].slice(-MAX_HISTORY_MESSAGES));
    } catch {
      const errorMessage: Message = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Sorry, I could not process your question right now.',
      };

      setMessages((currentMessages) => [...currentMessages, errorMessage].slice(-MAX_HISTORY_MESSAGES));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${styles.trigger} ${isOpen ? styles.triggerOpen : ''}`}
        onClick={onToggle}
        aria-label={isOpen ? 'Close AI assistant' : 'Open AI assistant'}
        aria-expanded={isOpen}>
        <span className={styles.triggerStatus} />
        <span>{isOpen ? 'Close' : 'Ask AI'}</span>
      </button>

      {isOpen && (
        <aside className={styles.panel} aria-label="AI assistant">
          <div className={styles.header}>
            <div className={styles.identity}>
              <div className={styles.avatar}>EV</div>

              <div>
                <p className={styles.eyebrow}>Emanuel AI</p>

                <h2 className={styles.title}>Ask about my work</h2>
              </div>
            </div>

            <button type="button" className={styles.close} onClick={onClose} aria-label="Close AI assistant">
              ×
            </button>
          </div>

          <div className={styles.messages} role="log" aria-live="polite" aria-label="AI assistant conversation">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.role === 'assistant' ? styles.messageAssistant : styles.messageUser
                }`}>
                {message.role === 'assistant' && <span className={styles.messageLabel}>AI</span>}

                <p>{message.content}</p>
              </div>
            ))}

            {isLoading && (
              <div className={`${styles.message} ${styles.messageAssistant}`}>
                <span className={styles.messageLabel}>AI</span>

                <div className={styles.typing} role="status" aria-label="Assistant is thinking">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.input}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about my experience..."
              aria-label="Ask a question"
              disabled={isLoading}
            />

            <button type="submit" className={styles.submit} disabled={isLoading || !input.trim()}>
              <span>{isLoading ? '...' : 'Send'}</span>

              {!isLoading && <span aria-hidden="true">↗</span>}
            </button>
          </form>

          <p className={styles.footer}>AI assistant · Based on Emanuel&apos;s portfolio</p>
        </aside>
      )}
    </>
  );
}
