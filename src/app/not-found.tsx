import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div><p className="eyebrow">LUMBE TECH CLOUD</p><h1>Page not found</h1><p>The page may have moved, or the address may be incorrect. You can return to the services overview.</p><Link href="/" className="button button-primary">Back to the home page</Link></div></main>;
}
