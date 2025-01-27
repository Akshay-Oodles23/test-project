import { Post } from "../types/types";

const mockPosts: Post[] = [
  {
    id: "1",
    title: "✨",
    content: "His mother had always taught him humility. But the stupidity of the group he was talking to made him change his mind.",
    hashtag: ["history", "american", "crime"],
    reactions: {
      likes: "192",
      comments: "25",
      shares: "30"
    },
    comments: [
      {
        id: "c1",
        content: "✨ This is a powerful message about humility.",
        replies: [
          {
            id: "c1r1",
            content: "✨ Absolutely! Humility is a rare trait these days.",
            replies: []
          }
        ]
      },
      {
        id: "c2",
        content: "✨ I disagree with the way this was framed.",
        replies: []
      }
    ]
  },
  {
    id: "2",
    title: "✨",
    content: "He was an expert in forming the perfect ice-cream cone, a skill not fully appreciated by anyone.",
    hashtag: ["french", "fiction", "english"],
    reactions: {
      likes: "859",
      comments: "32",
      shares: "40"
    },
    comments: [
      {
        id: "c3",
        content: "✨ This reminds me of my ice cream obsession. It's harder than it looks!",
        replies: []
      }
    ]
  },
  {
    id: "3",
    title: "✨",
    content: "Dave watched the forest burn, hoping he remembered everything important while waiting for Marta.",
    hashtag: ["magical", "history", "french"],
    reactions: {
      likes: "1448",
      comments: "39",
      shares: "50"
    },
    comments: [
      {
        id: "c4",
        content: "✨ What a tragic situation. I can feel the tension.",
        replies: []
      },
      {
        id: "c5",
        content: "✨ It's a scary thought, not being prepared for something like that.",
        replies: []
      }
    ]
  },
  {
    id: "4",
    title: "✨",
    content: "All he wanted was a candy bar, but the clerk was frozen in fear of the gun pointed at his face.",
    hashtag: ["mystery", "english", "american"],
    reactions: {
      likes: "359",
      comments: "18",
      shares: "25"
    },
    comments: [
      {
        id: "c6",
        content: "✨ That's one way to get a candy bar. Unbelievable!",
        replies: []
      }
    ]
  }
];

export default mockPosts;
