import { create as createSvelte } from "create-svelte";

export async function create(projectName: string) {
  // console.log("Executing svelte create");
  await createSvelte(`apps/${projectName}`, {
    name: projectName,
    template: "skeleton", // or 'skeleton' or 'skeletonlib'
    types: "typescript", // or 'typescript' or null;
    prettier: true,
    eslint: true,
    playwright: true,
    vitest: false,
  });
}
