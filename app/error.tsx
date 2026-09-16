'use client';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main>
      <h1>Something went wrong</h1>

      <p>We couldn&apos;t load the portfolio right now.</p>

      <button type="button" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
