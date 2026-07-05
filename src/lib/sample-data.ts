import type { Post, Letter, Story } from "./types";

/**
 * Sample content so the site looks finished immediately and runs with no CMS
 * configured. Once Sanity is connected (see README), real content from the
 * dashboard is used instead and this file is ignored. You can safely delete or
 * edit these entries — they are placeholders written to feel true to the theme.
 */

export const samplePosts: Post[] = [
  {
    slug: "the-first-night",
    title: "The First Night",
    excerpt:
      "Nobody tells you how loud a cell block gets at 3 a.m., or how quiet your own head can be underneath all of it.",
    category: "Life Inside",
    date: "2026-06-18",
    readingMinutes: 5,
    featured: true,
    bodyHtml: `
      <p>They processed me at eleven at night. By the time the door rolled shut behind me, the block had that particular kind of loud that isn't really sound at all — it's a hundred men breathing in the same concrete room.</p>
      <p>I sat on the bunk and I did the math of my sentence for the first time. Not the number the judge said. The real math. The birthdays. The funerals I'd miss. The version of me that walked in here, and whether he'd be the one who walked out.</p>
      <blockquote>You can lose your freedom in an afternoon. Getting your self back takes a lot longer than the sentence.</blockquote>
      <p>I'm writing these down because somebody in a cell tonight needs to know the first night is survivable. It is not the end of your story. It might, strangely, be the first honest page of it.</p>
    `,
  },
  {
    slug: "who-god-is-in-a-cage",
    title: "Who God Is In a Cage",
    excerpt:
      "I didn't find faith in a chapel. I found it on a bottom bunk when I had run completely out of myself.",
    category: "Faith & God",
    date: "2026-05-30",
    readingMinutes: 6,
    bodyHtml: `
      <p>People assume prison religion is a hustle — a good-behavior costume you put on for the parole board. Some of it is. But some of it is the realest thing that ever happened to a man.</p>
      <p>I had spent my whole life running. From my father, from the truth about myself, from every room I walked into. There is nowhere left to run in a six-by-eight cell. That's the point where a lot of men either break or begin.</p>
      <p>I began. Not with lightning. With a quiet decision to stop lying to myself for one single day, and then to try it again the next.</p>
    `,
  },
  {
    slug: "learning-to-be-free",
    title: "Learning to Be Free",
    excerpt:
      "Getting out is not the same as being free. The walls I built inside me didn't fall when the gate opened.",
    category: "The Free World",
    date: "2026-05-12",
    readingMinutes: 7,
    bodyHtml: `
      <p>The first time I walked into a grocery store after my release, I froze in the cereal aisle. Fifty kinds of the same thing. Ten years of no choices, and now the freedom to choose was its own kind of overwhelming.</p>
      <p>Freedom is a skill. Nobody hands it to you at the gate. You practice it — small choices, honest ones, one after another — until the man who couldn't be trusted with a decision becomes a man his family can lean on.</p>
    `,
  },
  {
    slug: "the-day-i-stopped-counting",
    title: "The Day I Stopped Counting",
    excerpt:
      "For years I measured my life in days clean. Then I learned to measure it in who I was becoming instead.",
    category: "Recovery",
    date: "2026-04-20",
    readingMinutes: 4,
    bodyHtml: `
      <p>Early recovery, you count everything. Days, hours, meetings. You white-knuckle the calendar because the number is the only proof you have that you're changing.</p>
      <p>Then one morning I realized I hadn't checked the count in a week — not because I'd relapsed, but because I'd finally started living instead of surviving. The number had done its job. It walked me to a life I no longer had to count my way through.</p>
    `,
  },
];

export const sampleLetters: Letter[] = [
  {
    slug: "letter-marcus",
    fromName: "Marcus, age 34",
    fromLocation: "State Correctional Facility",
    date: "2026-06-01",
    excerpt:
      "Your book made it around our whole block. Guys who don't read anything read yours. Thank you for telling the truth.",
    bodyHtml: `
      <p>I've been down nine years with four to go. Somebody's family sent your book in and it made it around the whole block. Guys who don't read anything read yours.</p>
      <p>What got me is you didn't clean it up to make yourself look good. You told the truth about who you were. That's the first book in here that felt like it was written by one of us and not about us.</p>
      <p>I started going to the chapel again. First time in six years. Just wanted you to know the words got in.</p>
    `,
  },
  {
    slug: "letter-anonymous",
    fromName: "A brother inside",
    date: "2026-05-08",
    excerpt:
      "I read the chapter about your first night three times. I needed to know somebody made it out the other side.",
    bodyHtml: `
      <p>I don't have the words you have, so I'll keep it short. I read the chapter about your first night three times. I needed to know somebody made it out the other side and turned into something.</p>
      <p>Keep writing them. We're reading in here even when nobody thinks we are.</p>
    `,
  },
];

export const sampleStories: Story[] = [
  {
    slug: "story-dana",
    name: "Dana",
    milestone: "5 years sober",
    date: "2026-06-10",
    excerpt:
      "I heard you speak at a recovery meeting and it was the first time I believed a person like me could get their kids back.",
    bodyHtml: `
      <p>I heard you speak at a recovery meeting eighteen months into my own journey. I was doing the work but I didn't believe in it yet — I was just going through the motions and waiting to fail.</p>
      <p>You said the thing about freedom being a skill you practice, not a gift you're handed. Something clicked. I stopped waiting to relapse and started building a life worth staying sober for.</p>
      <p>I got my kids back in the spring. Five years this month. Thank you for going first so people like me could see the path.</p>
    `,
  },
  {
    slug: "story-ray",
    name: "Ray",
    milestone: "2 years clean",
    date: "2026-04-02",
    excerpt:
      "Twenty years in and out of the system. Your story was the first one that didn't feel like a lie told to inmates.",
    bodyHtml: `
      <p>Twenty years in and out of the system. I've sat through every program, heard every speaker, nodded at every slogan. Your story was the first one that didn't feel like a lie told to inmates by people who'd never been in one.</p>
      <p>Two years clean now. Working. Sponsoring a younger guy who reminds me of me. That's how it moves — one man at a time.</p>
    `,
  },
];
