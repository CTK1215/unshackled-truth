// Week 2: "Back to the beginning." Serialized origins arc, connection-first,
// 5 slides each, slide 5 = a connection closer driving story submissions.
// No product selling. All first-person lines from Chris's memoir/essays.
// No em dashes.

export const HANDLE = "@unshackledtruthmedia";
export const URL = "unshackledtruthmedia.com/links";

// Connection closers rotate so the 5th slide never feels canned.
const CLOSE_SHARE = {
  type: "connect", kicker: "Your turn",
  title: "You made it out? Somebody still inside needs to hear it.",
  body: "Share your story, named or anonymous. And send your loved one inside to write to us.",
  url: "unshackledtruthmedia.com/share-your-story",
  note: "Tag someone who came home. Reach back.",
};
const CLOSE_TAG = {
  type: "connect", kicker: "Do this",
  title: "Somebody needs to read this today.",
  body: "Tag them below. Or send it in a DM where nobody else can see.",
  url: "unshackledtruthmedia.com/links",
  note: "A share reaches further than you know.",
};
const CLOSE_COMMENT = {
  type: "connect", kicker: "Talk to me",
  title: "I read every comment. This is a real conversation.",
  body: "Drop your answer below. You are not the only one carrying it.",
  url: "unshackledtruthmedia.com/links",
  note: "Follow along. The story keeps going tomorrow.",
};
const CLOSE_LOVEDONE = {
  type: "connect", kicker: "For the families",
  title: "Loving someone inside? They can write to us.",
  body: "And you can share your own story of standing in the gap.",
  url: "unshackledtruthmedia.com/write-to-us",
  note: "Tag someone praying somebody home.",
};

