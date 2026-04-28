import { useState } from 'react';
import './index.css';
import thumbnail from './assets/thumbnail.jpg';
import eng from './assets/eng.avif';
import careful from './assets/careful.avif';
import perplex from './assets/perplex.avif';
import dure from './assets/dure.avif';
import firr from './assets/firr.avif';
import garage from './assets/garage.avif';
import petrol from './assets/petrol.avif';

const categories = [
  'All',
  'NextEra Coders',
  'Live',
  'Music',
  'Podcast',
  'Web Development',
  'Source Code',
  'Html',
  'News',
  'CSS',
  'Mixes',
  'Action Thrillers',
  'Data Type',
  'Watched',
  'Machine Learning',
  'New To You',
];

const videos = [
  {
    id: 1,
    title: 'Install Tailwind CSS in Vite + React',
    channel: 'NextEra Coders',
    views: '1M Views',
    ago: '3 Months Ago',
    thumb: thumbnail,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKZXKEqfKwSJFJC-p3cH2H7K4pE1RZpH7AqoJ1-T=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: 'Before you add any clone in resume',
    channel: 'Chai aur code',
    views: '1M Views',
    ago: '3 Months Ago',
    thumb: 'https://i.ytimg.com/vi/MkESyVB4oUw/hqdefault.jpg',
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKb-Rc6bqQ4BVyPqJPqNn7rK_N_Q7lpyT8WDQCQ=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 3,
    title: 'How To Speak English 521 Words',
    channel: 'Easy English',
    views: '1M Views',
    ago: '3 Months Ago',
    thumb: eng,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKa0YcV5pHHJDi_MJpzZLUd8pS3SvOCjFqb1nMHi=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    title: "Don't choose a Career before watching this",
    channel: 'Apna College',
    views: '1M Views',
    ago: '3 Months Ago',
    thumb: careful,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKYGXy7Q5kVw2QSqxBKQNv7m7BYJyRGEfQAKyXaM=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 5,
    title: 'How a Middle Class Boy Built AI Worth $20 Billion',
    channel: 'AdiVerse',
    views: '1M Views',
    ago: '3 Months Ago',
    thumb: perplex,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKYi0OzNx5VaMFScGNBhfXwBRQF5SiM-5I1H3Qc=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 6,
    title: 'Best Actor Male 2025 To Bilal Abbas',
    channel: 'NextEra Coders',
    views: '1M Views',
    ago: '3 Months Ago',
    thumb: dure,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKZXKEqfKwSJFJC-p3cH2H7K4pE1RZpH7AqoJ1-T=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 7,
    title: 'Firaun - Official Trailer | Action Thriller 2025',
    channel: 'Cinematic World',
    views: '5M Views',
    ago: '1 Month Ago',
    thumb: firr,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKaDGqBKHTRJRg8u2r2SBQCQP4KLlVf-Y0fX2hZ=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 8,
    title: 'Tailwind CSS v4 Full Course 2025',
    channel: 'NextEra Coders',
    views: '800K Views',
    ago: '2 Months Ago',
    thumb: thumbnail,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKZXKEqfKwSJFJC-p3cH2H7K4pE1RZpH7AqoJ1-T=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 10,
    title: 'Fawad Khan & Mahira Khan Best Scenes',
    channel: 'Drama Hub',
    views: '2M Views',
    ago: '1 Week Ago',
    thumb: garage,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKYGXy7Q5kVw2QSqxBKQNv7m7BYJyRGEfQAKyXaM=s88-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 7,
    title: 'Firaun - Official Trailer | Action Thriller 2025',
    channel: 'Cinematic World',
    views: '5M Views',
    ago: '1 Month Ago',
    thumb: petrol,
    avatar:
      'https://yt3.googleusercontent.com/ytc/APkrFKaDGqBKHTRJRg8u2r2SBQCQP4KLlVf-Y0fX2hZ=s88-c-k-c0x00ffffff-no-rj',
  },
];

const sidebarItems = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '🔥', label: 'Trending' },
  { icon: '📋', label: 'Subscriptions' },
  { icon: '📺', label: 'Your channel' },
  { icon: '🕐', label: 'History' },
  { icon: '▶', label: 'Playlists' },
  { icon: '🎬', label: 'Your videos' },
  { icon: '💡', label: 'Your courses' },
  { icon: '🕐', label: 'Watch later' },
  { icon: '👍', label: 'Liked videos' },
];

const channelStyles = [
  {
    fallback: 'youtube-thumb-fallback-1',
    text: 'text-channel-1',
    avatar: 'bg-channel-1',
  },
  {
    fallback: 'youtube-thumb-fallback-2',
    text: 'text-channel-2',
    avatar: 'bg-channel-2',
  },
  {
    fallback: 'youtube-thumb-fallback-3',
    text: 'text-channel-3',
    avatar: 'bg-channel-3',
  },
  {
    fallback: 'youtube-thumb-fallback-4',
    text: 'text-channel-4',
    avatar: 'bg-channel-4',
  },
  {
    fallback: 'youtube-thumb-fallback-5',
    text: 'text-channel-5',
    avatar: 'bg-channel-5',
  },
  {
    fallback: 'youtube-thumb-fallback-6',
    text: 'text-channel-6',
    avatar: 'bg-channel-6',
  },
];

