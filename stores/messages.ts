import {useAsyncData} from "#app";

interface Message {
    bot: boolean
    content: string
}
export const useMessageStore = defineStore('messages', () => {

    const messages = reactive([] as Message[]);

    function init() {

    }

    async function addUserMessage(message : string) {
        const redactedMessage = await $fetch('/api/redact', {
            method: 'POST',
            body: {
                message: message,
            }
        });
        messages.unshift({bot: false, content: redactedMessage as string});
        const botMessage = {bot: true, content: ""};
        messages.unshift(botMessage);
        const response = await $fetch('/api/chatbot', {
            method: 'POST',
            body: {
                messages: messages,
            }
        }).then(r => {
            r && r.choices[0].message.content ? messages[0] = {bot: true, content:  r.choices[0].message.content} : null;
        })
    }

    init()

    return {messages, addUserMessage};
});