export const carousels = [
  // ---------- MON ----------
  {
    slug: "w2-d1am-take-you-back",
    day: "Mon", slot: "8:00 AM",
    goal: "Open the origins arc; connect via universal childhood wound",
    slides: [
      { type: "hook", bg: "css-night", kicker: "The story continues", title: "Last week I showed you the man I am now. Let me take you back to the boy." },
      { type: "quote", bg: "css-gold", text: "I wasn't born broken. But the cracks started early.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-storm", kicker: "A home that looked fine", title: "It looked normal from the outside.", body: "But it had cracks running beneath the surface, cracks nobody talked about." },
      { type: "text", bg: "css-night", kicker: "Here is what I know now", title: "Every hard road starts somewhere quiet.", body: "Long before the headline, there was a kid nobody was really looking at." },
      CLOSE_COMMENT,
    ],
    caption: `Last week I showed you where the story ended up: home, free, forgiven. This week I want to take you back to where it started, because that is the part I think you will recognize.

I wasn't born broken. But the cracks started early, in a house that looked normal from the outside and had things running underneath that nobody said out loud. The crime got the headline decades later. The cracks got no ink at all.

I am telling this slow, one chapter a week, because somebody watching is living in the quiet part right now, before anything has gone wrong on paper, and they think they are the only one.

What is the crack nobody saw in your house growing up? I read every comment.

#Testimony #Childhood #ChristianRecovery #HealingJourney #SecondChances #Cracks #MentalHealthAndFaith #YouAreNotAlone #StoryTime #FaithOverFear #Recovery`,
  },
  {
    slug: "w2-d1pm-crack-nobody-saw",
    day: "Mon", slot: "6:00 PM",
    goal: "Engagement: invite the audience into the comments",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "Real question", title: "What is the crack nobody saw in you?" },
      { type: "text", bg: "css-night", kicker: "I'll go first", title: "Mine was believing love was something I had to earn.", body: "So I chased it in all the wrong places, for a very long time." },
      { type: "quote", bg: "css-storm", text: "I had been following a script that was written for me, before I even knew how to read.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-gold", kicker: "The good news", title: "A crack is not the end of you.", body: "It is just the place the pressure showed. It can also be where the light gets in." },
      CLOSE_COMMENT,
    ],
    caption: `A crack is the place the damage started, usually long before anyone else could see it. Mine was believing love had to be earned, so I spent years chasing it through anger, drugs, and an image I thought made me strong.

I was following a script that was written for me before I could even read it. Maybe you are too and you have never named it.

So name it. What is the crack nobody saw in you? Put one honest sentence below. You will not be the only one, and you might be the reason a stranger scrolling this feels less alone tonight.

I read every single one.

#Vulnerability #ChristianRecovery #HealingJourney #YouAreNotAlone #Testimony #MentalHealthAndFaith #Community #Cracks #SecondChances #FaithOverFear`,
  },
  // ---------- TUE ----------
  {
    slug: "w2-d2am-the-day-she-left",
    day: "Tue", slot: "8:00 AM",
    goal: "Story: misread abandonment -> understanding (Ch 7, 39)",
    slides: [
      { type: "hook", bg: "css-night", kicker: "A true story", title: "I was fifteen when my mother left. For twenty years I was sure she abandoned me." },
      { type: "text", bg: "css-storm", kicker: "What a kid decides", title: "I made it mean something about me.", body: "That I was the kind of person people leave. I built a whole life on that lie." },
      { type: "text", bg: "css-night", kicker: "What I couldn't see then", title: "She wasn't leaving me. She was surviving.", body: "She was getting out of a home that was breaking her. I was too young to tell the difference." },
      { type: "quote", bg: "css-gold", text: "Healing has a way of softening judgment. It doesn't erase what happened, but it changes how you carry it.", src: "The Cracks Beneath the Surface" },
      CLOSE_SHARE,
    ],
    caption: `I was fifteen the day she left, and I got it completely wrong.

I decided she abandoned me, and I carried that for twenty years. I made it mean something about me: that I was the kind of person people leave. I built a whole life on that one lie, and it drove decisions I could never explain.

What I could not see at fifteen is that she was not leaving me. She was surviving. She was getting out of a home that was breaking her, and I was too young to tell the difference between being left and being spared.

I understand her now. Healing has a way of softening judgment. It does not erase what happened, but it changes how you carry it, and I do not carry that as a weapon anymore.

Maybe you have been reading an old story wrong too. If you have made it to the understanding on the other side, somebody still stuck in the misreading needs to hear you. Share your story at the link. And if you love someone inside, they can write to us.

#Forgiveness #Childhood #Testimony #ChristianRecovery #HealingJourney #Understanding #SecondChances #YouAreNotAlone #FaithOverFear #Recovery`,
  },
  {
    slug: "w2-d2pm-old-wound-current-trigger",
    day: "Tue", slot: "6:00 PM",
    goal: "Save-bait teaching (best-performing format), no product",
    slides: [
      { type: "hook", bg: "css-storm", kicker: "The lie versus the truth", title: "The feeling is current. The wound is old." },
      { type: "lietruth", bg: "css-night", lie: "I am the kind of person people leave.", truth: "I have called thee by thy name; thou art mine.", ref: "Isaiah 43:1" },
      { type: "lietruth", bg: "css-gold", lie: "Nobody would stay if they really knew me.", truth: "Nothing can separate us from the love of God.", ref: "Romans 8:38-39" },
      { type: "text", bg: "css-night", kicker: "Why this matters", title: "You can beat a pattern you can see.", body: "Name the wound. Name the lie it whispers. Then answer it out loud." },
      CLOSE_TAG,
    ],
    caption: `Save this one. You will want it on a hard night.

Most of what runs us is not the thing happening now. It is an old wound that the current moment pokes, and the lie that wound has been whispering for years.

Mine said: you are the kind of person people leave. Nobody would stay if they knew you. For decades I believed it and never once said it out loud, which is exactly why it kept winning.

Here is the work that set me free, and it is free: name the wound, name the lie, then answer it with something truer, out loud, every time it starts talking.

Tag somebody who needs to see they can beat a pattern they can finally see.

#LieVsTruth #ChristianRecovery #HealingJourney #Isaiah431 #Romans8 #SaveThis #MentalHealthAndFaith #FaithOverFear #Testimony #Recovery #YouAreNotAlone`,
  },
  // ---------- WED ----------
  {
    slug: "w2-d3am-the-first-time-i-ran",
    day: "Wed", slot: "8:00 AM",
    goal: "Story: numbing the pain (Ch 8-9); relatable to everyone",
    slides: [
      { type: "hook", bg: "css-night", kicker: "A true story", title: "The first time I got high, I wasn't chasing a high. I was chasing quiet." },
      { type: "quote", bg: "css-storm", text: "Weed was my escape hatch, my way to disappear without ever leaving the room.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-night", kicker: "The truth under it", title: "It worked. That was the problem.", body: "For one hour I did not have to feel. So I went back, and back, and back." },
      { type: "quote", bg: "css-gold", text: "But pain doesn't stay buried forever, and eventually the smoke wasn't enough.", src: "The Cracks Beneath the Surface" },
      CLOSE_COMMENT,
    ],
    caption: `The first time I got high, I was not chasing a high. I was chasing quiet. Weed was my escape hatch, my way to disappear without ever leaving the room.

And here is the honest part nobody says: it worked. For one hour I did not have to feel the thing I could not name. That is exactly why it became a problem. Anything that lets you stop feeling, you will go back to. Drugs, anger, work, scrolling, food, sex, noise. Mine was drugs, then it was everything.

But pain does not stay buried. Eventually the smoke was not enough, and what I was running from was still standing there waiting.

What did you use to run? No judgment here. Just the truth, out loud, in the comments.

#Numbing #AddictionRecovery #ChristianRecovery #Escape #HealingJourney #Testimony #YouAreNotAlone #Recovery #MentalHealthAndFaith #SecondChances`,
  },
  {
    slug: "w2-d3pm-what-did-you-use",
    day: "Wed", slot: "6:00 PM",
    goal: "Engagement: normalize + gather comments",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "Honest question", title: "What did you use to run from what you couldn't feel?" },
      { type: "text", bg: "css-night", kicker: "It is not always a needle", title: "Sometimes it is the thing that looks fine.", body: "Overwork. Being the strong one. Staying so busy the feelings never catch up." },
      { type: "quote", bg: "css-storm", text: "If I wasn't high, I had to feel. And I wasn't ready to feel.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-gold", kicker: "Start here", title: "Naming it is not weakness.", body: "It is the first honest thing. And honesty is where everything turned for me." },
      CLOSE_COMMENT,
    ],
    caption: `Not everybody runs with a needle. Some of us run with things that look healthy from the outside. Overwork. Being the strong one who never needs anything. Staying so busy the feelings can never catch up.

It is all the same move. If I wasn't high, I had to feel, and I wasn't ready to feel. Maybe your version is: if I slow down, I have to feel, so I never slow down.

Naming your version is not weakness. It is the first honest thing, and honesty is the exact place everything turned for me.

So say it plain in the comments: what do you use to run? I will be down there with you.

#CopingMechanisms #ChristianRecovery #HealingJourney #Vulnerability #YouAreNotAlone #Recovery #MentalHealthAndFaith #Testimony #Community #FaithOverFear`,
  },
  // ---------- THU ----------
  {
    slug: "w2-d4am-the-mask-went-on",
    day: "Thu", slot: "8:00 AM",
    goal: "Story: the mask forming (Ch 9, 17); continuity to Week 1's mask post",
    slides: [
      { type: "hook", bg: "css-night", kicker: "A true story", title: "Somewhere in there, I stopped being me and started being a character." },
      { type: "quote", bg: "css-storm", text: "Underneath all of that anger was a scared, lonely kid who just wanted to feel loved.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-night", kicker: "The performance", title: "Class clown. Then tough guy. Then worse.", body: "Different masks, same scared kid. I was terrified of being nobody." },
      { type: "text", bg: "css-gold", kicker: "What I'd tell that kid", title: "The mask keeps people out. It keeps the pain in.", body: "You cannot heal a wound you will not admit is there." },
      CLOSE_TAG,
    ],
    caption: `Somewhere in there I stopped being me and started being a character. Class clown first, because if I made them laugh they could not see me. Then tough guy. Then worse.

Different masks, same scared, lonely kid underneath who just wanted to feel loved and was terrified of being nobody.

If I could talk to him now I would tell him one thing: the mask keeps people out, but it keeps the pain in. You cannot heal a wound you refuse to admit is there. It took me a maximum security cell to learn that.

Somebody you know is still performing right now, exhausted. Tag them, or send this in a DM where only they will see it.

#TheMaskWeWear #ChristianRecovery #Authenticity #HealingJourney #MensMentalHealth #Testimony #YouAreNotAlone #SecondChances #Vulnerability #Recovery`,
  },
  {
    slug: "w2-d4pm-verse-in-the-pit",
    day: "Thu", slot: "6:00 PM",
    goal: "Scripture encouragement, save/share, no product",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "For someone in the pit tonight", title: "If you are at the bottom, read this twice." },
      { type: "verse", bg: "css-night", text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", ref: "Psalm 34:18" },
      { type: "text", bg: "css-storm", kicker: "I mean this literally", title: "God was in my cell.", body: "The lowest floor of my life was where He finally got through to me." },
      { type: "text", bg: "css-gold", kicker: "Hold on", title: "The bottom is not the end.", body: "For me it turned out to be the foundation. Do not quit before the turn." },
      CLOSE_TAG,
    ],
    caption: `If you are at the bottom tonight, this is for you, and I am not saying it from a stage. I am saying it from having been on a cell floor with nothing left.

The Lord is near to the brokenhearted. I tested that at the lowest point of my life, and He was there. The bottom felt like the end. It turned out to be the foundation.

So hold on. Do not make a permanent decision on the worst night. The turn came for me, twenty-plus years in, when I had every reason to believe it never would.

Somebody scrolling needs this verse in their pocket. Tag them, or send it quietly. It might be the thing that gets them to tomorrow.

#Psalm3418 #HopeIsReal #ChristianEncouragement #Recovery #FaithOverFear #YouAreNotAlone #Testimony #DontGiveUp #GodIsNear #SecondChances`,
  },
  // ---------- FRI ----------
  {
    slug: "w2-d5am-a-kid-in-the-system",
    day: "Fri", slot: "8:00 AM",
    goal: "Story: entering the system as a teen (Ch 18-19); big emotional beat",
    slides: [
      { type: "split", topImg: "chris-at-16.jpg", bottomImg: "chris-now.jpg", kicker: "Then / Now", title: "A child walked in. 27 years later, a free man walked out." },
      { type: "quote", bg: "css-storm", text: "My Mom was in the court room every day, and every time I looked up, her eyes found mine.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-night", kicker: "Sixteen", title: "I put on a stone face for the room.", body: "Inside, I was still a scared kid who had run out of road." },
      { type: "text", bg: "css-gold", kicker: "The part nobody expected", title: "That was not the end of the story.", body: "It was the middle. God was not finished, even there. Especially there." },
      CLOSE_SHARE,
    ],
    caption: `Same face, both photos. The first is a sixteen year old walking into a courtroom. It would be twenty-seven years before he walked back out.

My mom was there every single day, and every time I looked up her eyes found mine. I gave the room a stone face, because that was the only mask I had left, but inside I was a scared kid who had finally run out of road.

Everyone in that courtroom closed the book on that boy. Here is what none of them knew: it was not the end of the story. It was the middle. God was not finished, even there, especially there.

If you have walked out the other side of the system, a kid inside right now needs proof it is survivable. Share your story at the link. And if your loved one is still inside, they can write to us.

#SecondChances #FormerlyIncarcerated #Testimony #BeforeAndAfter #Redemption #CriminalJusticeReform #FaithOverFear #YouAreNotAlone #PrisonMinistry #HopeIsReal`,
  },
  {
    slug: "w2-d5pm-share-your-story",
    day: "Fri", slot: "6:00 PM",
    goal: "Direct share-your-story recruitment push (the mission)",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "To the ones who made it out", title: "Your story is somebody else's proof." },
      { type: "text", bg: "css-night", kicker: "Why I am asking", title: "I cannot reach everyone. You can reach the ones I can't.", body: "The person who hears you might be the exact one I never could." },
      { type: "quote", bg: "css-storm", text: "Let them tell your story. Let them lead someone else to freedom.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-gold", kicker: "How it works", title: "Written or recorded. Named or anonymous.", body: "I read every one. The ones we publish reach people still inside." },
      CLOSE_SHARE,
    ],
    caption: `I am building something bigger than my own story, and I need you in it.

If you served time and came home, or clawed your way out of addiction, you know things I do not. You know a version of the bottom I never saw. And somebody out there will hear it from you when they could never hear it from me.

I cannot reach everyone. You can reach the ones I cannot. That is not a nice idea, it is the whole plan.

Share your story at unshackledtruthmedia.com/share-your-story. Written or recorded, named or anonymous. I read every one, and the ones we publish go to men and women still inside, and the families praying them home. If your loved one is inside, they can write to us too.

You made it out. Reach back.

#ShareYourStory #FormerlyIncarcerated #ReachBack #SecondChances #Testimony #ReentryMatters #Recovery #Community #YourStoryMatters #PrisonMinistry #HopeDealer`,
  },
  // ---------- SAT ----------
  {
    slug: "w2-d6am-first-messenger",
    day: "Sat", slot: "8:00 AM",
    goal: "Story: first light inside (Ch 23-25); hope turn in the arc",
    slides: [
      { type: "hook", bg: "css-night", kicker: "A true story", title: "The first crack of light came from a person I never expected." },
      { type: "quote", bg: "css-gold", text: "You're better than this. You don't have to live like this forever.", src: "An officer, in The Cracks Beneath the Surface" },
      { type: "text", bg: "css-storm", kicker: "It landed", title: "I acted like it bounced off. It didn't.", body: "One person seeing something in me I could not see yet. A seed." },
      { type: "text", bg: "css-gold", kicker: "The lesson", title: "You never know which word takes root.", body: "Somebody said one to me. It is part of why I am here." },
      CLOSE_LOVEDONE,
    ],
    caption: `The first crack of light did not come from a program or a sermon. It came from a person I never expected, an officer, who looked at me in the middle of my worst and said: you're better than this. You don't have to live like this forever.

I acted like it bounced right off. It did not. It was a seed. One person seeing something in me that I could not see in myself yet, and it sat in the dark until it was ready to grow.

That is why I take this so seriously now. You never know which word takes root in somebody. Somebody planted one in me, and it is part of why I am alive to type this.

Who was your messenger, the one who believed in you when you could not? Tag them. Let them know it took.

#MessengersOfGrace #Testimony #ChristianRecovery #HopeIsReal #SecondChances #Gratitude #YouMatter #PrisonMinistry #FaithOverFear #Recovery`,
  },
  {
    slug: "w2-d6pm-tag-your-messenger",
    day: "Sat", slot: "6:00 PM",
    goal: "Engagement: gratitude, tagging, community",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "Do this today", title: "Tag the person who believed in you when you didn't." },
      { type: "text", bg: "css-night", kicker: "Say it while you can", title: "Most of them never know.", body: "The word they said in passing might have kept you alive. Tell them." },
      { type: "quote", bg: "css-storm", text: "I lived in darkness for far too long and now seek to be a light wherever I go.", src: "Christopher Kelly" },
      { type: "text", bg: "css-gold", kicker: "Then be one", title: "Somebody needs you to be their messenger now.", body: "The word that saved you was free. Pass it on." },
      CLOSE_TAG,
    ],
    caption: `Do one thing today: tag the person who believed in you when you could not believe in yourself.

Here is the truth about messengers, most of them never know what they did. The word they said in passing, the time they did not give up on you, it might have kept you alive, and they have no idea. Tell them. Do it while you still can.

I lived in darkness far too long, and now I try to be a light wherever I go. That is the whole circle: somebody was a messenger to you, and somebody in your life right now needs you to be theirs.

Tag your person below. Then go be somebody's.

#Gratitude #ChristianRecovery #PayItForward #Community #Testimony #BeTheLight #SecondChances #YouAreNotAlone #HopeDealer #FaithOverFear`,
  },
  // ---------- SUN ----------
  {
    slug: "w2-d7am-sunday-strength",
    day: "Sun", slot: "8:00 AM",
    goal: "Sunday scripture save-set",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "Sunday strength", title: "Four verses for the ones the world already counted out." },
      { type: "verse", bg: "css-night", text: "He healeth the broken in heart, and bindeth up their wounds.", ref: "Psalm 147:3" },
      { type: "verse", bg: "css-storm", text: "And I will restore to you the years that the locust hath eaten.", ref: "Joel 2:25" },
      { type: "verse", bg: "css-gold", text: "Weeping may endure for a night, but joy cometh in the morning.", ref: "Psalm 30:5" },
      CLOSE_TAG,
    ],
    caption: `Sunday strength, for anybody the world already counted out. Save these. Send one.

Psalm 147:3. He heals the broken in heart and binds up their wounds. Not the impressive. The broken.

Joel 2:25. I will restore the years the locust has eaten. I lost twenty-seven of them. I have watched God give back more than the years took.

Psalm 30:5. Weeping may endure for a night, but joy comes in the morning. Some nights are long. Morning still comes.

Which one did you need today? Comment the number. Then send it to somebody having a long night.

#SundayScripture #BibleVerses #Psalm1473 #Joel225 #HopeIsReal #ChristianEncouragement #Recovery #FaithOverFear #Restoration #YouAreNotAlone`,
  },
  {
    slug: "w2-d7pm-if-youre-still-in-it",
    day: "Sun", slot: "6:00 PM",
    goal: "Week close: hope + free chapter as a gift, follow for next week",
    slides: [
      { type: "hook", bg: "css-night", kicker: "Before the week ends", title: "If you are still in the part of the story that hurts, read this." },
      { type: "quote", bg: "css-storm", text: "You are not too far gone. You're not too broken, too angry, nor too ashamed.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-night", kicker: "Where we are", title: "This week we went back to the beginning.", body: "Next week we keep going. Follow so you do not miss the next chapter." },
      { type: "text", bg: "css-gold", kicker: "A gift, not a sale", title: "Want the first chapter of my book? It is free.", body: "The whole beginning, straight to your inbox. No cost, no catch." },
      { type: "connect", kicker: "Two ways in", title: "Read it free, or tell me yours.", body: "Free chapter and share-your-story are both at the link in my bio.", url: "unshackledtruthmedia.com/links", note: "Follow for next week's chapter." },
    ],
    caption: `Before this week closes: if you are still living in the part of the story that hurts, hear me. You are not too far gone. Not too broken, too angry, or too ashamed. I was all of those at once, and here I am.

This week we went back to the beginning, the cracks, the day she left, the running, the mask, the courtroom, the first light. Next week we keep walking it forward. Follow so you do not miss the next chapter.

And if you want the actual first chapter of my book, it is free, the whole beginning straight to your inbox, no cost and no catch. Link in my bio. Same link if you want to share your own story instead. Both doors lead somewhere good.

Thank you for reading along. This means more than you know.

#Testimony #ChristianRecovery #HopeIsReal #FreeChapter #YouAreNotAlone #SecondChances #FaithOverFear #Redemption #StoryTime #NeverTooFarGone`,
  },
];
