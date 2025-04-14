import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Links</h1>
      <Link
        className="underline"
        href="/manually-use-presence-to-suspend-props-in-radix"
      >
        Manually use presence to suspend props in radix
      </Link>
    </div>
  );
}
