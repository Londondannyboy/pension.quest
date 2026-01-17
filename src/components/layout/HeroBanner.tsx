'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HumeWidget } from '@/components/HumeWidget';

export type HeroVariant = 'default' | 'compact' | 'calculator' | 'article';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface UnsplashImage {
  urls: {
    regular: string;
    small: string;
  };
  alt_description: string;
  user: {
    name: string;
    links: {
      html: string;
    };
  };
}

interface HeroBannerProps {
  variant?: HeroVariant;
  title: string;
  subtitle?: string;
  description?: string;
  unsplashQuery?: string;
  icon?: string;
  breadcrumbs?: Breadcrumb[];
  showVoiceWidget?: boolean;
  children?: React.ReactNode;
}

const variantStyles: Record<HeroVariant, { minHeight: string; textSize: string }> = {
  default: { minHeight: 'min-h-[500px]', textSize: 'text-4xl md:text-5xl lg:text-6xl' },
  compact: { minHeight: 'min-h-[300px]', textSize: 'text-3xl md:text-4xl' },
  calculator: { minHeight: 'min-h-[350px]', textSize: 'text-3xl md:text-4xl' },
  article: { minHeight: 'min-h-[400px]', textSize: 'text-3xl md:text-5xl' },
};

/**
 * HeroBanner - Hero component with Unsplash images and Hume voice widget
 *
 * Features:
 * - Dynamic Unsplash image backgrounds
 * - Hume voice widget in bottom-left corner
 * - SEO-friendly breadcrumbs
 * - Multiple size variants
 */
export function HeroBanner({
  variant = 'default',
  title,
  subtitle,
  description,
  unsplashQuery = 'retirement planning finance uk',
  icon,
  breadcrumbs,
  showVoiceWidget = true,
  children,
}: HeroBannerProps) {
  const [image, setImage] = useState<UnsplashImage | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const styles = variantStyles[variant];

  useEffect(() => {
    async function fetchImage() {
      try {
        const res = await fetch(`/api/unsplash?query=${encodeURIComponent(unsplashQuery)}`);
        if (res.ok) {
          const data = await res.json();
          if (data.urls) {
            setImage(data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch Unsplash image:', error);
      }
    }
    if (unsplashQuery) {
      fetchImage();
    }
  }, [unsplashQuery]);

  return (
    <section className={`relative ${styles.minHeight} overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900`}>
      {/* Background Image */}
      {image && (
        <>
          <Image
            src={image.urls.regular}
            alt={image.alt_description || title}
            fill
            priority
            className={`object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-25' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />
        </>
      )}

      {/* Fallback gradient if no image */}
      {!image && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-indigo-900/30" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12 pt-8">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-4" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/40">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className={i === breadcrumbs.length - 1 ? 'text-white font-medium' : ''}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title area */}
        <div className="max-w-4xl">
          <div className="flex items-start gap-4">
            {icon && <span className="text-5xl md:text-6xl">{icon}</span>}
            <div>
              {subtitle && (
                <p className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  {subtitle}
                </p>
              )}
              <h1 className={`${styles.textSize} font-bold text-white leading-tight`}>
                {title}
              </h1>
              {description && (
                <p className="text-lg md:text-xl text-slate-300 mt-4 max-w-2xl">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Optional children (e.g., CTA buttons, search bar) */}
          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>

      {/* Hume Voice Widget - Bottom Left */}
      {showVoiceWidget && (
        <div className="absolute bottom-6 left-6 z-20">
          <div className="bg-slate-900/95 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl transform transition-transform hover:scale-105">
            <HumeWidget />
          </div>
        </div>
      )}

      {/* Photo Credit - Bottom Right */}
      {image && (
        <div className="absolute bottom-3 right-4 z-10">
          <p className="text-xs text-white/30">
            Photo by{' '}
            <a
              href={`${image.user.links.html}?utm_source=pension_quest&utm_medium=referral`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white/50"
            >
              {image.user.name}
            </a>
            {' '}on Unsplash
          </p>
        </div>
      )}
    </section>
  );
}

export default HeroBanner;
