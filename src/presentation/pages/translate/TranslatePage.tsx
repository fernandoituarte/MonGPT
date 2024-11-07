import { useState } from "react";
import { GptMessage, MyMessage, TypingLoader, TextMessageBoxSelect } from '../../components';
import { translateTextUseCase } from '../../../core/use-cases';

interface Message {
  text: string;
  isGpt: boolean;
}

const languages = [
  { id: "allemand", text: "Allemand" },
  { id: "arabe", text: "Arabe" },
  { id: "bengali", text: "Bengali" },
  { id: "espagnol", text: "Espagnol" },
  { id: "hindi", text: "Hindi" },
  { id: "anglais", text: "Anglais" },
  { id: "japonais", text: "Japonais" },
  { id: "mandarin", text: "Mandarin" },
  { id: "portugais", text: "Portugais" },
  { id: "russe", text: "Russe" },
];

export const TranslatePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string, selectedOption: string) => {
    setIsLoading(true);

    const newMessage = `Traduis : "${ text }" en langue ${ selectedOption }`;
    setMessages((prev) => [...prev, { text: newMessage, isGpt: false }]);

    const { ok, message } = await translateTextUseCase( text, selectedOption )
    setIsLoading(false);
    if ( !ok ) {
      return alert(message);
    }

    setMessages((prev) => [...prev, { text: message, isGpt: true }]);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenue */}
          <GptMessage text="Que veux-tu que je traduise aujourd'hui ?"/>

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text={ message.text } />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBoxSelect
        onSendMessage={handlePost}
        placeholder="Écris ici ce que tu souhaites"
        options={ languages }
      />
    </div>
  );
};
