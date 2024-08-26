// src/MessageParser.js
class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Handle greetings
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
      this.actionProvider.greet();
    }

    if (
      lowerCaseMessage.includes("booking") ||
      lowerCaseMessage.includes("appointment") ||
      lowerCaseMessage.includes("book appointment")
    ) {
      console.log('Booking or appointment question detected');
      this.actionProvider.handleBookingQuestions(lowerCaseMessage);
    }
  
    // Handle various questions
    if (lowerCaseMessage.includes("how are you")) {
      // console.log("detected")
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("your name")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("thank you")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is acupuncture")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is therapy")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is herbal medicine")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what are chinese therapies")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("who is dr christine shen")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("where are dr christine shen's clinics")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what services does dr christine shen provide")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is dr christine shen's background")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is orthopaedic acupuncture")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is the best therapy for frozen shoulder")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("how can acupuncture help with menstrual pain")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what therapies are effective for digestive bloating")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("how can cosmetic acupuncture improve skin")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is involved in stress management with acupuncture")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("how can acupuncture support fertility")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what therapies are used for high blood pressure")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("how is sound healing beneficial")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what is guasha and how does it help")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("what are the benefits of tcm for skin conditions")) {
      this.actionProvider.handleBasicQuestions(message);
    } else if (lowerCaseMessage.includes("contact information")) {
    this.actionProvider.handleBasicQuestions(message);
  }

    // Handle symptom checker (if implemented)
    if (lowerCaseMessage.includes("symptom")) {
      this.actionProvider.handleSymptomChecker();
    }
  }
}

export default MessageParser;
