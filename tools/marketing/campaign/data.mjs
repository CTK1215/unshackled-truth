// Unshackled Truth Media: 7-day launch campaign (14 carousels, 56 slides)
// Slide word counts follow 2026 carousel research: <=20 words per slide.
// All first-person lines are Chris's own (memoir/workbook/blog), lightly
// re-punctuated. No em dashes anywhere.

export const HANDLE = "@unshackledtruthmedia";
export const URL = "unshackledtruthmedia.com/links";

export const carousels = [
  {
    slug: "share-your-story-cta",
    day: "Any", slot: "Bonus / recurring CTA",
    goal: "Recruit formerly incarcerated people to share their stories",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "To the ones who made it out", title: "You served your time. Now your story could serve somebody else's." },
      { type: "text", bg: "css-night", kicker: "Here is the truth", title: "Somebody is in a cell tonight believing they are the only one.", body: "Your story is living proof that they are not, and that the gate is not the end." },
      { type: "quote", bg: "css-storm", text: "The cracks in your life are not the end. Don't cover them up. Let them tell your story. Let them lead someone else to freedom.", src: "The Cracks Beneath the Surface" },
      { type: "cta", bg: "css-dawn", title: "Share your story. Written or recorded. Named or anonymous.", body: "unshackledtruthmedia.com/share-your-story. I read every one, and the ones we publish reach men and women still inside.", note: "Tag somebody who made it out. They know why." },
    ],
    caption: `This one is for the ones who came home.

You did the time. You did the work. You know exactly what the first night feels like, and the ten thousandth, and the morning the gate finally opened.

Somebody is sitting in a cell tonight believing they are the only one who ever felt what they feel. Your story is proof that they are not. It does not have to be polished. It does not even need your name on it.

Share it at the link in my bio. Written or recorded. I read every single one, and the stories we publish reach men and women still inside, and the families praying them home.

You made it out. Reach back.

Tag somebody who made it out. They know why.

#FormerlyIncarcerated #ShareYourStory #SecondChances #ReentryMatters #Testimony #PrisonMinistry #RecoveryCommunity #YourStoryMatters #ReachBack #ChristianRecovery #HopeDealer #SecondChanceCommunity`,
  },
  {
    slug: "bonus-free-download",
    day: "Any", slot: "Bonus / pinned post",
    goal: "Lead magnet push: free reflection PDF -> email list",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "Free download", title: "The 3 questions that started my healing. Free. No catch." },
      { type: "list", bg: "css-night", kicker: "Inside the free PDF", title: "Three honest reflections:", items: ["The Crack: where the damage started", "The Mask: what you hide behind", "The Truth: what God calls you instead", "Plus journaling prompts and a letter from me"] },
      { type: "quote", bg: "css-storm", text: "No one is too far gone. Not even you.", src: "The Cracks Don't Define You" },
      { type: "cta", bg: "cover-freereflection", title: "Free. Instant. Yours.", body: "The reflection PDF plus Chapter One of my book, straight to your inbox.", note: "Tag somebody who needs a Day 1." },
    ],
    caption: `I made something for the person who is not ready to buy a book, join a program, or tell anybody what is going on. It is free, and it is short on purpose.

The Cracks Don't Define You: three honest reflections. The crack, where the damage started. The mask, what you hide behind. The truth, what God calls you instead. Journaling prompts with each one, and a letter from me at the front.

These are the same three questions that started my healing inside a maximum security cell. They cost nothing because the people who need them most usually cannot pay for them.

Grab it free at the link in my bio. You'll also get Chapter One of my book in the same email.

Tag somebody who needs a Day 1.

#FreeDownload #ChristianRecovery #FaithOverFear #HealingJourney #RecoveryIsPossible #Testimony #SecondChances #FreeResource #ChristianFreebie #PrisonMinistry #JesusChangesLives #GraceWins #StartToday`,
  },
  {
    slug: "d1am-the-first-night",
    day: "Mon", slot: "8:00 AM",
    goal: "Story hook: introduce Chris, drive follows + free chapter",
    slides: [
      { type: "hook", bg: "css-night", kicker: "A true story", title: "Sixteen years old. A life sentence. The first night in a cell." },
      { type: "quote", bg: "css-gold", text: "The cracks had been forming long before I ended up here.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-storm", kicker: "Twenty-seven years inside", title: "Everyone agreed I was too far gone.", body: "For twenty-three of those years, I believed them. They were wrong." },
      { type: "cta", bg: "book-cover.jpg", title: "The whole story is written down.", body: "Read Chapter One free. Link in bio.", note: "Send this to somebody doing time, inside or out." },
    ],
    caption: `Sixteen years old, sentenced to life. The first night in that cell, I thought my story was over.

It took me 23 years to learn the truth: the sentence was real, but it was never the truest thing about me. The cracks had been forming long before I ended up there, in a home that looked normal from the outside. The crime got the headline. The cracks got no ink at all.

I served 27 years. I'm home now, and I wrote all of it down: the wreckage, the mask, the needle, and the God who met me in a maximum security cell.

Chapter One is free. Link in bio.

Save this for someone who thinks their story is over.

#Testimony #SecondChances #ChristianRecovery #PrisonMinistry #Redemption #FaithOverFear #RecoveryIsPossible #FormerlyIncarcerated #JesusChangesLives #HopeDealer #ChristianMen #MensMinistry #TrueStory`,
  },
  {
    slug: "d1pm-free-chapter",
    day: "Mon", slot: "6:00 PM",
    goal: "Funnel: free chapter email capture",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "The Cracks Beneath the Surface", title: "The book they said I would never live to write." },
      { type: "quote", bg: "css-gold", text: "Grace didn't find me polished. It found me in pieces.", src: "From the epigraph" },
      { type: "text", bg: "book-cover.jpg", kicker: "From a life sentence at 16", title: "To free in every way that matters.", body: "Unmasking the lies. Confronting the pain. Finding God in the midst of it all." },
      { type: "cta", bg: "css-dawn", title: "Chapter One. Free. Right now.", body: "Straight to your inbox. Link in bio.", note: "Tag somebody who needs this book." },
    ],
    caption: `They processed a 16-year-old into a cell built for grown men and everybody closed the book on me. God didn't.

The Cracks Beneath the Surface is the whole story: the childhood nobody talked about, the mask, the drugs, the murder conviction, the 27 years, and the grace that found me in pieces and rewrote everything.

If money is tight, or you're just not sure yet, start free. Chapter One goes straight to your inbox. Link in bio.

Somebody you love needs this story. Send it to them.

#ChristianBooks #Memoir #Testimony #SecondChances #PrisonMinistry #Redemption #ChristianRecovery #FaithBooks #RecoveryReading #GraceWins #NewAuthor #BookstagramChristian #JesusChangesLives`,
  },
  {
    slug: "d2am-lie-vs-truth-shame",
    day: "Tue", slot: "8:00 AM",
    goal: "Save-bait teaching: lie vs truth on shame",
    slides: [
      { type: "hook", bg: "css-storm", kicker: "The lie versus the truth", title: "Shame says: you ARE what you did." },
      { type: "lietruth", bg: "css-night", lie: "I'll always be defined by what I've done.", truth: "If anyone is in Christ, he is a new creation.", ref: "2 Corinthians 5:17" },
      { type: "lietruth", bg: "css-gold", lie: "God forgives me, but I can't forgive myself.", truth: "There is now no condemnation for those in Christ Jesus.", ref: "Romans 8:1" },
      { type: "cta", bg: "css-dawn", title: "I carried shame like a badge. Grace rewrote my story.", body: "Five more days of this: Grace Over Shame devotional. Link in bio.", note: "Save this for the day shame gets loud." },
    ],
    caption: `Guilt says: I did something bad. Shame says: I AM bad. Those are two different sentences, and only one of them is ever true of a child of God.

I carried shame like a badge for decades. Not because I was proud of what I'd done, but because I believed it was who I was. The turning point wasn't feeling better. It was answering shame's script with God's lines, out loud, every single time it started talking.

Swipe for the two lies that held me longest, and the Scriptures that broke them.

Save this post. Shame always comes back around, and you'll want the answers ready.

The full 5-day Grace Over Shame devotional is in my store. Link in bio.

#GraceOverShame #ChristianRecovery #Romans81 #NewCreation #FaithOverFear #ShameOff #ChristianHealing #BibleTruth #RecoveryIsPossible #Testimony #JesusChangesLives #ChristianMen #Freedom`,
  },
  {
    slug: "d2pm-7-day-journal",
    day: "Tue", slot: "6:00 PM",
    goal: "Product: 7-Day Reflection Journal",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "New: a 7-day reflection journal", title: "Seven days of telling yourself the truth." },
      { type: "list", bg: "css-night", kicker: "The road my healing took", title: "One day at a time:", items: ["Day 1: The Cracks", "Day 2: The Masks", "Day 3: The Pain", "Day 4: The Grace", "Day 5: The Surrender", "Day 6: The Rebuilding", "Day 7: The Next Step"] },
      { type: "quote", bg: "css-gold", text: "The crack in the mask was the beginning of my healing.", src: "The Cracks Beneath the Surface" },
      { type: "cta", bg: "cover-journal", title: "The Cracks Don't Define You.", body: "7-day printable journal. My story, your pen, ten minutes a day. Link in bio.", note: "Start Day 1 tonight." },
    ],
    caption: `Healing didn't come to me as a lightning bolt. It came as a road: the cracks, the masks, the pain, the grace, the surrender, the rebuilding, the next step.

I turned that road into a 7-day reflection journal. Each day: a short reading from my story, the Scripture that carried me through it, two questions that ask real honesty, one small move, and a prayer.

Ten minutes a day. Print it or write on a tablet. Built for the person who is done pretending.

The Cracks Don't Define You: 7-Day Reflection Journal. Link in bio.

#ChristianJournal #RecoveryJournal #FaithJournaling #QuietTime #ChristianRecovery #Devotional #BibleStudy #SelfReflection #HealingJourney #Testimony #GraceWins #ChristianMen #NewRelease`,
  },
  {
    slug: "d3am-the-mask",
    day: "Wed", slot: "8:00 AM",
    goal: "Story: the mask (relatability + shares)",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "A true story", title: "Prison doesn't reward honesty. It rewards performance. So I performed." },
      { type: "quote", bg: "css-night", text: "Underneath all of that anger was a scared, lonely kid who just wanted to feel loved.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "wire-sunset.jpg", kicker: "Here is what nobody tells you", title: "The mask keeps people out. It also keeps the pain in.", body: "You cannot heal a wound you refuse to admit is there." },
      { type: "cta", bg: "cover-journal", title: "Day 2 of the journal is called The Masks.", body: "Seven days of taking it off, one honest page at a time. Link in bio.", note: "Share this with somebody who's still performing." },
    ],
    caption: `I wore a mask so long it stopped feeling like a mask. Class clown as a kid. Stone face in the courtroom. Convict on the yard. Different masks, same scared kid underneath.

Prison doesn't reward honesty. It rewards performance. So I performed for decades, and the performance nearly buried me. Because the mask keeps people out, but it keeps the pain in.

The crack in my mask didn't destroy me. It was the beginning of my healing.

What mask are you still wearing? Day 2 of my 7-day journal starts exactly there. Link in bio.

#TheMaskWeWear #ChristianRecovery #MentalHealthAndFaith #Authenticity #Testimony #HealingJourney #RecoveryIsPossible #ChristianMen #MensMentalHealth #GraceWins #PrisonMinistry #BeReal`,
  },
  {
    slug: "d3pm-stand-in-the-gap",
    day: "Wed", slot: "6:00 PM",
    goal: "Families audience + prayer cards",
    slides: [
      { type: "hook", bg: "css-night", kicker: "For the families", title: "To everyone praying for someone behind bars or inside an addiction:" },
      { type: "text", bg: "css-night", kicker: "I was the prayed-for one", title: "My mother stood in the gap for me for decades.", body: "Through the addiction, the arrest, the life sentence, the years I pushed her away." },
      { type: "quote", bg: "wire-sunset.jpg", text: "Your faith became the quiet force that stood between me and the grave more times than I can count.", src: "The dedication of my book, to my mom" },
      { type: "cta", bg: "cover-gap", title: "Stand in the Gap: 12 prayer cards for families.", body: "The night they don't call. The relapse. The courtroom. The homecoming. Link in bio.", note: "Send this to a praying mother. She needs to know it works." },
    ],
    caption: `From where my mother stood, nothing she prayed looked like it was working. I was sixteen with a life sentence, then a grown man with a needle, still inside.

It was working. Grace was moving under the surface years before it broke through. I am alive, home, and free because somebody would not stop praying.

If that somebody is you right now: I built you something. Twelve prayer cards for the moments families actually face. The night they don't call. The phone call from jail. The relapse. The long wait. The homecoming.

You can't save them. But you can stand between them and the dark and refuse to move.

Stand in the Gap Prayer Cards. Link in bio.

#PrayingMother #PrayerWarrior #AddictionFamily #PrisonFamily #StandInTheGap #IntercessoryPrayer #FaithFamily #PrayWithoutCeasing #ChristianMom #RecoveryFamily #HopeForFamilies #PrisonMinistry #PrayerWorks`,
  },
  {
    slug: "d4am-triggers-teaching",
    day: "Thu", slot: "8:00 AM",
    goal: "Save-bait teaching: 3 steps for cravings",
    slides: [
      { type: "hook", bg: "wire-sunset.jpg", kicker: "Recovery, straight talk", title: "A craving is not a command. It's a signal." },
      { type: "list", bg: "css-gold", kicker: "Three steps, five minutes", title: "When it hits:", items: ["1. Name the moment. What just happened, and what did I feel?", "2. Trace it back. The feeling is current. The wound is old.", "3. Tell the truth. Every trigger carries a lie. Answer it."] },
      { type: "text", bg: "css-dawn", kicker: "Why it works", title: "Patterns you can see are patterns you can beat.", body: "My triggers didn't start with drugs. They started with feelings I never learned to name." },
      { type: "cta", bg: "cover-stoprun", title: "Stop Running: the trigger and truth worksheet.", body: "Print a stack. Five honest minutes at a time. Link in bio.", note: "Save this for the next hard night." },
    ],
    caption: `Nobody relapses out of nowhere. There's always a moment before the moment: the feeling that hit, the wound it poked, the lie it whispered.

For most of my life I answered that moment by running: weed, meth, heroin, anger, anything that would keep me from feeling. Running worked for a minute, every time. That's why I kept doing it. But nobody outruns a wound.

What finally worked was slowing the moment down on paper: name it, trace it back, tell the truth about it. Five minutes. That practice is now a printable worksheet called Stop Running, and it's in my store. Link in bio.

Save this post for the next hard night. And if you're in the first 30 days right now, hold on. It gets stronger.

#RelapsePrevention #TriggerWarning #RecoveryTools #SobrietyTips #AddictionRecovery #ChristianRecovery #SoberLife #RecoveryIsPossible #OneDayAtATime #CopingSkills #CleanAndSober #RecoveryCommunity #SoberMovement`,
  },
  {
    slug: "d4pm-workbook",
    day: "Thu", slot: "6:00 PM",
    goal: "Product: 18-week workbook",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "The deep work", title: "Eighteen weeks of the work that actually set me free." },
      { type: "list", bg: "css-gold", kicker: "Unshackled Truth workbook", title: "The road, week by week:", items: ["Who God Is", "Identity in Christ", "Faith Over Fear", "Grace Over Shame", "Breaking Strongholds", "Overcoming Temptation", "Finishing the Race"] },
      { type: "quote", bg: "css-gold", text: "Then God stepped in. And when He did, He didn't just clean me up. He made me new.", src: "Unshackled Truth workbook" },
      { type: "cta", bg: "cover-workbook", title: "18 weeks. Fillable PDF. $9.99.", body: "Work it alone, with a mentor, or in a group. Link in bio.", note: "Tag a men's group that should run this together." },
    ],
    caption: `For 22 years I was trapped in addiction, destruction, and a lifestyle that was eating me alive. Programs didn't fix me. Willpower didn't fix me. The Word did, worked slowly, honestly, one week at a time.

That work became the Unshackled Truth workbook: 18 weekly studies moving from who God is, to who you actually are, to the strongholds that keep you stuck, to finishing the race. Every week: Scripture, the lies versus the truth, my own story from inside, real questions, and action steps.

Every page is fillable. Type your answers on a phone or tablet, or print it and write. Alone, with a mentor, or in a group.

$9.99. Link in bio. I'm living proof it works.

#BibleStudy #ChristianWorkbook #MensBibleStudy #FaithBasedRecovery #DiscipleshipTools #ChristianRecovery #BreakingStrongholds #IdentityInChrist #SpiritualGrowth #ChristianMen #RecoveryResources #PrisonMinistry #SmallGroupStudy`,
  },
  {
    slug: "d5am-the-miracle",
    day: "Fri", slot: "8:00 AM",
    goal: "Story: the 2016 deliverance (share-bait)",
    slides: [
      { type: "hook", bg: "css-gold", kicker: "September 2016", title: "Eighteen years of heroin. One prayer. Zero withdrawals." },
      { type: "text", bg: "css-night", kicker: "In a maximum security prison", title: "I had become a garbage disposal for anything that could help me forget.", body: "Heroin to check out. Meth to stay sharp. Anything to not feel." },
      { type: "quote", bg: "css-gold", text: "It wasn't my strength that carried me through. It was God's.", src: "The Cracks Beneath the Surface" },
      { type: "cta", bg: "book-cover.jpg", title: "If you think you're too far gone, read my story.", body: "Chapter One free. Link in bio.", note: "Share this with somebody on day zero." },
    ],
    caption: `I know how this sounds. I lived it anyway.

September 2016. A maximum security prison cell. Eighteen years of heroin addiction, on top of everything else I used to keep from feeling. I prayed, got honest with God, and got clean.

The withdrawal never came. Not one symptom. Ask anybody who has kicked: that is not how it goes. It wasn't my strength that carried me through. It was God's.

I stayed clean through five more years inside, through parole, through reentry. Clean since 2016.

I'm not promising God removes every withdrawal. I'm telling you what He did with a man everyone had written off, so you stop believing you're beyond reach.

The whole story: link in bio.

#DeliveredNotRecovered #TestimonyTime #GodStillMoves #AddictionRecovery #HeroinRecovery #CleanAndSober #ChristianRecovery #MiraclesHappen #JesusChangesLives #RecoveryIsPossible #FaithWorks #SoberTestimony #GraceWins`,
  },
  {
    slug: "d5pm-launch-point",
    day: "Fri", slot: "6:00 PM",
    goal: "Product: 30-day rebuilding planner",
    slides: [
      { type: "hook", bg: "css-dawn", kicker: "For reentry and early recovery", title: "Nobody hands you a map when the gate opens." },
      { type: "list", bg: "css-gold", kicker: "What kept me free", title: "Small things, kept daily:", items: ["The Word every morning", "Prayer with no filter", "One honest reach-out a day", "Boundaries with the old life", "Work done all the way", "A nightly gut check"] },
      { type: "text", bg: "css-dawn", kicker: "Launch Point", title: "30 days. Four fronts. One page a day.", body: "Foundation. Identity. People. Purpose." },
      { type: "cta", bg: "cover-launch", title: "Launch Point: the 30-day rebuilding planner.", body: "Built from what actually kept me free after 27 years inside. Link in bio.", note: "Know somebody coming home soon? Send them this." },
    ],
    caption: `The day I walked out, after 27 years, I had a trash bag of belongings and no map. Every rejection that followed (jobs, licenses, apartments) was an invitation back to the old way.

What kept me free wasn't motivation. It was structure: the Word every morning, honest prayer, honest people, small promises kept daily, boundaries that held, and a gut check every night.

I built all of it into Launch Point: a 30-day rebuilding planner. One page a day. Four weeks, four fronts: foundation, identity, people, purpose. Weekly reckonings keep score.

For the man or woman coming home, getting clean, or just done with the old way. Link in bio.

#Reentry #SecondChances #LifeAfterPrison #RecoveryPlanner #RebuildingLife #FormerlyIncarcerated #ReentryMatters #ChristianRecovery #NewBeginnings #30DayChallenge #DisciplineEqualsFreedom #PrisonReform #ComingHome`,
  },
  {
    slug: "d6am-question",
    day: "Sat", slot: "8:00 AM",
    goal: "Engagement: comments + community",
    slides: [
      { type: "hook", bg: "css-dawn", kicker: "Real question", title: "What's the one thing you'd leave behind, if you knew you actually could?" },
      { type: "text", bg: "css-gold", kicker: "I'll go first", title: "I left the mask, the needle, and the man I thought I had to be.", body: "It took surrender, not strength." },
      { type: "text", bg: "wire-sunset.jpg", kicker: "Your turn", title: "Comment one word.", body: "Somebody scrolling these comments needs to see they are not the only one carrying it." },
      { type: "cta", bg: "wire-sunset.jpg", title: "Whatever you named, it has a next step.", body: "Free chapter, free reflection, real tools. Link in bio.", note: "One word. Drop it below." },
    ],
    caption: `One word. What would you leave behind if you knew you actually could?

Shame. Anger. The bottle. The image. The grudge. The fear. I'll go first: I left the mask, the needle, and the man I thought I had to be. It took surrender, not strength, and it took longer than I wanted. But I left them.

Drop your word below. Then scroll the comments and pray for one stranger's word. That's church.

Whatever you named, there's a free place to start in my bio.

#RecoveryCommunity #ChristianCommunity #LetItGo #Surrender #FaithOverFear #RecoveryIsPossible #OneWord #PrayForEachOther #ChristianRecovery #HealingJourney #Testimony #GraceWins`,
  },
  {
    slug: "d6pm-before-after",
    day: "Sat", slot: "6:00 PM",
    goal: "THE transformation post: real photos, max shares",
    slides: [
      { type: "split", topImg: "chris-at-16.jpg", bottomImg: "chris-now.jpg", kicker: "1999 / 2026", title: "The boy they sentenced to die in prison. The man God walked out." },
      { type: "photo", bg: "chris-at-16.jpg", kicker: "1999", title: "Sixteen. Murder conviction. Life sentence.", body: "The paper printed my name and closed the book." },
      { type: "photo", bg: "chris-now.jpg", kicker: "2026", title: "Home. Free. Forgiven.", body: "Clean since 2016. Building a life that pulls people out of the dark." },
      { type: "cta", bg: "book-cover.jpg", title: "No one is too far gone. Not even you.", body: "The whole story: link in bio.", note: "Share this. Somebody needs the proof today." },
    ],
    caption: `Same person. Both photos.

The first one ran in a newspaper in 1999, next to the word murder. Sixteen years old, headed to a life sentence in an adult prison. Everyone who saw that photo closed the book on that kid, and honestly, so did he.

The second one is this year. Home. Free. Clean since 2016. Engaged to the love of my life, building Unshackled Truth Media, and spending my days trying to reach the people still where I was.

The distance between these two photos is not willpower. It's grace. Twenty-seven years, one surrendered life, and a God who never lost the file.

No one is too far gone. Not you. Not the person you're praying for. Share this if you believe that.

Full story: link in bio.

#BeforeAndAfter #Transformation #Testimony #SecondChances #GodStillMoves #FormerlyIncarcerated #RedemptionStory #JesusChangesLives #RecoveryIsPossible #GraceWins #PrisonMinistry #HopeIsReal #NeverTooFarGone`,
  },
  {
    slug: "d7am-scripture-set",
    day: "Sun", slot: "8:00 AM",
    goal: "Scripture save-set (saves + shares)",
    slides: [
      { type: "hook", bg: "wire-sunset.jpg", kicker: "Sunday strength", title: "Five verses that did 27 years with me." },
      { type: "verse", bg: "css-night", text: "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", ref: "Psalm 34:18" },
      { type: "verse", bg: "css-gold", text: "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", ref: "2 Corinthians 5:17" },
      { type: "cta", bg: "css-dawn", title: "Save these for the hard nights.", body: "Twelve more verses like this, printed and cut-ready, in the Faith Over Fear card pack. Link in bio.", note: "Send one of these verses to somebody today." },
    ],
    caption: `Five verses did 27 years with me. They were written on my cell wall, in my Bible margins, and eventually on my heart:

Psalm 34:18. God stays close to the broken. I tested it. He does.
2 Corinthians 5:17. New creature. Old things passed away. My whole testimony in one verse.
Romans 8:1. No condemnation. Shame's full stop.
Psalm 56:3. When I am afraid, I put my trust in You. Fear's answer.
Jeremiah 29:11. An expected end. Hope with God's signature on it.

Save this post for the hard nights. Send one verse to somebody carrying something heavy today.

And if you want them in your hands: the Faith Over Fear truth cards are printable, cut-ready, and in my store. Link in bio.

#SundayScripture #BibleVerses #Psalm3418 #Romans81 #FaithOverFear #ScriptureMemory #ChristianRecovery #VerseOfTheDay #BibleTruth #PrisonMinistry #HopeInGod #ChristianEncouragement #WordOfGod`,
  },
  {
    slug: "d7pm-your-turn",
    day: "Sun", slot: "6:00 PM",
    goal: "Altar call + speaking/community CTA",
    slides: [
      { type: "hook", bg: "css-storm", kicker: "Read this twice", title: "You're not reading this by accident." },
      { type: "quote", bg: "css-gold", text: "You are not too far gone. You're not too broken, too angry, nor too ashamed. You're not beyond healing or hope.", src: "The Cracks Beneath the Surface" },
      { type: "text", bg: "css-gold", kicker: "The turn", title: "Something has to change, and it isn't your past.", body: "It's your posture. God is not looking for your performance. He's waiting for your surrender." },
      { type: "cta", bg: "css-dawn", title: "It's your turn now.", body: "Start with Chapter One, free. And if my story would serve your church, group, or prison ministry, I speak. Link in bio.", note: "Send this to the one you've been praying for." },
    ],
    caption: `Maybe you've been breaking for a while and hiding it well. Maybe you're stuck, or numb, or chasing something that keeps moving. I spent decades in all of those rooms.

So hear me say it the way I wish someone had said it to me: you are not too far gone. Not too broken, too angry, or too ashamed. Not beyond healing or hope.

Something has to change, and it isn't your past. It's your posture. At first it feels like everything is falling apart. What's actually happening is the lies are breaking off.

Start where I did: honest with God, one page at a time. Chapter One of my story is free in my bio.

And to the pastors, chaplains, and recovery leaders here: I share this testimony live. Churches, recovery groups, prisons, reentry programs. Booking link in bio.

It's your turn now.

#ItsYourTurn #AltarCall #Testimony #ChristianSpeaker #PrisonMinistry #RecoveryMinistry #ChurchEvents #SecondChances #JesusChangesLives #ChristianRecovery #HopeIsReal #Surrender #GraceWins`,
  },
];
