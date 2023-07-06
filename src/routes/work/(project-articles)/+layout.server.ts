import { filteredContents } from "$lib/data/contents";

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  const slug = pathname.replace('/', '');
  const content = filteredContents.find((content) => content.slug === slug);

  return {
    content
  };
}
