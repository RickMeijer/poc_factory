import { bold, cyan } from "kleur/colors";
import { log } from "../../logger/index.js";

import { create as createSvelte } from "create-svelte";

export async function create(projectName: string) {
  if (!projectName)
    return log.error("Please run the command with a project name argument");
  console.log(bold("Creating a new project in apps/"), projectName);
  // await createSvelte(`apps/${projectName}`, {
  //   name: projectName,
  //   template: "skeleton", // or 'skeleton' or 'skeletonlib'
  //   types: "typescript", // or 'typescript' or null;
  //   prettier: true,
  //   eslint: true,
  //   playwright: true,
  //   vitest: false,
  // });
}
