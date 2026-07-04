import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, TrendingUp, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const popularEpisodes = [
  {
    id: 1,
    titleKey: 'popular.episode1.title',
    descriptionKey: 'popular.episode1.description',
    thumbnail: 'https://img.youtube.com/vi/li6ymY_1TpQ/maxresdefault.jpg',
    videoId: 'li6ymY_1TpQ',
    duration: '48:30',
    views: '130K+',
    url: 'https://youtu.be/li6ymY_1TpQ?si=uJugH4L8EErfaHKI'
  },
  {
    id: 2,
    titleKey: 'popular.episode2.title',
    descriptionKey: 'popular.episode2.description',
    thumbnail: 'https://img.youtube.com/vi/I4fkxdbVgL0/maxresdefault.jpg',
    videoId: 'I4fkxdbVgL0',
    duration: '55:15',
    views: '120K+',
    url: 'https://youtu.be/I4fkxdbVgL0?si=EKDnRhpWs2KdXpXe'
  },
  {
    id: 3,
    titleKey: 'popular.episode3.title',
    descriptionKey: 'popular.episode3.description',
    thumbnail: 'https://img.youtube.com/vi/gR0VCYEiVkM/maxresdefault.jpg',
    videoId: 'gR0VCYEiVkM',
    duration: '42:20',
    views: '70K+',
    url: 'https://youtu.be/gR0VCYEiVkM?si=ryMeXNOB1sM2j0kq'
  }
];

export function PopularEpisodesSection() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<typeof popularEpisodes[0] | null>(null);

  return (
    <section id="popular" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#5a4a3a] mb-4">{t('popular.title')}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {popularEpisodes.map((episode, index) => (
            <motion.div
              key={episode.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => setActiveVideo(episode)}
              className="bg-[#f5f1e8] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group cursor-pointer relative"
            >
              {/* Ranking Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                className="absolute top-4 left-4 z-10 w-10 h-10 bg-[#5a4a3a] text-[#d4c5a9] rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-lg">#{index + 1}</span>
              </motion.div>

              <div className="relative aspect-video overflow-hidden">
                <img
                  src={episode.thumbnail}
                  alt={t(episode.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#d4c5a9] rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-[#5a4a3a] ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 bg-[#5a4a3a]/90 text-[#d4c5a9] px-2 py-1 rounded text-sm flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {episode.views} {t('popular.views')}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-[#5a4a3a] mb-2">{t(episode.titleKey)}</h3>
                <p className="text-[#5a4a3a]/70">{t(episode.descriptionKey)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1208] rounded-2xl overflow-hidden shadow-2xl w-full max-w-3xl"
            >
              {/* Player */}
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                  title={t(activeVideo.titleKey)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Footer */}
              <div className="p-4 flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[#d4c5a9] font-semibold truncate">{t(activeVideo.titleKey)}</h3>
                  <p className="text-[#d4c5a9]/60 text-sm truncate">{t(activeVideo.descriptionKey)}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    YouTube
                  </a>
                  <button
                    onClick={() => setActiveVideo(null)}
                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#5a4a3a] hover:bg-[#6b5a48] text-[#d4c5a9] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
