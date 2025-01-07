"use client";

import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    console.error("An error occurred:", error); // Logs to console instead
  }, [error]);

  return (
    <html>
      <body>
        <h1>Something went wrong.</h1>
      </body>
    </html>
  );
}
