import { ChatOpenAI } from "@langchain/openai";
import { config } from "dotenv";
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import * as readline from "readline";

config();

const main = async () => {
    const model = new ChatOpenAI({ model: "gpt-3.5-turbo"});
    const chatHistory: any[] = [];

    const systemMessage = new SystemMessage("You are a helpful AI assistant.");
    chatHistory.push(systemMessage);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    while (true) {
        const query = await new Promise<string>((resolve) => {
            rl.question("User: ", resolve);
        });

        if(query.toLowerCase() === "quit") {
            console.log("AI: Goodbye");
            break;
        }
        
        chatHistory.push(new HumanMessage(query));
        const result = await model.invoke(chatHistory);
        const response = result.content;
        chatHistory.push(new AIMessage(String(response)));
        console.log(`AI: ${response}`);
    }
    rl.close();
    console.log("---- Message History ----");
    console.log(chatHistory);
}

main().catch(console.error);