import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { icons } from 'lucide-react';
import { docsContentRoute, docsImageRoute, docsRoute } from './shared';

const iconColors: Record<string, string> = {
  Users: '#49bdff',
  Trophy: '#49bdff',
  Award: '#fbbf24',
};

function coloredIconsPlugin() {
  function replaceIcon(node: { icon?: string | React.ReactNode }) {
    if (node.icon === undefined || typeof node.icon === 'string') {
      const name = node.icon as string | undefined;
      const Icon = name ? icons[name as keyof typeof icons] : undefined;
      if (Icon) {
        const color = iconColors[name];
        node.icon = createElement(
          'span',
          color ? { style: { color, display: 'inline-flex' } } : undefined,
          createElement(Icon),
        );
      }
    }
    return node;
  }
  return {
    name: 'colored-icons',
    transformPageTree: {
      file: replaceIcon,
      folder: replaceIcon,
      separator: replaceIcon,
    },
  };
}

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [coloredIconsPlugin()],
});

export function getPageImage(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `${docsImageRoute}/${segments.join('/')}`,
  };
}

export function getPageMarkdownUrl(page: (typeof source)['$inferPage']) {
  const segments = [...page.slugs, 'content.md'];

  return {
    segments,
    url: `${docsContentRoute}/${segments.join('/')}`,
  };
}

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title} (${page.url})

${processed}`;
}
