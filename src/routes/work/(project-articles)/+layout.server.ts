import { filteredContents } from "$lib/data/contents";
import { stripEdgeSlashes } from "$lib/utils/fmtstr";

export async function load({ url }: { url: { pathname: string } }) {
  const { pathname } = url;
  const slug = stripEdgeSlashes(pathname).split('/')[1];
  const project = filteredContents.projects.find((project) => project.slug === slug);

  return {
    project
  };
}
