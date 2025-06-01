import { VideoReel } from '../types';

export const videos: VideoReel[] = [
  {
    id: 'v1',
    title: 'Bhishma\'s Vow',
    description: 'A tale of unmatched devotion and sacrifice, where Bhishma pledges lifelong celibacy to protect his father\'s promise.',
    category: 'ramayana',
    videoUrl: '/videos/2.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4', 'v5'],
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
    category: 'ramayana',
    videoUrl: '/videos/4.mp4',
    likes: 1542,
    comments: 87,
    related: ['v2', 'v3', 'v4', 'v5'],
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
    related: ['v2', 'v3', 'v4', 'v5'],
    shares: 32
  },
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