import {SyncRedactor} from 'redact-pii';
const redactor = new SyncRedactor();
import OpenAI from "openai";

const REDACTOR_PROMPT =
    "## INSTRUCT ## \n" +
    "\n" +
    "\n" +
    "\n" +
    "0) Your goal is to identify personal information and remove it from the message\n" +
    "1) The user is not talking with you\n" +
    "2) Do NOT answer the user\n" +
    "3) NEVER talk to the user\n" +
    "4) Your message is intended to be read from **ANOTHER** AI\n" +
    "5) Do not change anything else apart from identified personal information in the original message\n" +
    "\n" +
    "\n" +
    "\n" +
    "## INFO ## \n" +
    "\n" +
    "\n" +
    "\n" +
    "1) The **OTHER** AI's goal is to 'Be a safe and supportive companion who is both a friend and a source of emotional guidance for women experiencing violence (e.g. from a partner or ex-partner)', nothing more\n" +
    "2) Another redaction system is already present, but is not perfect, your aim is to identify and redact personal info that he was not able to identify.\n" +
    "3) The INSTRUCT is the most important thing\n" +
    "\n" +
    "\n" +
    "\n" +
    "## OUTPUT ## \n" +
    "\n" +
    "\n" +
    "\n" +
    "Given the following message, go through it step by step, find all PERSONAL INFORMATION and write the redacted message.\n" +
    "\n" +
    "\n" +
    "\n" +
    "## EXAMPLE ## \n" +
    "\n" +
    "\n" +
    "\n" +
    "Input: Hi, I am Lucilla Trust, my BF is Mike Cuban, we live in New Finland, Spider's Street, my phone is 3331231239.\n" +
    "Output: Hi, I am PERSON_NAME, my BF is PERSON_NAME, we live in COUNTRY, STREET, my phone is PHONE_NUMBER.\n" +
    "\n" +
    "\n" +
    "\n" +
    "## CONVERSATION ## \n";

// Ideally this AI should run on local (e.g. using Gemma, LLAma), in this way we only avoid leaking information bak to the user, but is still sent to OpenAI
const redactWithAI = async (message: string) => {

    const openai = new OpenAI({
        apiKey: process.env.NUXT_OPENAI_API_KEY,
    });

    return await openai.chat.completions.create({
            model: "gpt-3.5-turbo-0125",
            messages: [{role: "system", content: REDACTOR_PROMPT}, {role: "user", content: message}, ],
            temperature: 1,
            max_tokens: 54,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    );
}
export default defineEventHandler(async (event) => {
    const {message} = await readBody(event);
    // 2 Step redaction: using a simple redactor and then using another AI as redactor
    return redactWithAI(redactor.redact(message));
});