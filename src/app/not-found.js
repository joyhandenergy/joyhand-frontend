"use client";
import Link from "next/link";
import "./globals.css"

export default function CatchAllNotFound() {
  return (
    <div className="notFoundContainer">
      <div className="notFoundContent">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn’t exist or has been moved.</p>
        <Link href="/" className="backHomeBtn">Go Back Home</Link>
      </div>
    </div>
  );
}