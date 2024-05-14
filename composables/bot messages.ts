interface BotMessage {
    message : string,
    bot : boolean
}

const chat : BotMessage [] = [
    { message: "Hello, I'm seeking support.", bot: false },
    { message: "Hi there! Welcome to our women's support center. What kind of support do you need today?", bot: true },
    { message: "I'm in an abusive relationship and I don't know what to do.", bot: false },
    { message: "I'm really sorry to hear that you're going through this. Your safety is the most important thing right now. Have you thought about reaching out to a trusted friend or family member for support?", bot: true },
    { message: "Yes, but I'm scared he'll find out.", bot: false },
    { message: "That's understandable. Your safety is our top priority. There are resources available to help you stay safe and make a plan. Would you like me to provide you with some information on shelters or support hotlines?", bot: true },
    { message: "Yes, please.", bot: false },
    { message: "Here are some options: [Provide list of local shelters and hotlines]. These organizations have trained professionals who can offer support and guidance in your situation. Remember, you're not alone, and there are people who care about you and want to help.", bot: true },
    { message: "Thank you. I'll reach out to them for help.", bot: false },
    { message: "You're welcome. It takes courage to seek help, and you're taking an important step towards creating a safer and healthier future for yourself. If you have any other questions or need further support, feel free to ask.", bot: true },
    { message: "I will. Thanks again.", bot: false },
    { message: "Take care, and remember, you deserve to be safe and happy. We're here for you whenever you need us.", bot: true }
];

export function getChat() {
    return chat;
}