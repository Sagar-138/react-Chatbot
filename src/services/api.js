// src/services/api.js
export const fetchChatbotData = async () => {
    try {
      const response = await fetch('http://visual-chat.com/reactchatbot/data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch chatbot data:', error);
      return null;
    }
  };
  