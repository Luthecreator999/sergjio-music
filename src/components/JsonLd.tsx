/**
 * Renders a JSON-LD structured-data block. Server component — the script is
 * emitted straight into the HTML so crawlers see it without running JS.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Structured data is trusted, statically-built content. Escape "<" so a
      // stray "</script>" in any string can never break out of the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
