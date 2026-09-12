const COMPANY_CONTEXT = require("../utils/companyContext");

const AI_MODEL = process.env.AI_MODEL || "gemini-2.5-flash";

const FALLBACK_REPLY =
  "Sorry, I'm unable to respond right now. Please try again or contact our team.";

// Common YES Softech questions are answered locally so they are instant,
// reliable, and do not consume Gemini API requests.
const QUICK_REPLIES = [
  {
    patterns: [
      /^hi$/,
      /^hello$/,
      /^hey$/,
      /^hii+$/,
      /^(good )?(morning|afternoon|evening)$/,
    ],
    reply:
      "Hi! 👋 I'm YES AI. I can help you with YES Softech's services, website development, SEO, digital marketing, projects and contact details.",
  },
  {
    patterns: [
      /\bour services\b/,
      /what services/i,
      /services.*provide/i,
      /what do you do/i,
      /services.*offer/i,
    ],
    reply:
      "YES Softech offers Website Design & Development, Web & Mobile App Development, UI/UX, E-commerce, Software Development, Digital Marketing, SEO, Social Media Marketing, PPC and Graphic & Brand Design.",
  },
  {
    patterns: [
      /website development/i,
      /web development/i,
      /website.*design/i,
      /build.*website/i,
      /website.*ban/i,
    ],
    reply:
      "YES Softech builds responsive, SEO-friendly websites including business websites, landing pages, e-commerce sites and custom web solutions, with maintenance and support after launch.",
  },
  {
    patterns: [
      /seo/i,
      /search engine optimization/i,
      /google.*ranking/i,
      /rank.*google/i,
    ],
    reply:
      "Our SEO service focuses on on-page SEO, technical SEO, local SEO and keyword/content direction to improve online visibility and organic traffic.",
  },
  {
    patterns: [
      /digital marketing/i,
      /online marketing/i,
      /social media marketing/i,
      /social media management/i,
      /google ads/i,
      /ppc/i,
      /paid ads/i,
    ],
    reply:
      "YES Softech provides digital marketing support including SEO, social media marketing and management, PPC/paid social, content and creative direction, campaign management and performance optimization.",
  },
  {
    patterns: [
      /start.*project/i,
      /start.*work/i,
      /want.*project/i,
      /hire.*yes softech/i,
      /work with you/i,
      /how.*contact/i,
      /contact.*yes softech/i,
    ],
    reply:
      "You can start a project by using the Contact page or by calling +91 874 0000 977 / +91 895 5553 995. You can also email info@yessoftech.com with your requirement.",
  },
  {
    patterns: [
      /contact/i,
      /phone number/i,
      /mobile number/i,
      /email address/i,
      /email id/i,
    ],
    reply:
      "You can contact YES Softech at +91 874 0000 977 or +91 895 5553 995, or email info@yessoftech.com.",
  },
  {
    patterns: [
      /where.*office/i,
      /office.*location/i,
      /address/i,
      /where.*located/i,
      /location/i,
    ],
    reply:
      "YES Softech's office is in Vaishali Nagar, Jaipur, Rajasthan. The listed office address is A-52, YES Softech, The Oak, Vaishali Nagar, Jaipur, Rajasthan 302001.",
  },
  {
    patterns: [
      /working hours/i,
      /office hours/i,
      /when.*open/i,
      /timing/i,
      /time.*work/i,
    ],
    reply:
      "YES Softech's working hours are Monday to Saturday, 10:00 AM to 6:00 PM.",
  },
  {
    patterns: [
      /about.*yes softech/i,
      /who.*yes softech/i,
      /tell me about.*company/i,
      /company.*about/i,
    ],
    reply:
      "YES Softech is a social media communications and IT services company based in Jaipur. Its mission is \"Your Success is Our Mission\", combining strategy, design, development and digital marketing.",
  },
  {
    patterns: [
      /portfolio/i,
      /our work/i,
      /projects/i,
      /previous work/i,
      /clients/i,
    ],
    reply:
      "YES Softech has worked on projects across branding, social media, e-commerce, restaurant communication, brochures and app promotion. You can explore the Work section of the website for more.",
  },
  {
    patterns: [
      /team/i,
      /employees/i,
      /how many.*team/i,
      /who works/i,
    ],
    reply:
      "YES Softech has a 15+ member team across graphic design, social media, content, strategy, full-stack development and SEO.",
  },
  {
    patterns: [
      /price/i,
      /pricing/i,
      /cost/i,
      /how much/i,
      /budget/i,
    ],
    reply:
      "Pricing depends on the project requirements, so specific pricing is not available in my current information. Please contact the YES Softech team at info@yessoftech.com or +91 874 0000 977 for a quote.",
  },
];

function normalizeMessage(message) {
  return String(message || "")
    .toLowerCase()
    .replace(/[^a-z0-9@.+\s&-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getQuickReply(message) {
  const normalized = normalizeMessage(message);
  if (!normalized) return null;

  for (const item of QUICK_REPLIES) {
    if (item.patterns.some((pattern) => pattern.test(normalized))) {
      return item.reply;
    }
  }

  return null;
}

async function getGeminiReply(message, history = []) {
  const apiKey = process.env.AI_API_KEY;

  if (!apiKey) {
    console.error("AI_API_KEY is not configured on the server.");
    return FALLBACK_REPLY;
  }

  const trimmedHistory = (Array.isArray(history) ? history : [])
    .filter(
      (m) =>
        m &&
        typeof m.content === "string" &&
        (m.role === "user" || m.role === "assistant")
    )
    .slice(-8);

  const contents = [
    ...trimmedHistory.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    })),
    {
      role: "user",
      parts: [{ text: message }],
    },
  ];

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${AI_MODEL}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: COMPANY_CONTEXT }],
          },
          contents,
          generationConfig: {
            maxOutputTokens: 400,
            temperature: 0.7,
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text().catch(() => "");
      console.error("Gemini provider error:", response.status, errText);
      return FALLBACK_REPLY;
    }

    const data = await response.json();

    const reply = data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("")
      .trim();

    return reply || FALLBACK_REPLY;
  } catch (err) {
    console.error("Gemini request failed:", err.message);
    return FALLBACK_REPLY;
  }
}

async function getChatReply(message, history = []) {
  // 1. Common/company questions: answer immediately without Gemini.
  const quickReply = getQuickReply(message);
  if (quickReply) return quickReply;

  // 2. Anything more open-ended: use Gemini for a natural answer.
  return getGeminiReply(message, history);
}

module.exports = { getChatReply, getQuickReply };
