async function runAll(): Promise<void> {
  console.log("=== Running: prompt-templates-basic ===");
  // await import("./prompt-templates/prompt-templates-basic");
  // await import("./prompt-templates/prompt-template-with-chat-model");
  await import("./chat-models/chat-models-basic-conversation");
}

runAll().catch((error) => {
  console.error(error);
}); 