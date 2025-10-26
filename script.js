const data = {
  "proqramlaşdırma": {
    name: "GitHub Copilot (GPT-4-Turbo)",
    description: "Kod yazarkən real vaxt təklifləri verir, sən yazmadan fikrini anlayır və kodu tamamlayır.",
    link: "https://github.com/features/copilot"
  },
  "dil öyrənmək": {
    name: "Duolingo Max (GPT-4)",
    description: "GPT-4 dəstəyi ilə səninlə danışır, səhvlərini düzəldir və dil bacarığını analiz edir.",
    link: "https://www.duolingo.com"
  },
  "dizayn": {
    name: "Uizard (AI-Design Engine)",
    description: "Eskizini dizayna çevirən AI dizayn generatoru — UI/UX üçün ideal alət.",
    link: "https://uizard.io"
  },
  "foto redaktə": {
    name: "Adobe Firefly (Gen-AI)",
    description: "AI əsaslı vizual redaktor — fon dəyiş, obyekt sil və təsviri mətndən yarat.",
    link: "https://firefly.adobe.com"
  },
  "musiqi": {
    name: "Suno AI (v3)",
    description: "Sadəcə mətn yaz, Suno sənə vokallı, instrumental və janr seçimi ilə mahnı yaratsın.",
    link: "https://suno.ai"
  },
  "video": {
    name: "Runway ML (Gen-2)",
    description: "AI video montaj — səhnə dəyiş, fon sil və real zaman effektlər əlavə et.",
    link: "https://runwayml.com"
  },
  "marketinq": {
    name: "Copy.ai (2025)",
    description: "Reklam, sosial media və SEO mətnlərini avtomatik yaradır. Marketoloqlar üçün ideal AI köməkçi.",
    link: "https://www.copy.ai"
  },
  "söhbət": {
    name: "ChatGPT (GPT-5)",
    description: "Ən populyar söhbət AI platforması — ideya, kod, yazı və analiz üçün çoxistiqamətli köməkçi.",
    link: "https://chat.openai.com"
  },
  "şəkil": {
    name: "Gemini (2.5)",
    description: "Gemini şəkil, mətn və səs kimi multimodal məlumatları eyni anda analiz edir. Təsvirlərdən anlayış çıxara bilir və vizual cavablar yaradır.",
    link: "https://gemini.google.com"
  },
  "multimodal": {
    name: "Gemini (2.5)",
    description: "Gemini Google-un multimodal AI modelidir — mətn, şəkil, səs və videonu birlikdə anlayır və cavab yaradır.",
    link: "https://gemini.google.com"
  }
};

document.getElementById("getAdvice").addEventListener("click", () => {
  const topic = document.getElementById("topic").value.trim().toLowerCase();
  const resultDiv = document.getElementById("result");
  const aiName = document.getElementById("aiName");
  const aiDescription = document.getElementById("aiDescription");
  const aiLink = document.getElementById("aiLink");
  const marketifyText = document.getElementById("marketifyText");

  resultDiv.classList.remove("hidden");

  if (data[topic]) {
    aiName.textContent = data[topic].name;
    aiDescription.textContent = data[topic].description;
    aiLink.href = data[topic].link;
    aiLink.style.display = "inline-block";
  } else {
    aiName.textContent = "😅 Üzr istəyirəm...";
    aiDescription.textContent = "Bu sahə üzrə məlumatım yoxdur. Başqa bir mövzu yoxla 🙂";
    aiLink.style.display = "none";
  }
  marketifyText.classList.remove("hidden");


  resultDiv.style.animation = "fadeIn 0.8s ease";
});
