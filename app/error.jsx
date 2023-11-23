"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();
  useEffect(() => {
    if (
      error.message.includes("_lib_api__WEBPACK_IMPORTED_MODULE_2__.default")
    ) {
      router.push("/auth/login");
    }
    // Log the error to an error reporting service
    console.log("erro aqui > ❌", error.message);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        <h1>{error.message}</h1>
        Try again
      </button>
    </div>
  );
}
