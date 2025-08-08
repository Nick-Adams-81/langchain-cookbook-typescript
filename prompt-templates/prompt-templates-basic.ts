import { ChatPromptTemplate } from "@langchain/core/prompts";

async function main() {
    // PART 1: Create a chat prompt template using a template string
    const template = `Tell me a joke about {topic}.`;
    const promptTemplate = ChatPromptTemplate.fromTemplate(template);

    console.log("---- Prompt from template ----");
    const message1 = await promptTemplate.formatMessages({topic: "dogs"});
    console.log(message1)

    // PART 2: Prompt with multiple placeholders
    const templateMultiple = `You are a helpful assistant.
    human: Tell me a {adjective} story about a {animal}.
    Assistant:`;
    const promptMultiple = ChatPromptTemplate.fromTemplate(templateMultiple);
    const message2 = await promptMultiple.formatMessages({
        adjective: "funny",
        animal: "cat"
    });
    console.log("\n---- Prompt with multiple placeholders ----");
    console.log(message2);

    // PART 3: Prompt with system and human messages (using templates)
    const messagesDef = [
        { role: "system", content: "You are a comedian who tells jokes about {topic}." },
        { role: "human", content: "tell me {joke_count} jokes." }
    ];
    const prompt3 = ChatPromptTemplate.fromMessages(messagesDef);
    const messages3 = await prompt3.formatMessages({
        topic: "lawyers",
        joke_count: 3
    });
    console.log("\n---- Prompt with system and human messages ----");
    console.log(messages3);
}

main().catch(console.error);