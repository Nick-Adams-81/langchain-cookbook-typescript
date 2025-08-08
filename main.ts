async function runAll(): Promise<void> {
  console.log("=== Running: prompt-templates-basic ===");
  await import("./prompt-templates/prompt-templates-basic");
}

runAll().catch((error) => {
  console.error(error);
}); 