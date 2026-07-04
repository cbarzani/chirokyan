import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Youtube, MousePointerClick, X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const videos = [
  {
    id: 1,
    titleKey: 'videos.episode1.title',
    descriptionKey: 'videos.episode1.description',
    thumbnail: 'https://img.youtube.com/vi/i__0EMMJiyY/maxresdefault.jpg',
    videoId: 'i__0EMMJiyY',
    duration: '45:22',
    url: 'https://youtu.be/i__0EMMJiyY?si=5Mt-KTJ9Frxb2Wn7'
  },
  {
    id: 2,
    titleKey: 'videos.episode2.title',
    descriptionKey: 'videos.episode2.description',
    thumbnail: 'https://img.youtube.com/vi/WmY2Qre2GE4/maxresdefault.jpg',
    videoId: 'WmY2Qre2GE4',
    duration: '45:22',
    url: 'https://youtu.be/WmY2Qre2GE4?si=Zkib4uNSdm_bRBD3'
  },
  {
    id: 3,
    titleKey: 'videos.episode3.title',
    descriptionKey: 'videos.episode3.description',
    thumbnail: 'https://img.youtube.com/vi/hLs2tMZCbeg/maxresdefault.jpg',
    videoId: 'hLs2tMZCbeg',
    duration: '45:22',
    url: 'https://youtu.be/hLs2tMZCbeg?si=Z2JU56Zj3Ba4dHEQ'
  }
];

export function VideosSection() {
  const { t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);

  return (
    <section id="videos" className="py-20 bg-[#f5f1e8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl text-[#5a4a3a] mb-4">{t('videos.title')}</h2>
          <p className="text-[#5a4a3a]/70 max-w-2xl mx-auto">
            {t('videos.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={t(video.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 brightness-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 bg-[#d4c5a9] rounded-full flex items-center justify-center">
                    <Play className="w-8 h-8 text-[#5a4a3a] ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl text-[#5a4a3a] mb-2">
                  {t(video.descriptionKey)}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#5a4a3a] to-[#6a5a4a] rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
            <Youtube className="w-12 h-12 text-[#d4c5a9] mx-auto mb-4" />
            <h3 className="text-2xl text-[#d4c5a9] mb-3">{t('videos.viewAll')}</h3>
            <motion.a
              href="https://youtube.com/@chirokyan?si=oew1jpOkdDxYJad0"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#d4c5a9] text-[#5a4a3a] rounded-xl hover:bg-[#e4d5b9] transition-all shadow-lg hover:shadow-xl"
            >
              <Youtube className="w-5 h-5" />
              <span><MousePointerClick className="w-5 h-5 inline mr-1" />{t('videos.watchAll')}</span>
            </motion.a>
          </div>
        </motion.div>
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
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1&rel=0`}
                  title={t(activeVideo.titleKey)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

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
