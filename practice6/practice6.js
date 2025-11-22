const zodiacSigns = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

const compliments = [
    "You have a light that brightens any room you walk into.",
    "Your smile could make even the stars jealous.",
    "You radiate such calm, positive energy.",
    "You have a mind that’s curious and beautiful.",
    "You make people feel seen and appreciated.",
    "Your confidence is magnetic.",
    "You have an amazing sense of style.",
    "You bring out the best in others.",
    "Your laughter is pure sunshine.",
    "You make difficult things look effortless.",
    "You’re stronger than you think.",
    "You’re a great listener — that’s rare and precious.",
    "You make every moment feel special.",
    "You’re incredibly creative and full of fresh ideas.",
    "You’re proof that kindness is powerful.",
    "You have a heart that inspires people.",
    "Your presence makes people feel calm and safe.",
    "You’re the kind of person everyone wishes they had around.",
    "You have such an inspiring work ethic.",
    "You handle challenges with such grace.",
    "You make ordinary moments extraordinary.",
    "You’re not afraid to be yourself — and that’s beautiful.",
    "You notice the little things that matter most.",
    "You make people believe in themselves.",
    "You have a laugh that’s contagious in the best way.",
    "You turn ideas into action.",
    "You have the soul of an artist.",
    "You bring warmth wherever you go.",
    "You’re a reminder that good people still exist.",
    "You’re the perfect mix of strength and softness.",
    "You are truly one of a kind — and the world is lucky to have you."
  ];
  
  const cardCompliments = [
    "You forgive everyone but yourself — classic main character energy 💔",
    "You care too much for people who don’t even text back 😩",
    "You act tough but cry over songs at 2 AM 🎧",
    "You’re everyone’s comfort person, but who’s yours? 😭",
    "You heal others while you’re still bleeding yourself 🩹",
    "You say ‘I’m fine’ and start a whole emotional novel inside 📖",
    "You love like it’s your last chance every single time 💞",
    "You remember tiny details about people who forgot your name 😔",
    "You deserve the same energy you give out 🔥",
    "You hide pain behind the loudest laugh 😅",
    "You’re emotionally fluent in overthinking 💭",
    "You care deeply, and it’s both your blessing and your curse 💫",
    "You call yourself cold but melt when someone’s kind 🧊❤️",
    "You don’t chase people — you chase peace now 🌿",
    "You’re soft, not weak — there’s a difference 🌙",
    "You love too hard for a world that feels too temporary 🕯️",
    "You always check on people who never check on you ☕",
    "You say you don’t care, but your heart still does 💌",
    "You build walls just to see who tries to climb them 🧱",
    "You deserve the love you keep giving away 💖"
  ];
  const recommendations = [
    "Highly recommended for deep conversations at 2 AM 🌙",
    "Best for random kindness and emotional support 💖",
    "Perfect match for coffee dates and long walks ☕",
    "Known for loving too hard, too soon, too real 💫",
    "Certified overthinker but with a golden heart 💭",
    "Recommended for people who believe in magic ✨",
    "Good at pretending they’re fine but actually a softie 😅",
    "Five stars for loyalty and genuine vibes 🌿",
    "Excellent choice if you love chaotic good energy ⚡",
    "Gives ‘main character in healing era’ energy 🌻",
    "Best paired with honesty and late-night playlists 🎧",
    "Comes with emotional depth and bad texting habits 📱",
    "Recommended for people who love peace, not drama 🌸",
    "Perfect for heart-to-heart talks under the stars 🌌",
    "Never fake — just misunderstood sometimes 🫶",
    "Warning: May fall for good energy and kind eyes 💞",
    "100% real, no filters, just feelings 🌈",
    "Better at loving than letting go 💔",
    "Radiates calm energy but storms inside 🌧️",
    "Comes with hugs, advice, and unexpected poetry 📜",
    "Strongly recommended for slow, intentional love 🌷",
    "Perfect balance of humor and emotional damage 😂💔",
    "Will fix your mood but forget to fix their sleep 😴",
    "Recommended for hopeless romantics with taste 🎀",
    "A rare mix of wisdom and chaos ⚖️",
    "Soft heart, strong mind — limited edition 🦋",
    "Loves sunsets more than people sometimes 🌅",
    "Should come with a ‘Handle with care’ label 📦",
    "Emotional but makes it look aesthetic 🎨",
    "Best for those who crave depth, not drama 🌊"
  ];
  const predictions = [
    "A new chapter begins — trust what feels right, not what looks easy 🌿",
    "Someone unexpected will remind you how loved you are 💫",
    "Your patience will finally start paying off in ways you didn’t imagine 🌻",
    "You’re about to find peace in something that once hurt you deeply 🌙",
    "A creative spark will lead you toward something life-changing 🎨",
    "The next message you receive could shift your energy completely 📩",
    "You’ll soon realize why certain doors had to close 🚪",
    "A small risk this week may lead to a huge reward 🔥",
    "Your energy is attracting the right people — stay authentic 🌈",
    "Old emotions are leaving to make space for something brighter ☀️",
    "Someone from your past is thinking about you — but for closure, not chaos 💌",
    "Money flow improves when you stop doubting your own worth 💰",
    "You’ll soon cross paths with someone who matches your soul frequency 💞",
    "The universe is aligning you with new beginnings — be ready 🌌",
    "You’re about to understand your purpose more clearly than ever 🦋",
    "Good news will find you before the week ends 📜",
    "You’ll feel lighter once you forgive yourself for the things you didn’t know 🤍",
    "Something you’ve been manifesting quietly is closer than it seems ✨",
    "The energy of this month brings healing and confidence together 🌷",
    "You’ll soon receive clarity that changes everything — stay open 🔮"
  ];
  

const form=document.getElementById('astroForm');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const surname=document.getElementById('surname').value;
    const day=parseInt(document.getElementById('day').value);
    const month=parseInt(document.getElementById('month').value);
    const year=parseInt(document.getElementById('year').value);


    const text=`Hii ${name} ${surname},Your Zodiac Sign is ${zodiacSigns[month-1]}.${compliments[day-1]}.${cardCompliments[year%20]}.${recommendations[(day*month)%30]}.
    ${predictions[(name.length*surname.length)%20]}`;

    document.getElementById('result').textContent=text;


})