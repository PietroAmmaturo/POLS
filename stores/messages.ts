import {useAsyncData} from "#app";
import {getBotResponse} from "~/composables/chatbot";

interface Message {
    bot: boolean
    content: string
}
export const useMessageStore = defineStore('messages', () => {

    const messages = reactive([] as Message[]);

    function init() {

    }

    async function addUserMessage(message : string) {
        messages.unshift({bot: false, content: message});
        const response = await $fetch('/api/chatbot', {
            method: 'POST',
            body: {
                messages: messages,
            }
        }).then(r => {
            r && r.choices[0].message.content ? messages.unshift({bot: true, content: r.choices[0].message.content}) : null;
        })
    }

    init()

    return {messages, addUserMessage};
});