function VideoCard({ video }) {
  const [imgError, setImgError] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const style = channelStyles[video.id % channelStyles.length];

  const initials = video.channel
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className="min-w-0 flex-[1_1_300px] cursor-pointer">
      <div className="relative aspect-video w-full overflow-hidden rounded-[10px] bg-youtube-dark">
        {!imgError ? (
          <img
            src={video.thumb}
            alt={video.title}
            onError={() => setImgError(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div
            className={`${style.fallback} absolute inset-0 flex items-center justify-center text-5xl ${style.text}`}
          >
            ▶
          </div>
        )}
        <div className="absolute right-1.5 bottom-1.5 rounded-[3px] bg-youtube-overlay px-[5px] py-0.5 text-[11px] font-semibold text-youtube-on-dark">
          4:32
        </div>
      </div>

      <div className="mt-2.5 flex gap-2.5">
        {!avatarError ? (
          <img
            src={video.avatar}
            alt={video.channel}
            onError={() => setAvatarError(true)}
            className="mt-0.5 h-9 w-9 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div
            className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-youtube-on-dark ${style.avatar}`}
          >
            {initials}
          </div>
        )}
        <div className="min-w-0">
          <h2 className="mb-3px line-clamp-2 text-sm leading-[1.3] font-semibold text-youtube-dark">
            {video.title}
          </h2>
          <p className="text-[13px] text-youtube-muted">{video.channel}</p>
          <p className="text-[13px] text-youtube-muted">
            {video.views} · {video.ago}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function YouTube() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchVal, setSearchVal] = useState('');

  return (
    <div className="flex min-h-screen flex-col bg-youtube-page font-youtube">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b border-youtube-grey bg-white px-4">
        <div className="flex shrink-0 items-center gap-4">
          <button
            onClick={() => setSidebarOpen((open) => !open)}
            className="rounded-full border-0 bg-transparent p-2 text-xl leading-none text-youtube-dark hover:bg-gray-200 cursor-pointer"
            aria-label="Toggle sidebar"
          >
            ☰
          </button>
          <div className="flex items-center gap-1 no-underline">
            <svg
              height="20"
              viewBox="0 0 90 20"
              className="block"
              aria-hidden="true"
            >
              <path
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                className="fill-youtube-red"
              />
              <path
                d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
                className="fill-red-600"
              />
            </svg>
            <span className="text-[19px] font-bold tracking-[-0.5px] text-youtube-dark">
              YouTube
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex max-w-300px flex-1 gap-2 z-1000 sticky">
          <div className="flex flex-1 overflow-hidden rounded-[40px] border border-youtube-border">
            <input
              value={searchVal}
              onChange={(event) => setSearchVal(event.target.value)}
              placeholder="Search"
              className="flex-1 border-0 bg-youtube-page px-4 py-2 text-base text-youtube-dark outline-none placeholder:text-youtube-muted"
            />
            <button
              className="cursor-pointer border-0 border-l border-youtube-border bg-youtube-search px-5 text-lg transition-colors hover:bg-youtube-chip"
              aria-label="Search"
            >
              🔍
            </button>
          </div>
          <button
            className="h-10 w-10 cursor-pointer rounded-full border-0 bg-youtube-chip text-lg transition-colors hover:bg-youtube-hover"
            aria-label="Voice search"
          >
            🎤
          </button>
        </div>

        {/* User Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <button
            className="cursor-pointer rounded-full border-0 bg-transparent p-2 text-xl transition-colors hover:bg-youtube-chip"
            aria-label="Create"
          >
            🎥
          </button>
          <button
            className="cursor-pointer rounded-full border-0 bg-transparent p-2 text-xl transition-colors hover:bg-youtube-chip"
            aria-label="Notifications"
          >
            🔔
          </button>
          <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-youtube-user text-sm font-bold text-youtube-on-dark">
            U
          </div>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* Sidebar */}
        {sidebarOpen && (
          <aside className="sticky top-14 h-[calc(100vh-56px)] w-220px shrink-0 overflow-y-auto border-r border-youtube-soft-line py-3 bg-youtube-page ">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`mx-2 flex cursor-pointer items-center gap-5 rounded-[10px] px-6 py-2.5 text-sm text-youtube-dark transition-colors hover:bg-gray-200 ${
                  item.active ? 'bg-youtube-chip font-semibold' : 'font-normal'
                }`}
              >
                <span className="w-22px text-center text-lg">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </aside>
        )}

        {/* Content */}
        <main className="min-w-0 flex-1 px-4 pb-8 p-2">
          <div className="scrollbar-none sticky top-14 z-50 flex flex-nowrap gap-2.5 overflow-x-auto bg-white py-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 cursor-pointer rounded-lg border-0 px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-gray-200 ${
                  activeCategory === category
                    ? 'bg-youtube-dark text-youtube-on-dark'
                    : 'bg-youtube-chip text-youtube-dark hover:bg-youtube-hover'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <section className="mt-2 flex flex-wrap gap-4" aria-label="Videos">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
