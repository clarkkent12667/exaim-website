import Script from 'next/script'

interface StructuredDataProps {
  data: object
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${JSON.stringify(data).slice(0, 50)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

