async function runAll(): Promise<void> {
  console.log("=== Running: prompt-templates-basic ===");
  // await import("./prompt-templates/prompt-templates-basic");
  await import("./prompt-templates/prompt-template-with-chat-model");
}

runAll().catch((error) => {
  console.error(error);
}); 