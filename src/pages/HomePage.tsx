import React from 'react';
import { categories } from '../data/categories';
import CategoryCard from '../components/CategoryCard';
import { Sparkles, Heart, Search, Globe, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const moods = [
  { id: 'lost', title: 'Feeling Lost', icon: '🧭', stories: ['Nachiketa', 'Satyakama'] },
  { id: 'heartbreak', title: 'Heartbreak & Healing', icon: '💔', stories: ['Shiva & Sati', 'Meera\'s longing'] },
  { id: 'strength', title: 'Seeking Strength', icon: '💪', stories: ['Durga\'s victory', 'Hanuman\'s courage'] },
  { id: 'wonder', title: 'Wonder & Awe', icon: '✨', stories: ['Vishnu\'s Vamana form', 'Tridev'] },
  { id: 'peace', title: 'Peace & Stillness', icon: '🧘', stories: ['Tapasya tales', 'Shiva\'s silence'] }
];

const hiddenGems = [
  { id: 'rare', title: 'Rare Gems', description: 'Stories you\'ve probably never heard' },
  { id: 'maharashtra', title: 'Folk Tales from Maharashtra', description: 'Rich cultural heritage' },
  { id: 'northeast', title: 'Tribal Myths from Northeast', description: 'Ancient wisdom' },
  { id: 'queens', title: 'Forgotten Queens', description: 'Women of Dharma' },
  { id: 'oral', title: 'Oral Legends', description: 'Bhil, Gond & Tamil traditions' }
];

const languages = [
  { code: 'mr', name: 'Marathi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'bh', name: 'Bhojpuri' },
  { code: 'bn', name: 'Bengali' },
  { code: 'kn', name: 'Kannada' },
  { code: 'hi', name: 'Hindi' },
  { code: 'en', name: 'English' },
  { code: 'sa', name: 'Sanskrit' }
];

const trending = [
  { id: 'featured', title: 'Featured this week', icon: '🌟' },
  { id: 'retellings', title: 'Trending Retellings', icon: '📚' },
  { id: 'personalized', title: 'Based on your past listens', icon: '🎯' },
  { id: 'folk', title: 'Recently uncovered folk tales', icon: '📜' }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen container mx-auto bg-katha-bg pt-4 pb-20">
      <header className="px-4 mb-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center">
            <img src="/kaa-symbol.png" alt="Katha" className="w-10 h-10 mr-2" />
            <h1 className="text-3xl font-bold text-katha-primary">Katha</h1>
          </div>
          {/* <p className="text-sm text-katha-secondary opacity-70">Mythology in Reels</p> */}
        </motion.div>
        
        <motion.p 
          className="mt-2 text-katha-secondary opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Explore the timeless stories of Indian mythology
        </motion.p>
      </header>

      {/* Moods & Emotions Section */}
      <section className="mb-8">
        <div className="px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="text-katha-primary mr-2" size={20} />
            <h2 className="text-xl font-semibold text-katha-primary">Moods & Emotions</h2>
          </div>
          <ChevronRight className="text-katha-secondary" size={20} />
        </div>
        <div className="overflow-x-auto flex px-2 pb-4 no-scrollbar">
          {moods.map((mood, index) => (
            <motion.div
              key={mood.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-shrink-0 w-48 mr-3"
            >
              <div className="bg-katha-secondary/10 rounded-xl p-4 h-full">
                
                <h3 className="text-katha-primary font-medium mb-1">{mood.title}</h3>
                <p className="text-sm text-katha-secondary">
                  {mood.stories.join(' • ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hidden Gems Section */}
      <section className="mb-8">
        <div className="px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <Search className="text-katha-primary mr-2" size={20} />
            <h2 className="text-xl font-semibold text-katha-primary">Hidden Gems & Lost Lore</h2>
          </div>
          <ChevronRight className="text-katha-secondary" size={20} />
        </div>
        <div className="px-4">
          <div className="grid grid-cols-2 gap-3">
            {hiddenGems.map((gem, index) => (
              <motion.div
                key={gem.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-katha-secondary/10 rounded-xl p-4"
              >
                <h3 className="text-katha-primary font-medium mb-1">{gem.title}</h3>
                <p className="text-sm text-katha-secondary">{gem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="mb-8">
        <div className="px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <Globe className="text-katha-primary mr-2" size={20} />
            <h2 className="text-xl font-semibold text-katha-primary">By Language / Region</h2>
          </div>
          <ChevronRight className="text-katha-secondary" size={20} />
        </div>
        <div className="px-4">
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <motion.button
                key={lang.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="px-3 py-1.5 bg-katha-secondary/10 rounded-full text-katha-primary text-sm hover:bg-katha-secondary/20 transition-colors"
              >
                {lang.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="mb-8">
        <div className="px-4 mb-3 flex items-center justify-between">
          <div className="flex items-center">
            <Clock className="text-katha-primary mr-2" size={20} />
            <h2 className="text-xl font-semibold text-katha-primary">Timeless & Trending</h2>
          </div>
          <ChevronRight className="text-katha-secondary" size={20} />
        </div>
        <div className="px-4">
          <div className="grid grid-cols-2 gap-3">
            {trending.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-katha-secondary/10 rounded-xl p-4"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="text-katha-primary font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="mb-8">
        <div className="px-4 mb-3">
          <h2 className="text-xl font-semibold text-katha-primary">Featured Categories</h2>
        </div>
        <div className="overflow-x-auto flex px-2 pb-4 no-scrollbar">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Did You Know Section */}
      <section className="px-4">
        <div className="bg-gradient-to-r from-katha-secondary/20 to-katha-primary/20 rounded-xl p-4">
          <h2 className="text-lg font-semibold text-katha-primary mb-2">Did You Know?</h2>
          <p className="text-sm text-katha-secondary opacity-80">
            The Mahabharata is one of the longest epic poems ever written, 
            containing over 100,000 verses and nearly 1.8 million words.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;