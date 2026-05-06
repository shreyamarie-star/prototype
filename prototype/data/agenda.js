// ═══════════════════════════════════════════════════════════════
// APOS 2026 AGENDA DATA
// ─────────────────────────────────────────────────────────────
// To swap content for the final 2026 agenda, edit this file only.
// Sponsor logos: drop image files into assets/logos/ and reference
// by path. If `logoUrl` is null, a typographic mark is rendered.
// ═══════════════════════════════════════════════════════════════

window.AGENDA_META = {
  title: "Agenda",
  eyebrow: "APOS 2026",
  dates: "June 16–18, 2026",
  venue: "The Mulia, Bali",
  organizer: "Media Partners Asia",
  status: "Draft — subject to change"
};

window.AGENDA_DAYS = [
  { id: "day0", label: "Day 0", date: "June 16", weekday: "Tuesday" },
  { id: "day1", label: "Day 1", date: "June 17", weekday: "Wednesday" },
  { id: "day2", label: "Day 2", date: "June 18", weekday: "Thursday" }
];

// Logo registry — wordmarks rendered as type until you drop in real files.
// Set `src` to a relative image path to use a real logo.
window.SPONSORS = {
  jiostar:    { name: "JioStar",    src: "assets/logos/jiostar.png" },
  jio:        { name: "Jio",        src: null },
  google:     { name: "Google",     src: null },
  netflix:    { name: "Netflix",    src: null },
  telkomsel:  { name: "Telkomsel",  src: null },
  aws:        { name: "AWS",        src: null },
  irdeto:     { name: "Irdeto",     src: null }
};

