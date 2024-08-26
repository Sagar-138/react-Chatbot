// src/handlers/ActionProvider.js
import { fetchChatbotData } from '../services/api';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async greet() {
    // console.log('greet method called');
    const data = await fetchChatbotData();
    // console.log('Data fetched:', data);

    if (data) {
      const randomGreeting = data.greetings[Math.floor(Math.random() * data.greetings.length)];
      // console.log('Random greeting selected:', randomGreeting);

      const greetingMessage = this.createChatBotMessage(randomGreeting);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, greetingMessage],
      }));
    } else {
      console.log("Failed to fetch data");

      const errorMessage = this.createChatBotMessage("Sorry, I'm unable to retrieve data right now.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
  

  async handleBasicQuestions(message) {
    // console.log('handleBasicQuestions method called with message:', message);
    const data = await fetchChatbotData();
    // console.log('Data fetched:', data);

    if (data) {
      let response;

      if (message.includes("how are you")) {
        response = data.responses.how_are_you;
      } else if (message.includes("your name")) {
        response = data.responses.what_is_your_name;
      } else if (message.includes("thank you")) {
        response = data.responses.thank_you;
      } else if (message.includes("what is acupuncture")) {
        response = data.responses.what_is_acupuncture;
      } else if (message.includes("what is therapy")) {
        response = data.responses.what_is_therapy;
      } else if (message.includes("what is herbal medicine")) {
        response = data.responses.what_is_herbal_medicine;
      } else if (message.includes("what are chinese therapies")) {
        response = data.responses.what_are_chinese_therapies;
      } else if (message.includes("who is dr christine shen")) {
        response = data.responses.who_is_dr_christine_shen;
      } else if (message.includes("where are dr christine shen s clinics")) {
        response = data.responses.where_are_dr_christine_shen_s_clinics;
      } else if (message.includes("what services does dr christine shen provide")) {
        response = data.responses.what_services_does_dr_christine_shen_provide;
      } else if (message.includes("what is dr christine shen s background")) {
        response = data.responses.what_is_dr_christine_shen_s_background;
      } else if (message.includes("what is orthopaedic acupuncture")) {
        response = data.responses.what_is_orthopaedic_acupuncture;
      } else if (message.includes("what is the best therapy for frozen shoulder")) {
        response = data.responses.what_is_the_best_therapy_for_frozen_shoulder;
      } else if (message.includes("how can acupuncture help with menstrual pain")) {
        response = data.responses.how_can_acupuncture_help_with_menstrual_pain;
      } else if (message.includes("what therapies are effective for digestive bloating")) {
        response = data.responses.what_therapies_are_effective_for_digestive_bloating;
      } else if (message.includes("how can cosmetic acupuncture improve skin")) {
        response = data.responses.how_can_cosmetic_acupuncture_improve_skin;
      } else if (message.includes("what is involved in stress management with acupuncture")) {
        response = data.responses.what_is_involved_in_stress_management_with_acupuncture;
      } else if (message.includes("how can acupuncture support fertility")) {
        response = data.responses.how_can_acupuncture_support_fertility;
      } else if (message.includes("what therapies are used for high blood pressure")) {
        response = data.responses.what_therapies_are_used_for_high_blood_pressure;
      } else if (message.includes("how is sound healing beneficial")) {
        response = data.responses.how_is_sound_healing_beneficial;
      } else if (message.includes("what is guasha and how does it help")) {
        response = data.responses.what_is_guasha_and_how_does_it_help;
      } else if (message.includes("what are the benefits of tcm for skin conditions")) {
        response = data.responses.what_are_the_benefits_of_tcm_for_skin_conditions;
      } else if (message.includes("contact information")) {
        response = data.responses.contact_information;
      } else {
        response = data.responses.fallback;
      }

      // console.log('Response:', response);

      const responseMessage = this.createChatBotMessage(response);
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, responseMessage],
      }));
    } else {
      console.log("Failed to fetch data");

      const errorMessage = this.createChatBotMessage("Sorry, I'm unable to retrieve data right now.");
      this.setState((prev) => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
      }));
    }
  }
  // Existing methods...

  async handleBookingQuestions(message) {
    console.log('handleBookingQuestions method called with message:', message);

    const bookingMessage = this.createChatBotMessage(
      "To book an appointment, please visit (https://www.rainbowmedicine.com.au/en/booking-services). If you need further assistance, feel free to ask!"
    );
    
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, bookingMessage],
    }));
  }
}



export default ActionProvider;
