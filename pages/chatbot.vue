<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {getChat} from "~/composables/bot messages";
import OpenAI from "openai";
import {useMessageStore} from "~/stores/messages";
import {getBotResponse} from "~/composables/chatbot";
definePageMeta({
  layout: 'chatbot'
})

const store = useMessageStore();
const messages = store.messages;

const currentContent = ref("");
const responseReady = ref(true);
function sendMessage() {
  // If there is something to send and the last response has been received
  if(!currentContent || !currentContent.value || !responseReady || !responseReady.value) return;
  // Response not ready yet
  responseReady.value = false;
  store.addUserMessage(currentContent.value).then(res => {
    // Response ready
    responseReady.value = true;
  });
  // Empty textarea
  currentContent.value = "";
}
</script>

<template>
  <div class="content">
    <div class="chat">
      <div class="chat-messages">
        <div v-for="(message, index) in messages" :key="index" :class="message.bot ? 'container-botMessage' : 'container-myMessage'">
          <div class="botMessage" v-if="message.bot">
            <p v-if="message.content">{{ message.content }}</p>
            <AppLoader v-else></AppLoader>
          </div>
          <div class="myMessage" v-else>
            <p>{{ message.content }}</p>
          </div>
        </div>
      </div>
      <div class="write-box">
        <textarea id="message" placeholder="Chat with the bot..." v-model="currentContent" v-on:keyup.enter="sendMessage()"></textarea>
        <div id="send-button" @click="sendMessage()">
          <font-awesome-icon class="icon" icon="arrow-up"/>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 75%;
  padding-top: 60px;
}
.chat{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 2% 2% 15px 2%;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 15px;
  background: #9e9e9e;
}
.chat-messages{
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  gap: 15px;
  padding-bottom: 15px;
}
.write-box{
  position: sticky;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
}
textarea{
  width: 100%;
  box-sizing: border-box;
  resize: none;
  outline: none;
  overflow-y: auto;
  min-height: 50px;
  max-height: 100px;
  height: auto;
  font-family: 'Montserrat';
  border-radius: 15px;
  border: #9e0048 solid 1px;
  background: white;
  padding: 10px 40px 10px 20px;
}
#send-button{
  background: #9e0048;
  border-radius: 15px;
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px 10px 0;
  cursor: pointer;
}
.icon{
  color: white;
}
.container-myMessage{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 15px;
  box-sizing: border-box;
}
.myMessage{
  border-radius: 30px;
  background: #9e0048;
  color: white;
  width: auto;
  max-width: 600px;
  word-wrap: break-word;
  position: relative;
}
.myMessage::after{
  content: "";
  position: absolute;
  z-index: 0;
  right: 10px;
  bottom: -10px;
  height: 20px;
  width: 20px;
  border-left: 20px solid #9e0048;
  border-bottom-left-radius: 25px 20px;
  transform: translate(25px, -4px);
}
.container-botMessage{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
}
.botMessage{
  border-radius: 30px;
  background: white;
  width: auto;
  max-width: 600px;
  word-wrap: break-word;
  position: relative;
}
.botMessage::before{
  content: "";
  position: absolute;
  z-index: 0;
  left: -10px;
  bottom: -10px;
  height: 20px;
  width: 20px;
  border-right: 20px solid white;
  border-bottom-right-radius: 25px 20px;
  transform: translate(0, -4px);
}
p{
  padding: 15px;
  margin: 0;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  display: none;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 15px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>