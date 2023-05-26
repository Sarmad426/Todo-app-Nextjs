"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center my-10">
      <h2>The Title of the Task Must not be Empty.</h2>
      <button
        onClick={() => reset()}
        className="m-5 text-center bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400"
      >
        Try again
      </button>
    </div>
  );
}
