'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  // In production, return null to not show anything
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 p-4 bg-red-50 border border-red-200 rounded-lg shadow-lg">
      <h2 className="text-red-800 font-semibold">Something went wrong!</h2>
      <button
        onClick={reset}
        className="mt-2 px-3 py-1 text-sm bg-red-100 text-red-800 rounded hover:bg-red-200"
      >
        Try again
      </button>
    </div>
  );
} 