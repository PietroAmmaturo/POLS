import {useAsyncData} from "#app";
const startingMessageContent =
    "Hello! 🌸\n" +
    "\n" +
    "I’m here to support you if you're facing violence or need someone to talk to. Your safety and well-being are my top priorities. Please feel free to share what's on your mind. 💜"
interface Message {
    bot: boolean
    content: string
}
export const useMessageStore = defineStore('messages', () => {

    const messages = reactive([] as Message[]);

    function init() {
        const startingMessage = {bot: true, content: startingMessageContent}
        if(process.client) {
            const storedMessages = sessionStorage.getItem('messages');
            if (storedMessages) {
                messages.push(...JSON.parse(storedMessages));
            } else {
                messages.push(startingMessage);
            }
        }
    }

    async function addUserMessage(message : string) {
        const redactedMessage = await $fetch('/api/redact', {
            method: 'POST',
            body: {
                message: message,
            }
        });
        messages.unshift({bot: false, content: redactedMessage.choices[0].message.content as string});
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

    // Watch the messages array and save to session storage on change
    watch(messages, async (newMessages) => {
        sessionStorage.setItem('messages', JSON.stringify(newMessages));
    }, { deep: true });

    return {messages, addUserMessage};
});