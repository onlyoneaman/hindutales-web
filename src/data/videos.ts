import { VideoReel } from '../types';

export const videos: VideoReel[] = [
  {
    id: 'v1',
    title: 'Bhishma\'s Vow',
    description: 'A tale of unmatched devotion and sacrifice, where Bhishma pledges lifelong celibacy to protect his father\'s promise.',
    category: 'mahabharata',
    videoUrl: '/videos/2.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4'],
    shares: 32
  },
  {
    id: 'v2',
    title: 'Abhimanyu\'s Chakravyuh',
    description: 'The brave prince enters a deadly war formation he knows how to enter but not exit, displaying courage against all odds.',
    category: 'krishna',
    videoUrl: '/videos/1.mp4',
    likes: 2403,
    comments: 156,
    related: ['v1', 'v3', 'v4', 'v5'],
    shares: 78
  },
  {
    id: 'v3',
    title: 'Narasimha\'s Doorstep Kill',
    description: 'A demon king is slain by Narasimha, a half-man, half-lion incarnation of Vishnu, in his own home.',
    category: 'god-vishnu',
    videoUrl: '/videos/4.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v4', 'v5'],
    shares: 32
  },
  {
    id: 'v4',
    title: 'Ganga\'s Silent Sacrifice',
    description: 'A tale of unmatched devotion and sacrifice, where Bhishma pledges lifelong celibacy to protect his father\'s promise.',
    category: 'ramayana',
    videoUrl: '/videos/3.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v5'],
    shares: 32
  },
  {
    id: 'v5',
    title: 'Prahlad and Hiranyakashipu',
    description: 'Prahlad, a devout devotee of Lord Vishnu, faces persecution from his father Hiranyakashipu, who seeks to destroy him. Despite his father\'s attempts to kill him, Prahlad remains steadfast in his devotion to Vishnu, who ultimately rescues him.',
    category: 'god-vishnu',
    videoUrl: '/videos/Prahlad and Hiranyakashipu.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4'],
    shares: 32
  },
  {
    id: 'v6',
    title: 'Ekalavya\'s Thumb',
    description: 'A story of betrayal and redemption, where Ekalavya, a skilled archer, sells his thumb to a Brahmin sage to learn the art of archery, only to be betrayed by his guru.',
    category: 'mahabharata',
    videoUrl: '/videos/Ekalavya Thumb.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4', 'v5'],
    shares: 32
  },
  {
    id: 'v7',
    title: 'Charan Kanya',
    description: 'A story of devotion and sacrifice, where a young girl named Charan Kanya, who is devoted to Lord Krishna, faces persecution from her father, who seeks to destroy her. Despite his attempts to kill her, Charan Kanya remains steadfast in her devotion to Krishna, who ultimately rescues her.',
    category: 'krishna',
    videoUrl: '/videos/charan kanya.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4', 'v5', 'v6'],
    shares: 32
  },
  {
    id: 'v8',
    title: 'The Clever Weaver',
    description: 'A story of wit and justice, where a poor weaver promises a magical turban to a greedy king, but cleverly uses wit to expose the king\'s greed and injustice.',
    category: 'folk-tales',
    videoUrl: '/videos/The Clever Weaver.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4', 'v5', 'v6', 'v7'],
    shares: 32
  },
  {
    id: 'v9',
    title: 'King Shibi\'s Test',
    description: 'King Shibi tests his son\'s devotion to his father\'s promise.',
    category: 'folk-tales',
    videoUrl: '/videos/King Shibi’s Test.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4', 'v5', 'v6', 'v7', 'v8'],
    shares: 32
  }
  // {
  //   id: 'v5',
  //   title: 'Bhishma\'s Vow',
  //   description: 'A tale of unmatched devotion and sacrifice, where Bhishma pledges lifelong celibacy to protect his father\'s promise.',
  //   category: 'ramayana',
  //   videoUrl: '/videos/1.mp4',
  //   likes: 1542,
  //   comments: 87,
  //   related: ['v2', 'v3', 'v4', 'v5'],
  //   shares: 32
  // }
];