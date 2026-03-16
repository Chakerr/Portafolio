export default function ChatRoom() {
  return (
    <div className="bg-zinc-900 border border-gray-700 p-6 rounded-xl shadow-lg max-w-xl mx-auto mt-5 h-full flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl font-bold text-white text-center">Let's connect</h2>
      <p className="text-gray-400 text-center text-sm leading-relaxed">
        Open to work, collaborations and new opportunities. Reach out through any of these channels.
      </p>
      <div className="flex flex-col gap-3 w-full mt-2">
        <a href="https://wa.me/573134678133" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-zinc-800 border border-zinc-700 hover:border-green-500 transition-colors p-4 rounded-xl text-white group">
          <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 text-lg group-hover:bg-green-600/40 transition-colors">W</div>
          <div>
            <p className="text-sm font-semibold">WhatsApp</p>
            <p className="text-xs text-zinc-400">+57 313 467 8133</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/luis-gabriel-romero-castro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-zinc-800 border border-zinc-700 hover:border-blue-500 transition-colors p-4 rounded-xl text-white group">
          <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 text-lg font-bold group-hover:bg-blue-600/40 transition-colors">in</div>
          <div>
            <p className="text-sm font-semibold">LinkedIn</p>
            <p className="text-xs text-zinc-400">luis-gabriel-romero-castro</p>
          </div>
        </a>
        <a href="mailto:luisgas012@gmail.com" className="flex items-center gap-4 bg-zinc-800 border border-zinc-700 hover:border-violet-500 transition-colors p-4 rounded-xl text-white group">
          <div className="w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 text-lg group-hover:bg-violet-600/40 transition-colors">@</div>
          <div>
            <p className="text-sm font-semibold">Gmail</p>
            <p className="text-xs text-zinc-400">luisgas012@gmail.com</p>
          </div>
        </a>
        <a href="https://github.com/Chakerr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-zinc-800 border border-zinc-700 hover:border-zinc-400 transition-colors p-4 rounded-xl text-white group">
          <div className="w-10 h-10 rounded-full bg-zinc-600/20 flex items-center justify-center text-zinc-300 text-lg group-hover:bg-zinc-600/40 transition-colors">G</div>
          <div>
            <p className="text-sm font-semibold">GitHub</p>
            <p className="text-xs text-zinc-400">github.com/Chakerr</p>
          </div>
        </a>
      </div>
    </div>
  );
}