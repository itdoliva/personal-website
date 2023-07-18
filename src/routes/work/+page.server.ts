import { filteredContents } from '$lib/data/contents';

export async function load() {
  const projects = filteredContents.projects;

  return {
    projects,
  };
}
