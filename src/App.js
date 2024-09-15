import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [conversation, setConversation] = useState([]);
  const chatEndRef = useRef(null);

  const chatbotResponse = (input) => {
    input = input.toLowerCase();

    if (/(hi|hello)/i.test(input)) {
      return `My name is Cipher, how may I help you today?`;
    }

    if (/(bye|thanks)/i.test(input)) {
      return `Thanks for reaching out to me`;
    }

    if (/(contact|how do i reach out to)/i.test(input)) {
      return `You can reach Srikar on his phone number +91 8332961277, or his email kodisrikar@gmail.com`;
    }

    if (/(your name|who are you|what is your name|tell me about yourself)/i.test(input)) {
      return `My name is Cipher.
      

I am the personal assistant to Srikar Kodi.

About Srikar:

- Age: 26 years old
- Hometown: Visakhapatnam, Andhra Pradesh
- Current Position: Application Developer at Vavili Technologies, an early-stage startup

Experience:

With over 2.4 years of diverse experience, Srikar has worked in various domains including:
- Quality Assurance
- Database Development
- Backend APIs
- Full Stack Web Development
- Data Engineering

Aspirations:

Srikar is an aspiring AI developer with a mission to create personal assistant chatbots for everyone—imagine a personal assistant as advanced as JARVIS from Iron Man, but even cooler!

Current Situation:

While Srikar is well-qualified for advanced roles in AI, he is currently seeking a data-related job due to the low-paying nature of his current position, which doesn’t sufficiently cover his expenses.`;
    }

    if (/(experience|work history|work experience|job)/i.test(input)) {
      return `Srikar's Work Experience

Application Developer at Vavili Technologies  
May 2023 - Current

- Full-Stack Web Applications: Developed and maintained full-stack web applications using Python Flask for the backend and React JS for the frontend.
- Rule-Based Chatbot: Created a rule-based chatbot using Python and NLTK to handle specific user queries and automate interactions.
- Automated Attendance Tracking: Developed an automated system to streamline the monitoring and tracking of employee attendance.
- Data Pipelines: Managed and optimized data pipelines by implementing robust ETL (Extract, Transform, Load) processes for improved analytics and reporting.

Trainee Software Engineer at ValueLabs  
Jan 2022 - Feb 2023

- Quality Assurance: Worked closely with the QA team to test web and mobile products using Python and Selenium, ensuring high quality and functionality.
- API Testing: Conducted comprehensive API testing with Python, validating API endpoints and ensuring reliable data exchange.`;
    }

    if (/(skills|expertise|what are you good at)/i.test(input)) {
      return `Srikar's Skills

- Programming Languages: Python, JavaScript
- Web Development: React JS, Flask
- Database: SQL
- Tools & Technologies: Power BI, NLTK, Machine Learning, Data Analysis

Srikar has developed a strong skill set in both front-end and back-end development, as well as in data analysis and machine learning.`;
    }

    if (/(projects|what projects have you worked on)/i.test(input)) {
      return `Srikar's Projects

1. Dataset Translator: This is a Python-based GUI application that allows users to upload a dataset (in .csv or .xlsx format) and translate its contents into a selected target language. The application uses the googletrans library for translation and openpyxl for handling Excel files.
2. Data Engineering with Python: This project demonstrates how to efficiently read and clean CSV data using Pandas, transforming it to meet specific data model requirements. It then showcases the use of the psycopg2 module to create and manage a PostgreSQL database, including inserting the cleaned data into the database for further use.

You can visit his GitHub profile to view his projects <a href="https://github.com/Namidok" target="_blank" rel="noopener noreferrer">github.com/Namidok</a>`;
    }

    return "I'm not sure how to answer that. Could you please ask about Srikar's work experience, skills, or projects?";
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    const newConversation = [...conversation, { sender: 'user', text: userInput }];
    const reply = chatbotResponse(userInput);

    setConversation([...newConversation, { sender: 'cipher', text: reply }]);
    setUserInput('');
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation]);

  return (
    <div className="container">
      <h1 className="title">Chat with Cipher</h1>

      <div className="chatbox">
        {conversation.map((message, index) => (
          <div key={index} className={message.sender === 'user' ? 'userMessage' : 'cipherMessage'}>
            <div dangerouslySetInnerHTML={{ __html: message.text }} />
          </div>
        ))}
        <div ref={chatEndRef} /> {/* Empty div to help with scrolling */}
      </div>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask Cipher..."
          className="input"
        />
        <button type="submit" className="button">Send</button>
      </form>
    </div>
  );
}

export default App;
