import { memo } from 'react';

interface SEOMetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOMetaTags = memo(({ 
  title = 'Marcel Amestí - Portfólio Profissional de Fotografia',
  description = 'Portfólio profissional de fotografia apresentando natureza, urbano, retratos e fotografia de eventos. Capturando os belos momentos da vida através de uma visão artística.',
  image = '/og-image.jpg',
  url = 'https://marcelamesti.com'
}: SEOMetaTagsProps) => {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </>
  );
});

SEOMetaTags.displayName = 'SEOMetaTags';
export default SEOMetaTags;