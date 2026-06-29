interface Props {
  schema: object | object[];
}

/** Injects JSON-LD structured data. Server component. */
export function SchemaMarkup({ schema }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
