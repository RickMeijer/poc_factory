async function main() {
  const fooModule = await import("./foo.js");
  console.dir({ foo: fooModule });
}
main();
