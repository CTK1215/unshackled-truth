const V = {
  jer2911: { text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", ref: "Jeremiah 29:11" },
};

const d = (n, week, motto, title, charge, verse, move, reading, evening) => ({ n, week, motto, title, charge, verse, move, reading, evening });

export default {
  slug: "launch-point-planner",
  title: "Launch Point: A 30-Day Rebuilding Planner",
  kicker: "A 30-Day Rebuilding Planner",
  coverTitle: `Launch <span class="accent">Point</span>`,
  subtitle: "Thirty days of daily moves for rebuilding a life: faith, identity, people, and purpose. One page a day.",
  motif: "door",
  footerLeft: "Launch Point · 30-Day Rebuilding Planner",
  intro: {
    eyebrow: "From Chris",
    title: "Rebuilding is daily or it is nothing",
    lead: "When I walked out of prison after twenty-seven years, nobody handed me a map. I had to be intentional in choosing my path, in staying true to the commitments I had made to myself and to God. Each day was a lesson in patience.",
    paras: [
      "What kept me free was not one big decision. It was small ones, kept daily: the Word every morning, honest prayer, honest people, showing up for work, doing the mundane things well, and refusing the shortcuts that built my old life. Every day I wake up with the choice to keep walking this path.",
      "This planner is that walk, laid out one page a day for thirty days. Four weeks, four fronts: Foundation, Identity, People, and Purpose. Each day gives you a short charge, a Scripture, one move for the day, three anchors to check off, and a gut check at night.",
      "It does not matter if you are fresh out, fresh clean, or just done with the old way. The ground rules are the same. Embrace the discomfort. It is not the enemy; it is the invitation.",
    ],
    quote: {
      text: "The cost of change was high, but the cost of staying the same was even higher.",
      src: "The Cracks Beneath the Surface",
    },
    sign: "Thirty days. One page a day. Let's build. - Chris",
  },
  how: {
    title: "How this planner works",
    steps: [
      { t: "Morning: five minutes", d: "Read the day's charge and Scripture. Write your one move for the day. The reading assignment starts in John's Gospel, exactly where I tell every new believer to start. Read it slowly." },
      { t: "All day: three anchors", d: "Word, prayer, one honest reach-out. Check them off. On hard days the anchors are not extra, they are the whole plan." },
      { t: "Night: the gut check", d: "Two honest minutes with the evening question. Truth becomes clearer when we wrestle with it on paper. End every week with the Weekly Reckoning page." },
    ],
    note: "Miss a day? Do not restart, do not spiral. Turn the page and take the next one. Perseverance beats perfection for thirty straight days.",
  },
  plannerWeeks: [
    {
      days: [
        d(1, "Foundation", "Surrender first", "Lay the cornerstone", "Rebuilding does not start with hustle. It starts with surrender, not the kind the world teaches, not weakness, but handing control to Someone bigger than you. Everything this month sits on that stone.", { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", ref: "Proverbs 3:5" }, "Tell God, out loud, that the next 30 days are His: the schedule, the setbacks, the outcome. All of it.", "John 1", "What did I try to control today that I should have handed over?"),
        d(2, "Foundation", "Pick up the Word", "Open the book", "Start with John's Gospel and read it slowly. The Bible is not just a book of comfort. It is a mirror, and this month you are going to look in it every single day.", { text: "Thy word is a lamp unto my feet, and a light unto my path.", ref: "Psalm 119:105" }, "Set your Bible time and place now: same time, same chair, every day. Write it down and defend it.", "John 2", "Did the Word get my first minutes or my leftovers today?"),
        d(3, "Foundation", "Pray honest", "Talk to Him like a friend", "You do not need fancy words. Just talk to Him like you would a friend. My first prayers were awkward and desperate, and God met me in every one of them.", { text: "Casting all your care upon him; for he careth for you.", ref: "1 Peter 5:7" }, "Pray out loud today with no script and no cleanup. Tell God the ugliest true thing and let Him have it.", "John 3", "What did I hold back from God today, and why?"),
        d(4, "Foundation", "Be still", "Let the silence speak", "If you are tired of the noise, let the silence speak. Stillness used to terrify me because feelings lived there. Now it is where I meet God before the day starts swinging.", { text: "Be still, and know that I am God.", ref: "Psalm 46:10" }, "Ten minutes of stillness today. No phone, no music, no exit. Sit, breathe, listen.", "John 4", "What came up in the quiet, and what might God be saying through it?"),
        d(5, "Foundation", "Tell the truth", "Take the inventory", "You cannot rebuild on a lie. Today is the honesty audit: where you actually are with money, substances, people, and God. Not where you tell people you are.", { text: "Search me, O God, and know my heart: try me, and know my thoughts.", ref: "Psalm 139:23" }, "Write four honest sentences, one each: money, temptations, relationships, faith. No editing, no excuses.", "John 5", "Which of the four sentences was hardest to write? That one is the work."),
        d(6, "Foundation", "Embrace the discomfort", "Do the hard thing first", "Embrace the discomfort. That phrase became my lifeline. Growth was never supposed to be easy or painless, and discomfort is not the enemy. It is the invitation.", { text: "No chastening for the present seemeth to be joyous, but grievous: nevertheless afterward it yieldeth the peaceable fruit of righteousness.", ref: "Hebrews 12:11" }, "Pick the one task you have been dodging because it is uncomfortable. Do it before noon.", "John 6", "What did the discomfort teach me today that comfort never could?"),
        d(7, "Foundation", "Rest is holy", "Stop and breathe", "Rebuilding is not a sprint, and burnout is just relapse in work clothes. God built rest into the week on purpose. Take it without guilt.", { text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", ref: "Matthew 11:28" }, "Take two genuinely restful hours today: no obligations, no numbing, something that actually fills you back up.", "John 7", "Do I know the difference between rest and escape yet? What is one example of each from my life?"),
      ],
      review: {
        n: 1, title: "Foundation check", lead: "One week down. Before you build higher, check the cornerstone.",
        prompts: [
          "Which anchor (Word, prayer, reach-out) held up best this week? Which one keeps slipping?",
          "Where did surrender actually change a decision this week?",
          "What is the one honest sentence from Day 5 that needs to drive Week 2?",
        ],
        verse: { text: "Therefore whosoever heareth these sayings of mine, and doeth them, I will liken him unto a wise man, which built his house upon a rock.", ref: "Matthew 7:24" },
      },
    },
    {
      days: [
        d(8, "Identity", "New creature", "Change the nameplate", "If any man be in Christ, he is a new creature. The old labels, convict, addict, failure, are somebody you used to be. Today you stop answering to them.", { text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", ref: "2 Corinthians 5:17" }, "Write the three old labels you still answer to. Cross each out and write what God calls you instead.", "John 8", "Which old label tried to run my day, and how did I answer it?"),
        d(9, "Identity", "Renew the mind", "Guard the gate", "Transformation happens by the renewing of your mind, which means what goes in matters: the music, the feeds, the conversations, the corners you stand on. Garbage in was the old program.", { text: "Be not conformed to this world: but be ye transformed by the renewing of your mind.", ref: "Romans 12:2" }, "Cut one input today that feeds the old you. Replace it with one that feeds the new you.", "John 9", "What did I feed my mind today, and what did it grow?"),
        d(10, "Identity", "Lie versus truth", "Answer the script", "Every trigger carries a lie, and shame only knows three lines. Write the lie, answer with truth. I did this until God's lines were louder than the old script, and it works.", { text: "And ye shall know the truth, and the truth shall make you free.", ref: "John 8:32" }, "Catch one lie in your head today, write it down, and write God's answer under it with a verse if you can find one.", "John 10", "Which lie showed up the most this week? Do I have its answer memorized yet?"),
        d(11, "Identity", "Masks off", "Be seen", "Prison rewards performance, and so does the street, and so does social media. But the mask keeps the pain in, and the crack in the mask is the beginning of healing.", { text: "Man looketh on the outward appearance, but the LORD looketh on the heart.", ref: "1 Samuel 16:7" }, "Let one safe person see one unpolished true thing about you today.", "John 11", "Where did I perform today instead of showing up real?"),
        d(12, "Identity", "Fully forgiven", "Drop the record", "Holding onto guilt after confession is telling Jesus His sacrifice was not enough for you. It was enough. You do not have to earn it. You just have to receive it.", { text: "As far as the east is from the west, so far hath he removed our transgressions from us.", ref: "Psalm 103:12" }, "Name the one confessed thing you keep re-punishing yourself for. Hand it back to God, out loud, one more time. Last time.", "John 12", "Am I living today like a forgiven man or like a man still on trial?"),
        d(13, "Identity", "Child of God", "Know whose you are", "My value is not dependent on others. It is intrinsic, because of who I am: a child of God. Nobody promotes you into that and nobody can fire you out of it.", { text: "Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God.", ref: "1 John 3:1" }, "Do one thing today purely because it is who you are now, not because anyone is watching or paying.", "John 13", "Whose approval did I chase today, and what would change if I already had God's?"),
        d(14, "Identity", "Grateful eyes", "Count what is real", "Contentment was a discovery: shelter, food, a laugh, a conversation with a friend. Gratitude is not pretending things are fine. It is seeing what grace already put in the room.", { text: "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", ref: "1 Thessalonians 5:18" }, "Write ten things you have right now that the old you never noticed. Read the list out loud.", "John 14", "What did gratitude change about how today felt?"),
      ],
      review: {
        n: 2, title: "Identity check", lead: "Two weeks in. The question is no longer what you did. It is who you are.",
        prompts: [
          "Which old label lost the most power this week?",
          "What is the clearest evidence this week that the new creature is real?",
          "Where does the mask still go on automatically? What would it take to leave it off there?",
        ],
        verse: { text: "I will praise thee; for I am fearfully and wonderfully made.", ref: "Psalm 139:14" },
      },
    },
    {
      days: [
        d(15, "People", "Don't walk alone", "Find your people", "Do not walk alone. Find a local church, a recovery group, a community. My brothers kept me grounded when my thoughts threatened to spiral, and isolation is where the old me waits.", { text: "Two are better than one... for if they fall, the one will lift up his fellow.", ref: "Ecclesiastes 4:9-10" }, "Pick your room: a church service, a meeting, a group. Put it on the calendar and tell someone you are coming.", "John 15", "When I struggled this week, who did I tell? If the answer is nobody, why?"),
        d(16, "People", "Forgive them", "Release the debt", "Forgiveness is not weakness. It is freedom. I forgave my father, I forgave the people who failed me, and every chain I released turned out to be wrapped around my own hands.", { text: "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.", ref: "Ephesians 4:32" }, "Write the name of one person you are still billing for the past. Pray for them by name today, even through your teeth.", "John 16", "What does holding this debt cost me daily? What might releasing it free up?"),
        d(17, "People", "Forgive you", "Take yourself off the hook", "I started to see that I was not the worst thing I had ever done. Healing softens judgment, and that includes the verdict you keep passing on yourself.", { text: "There is therefore now no condemnation to them which are in Christ Jesus.", ref: "Romans 8:1" }, "Write yourself the two-line pardon God already signed: I did it. It is forgiven. Sign it and date it.", "John 17", "Where did I treat myself as unforgivable today in a way I would never treat a friend?"),
        d(18, "People", "The amends list", "Name the repairs", "Part of rebuilding is looking at the wreckage honestly. Not to drown in it, but to repair what can still be repaired. Today you just make the list. That is all.", { text: "If it be possible, as much as lieth in you, live peaceably with all men.", ref: "Romans 12:18" }, "Write the names you owe an apology, a debt, or an honest conversation. No action yet. Just the true list.", "John 18", "Which name on the list scares me most, and what exactly am I afraid of?"),
        d(19, "People", "One repair", "Make the first amends", "Pick the safest name on the list and make it right: the apology, the payment plan, the honest talk. No excuses attached, no outcome demanded. You clean your side of the street.", { text: "First be reconciled to thy brother, and then come and offer thy gift.", ref: "Matthew 5:24" }, "Make one amends today. Short, direct, humble. Then let the result belong to God.", "John 19", "How did it feel to repair instead of run? What did I learn for the harder names?"),
        d(20, "People", "Guard the gates", "Set one boundary", "Some doors from the old life need to stay closed: people, places, and patterns. A boundary is not hatred. It is agreeing with God about what almost killed you.", { text: "Keep thy heart with all diligence; for out of it are the issues of life.", ref: "Proverbs 4:23" }, "Name one person, place, or pattern that pulls you backward. Decide the boundary and tell one accountability person.", "John 20", "Where did the old life knock this week, and how did I answer the door?"),
        d(21, "People", "Get a Smitty", "Find a mentor, be a mentor", "At Ironwood, God gave me Smitty: a man who heard my whole story and challenged me to be clear, authentic, and intentional. Everybody rebuilding needs a Smitty, and eventually needs to become one.", { text: "Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.", ref: "Proverbs 27:17" }, "Identify your Smitty, or the closest candidate, and ask for a standing check-in: weekly call, coffee, anything regular.", "John 21", "Who is allowed to challenge me? If the answer is nobody, what am I protecting?"),
      ],
      review: {
        n: 3, title: "People check", lead: "Three weeks in. Freedom that stays free is never a solo project.",
        prompts: [
          "Who showed up for me this week, and who did I show up for?",
          "What did making (or avoiding) amends teach me about myself?",
          "Is my boundary holding? What needs reinforcing before Week 4?",
        ],
        verse: { text: "Bear ye one another's burdens, and so fulfil the law of Christ.", ref: "Galatians 6:2" },
      },
    },
    {
      days: [
        d(22, "Purpose", "Work is worship", "Show up all the way", "A job was one of the biggest factors in staying free. Whatever your hands find today, work, job hunting, classes, chores, do it like it matters, because it does. I love to work hard at whatever I do, and I do it for the glory of the Lord.", { text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", ref: "Colossians 3:23" }, "Do today's work, or job search, at 100 percent for one focused block: two hours, no shortcuts, no phone.", "Psalm 34", "Where did I cut a corner today that the old me would have cut? Did I catch it?"),
        d(23, "Purpose", "Small kept promises", "Build trust in inches", "Trust, with others and with yourself, is rebuilt through consistency, honesty, and a shared vision. Nobody believes a speech. Everybody believes a pattern.", { text: "He that is faithful in that which is least is faithful also in much.", ref: "Luke 16:10" }, "Make three small promises today, to people or to yourself, and keep all three. Write them down first.", "Psalm 103", "What is my promise-keeping percentage this week, honestly? What breaks it?"),
        d(24, "Purpose", "Clean money", "Get honest about the numbers", "The old life had fast money and it cost everything. Rebuilding means slow money and clean hands: knowing what comes in, what goes out, and what you owe.", { text: "The blessing of the LORD, it maketh rich, and he addeth no sorrow with it.", ref: "Proverbs 10:22" }, "Write your real numbers today: income, bills, debts. One page. You cannot steward what you will not look at.", "Psalm 121", "Is there any money in my life right now I would be ashamed to explain to God or my parole officer?"),
        d(25, "Purpose", "Serve somebody", "Turn the pain outward", "I began to see even prison as a mission field. Service is where pain finds its purpose, and it is also the fastest way out of your own head on a bad day.", { text: "For even the Son of man came not to be ministered unto, but to minister.", ref: "Mark 10:45" }, "Do one act of service today that costs you something and earns you nothing: time, help, encouragement, presence.", "Psalm 139", "Who did my story or my hands help today? What did serving do to my own struggles?"),
        d(26, "Purpose", "Vision with a deadline", "Set the SMART goal", "A dream without a plan stays a dream. My workbook starts with a SMART goal for a reason: specific, measurable, achievable, realistic, time-bound. Today you set yours for the next 90 days.", V.jer2911, "Write one 90-day goal the SMART way, and the first three steps. Tape it where you will see it every morning.", "Isaiah 61", "Does my daily routine actually point at my goal, or away from it?"),
        d(27, "Purpose", "The daily routine", "Automate the win", "Freedom is a schedule before it is a feeling. Word, prayer, work, people, rest, at roughly the same times daily. When the routine is strong, hard days cannot knock the whole structure over.", { text: "Teach us to number our days, that we may apply our hearts unto wisdom.", ref: "Psalm 90:12" }, "Write your ideal weekday, hour by hour, morning anchors to lights out. Live it tomorrow exactly as written.", "Romans 8", "Which hour of my day is the weakest point, where the old life sneaks in?"),
        d(28, "Purpose", "Endure the middle", "Keep walking when it is boring", "Around this point rebuilding stops feeling dramatic and starts feeling slow. Good. Perseverance, character, hope: that is the order the growth comes in, and there are no shortcuts through the middle.", { text: "And let us not be weary in well doing: for in due season we shall reap, if we faint not.", ref: "Galatians 6:9" }, "Do every anchor and every routine block today with zero inspiration. Prove you do not run on hype.", "Philippians 3", "What keeps me walking when nobody claps? Is that fuel going to last?"),
        d(29, "Purpose", "Tell the story", "Your cracks are a key", "The things I was most ashamed of became the building blocks of my testimony. They were not erased. They were redeemed. Somebody is waiting on the other side of your honesty.", { text: "And they overcame him by the blood of the Lamb, and by the word of their testimony.", ref: "Revelation 12:11" }, "Write your testimony in ten sentences: who I was, what God did, who I am now. Practice saying it out loud once.", "2 Corinthians 5", "If my story could reach one specific person, who would it be, and what is one step toward them?"),
        d(30, "Purpose", "Launch point", "This is day one", "Thirty days was never the finish line. It was the launch point. You have anchors, a routine, people, boundaries, a goal, and a story. Now you live unshackled. Don't wait for perfect conditions. Every day, wake up and choose the path again.", { text: "Being confident of this very thing, that he which hath begun a good work in you will perform it until the day of Jesus Christ.", ref: "Philippians 1:6" }, "Plan the next 30 days today: which anchors stay daily, which weekly rhythm continues, who holds you accountable. Write it on the last page.", "Psalm 23", "What is the single biggest difference between me on Day 1 and me tonight? Thank God for it in writing."),
      ],
      review: {
        n: 4, title: "Launch check", lead: "Thirty days of bricks. Look back at the wall before you build the next one.",
        prompts: [
          "Read your Day 5 honesty audit and your Day 8 labels. What has actually changed in 30 days?",
          "Which practices are now automatic? Which still need scaffolding?",
          "Write your next 30-day commitment in three sentences. Who will you show it to?",
        ],
        verse: { text: "Forgetting those things which are behind, and reaching forth unto those things which are before, I press toward the mark.", ref: "Philippians 3:13-14" },
      },
    },
  ],
  closing: {
    eyebrow: "After thirty days",
    title: "Live unshackled",
    paras: [
      "An unshackled perspective is not just about being free from chains. It is about being free from the mindset that built the chains in the first place. That freedom is maintained the same way it was won: daily.",
      "Keep the anchors. Keep your people. Keep the routine. And when you are ready for the deeper work, or you know somebody just starting theirs:",
    ],
    next: [
      { t: "Unshackled Truth Workbook.", d: "Eighteen weeks of guided study to go deeper than thirty days can: identity, strongholds, temptation, finishing the race." },
      { t: "The First 30.", d: "Know somebody in their first month of getting clean? This planner's cousin was built for exactly that fight." },
      { t: "The Cracks Beneath the Surface.", d: "The whole story behind every page of this planner. Chapter One free at unshackledtruthmedia.com/free-chapter" },
    ],
  },
  backBlurb: [
    "Nobody hands you a map when the gate opens. Twenty-seven years inside taught me the map is built one daily decision at a time.",
    "Thirty days, one page a day: a charge, a Scripture, one move, three anchors, and an honest gut check every night. Foundation, identity, people, purpose. This is how a life gets rebuilt.",
  ],
  backVerse: {
    text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.",
    ref: "Jeremiah 29:11",
  },
};
