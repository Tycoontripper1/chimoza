import Head from "next/head";

export function SEO({
  title = "ST CHIMOZA Private School | Building Future Leaders",
  description = "Excellence in education, character development, and community engagement at ST CHIMOZA Private School.",
  keywords = "school in Nigeria, quality education, stchimoza, private school Lagos",
  url = "https://stchimoza.com.ng",
  logo = "/logo.png", // in /public folder
  schema = true, // enable schema by default
}) {
  return (
    <Head>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${url}${logo}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${url}${logo}`} />

      {/* Schema Markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "School",
              name: "ST CHIMOZA Private School",
              url: url,
              logo: `${url}${logo}`,
              address: {
                "@type": "PostalAddress",
                streetAddress: "26, Joel Oyeniyi Street, Jerusalem B/Stop, Off Command Road",
                addressLocality: "Ipaja, Lagos",
                addressCountry: "NG",
              },
              sameAs: [
                "https://facebook.com/stchimoza",
                "https://instagram.com/stchimoza",
              ],
              description: description,
            }),
          }}
        />
      )}
    </Head>
  );
}
