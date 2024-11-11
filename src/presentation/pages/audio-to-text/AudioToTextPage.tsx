import { useState } from "react";
import {
  GptMessage,
  MyMessage,
  TypingLoader,
  TextMessageBoxFile,
} from "../../components";
import { audioToTextUseCase } from "../../../core/use-cases";

interface Message {
  text: string;
  isGpt: boolean;
}

export const AudioToTextPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async (text: string, audioFile: File) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text: text, isGpt: false }]);

    const resp = await audioToTextUseCase(audioFile, text);
    setIsLoading(false);

    if (!resp) return;

    const gptMessage = `
      Transcription : 
      Durée : ${Math.round(resp.duration)} secondes
      Le texte est :
      
      ${resp.text}
    `

    setMessages((prev) => [...prev, { text: gptMessage, isGpt: true }]);

    for (const segment of resp.segments) {
      const segmentMessage = `
      __De ${Math.round(segment.start)} à ${Math.round(segment.end)} secondes :__
      ${segment.text}
      `;

      setMessages((prev) => [...prev, { text: segmentMessage, isGpt: true }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          {/* Bienvenue */}
          <GptMessage text="Bonjour, quel audio veux-tu générer aujourd'hui ?" />

          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text={message.text} />
            ) : (
              <MyMessage
                key={index}
                text={
                  message.text === "" ? "Transcrire l'audio" : message.text
                }
              />
            )
          )}

          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader />
            </div>
          )}
        </div>
      </div>

      <TextMessageBoxFile
        onSendMessage={handlePost}
        placeholder="Écris ici ce que tu souhaites"
        disableCorrections
        accept="audio/*"
      />
    </div>
  );
};
