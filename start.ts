(async function create(projectName = process.argv[2]) {
  // Do something with process.argv[2]
  (await import(`./cli/create/svelte`)).create(projectName);
})();
