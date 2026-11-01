import { useEffect, useState } from 'react';
import { BookOpen, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import {
  BOOK_NOTES,
  SOUND_TRACKS,
  VISUAL_ASSETS,
  type BookNote,
  type SoundTrack,
} from '../data/profileData';
import { ambientEngine } from '../utils/ambientAudio';

export function SanctuarySection() {
  const [selectedBook, setSelectedBook] = useState<BookNote>(BOOK_NOTES[0]);
  const [activeTrack, setActiveTrack] = useState<SoundTrack>(SOUND_TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.45);
  const [isMuted, setIsMuted] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    return () => {
      ambientEngine.stop();
    };
  }, []);

  const handleTogglePlay = (trackToPlay: SoundTrack = activeTrack) => {
    if (isPlaying && activeTrack.id === trackToPlay.id) {
      ambientEngine.stop();
      setIsPlaying(false);
    } else {
      setActiveTrack(trackToPlay);
      ambientEngine.setVolume(isMuted ? 0 : volume);
      ambientEngine.startTrack(trackToPlay);
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (nextVal: number) => {
    setVolume(nextVal);
    if (nextVal > 0 && isMuted) {
      setIsMuted(false);
    }
    ambientEngine.setVolume(nextVal);
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    ambientEngine.setVolume(nextMuted ? 0 : volume);
  };

  return (
    <section id="sanctuary" className="py-16 sm:py-24 scroll-mt-16 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Section Intro */}
        <div className="max-w-3xl space-y-2.5">
          <p className="text-xs font-semibold text-teal-800">
            04. Sở thích & Thế giới nội tâm
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950">
            Đọc sách, nghe nhạc và trân trọng khoảng thời gian ở một mình
          </h2>
          <p className="text-[15px] text-slate-600 leading-relaxed">
            Nếu năm ngày đứng cửa hàng tạp hóa và hai ngày đi học cuối tuần là lúc mình hướng ra thế giới bên ngoài, thì buổi tối yên ắng trong phòng riêng là lúc mình sống trọn cho chính mình — lật chậm vài trang sách, bật một giai điệu êm và tận hưởng sự tĩnh lặng.
          </p>
        </div>

        {/* Split Layout: Left = Interactive Reading Notes, Right = Ambient Soundscape & Solitude */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Reading Corner */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
                <div className="space-y-0.5">
                  <h3 className="text-lg font-bold text-slate-950">Góc đọc sách của Kathy</h3>
                  <p className="text-xs text-slate-500">
                    Chọn một tựa sách để xem trích dẫn và cảm nhận riêng của mình
                  </p>
                </div>
                <BookOpen className="w-5 h-5 text-teal-800 shrink-0" aria-hidden="true" />
              </div>

              {/* Book Selector List */}
              <div className="divide-y divide-slate-100">
                {BOOK_NOTES.map((book, idx) => {
                  const isSelected = selectedBook.id === book.id;
                  return (
                    <button
                      key={book.id}
                      type="button"
                      onClick={() => setSelectedBook(book)}
                      className={`w-full text-left py-3.5 px-3 -mx-3 rounded-xl transition-colors duration-150 flex items-baseline justify-between gap-4 cursor-pointer ${
                        isSelected
                          ? 'bg-teal-50/70 text-slate-950'
                          : 'hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-baseline gap-3 min-w-0">
                        <span className="font-mono text-xs font-semibold text-teal-800 tabular-nums shrink-0">
                          0{idx + 1}.
                        </span>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold truncate">{book.title}</p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {book.author} · {book.theme}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-teal-800 whitespace-nowrap shrink-0">
                        {isSelected ? 'Đang mở' : 'Đọc ghi chú'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Book Reflection Pane */}
            <div className="pt-6 border-t border-slate-200/80 space-y-3">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                <span className="font-semibold text-slate-800">{selectedBook.title}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedBook.yearNote}</span>
              </div>
              <blockquote className="font-serif italic text-base sm:text-lg text-slate-900 leading-relaxed">
                “{selectedBook.favoriteQuote}”
              </blockquote>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedBook.personalTakeaway}
              </p>
            </div>
          </div>

          {/* Music & Solitude Soundscape Player with Cozy Visual Header */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-slate-100 overflow-hidden flex flex-col justify-between">
            <div>
              {!imgError && (
                <div className="h-44 w-full overflow-hidden relative bg-slate-800">
                  <img
                    src={VISUAL_ASSETS.readingSanctuary}
                    alt="Góc đọc sách và nghe nhạc buổi tối của Kathy"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                </div>
              )}

              <div className="p-6 sm:p-7 space-y-5">
                <div className="space-y-1.5 pb-4 border-b border-slate-800">
                  <p className="text-xs font-medium text-teal-300 tracking-wide">
                    Giai điệu & Không gian một mình
                  </p>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Bật một bản hòa âm dịu nhẹ
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed tracking-wide">
                    Âm thanh hòa tấu mộc mạc tái hiện không khí yên ả mà mình yêu thích mỗi tối sau khi khép cửa hàng.
                  </p>
                </div>

                {/* Track List */}
                <div className="space-y-2">
                  {SOUND_TRACKS.map((track) => {
                    const isCurrent = activeTrack.id === track.id;
                    const isTrackPlaying = isCurrent && isPlaying;
                    return (
                      <button
                        key={track.id}
                        type="button"
                        onClick={() => handleTogglePlay(track)}
                        className={`w-full text-left p-3 rounded-xl transition-colors duration-150 flex items-center justify-between gap-3 cursor-pointer ${
                          isCurrent
                            ? 'bg-slate-800 text-white'
                            : 'hover:bg-slate-800/60 text-slate-300'
                        }`}
                      >
                        <div className="min-w-0 space-y-0.5">
                          <p className="text-sm font-semibold truncate tracking-wide">
                            {track.title}
                          </p>
                          <p className="text-xs text-slate-400 truncate">
                            {track.mood} · {track.tempoLabel}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 whitespace-nowrap shrink-0">
                          {isTrackPlaying ? (
                            <>
                              <Pause className="w-4 h-4" />
                              <span>Tạm dừng</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-4 h-4" />
                              <span>Nghe</span>
                            </>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed tracking-wide">
                  {activeTrack.description}
                </p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="px-6 sm:px-7 pb-6 pt-5 border-t border-slate-800 space-y-4">
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => handleTogglePlay(activeTrack)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Dừng phát nhạc</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>Phát giai điệu</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2.5 flex-1 max-w-[170px]">
                  <button
                    type="button"
                    onClick={handleToggleMute}
                    aria-label={isMuted ? 'Bật âm thanh' : 'Tắt tiếng'}
                    className="p-1.5 text-slate-300 hover:text-white rounded-md transition-colors cursor-pointer shrink-0"
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.05}
                    value={isMuted ? 0 : volume}
                    aria-label="Âm lượng nhạc nền"
                    onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
