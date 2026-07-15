export default {
  slug: "stop-running-worksheet",
  title: "Stop Running: A Trigger and Truth Worksheet",
  kicker: "A Trigger and Truth Worksheet",
  coverTitle: `Stop <span class="accent">Running</span>`,
  subtitle: "Find out what the craving is really about, then face it with truth.",
  motif: "compass",
  footerLeft: "Stop Running · Trigger & Truth",
  intro: {
    eyebrow: "Before you start",
    title: "Your triggers are trying to tell you something",
    lead: "I spent most of my life running. From feelings I could not name, from a childhood I misread, from pain I thought would kill me if I ever stood still long enough to feel it.",
    paras: [
      "My triggers did not start with drugs. They started with suppressed, unresolved emotions and the insecurities I let grow in the dark. Drugs became my security blanket because they felt like comfort, control, and worth. But the lifestyle I was living was causing the very feelings I was trying to escape from.",
      "Here is what I know now: a trigger is not a command. It is a signal. It points backward to a wound and a lie, and if you can name them both, the trigger starts losing its power. That is what this worksheet is for. Not to shame you. To help you see the pattern, because patterns you can see are patterns you can beat.",
      "Print a stack of these. Use one every time a craving or a blowup catches you. Five honest minutes is enough.",
    ],
    quote: {
      text: "I based the truth on what I felt without truly understanding my emotions.",
      src: "Christopher Kelly, on where triggers come from",
    },
    sign: "You are not weak for being triggered. You are human. Let's get honest about it. - Chris",
  },
  worksheets: [
    {
      tag: "Step 1 · Name the moment",
      title: "What just happened?",
      lead: "Catch the moment while it is fresh. No judging, just the facts.",
      blocks: [
        { type: "prompt", q: "Where was I, and what happened right before the craving or reaction hit?", lines: 3 },
        { type: "prompt", q: "What did I feel in my body and my mind? (Name the feelings, not just “bad.”)", lines: 3 },
        { type: "prompt", q: "What did I want to do in that moment? What did I actually do?", lines: 3 },
        { type: "checks", q: "Which of these was underneath it? Check every one that fits:", items: [
          "I felt disrespected or unseen",
          "I felt out of control",
          "I felt worthless or not enough",
          "I felt alone",
          "I felt afraid of what comes next",
        ] },
      ],
    },
    {
      tag: "Step 2 · Trace it back",
      title: "What is this really about?",
      lead: "The feeling is current. The wound is usually old. Follow it back.",
      blocks: [
        { type: "prompt", q: "When is the first time I remember feeling this exact feeling?", lines: 3 },
        { type: "prompt", q: "What did I start believing about myself back then?", lines: 3 },
        { type: "prompt", q: "How have I been running from this feeling? (Substances, anger, isolation, work, scrolling, people)", lines: 3 },
        { type: "note", text: "Running worked for a minute, every time. That is why you kept doing it. But nobody outruns a wound. It just waits at the next trigger." },
      ],
    },
    {
      tag: "Step 3 · Tell the truth",
      title: "Trade the lie for the truth",
      lead: "Every trigger carries a lie. Write yours down, then answer it out loud.",
      blocks: [
        { type: "prompt", q: "The lie I believe in that moment sounds like:", lines: 2 },
        { type: "prompt", q: "What is actually true? (About me, about God, about this moment)", lines: 3 },
        { type: "verse", text: "Search me, O God, and know my heart: try me, and know my thoughts: and see if there be any wicked way in me, and lead me in the way everlasting.", ref: "Psalm 139:23-24" },
        { type: "prompt", q: "One move I can make in the next ten minutes instead of running:", lines: 2 },
        { type: "checks", q: "Back-pocket moves when I cannot think straight:", items: [
          "Call or text one honest person and say the feeling out loud",
          "Pray it raw. God can handle exactly what I am feeling",
          "Move my body for ten minutes, then decide",
          "Write three more lines on this page",
        ] },
      ],
    },
    {
      tag: "Quick log · Keep it handy",
      title: "Five-minute version",
      lead: "For the days you cannot do the full sheet. One line each.",
      blocks: [
        { type: "prompt", q: "Trigger (what happened):", lines: 2 },
        { type: "prompt", q: "Feeling (name it):", lines: 2 },
        { type: "prompt", q: "The lie:", lines: 2 },
        { type: "prompt", q: "The truth:", lines: 2 },
        { type: "prompt", q: "My one move:", lines: 2 },
        { type: "note", text: "Do this enough times and you will start seeing your pattern before it sees you. That is when everything changes." },
      ],
    },
  ],
  closing: {
    eyebrow: "After the worksheet",
    title: "This is a door, not a destination",
    paras: [
      "If this worksheet cracked something open, do not stop here. Getting honest on paper is how I started, and it is still how I stay free. The tools below go deeper, one honest page at a time.",
      "And if you are in the hardest stretch right now, the first month, get The First 30. It was built for exactly where you are standing.",
    ],
    next: [
      { t: "The First 30.", d: "A no-BS recovery field manual and reckoning journal for the hardest month. One page a day, five minutes." },
      { t: "Unshackled Truth Workbook.", d: "Eighteen weeks of guided study and honest work: identity, grace over shame, breaking strongholds." },
      { t: "The Cracks Beneath the Surface.", d: "My story. If you think you are too far gone, read it and think again." },
    ],
  },
  backBlurb: [
    "You cannot outrun a wound. I tried for twenty years and it cost me everything.",
    "This worksheet is the practice that replaced the running: name the moment, trace it back, tell the truth. Five honest minutes at a time.",
  ],
  backVerse: {
    text: "Ye shall know the truth, and the truth shall make you free.",
    ref: "John 8:32",
  },
};
