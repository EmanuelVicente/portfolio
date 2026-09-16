export interface AssistantMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AskAssistantResponse {
  answer: string;
}

export async function askAssistant(question: string, history: AssistantMessage[]): Promise<string> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/assistant`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question,
      history,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to get assistant response');
  }

  const data: AskAssistantResponse = await response.json();

  return data.answer;
}
