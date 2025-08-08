import { config } from "dotenv";
import { AIMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { ChatOpenAI } from "@langchain/openai";

config();

const main = async () => {
    const llm = new ChatOpenAI({ model: "gpt-3.5-turbo" });

    const message1 = [
        new SystemMessage("Solve the following math problems"),
        new HumanMessage("What is 81 divided by 9?")
    ];
    const result1 = await llm.invoke(message1);
    console.log(`AI: ${result1.content}`);

    const message2 = [
        new SystemMessage("Solve the following math problems."),
        new HumanMessage("What is 81 divided by 9?"),
        new AIMessage("81 divided by 9 is 9."),
        new HumanMessage("What is 10 times 5?")
    ];
    const result2 = await llm.invoke(message2);
    console.log(`AI: ${result2.content}`);
}

main().catch(console.error);