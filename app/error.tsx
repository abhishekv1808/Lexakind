'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Hook for an error-reporting service (e.g. Sentry) when configured.
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blk px-5 text-center">
      <p className="font-display text-[64px] font-bold leading-none text-ora">
        Oops
      </p>
      <h1 className="mt-4 font-display text-[24px] font-semibold text-white">
        Something went wrong
      </h1>
      <p className="mx-auto mt-3 max-w-[400px] font-body text-[14px] font-light text-[#adadb4]">
        An unexpected error occurred. Please try again — if it keeps happening,
        reach us at +91 86188 88526.
      </p>
      <div className="mt-8 flex items-center gap-3">
        <button
          onClick={reset}
          className="rounded-[3px] bg-ora px-6 py-3 font-body text-[14px] font-medium text-white transition-colors hover:bg-ora-h"
        >
          Try again
        </button>
        <a
          href="/"
          className="rounded-[3px] border border-white/25 px-6 py-3 font-body text-[14px] font-medium text-white transition-colors hover:border-white"
        >
          Go home
        </a>
      </div>
    </main>
  );
}
