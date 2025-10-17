import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-4">This is a sample about page for the site.</p>
      <div className="mt-6">
        <Link href="/" className="text-blue-600 underline">
          Back to home
        </Link>
      </div>
    </div>
  );
}
