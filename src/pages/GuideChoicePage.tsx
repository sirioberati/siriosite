import React from 'react';
import { Helmet } from 'react-helmet-async';
import GuideChoiceNav from '../components/guide/choice/GuideChoiceNav';
import GuideChoiceHeader from '../components/guide/choice/GuideChoiceHeader';
import GuideChoiceOptions from '../components/guide/choice/GuideChoiceOptions';

const GuideChoicePage = () => {
  const baseUrl = 'https://sirioberati.com';
  const guidePath = '/guide';
  const fullUrl = `${baseUrl}${guidePath}`;
  const imageUrl = 'https://i.ibb.co/X4Fjbpy/Screenshot-2024-11-25-at-8-54-02-PMasdfasd.png';

  return (
    <main className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Create Your AI Avatar | Free Realistic AI Portrait Guide</title>
        <meta 
          name="description" 
          content="Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!" 
        />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content="Create Your AI Avatar | Free Realistic AI Portrait Guide" />
        <meta 
          property="og:description" 
          content="Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!" 
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:alt" content="Create Your AI Avatar Guide Preview" />
        <meta property="og:site_name" content="Sirio Berati" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content="Create Your AI Avatar | Free Realistic AI Portrait Guide" />
        <meta 
          name="twitter:description" 
          content="Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!" 
        />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:creator" content="@heysirio" />
        <meta name="twitter:site" content="@heysirio" />

        {/* Additional SEO */}
        <link rel="canonical" href={fullUrl} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Create Your AI Avatar",
            "description": "Learn how to create stunning AI avatars and realistic AI portraits with our comprehensive guide. Master AI model training and achieve photorealistic results in minutes!",
            "image": imageUrl,
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "USD",
              "value": "2"
            },
            "step": [
              {
                "@type": "HowToStep",
                "name": "Setup",
                "text": "Create an account and prepare your training images"
              },
              {
                "@type": "HowToStep",
                "name": "Train",
                "text": "Train your AI model with your photos"
              },
              {
                "@type": "HowToStep",
                "name": "Generate",
                "text": "Create realistic AI portraits using your trained model"
              }
            ],
            "author": {
              "@type": "Person",
              "name": "Sirio Berati",
              "url": baseUrl
            }
          })}
        </script>
      </Helmet>

      <GuideChoiceNav />

      {/* Content */}
      <div className="relative min-h-screen pt-24 pb-12">
        {/* Ambient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-sirio-blue/20" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr,1.5fr] lg:gap-12 lg:items-center lg:min-h-[calc(100vh-8rem)]">
            <GuideChoiceHeader />
            <GuideChoiceOptions />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GuideChoicePage;