import { bold, cyan } from "kleur/colors";
import { log } from "../../logger/index.js";

import { create as createSvelte } from "create-svelte";

export async function create(projectName: string) {
  if (!projectName)
    return log.error("Please run the command with a project name argument");
  log.info(`Creating a new svelte project in apps/${projectName}`);
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

// TODOS:
// update package.json with a start script
// Default port of [x] (8080)
