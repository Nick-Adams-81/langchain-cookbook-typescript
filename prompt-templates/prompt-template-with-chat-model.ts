import { config } from "dotenv";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";

config();

const main = async () => {
    const model = new ChatOpenAI({model: "gpt-3.5-turbo"});
    console.log("---- Prompt from template ----");
    // Part 1: create a chat prompt template using a teplate string
    const template = "Tell me a joke about {topic}.";
    const promptTemplate = ChatPromptTemplate.fromTemplate(template);

    const message1 = await promptTemplate.formatMessages({ topic: "cats" });
    const result1 = await model.invoke(message1);
    console.log(result1.content);

    // Part 2: Prompt with multiple placeholders
    console.log("---- prompt with multiple placeholders ----");
    const templateMultiple = `You are a helpful assistant.
    Human: Tell me a {adjective} short story about a {animal}.
    Assistant:`;
    const promptMultiple = ChatPromptTemplate.fromTemplate(templateMultiple);
    const message2 = await promptMultiple.formatMessages({
        adjective: "funny",
        animal: "dog"
    });
    const result2= await model.invoke(message2);
    console.log(result2.content);

    // Part 3: Prompt with system and human messages (using objects)
    console.log("\n---- Prompt with system and human messages ----");
    const messagesDef = [
        { role: "system", content: "You are a comedian who tells jokes about {topic}" },
        { role: "human", content: "Tell me {jokeCount} jokes." }
    ];
    const promptTemplate3 = ChatPromptTemplate.fromMessages(messagesDef);
    const message3 = await promptTemplate3.formatMessages({
        topic: "lawyers",
        jokeCount: 3
    });
    const result3 = await model.invoke(message3);
    console.log(result3.content);

}

main().catch(console.error);