/**
 * VideoSchema - Adds VideoObject JSON-LD to help Google index video content.
 * @param name - Name of the video
 * @param description - Short description of the video content
 * @param thumbnailUrl - URL to the video's thumbnail/poster image
 * @param contentUrl - Direct URL to the video file
 * @param uploadDate - ISO 8601 date string
 */
export const VideoSchema = ({
  name,
  description,
  thumbnailUrl,
  contentUrl,
  uploadDate = "2024-02-23T08:00:00+01:00",
}: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate?: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    contentUrl: contentUrl,
    uploadDate: uploadDate,
    publisher: {
      "@type": "Organization",
      name: "INVERTA DIGITAL",
      logo: {
        "@type": "ImageObject",
        url: "https://invertadigital.de/logo.png",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
