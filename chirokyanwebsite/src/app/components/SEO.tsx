import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function SEO() {
  const { language } = useLanguage();

  const seoContent = {
    en: {
      title: 'Chirokyan Podcast - Stories, Interviews & Inspiring Conversations',
      description: 'Chirokyan is a professional podcast featuring engaging stories, interviews, and inspiring conversations. Watch our latest episodes, connect with us on social media, and discover compelling content.',
      keywords: 'Chirokyan, podcast, stories, interviews, conversations, Kurdish podcast, videos, episodes, Doctor Hazhar Salam',
      ogTitle: 'Chirokyan Podcast - Watch Our Latest Episodes',
      ogDescription: 'Join us for engaging stories and inspiring conversations. Watch our most popular episodes and connect with the Chirokyan community.',
      twitterTitle: 'Chirokyan Podcast',
      twitterDescription: 'Engaging stories, interviews & inspiring conversations. Watch our latest episodes now!'
    },
    ku: {
      title: 'پۆدکاستی چیرۆکیان - چیرۆک، چاوپێکەوتن و گفتوگۆی هانبەخش',
      description: 'چیرۆکیان پۆدکاستێکی پیشەییە کە چیرۆک، چاوپێکەوتن و گفتوگۆی سەرنجڕاکێش پێشکەش دەکات. تەماشای تازەترین ئەڵقەکانمان بکە و لەگەڵمان بەستراوبە لە تۆڕە کۆمەڵایەتییەکان.',
      keywords: 'چیرۆکیان، پۆدکاست، چیرۆک، چاوپێکەوتن، گفتوگۆ، پۆدکاستی کوردی، ڤیدیۆ، ئەڵقە، دکتۆر هەژار سەلام',
      ogTitle: 'پۆدکاستی چیرۆکیان - تەماشای تازەترین ئەڵقەکان',
      ogDescription: 'بەشداری چیرۆک و گفتوگۆی هانبەخش بکە. تەماشای زۆرترین ئەڵقە بینراوەکانمان بکە و بەستراوبە بە کۆمەڵگای چیرۆکیان.',
      twitterTitle: 'پۆدکاستی چیرۆکیان',
      twitterDescription: 'چیرۆک، چاوپێکەوتن و گفتوگۆی هانبەخش. تەماشای تازەترین ئەڵقەکانمان بکە!'
    },
    ar: {
      title: 'بودكاست چیرۆکیان - قصص، مقابلات ومحادثات ملهمة',
      description: 'چیرۆکیان هو بودكاست احترافي يقدم قصصًا جذابة ومقابلات ومحادثات ملهمة. شاهد أحدث حلقاتنا وتواصل معنا على وسائل التواصل الاجتماعي.',
      keywords: 'چیرۆکیان، بودكاست، قصص، مقابلات، محادثات، بودكاست كردي، فيديوهات، حلقات، الدكتور هەژار سەلام',
      ogTitle: 'بودكاست چیرۆکیان - شاهد أحدث حلقاتنا',
      ogDescription: 'انضم إلينا للاستمتاع بقصص جذابة ومحادثات ملهمة. شاهد حلقاتنا الأكثر شعبية وتواصل مع مجتمع چیرۆکیان.',
      twitterTitle: 'بودكاست چیرۆکیان',
      twitterDescription: 'قصص جذابة، مقابلات ومحادثات ملهمة. شاهد أحدث حلقاتنا الآن!'
    }
  };

  useEffect(() => {
    const content = seoContent[language];
    const currentUrl = window.location.href;
    const logoUrl = 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&h=630&fit=crop';

    // Set document title
    document.title = content.title;

    // Set HTML lang and dir attributes
    document.documentElement.lang = language === 'en' ? 'en' : language === 'ku' ? 'ku' : 'ar';
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Primary Meta Tags
    setMetaTag('title', content.title);
    setMetaTag('description', content.description);
    setMetaTag('keywords', content.keywords);
    setMetaTag('author', 'Chirokyan Podcast - Doctor Hazhar Salam');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', language === 'en' ? 'English' : language === 'ku' ? 'Kurdish' : 'Arabic');
    setMetaTag('revisit-after', '7 days');

    // Open Graph / Facebook
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', currentUrl, true);
    setMetaTag('og:title', content.ogTitle, true);
    setMetaTag('og:description', content.ogDescription, true);
    setMetaTag('og:image', logoUrl, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:locale', language === 'en' ? 'en_US' : language === 'ku' ? 'ku_IQ' : 'ar_IQ', true);
    setMetaTag('og:site_name', 'Chirokyan Podcast', true);

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:url', currentUrl);
    setMetaTag('twitter:title', content.twitterTitle);
    setMetaTag('twitter:description', content.twitterDescription);
    setMetaTag('twitter:image', logoUrl);
    setMetaTag('twitter:creator', '@chirokyan');

    // Additional Meta Tags
    setMetaTag('theme-color', '#8B6F47');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    setMetaTag('apple-mobile-web-app-title', 'Chirokyan');
    setMetaTag('format-detection', 'telephone=no');

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    // Add Structured Data - Podcast Series
    const updateOrCreateScript = (id: string, data: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    updateOrCreateScript('schema-podcast', {
      "@context": "https://schema.org",
      "@type": "PodcastSeries",
      "name": "Chirokyan",
      "alternateName": "چیرۆکیان",
      "description": content.description,
      "url": currentUrl,
      "image": logoUrl,
      "author": {
        "@type": "Person",
        "name": "Doctor Hazhar Salam"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Chirokyan Podcast",
        "logo": {
          "@type": "ImageObject",
          "url": logoUrl
        }
      },
      "sameAs": [
        "https://www.youtube.com/@chirokyan",
        "https://www.instagram.com/chirokiyan",
        "https://www.facebook.com/profile.php",
        "https://www.tiktok.com/@chirokyann"
      ],
      "genre": ["Interview", "Stories", "Conversation"],
      "inLanguage": language === 'en' ? 'en' : language === 'ku' ? 'ku' : 'ar'
    });

    updateOrCreateScript('schema-organization', {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Chirokyan Podcast",
      "alternateName": "چیرۆکیان",
      "url": currentUrl,
      "logo": logoUrl,
      "description": content.description,
      "email": "hazharsalam62@gmail.com",
      "founder": {
        "@type": "Person",
        "name": "Doctor Hazhar Salam"
      },
      "sameAs": [
        "https://www.youtube.com/@chirokyan",
        "https://www.instagram.com/chirokiyan",
        "https://www.facebook.com/profile.php",
        "https://www.tiktok.com/@chirokyann"
      ]
    });

    updateOrCreateScript('schema-website', {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Chirokyan Podcast",
      "alternateName": "چیرۆکیان",
      "url": currentUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${currentUrl}?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    });

  }, [language]);

  return null;
}