import { MetadataRoute } from 'next';
import { getAllContentPaths } from '@/lib/mdx';

const BASE_URL = 'https://pension.quest';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Get all content pages from MDX files
  const contentPaths = getAllContentPaths();

  // Add pillar pages (clusters)
  const pillarPages = contentPaths.filter(p => !p.page);
  for (const path of pillarPages) {
    routes.push({
      url: `${BASE_URL}/${path.cluster}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9, // Pillar pages are high priority
    });
  }

  // Add supporting pages
  const supportingPages = contentPaths.filter(p => p.page);
  for (const path of supportingPages) {
    routes.push({
      url: `${BASE_URL}/${path.cluster}/${path.page}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // Add static pages
  const staticPages = [
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
    { path: '/cookies', priority: 0.3 },
    { path: '/disclaimer', priority: 0.3 },
  ];

  for (const page of staticPages) {
    routes.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: page.priority,
    });
  }

  return routes;
}
