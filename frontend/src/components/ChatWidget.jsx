import { useEffect, useRef, useState } from "react";
import { sendChatMessage } from "../services/chatService";

const QUICK_QUESTIONS = [
  { key: "services", label: "Our Services" },
  { key: "website", label: "Website Development" },
  { key: "seo", label: "SEO & Marketing" },
  { key: "project", label: "Start a Project" },
];

// These button answers are available directly in the browser.
// Clicking them does not call Gemini or wait for the backend.
const LOCAL_REPLIES = {
  services:
    "YES Softech offers Website Design & Development, Web & Mobile App Development, UI/UX, E-commerce, Software Development, Digital Marketing, SEO, Social Media Marketing, PPC and Graphic & Brand Design.",
  website:
    "YES Softech builds responsive, SEO-friendly websites including business websites, landing pages, e-commerce sites and custom web solutions, with maintenance and support after launch.",
  seo:
    "Our SEO and digital marketing services include on-page SEO, technical SEO, local SEO, social media marketing and PPC/paid campaigns to improve online visibility and reach.",
  project:
    "You can start a project by using the Contact page or by calling +91 874 0000 977 / +91 895 5553 995. You can also email info@yessoftech.com with your requirement.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! 👋 I'm YES AI. I can help you explore YES Softech's services and answer your questions.",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const openChat = () => setOpen(true);
  const closeChat = () => setOpen(false);

  const pushMessage = (role, text) =>
    setMessages((m) => [...m, { role, text }]);

  const askBackend = async (question) => {
    setTyping(true);
    try {
      const history = messages.slice(-8).map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.text,
      }));
      const { data } = await sendChatMessage(question, history);
      pushMessage(
        "bot",
        data?.reply ||
          "Sorry, I'm unable to respond right now. Please try again or contact our team."
      );
    } catch {
      pushMessage(
        "bot",
        "Sorry, I'm unable to respond right now. Please try again or contact our team."
      );
    } finally {
      setTyping(false);
    }
  };

  const handleQuick = (q) => {
    openChat();
    pushMessage("user", q.label);

    // Instant local response — no API/Gemini call for common commands.
    const reply = LOCAL_REPLIES[q.key];
    if (reply) {
      pushMessage("bot", reply);
      return;
    }

    askBackend(q.label);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = input.trim();
    if (!q || typing) return;
    pushMessage("user", q);
    setInput("");
    askBackend(q);
  };

  return (
    <>
      <button
        className="ys-ai-launcher"
        id="ysAiLauncher"
        aria-label="Open YES AI Assistant"
        onClick={openChat}
      >
        <span className="ys-ai-spark">✦</span>
        <span>YES AI</span>
      </button>

      <div
        className={`ys-ai-panel${open ? " open" : ""}`}
        id="ysAiPanel"
        aria-hidden={!open}
      >
        <div className="ys-ai-head">
          <div>
            <strong>YES AI Assistant</strong>
            <small>Ask about YES Softech</small>
          </div>
          <button
            id="ysAiClose"
            aria-label="Close AI Assistant"
            onClick={closeChat}
          >
            ×
          </button>
        </div>

        <div className="ys-ai-messages" id="ysAiMessages" ref={messagesRef}>
          {messages.map((m, i) => (
            <div key={i} className={`ys-ai-msg ${m.role}`}>
              {m.text}
            </div>
          ))}
          {typing && <div className="ys-ai-msg bot">Typing…</div>}
        </div>

        <div className="ys-ai-quick">
          {QUICK_QUESTIONS.map((q) => (
            <button
              key={q.key}
              data-ai={q.key}
              onClick={() => handleQuick(q)}
              disabled={typing}
            >
              {q.label}
            </button>
          ))}
        </div>

        <form className="ys-ai-form" id="ysAiForm" onSubmit={handleSubmit}>
          <input
            id="ysAiInput"
            autoComplete="off"
            placeholder="Ask something..."
            aria-label="Ask YES AI"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" aria-label="Send" disabled={typing}>
            ➤
          </button>
        </form>

        <small className="ys-ai-note">
          YES AI Assistant • Powered by YES Softech
        </small>
      </div>
    </>
  );
}
