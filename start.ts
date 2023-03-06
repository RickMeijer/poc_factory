(async function create(projectName = process.argv[2]) {
  (await import(`./cli/create/svelte/index.js`)).create(projectName);
})();
