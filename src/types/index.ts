export interface Category {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoPreview: string;
}

export interface VideoReel {
  id: string;
  title: string;
  description: string;
  category: string;
  videoUrl: string;
  likes: number;
  comments: number;
  related : string[]
  shares: number;
}