import { bold, cyan } from "kleur/colors";
import { log } from "../../logger/index.js";
import { exec, spawn, execFile } from "child_process";

export async function create(projectName: string) {
  if (!projectName)
    return log.error("Please run the command with a project name argument");

  log.info(bold(`Creating a new react project in apps/${projectName}`));

  const app = await execFile("create-react-app", [
    `apps/${projectName}`,
    "--template typescript",
  ]);

  app.stdout?.on("data", (data) => {
    console.log(data);
  });
  app.stderr?.on("data", (data) => {
    log.error(`stderr: ${data}`);
  });

  app.on("close", (code) => {
    log.info(`child process exited with code ${code}`);
  });
}
