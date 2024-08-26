// src/handlers/ActionProvider.js
import { fetchChatbotData } from '../services/api';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async greet() {
    const data = await fetchChatbotData();
    if (data) {
      const randomGreeting = data.greetings[Math.floor(Math.random() * data.greetings.length)];
      const greetingMessage = this.createChatBotMessage(randomGreeting);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, greetingMessage],
      }));
    } else {
      const errorMessage = this.createChatBotMessage("Sorry, I'm unable to retrieve data right now.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }

  async handleBasicQuestions(message) {
    const data = await fetchChatbotData();
    if (data) {
      let response;

      if (message.includes("how are you")) {
        response = data.responses.how_are_you;
      } else if (message.includes("your name")) {
        response = data.responses.what_is_your_name;
      } else {
        response = data.fallback;
      }

      const responseMessage = this.createChatBotMessage(response);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, responseMessage],
      }));
    } else {
      const errorMessage = this.createChatBotMessage("Sorry, I'm unable to retrieve data right now.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
}

export default ActionProvider;
