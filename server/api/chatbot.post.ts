import {getBotResponse} from "~/composables/chatbot";


export default defineEventHandler(async (event) => {
    const {messages} = await readBody(event);
    return await getBotResponse(messages);
});