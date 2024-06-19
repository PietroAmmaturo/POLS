import {SyncRedactor} from 'redact-pii';
const redactor = new SyncRedactor();

export default defineEventHandler(async (event) => {
    const {message} = await readBody(event);
    return redactor.redact(message);
});