window.AGENDA = {
  day0: {
    sessions: [
      {
        time: "09:00 – 13:00",
        title: "AVIA Policy Roundtable",
        titleUrl: "https://avia.org/all_events/policy-roundtable-apos/",
        type: "presentation",
        note: "For AVIA Members Only · Reach out to events@avia.org to attend",
        speakers: []
      },
      {
        time: "14:00 – 17:00",
        title: "AVIA State of Piracy Roundtable",
        titleUrl: "https://avia.org/all_events/piracy-roundtable-apos/",
        type: "presentation",
        note: "Reach out to events@avia.org to attend",
        speakers: []
      },
      {
        time: "15:00 – 17:30",
        title: "APOS CEO Forum",
        type: "ceo-forum",
        note: "By invitation only",
        sponsor: { label: "Powered by", id: "jiostar" },
        speakers: []
      },
      {
        time: "18:00 onwards",
        title: "Welcome Reception",
        type: "networking",
        sponsor: { label: "Hosted by", id: "netflix" },
        speakers: []
      }
    ]
  },

  day1: {
    morning: [
      { time: "08:20 – 08:45", title: "Asia Reset: Engagement, Economics & Value Creation", type: "keynote", note: "Opening address",
        speakers: [{ name: "Vivek Couto", role: "CEO & Executive Director", company: "Media Partners Asia", url: "https://aposlive.com/speaker/vivek-couto" }] },
      { time: "08:45 – 09:05", title: "The Intelligent Enterprise", type: "fireside",
        speakers: [{ name: "Thomas Tull", role: "Co-Chairman", company: "TWG Global", url: "https://aposlive.com/speaker/thomas-tull" }] },
      { time: "09:05 – 09:30", title: "Anime Goes 360: Building a Global Fandom Engine", type: "fireside",
        speakers: [{ name: "Rahul Purini", role: "President", company: "Crunchyroll", url: "https://aposlive.com/speaker/rahul-purini" }] },
      { time: "09:30 – 09:55", title: "Redefining Scale & Success", type: "fireside",
        speakers: [
          { name: "Kevin Vaz", role: "CEO – Entertainment", company: "JioStar", url: "https://aposlive.com/speaker/kevin-vaz" },
          { name: "Ishan Chatterjee", role: "CEO – Sports", company: "JioStar", url: "https://aposlive.com/speaker/ishan-chatterjee" }
        ] },
      { time: "09:55 – 10:20", title: "Creativity Fuels Culture, Culture Drives Commerce", type: "fireside",
        speakers: [
          { name: "Isaac Bess", role: "MD Product Partnerships", company: "TikTok", url: "https://aposlive.com/speaker/isaac-bess" },
          { name: "Christie Basil", role: "Founder", company: "Atvezzo & By Christie Basil", url: "https://aposlive.com/speaker/christie-basil" },
          { name: "Kenneth Cia", role: "Founder", company: "Arutala Coffee", url: "https://aposlive.com/speaker/kenneth-cia" }
        ] },
      { time: "10:20 – 10:40", title: "Micro Dramas, Mega Economics", type: "fireside",
        speakers: [{ name: "Joey Jia", role: "Founder & CEO", company: "ReelShort", url: "https://aposlive.com/speaker/joey-jia" }] },
      { time: "10:40 – 10:55", title: "Tea & Coffee", type: "networking" },
      { time: "10:55 – 11:20", title: "Beyond the Screen: The Business of Living the Story", type: "fireside",
        speakers: [{ name: "Simon Robinson", role: "President", company: "Warner Bros. Discovery", url: "https://aposlive.com/speaker/simon-robinson" }] },
      { time: "11:20 – 11:40", title: "Cricket Without Borders", type: "fireside",
        speakers: [{ name: "Sanjog Gupta", role: "CEO", company: "International Cricket Council", url: "https://aposlive.com/speaker/sanjog-gupta" }] },
      { time: "11:40 – 12:00", title: "The Global Game: Fans, Innovation, Enforcement", type: "fireside",
        speakers: [{ name: "Javier Tebas", role: "President", company: "LaLiga", url: "https://aposlive.com/speaker/javier-tebas" }] },
      { time: "12:00 – 12:20", title: "Amazon Prime Video & Advertising", type: "fireside",
        speakers: [] },
      { time: "12:20 – 12:40", title: "Inside View: The Future of Streaming in Greater Southeast Asia", type: "fireside",
        speakers: [{ name: "Janice Lee", role: "CEO", company: "Viu & PCCW Media Group", url: "https://aposlive.com/speaker/janice-lee" }] }
    ],
    afternoon: [
      { time: "12:40 – 13:00", title: "Streaming Asia: Partnerships that Scale & Travel", type: "fireside",
        speakers: [
          { name: "James Gibbons", role: "President APAC", company: "Warner Bros. Discovery", url: "https://aposlive.com/speaker/james-gibbons" },
          { name: "Julie Choi", role: "CEO", company: "TVING", url: "https://aposlive.com/speaker/julie-choi" }
        ] },
      { time: "13:00 – 13:20", title: "AI, Chinese Stories, Microdramas & The New Asia Map", type: "fireside",
        speakers: [{ name: "Yang Xianghua", role: "President", company: "iQIYI", url: "https://aposlive.com/speaker/yang-xianghua" }] },
      { time: "13:20 – 14:20", title: "Lunch", type: "networking" },
      { time: "14:20 – 14:40", title: "Creators, Commerce, CTV: Inside India's Video Boom", type: "fireside",
        speakers: [{ name: "Gunjan Soni", role: "Country MD", company: "YouTube India", url: "https://aposlive.com/speaker/gunjan-soni" }] },
      { time: "14:40 – 15:10", title: "The New Creative Pipeline: AI, IP & Human Craft", type: "panel",
        speakers: [
          { name: "Andy Serkis", role: "Actor / Director / Producer", company: "", url: "https://aposlive.com/speaker/andy-serkis" },
          { name: "Jon Zepp", role: "MD Entertainment Content & Platforms", company: "Google", url: "https://aposlive.com/speaker/jon-zepp" },
          { name: "Josh Nelson Youssef", role: "Director / Writer", company: "", url: "https://aposlive.com/speaker/josh-nelson-youssef" }
        ] },
      { time: "15:10 – 15:30", title: "Brands, Bluey & The Next Bet", type: "fireside",
        speakers: [{ name: "Zai Bennett", role: "CEO & Chief Creative Officer", company: "BBC Studios Global Content", url: "https://aposlive.com/speaker/zai-bennett" }] },
      { time: "15:30 – 16:30", title: "Japan: Streaming, Distribution & Storytelling", type: "fireside",
        speakers: [
          { name: "Sam Yousif", role: "Managing Director", company: "ampd" },
          { name: "Yoichi Iwaki", role: "President & Representative Director", company: "J:COM", url: "https://aposlive.com/speaker/yoichi-iwaki" },
          { name: "Toshi Honda", role: "COO", company: "U-Next", url: "https://aposlive.com/speaker/toshi-honda" }
        ] },
      { time: "16:30 – 16:45", title: "Tea & Coffee", type: "networking" },
      { time: "16:45 – 17:10", title: "The Sooka Story & The Modern Streaming Back Office", type: "fireside",
        speakers: [
          { name: "Euan Smith", role: "Group CEO", company: "Astro", url: "https://aposlive.com/speaker/euan-smith" },
          { name: "Vijay Sajja", role: "Founder & CEO", company: "Evergent", url: "https://aposlive.com/speaker/vijay-sajja" }
        ] },
      { time: "17:10 – 17:30", title: "MOLOCO TBD", type: "fireside",
        speakers: [] },
      { time: "17:30 – 18:00", title: "The Fight For Value: A Global Frontline On Piracy", type: "panel",
        speakers: [
          { name: "Javier Tebas", role: "President", company: "LaLiga", url: "https://aposlive.com/speaker/javier-tebas" },
          { name: "Larissa Knapp", role: "EVP & Chief Content Protection Officer", company: "MPA", url: "https://aposlive.com/speaker/larissa-knapp" },
          { name: "Guillermo Rodriguez", role: "Director, Live Content Protection", company: "MPA", url: "https://aposlive.com/speaker/guillermo-rodriguez" },
          { name: "Diego Dario", role: "", company: "UEFA" },
          { name: "Mike Kerr", role: "Managing Director Asia Pacific", company: "beIN" }
        ] },
      { time: "18:00 – 18:05", title: "Day 1 Closing Remarks", type: "keynote",
        speakers: [{ name: "Vivek Couto", role: "CEO & Executive Director", company: "Media Partners Asia", url: "https://aposlive.com/speaker/vivek-couto" }] }
    ],
    evening: []
  },

  day2: {
    morning: [
      { time: "09:00 – 09:30", title: "Originals & Micro Dramas: Inside The New Production Stack", type: "panel",
        speakers: [
          { name: "Timothy Oh", role: "General Manager", company: "COL Group International", url: "https://aposlive.com/speaker/timothy-oh" },
          { name: "Beatrice Lee", role: "CEO", company: "ROCK Networks", url: "https://aposlive.com/speaker/beatrice-lee" },
          { name: "Karen Seah", role: "Founder & CEO", company: "Refinery Media", url: "https://aposlive.com/speaker/karen-seah" }
        ] },
      { time: "09:30 – 09:50", title: "India's Microdrama Boom", type: "fireside",
        speakers: [{ name: "Saurabh Pandey", role: "Founder & CEO", company: "Story TV", url: "https://aposlive.com/speaker/saurabh-pandey" }] },
      { time: "09:50 – 10:10", title: "India Streaming: The Product View", type: "fireside",
        speakers: [{ name: "Bharath Ram", role: "Chief Product Officer", company: "JioStar", url: "https://aposlive.com/speaker/bharath-ram" }] },
      { time: "10:10 – 10:25", title: "Tea & Coffee", type: "networking" },
      { time: "10:25 – 10:45", title: "From Network To Narrative: Thailand, Streaming & Microdramas", type: "fireside",
        speakers: [{ name: "Lertchai Kodsup", role: "Chief Mobile Business Officer", company: "AIS", url: "https://aposlive.com/speaker/lertchai-kodsup" }] },
      { time: "10:45 – 11:05", title: "Building Indonesia's Sovereign AI", type: "fireside",
        speakers: [{ name: "Vikram Sinha", role: "President Director & CEO", company: "Indosat Ooredoo Hutchison", url: "https://aposlive.com/speaker/vikram-sinha" }] },
      { time: "11:05 – 11:45", title: "Indonesia Streaming in Focus: Audience, Reach, Commerce", type: "fireside", note: "1-1 Firesides",
        speakers: [
          { name: "Sutanto Hartono", role: "MD Emtek; CEO SCMA & Vidio", company: "", url: "https://aposlive.com/speaker/sutanto-hartono" },
          { name: "Angela Tanoesoedibjo", role: "Co-CEO", company: "MNC Group", url: "https://aposlive.com/speaker/angela-tanoesoedibjo" }
        ] },
      { time: "11:45 – 12:05", title: "Beyond the Game: Building the Modern Sports Fan", type: "panel",
        speakers: [
          { name: "Tom Thirlwall", role: "Co-Founder & CEO", company: "COPA90", url: "https://aposlive.com/speaker/tom-thirlwall" },
          { name: "Ameeth Sankaran", role: "CEO", company: "Religion of Sports", url: "https://aposlive.com/speaker/ameeth-sankaran" },
          { name: "Nikhil Bahel", role: "Managing Partner", company: "Elysian Park Ventures", url: "https://aposlive.com/speaker/nikhil-bahel" }
        ] },
      { time: "12:05 – 12:25", title: "India's Dialect-Based OTT Story", type: "fireside",
        speakers: [
          { name: "Vinay Singhal", role: "CEO & Co-Founder", company: "STAGE", url: "https://aposlive.com/speaker/vinay-singhal" },
          { name: "Karthik Reddy", role: "Co-founder & Managing Partner", company: "Blume Ventures", url: "https://aposlive.com/speaker/karthik-reddy" }
        ] },
      { time: "12:25 – 12:45", title: "Born From K-Pop, Built For Global Fandoms", type: "fireside",
        speakers: [{ name: "Brian Nam", role: "CEO & Co-Founder", company: "DIVE Studios", url: "https://aposlive.com/speaker/brian-nam" }] }
    ],
    afternoon: [
      { time: "12:45 – 14:00", title: "Lunch", type: "networking" },
      { time: "14:00 – 14:15", title: "Asia Streaming Content Insights", type: "presentation",
        speakers: [{ name: "Dhivya T", role: "Head of Insights", company: "ampd & Media Partners Asia" }] },
      { time: "14:15 – 14:35", title: "Indonesia At Scale", type: "fireside",
        speakers: [{ name: "Manoj Punjabi", role: "CEO", company: "MD Entertainment", url: "https://aposlive.com/speaker/manoj-punjabi" }] },
      { time: "14:35 – 14:55", title: "The Philippines Moment", type: "fireside",
        speakers: [{ name: "Lino Cayetano", role: "Co-Founder, President & CEO", company: "Rein Entertainment", url: "https://aposlive.com/speaker/lino-cayetano" }] },
      { time: "14:55 – 15:30", title: "Why Thai Stories Travel", type: "panel",
        speakers: [
          { name: "Ruedee \u201CDeedee\u201D Pholthaweechai", role: "Head of Content", company: "True Corporation" },
          { name: "Chris Lowenstein", role: "Founder", company: "Living Films" },
          { name: "Banjong Pisanthanakun", role: "Writer & Director", company: "" }
        ] },
      { time: "15:30 – 15:45", title: "Tea & Coffee", type: "networking" },
      { time: "15:45 – 16:10", title: "AI x Storytelling", type: "fireside",
        speakers: [
          { name: "Guy Piekarz", role: "CEO", company: "Panjaya", url: "https://aposlive.com/speaker/guy-piekarz" }
        ] },
      { time: "16:10 – 16:35", title: "AI x Storytelling", type: "fireside",
        speakers: [
          { name: "Sharad Devarajan", role: "Co-Founder", company: "FaiBLE Media", url: "https://aposlive.com/speaker/sharad-devarajan" },
          { name: "Mark Sagar", role: "Chief AI Officer", company: "FaiBLE Media", url: "https://aposlive.com/speaker/mark-sagar" }
        ] },
      { time: "16:35 – 16:55", title: "AI x Storytelling", type: "fireside",
        speakers: [
          { name: "Cecilia Chen", role: "Co-Founder & CEO", company: "Utopai Studios" },
          { name: "Teddy Zee", role: "Senior Advisor", company: "Utopai Studios" }
        ] },
      { time: "16:55 – 17:20", title: "AI x Storytelling", type: "fireside",
        speakers: [
          { name: "Todd Terrazas", role: "Co-Founder & CEO", company: "FBRC.ai", url: "https://aposlive.com/speaker/todd-terrazas" },
          { name: "Stephan Bugaj", role: "SVP GenAI Content & Technology", company: "JioStar", url: "https://aposlive.com/speaker/stephan-bugaj" }
        ] },
      { time: "17:20 – 17:50", title: "AI x Storytelling", type: "fireside",
        speakers: [
          { name: "Melody Hou", role: "Head of Global Partnerships", company: "Kling AI", url: "https://aposlive.com/speaker/melody-hou" }
        ] }
    ],
    evening: []
  }
};
