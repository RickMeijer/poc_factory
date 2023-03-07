import inquirer from "inquirer";

const prompt = inquirer.createPromptModule();
(async function init(scope, defaultAction) {
  const answer = await prompt([
    {
      type: "list",
      name: "init",
      message: "What do you want to do?",
      default: defaultAction,
      choices: [
        { name: "Create a new project", value: "create" },
        // { name: "Start a project", value: "start" },
        // { name: "Test the codebase", value: "test" },
        { name: "Update installed packages", value: "update" },
        // { name: "Trigger bitbucket pipeline", value: "pipelinetrigger" },
        // { name: "Other", value: "other" },
      ],
    },
  ]);
  const action: keyof typeof scope = answer.init;
  return await scope[action](answer);
})(
  {
    start,
    create,
  },
  // allows for `npm start create`, for example
  process.argv[2] || "start"
);

function start(answers) {
  return prompt([
    {
      type: "list",
      name: "start",
      choices: [{ name: "foo", value: "foo" }],
    },
  ]);
}

async function create() {
  const { projectname, framework } = await prompt([
    {
      message: "What is the name of the project?",
      type: "input",
      name: "projectname",
    },
    {
      message: "Framework of choice?",
      type: "list",
      name: "framework",
      default: "svelte",
      choices: ["svelte", "react", { name: "solidjs", disabled: true }],
    },
  ]);

  (await import(`./cli/create/${framework}/index.js`)).create(projectname);
}
