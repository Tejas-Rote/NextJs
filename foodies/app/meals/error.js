"use client";
export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An Error occurred !</h1>
      <p>Failed to fetch meals data please try again</p>
    </main>
  );
}