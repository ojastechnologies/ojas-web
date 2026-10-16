/**
 * Stylised browser window naming a website project by its URL and monogram.
 * Used where no screenshot is bundled with the site yet.
 */
export function BrowserMockup({ url, name, tagline, monogram }: { url: string; name: string; tagline: string; monogram: string }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl pointer-events-none" />
      <div className="relative rounded-2xl overflow-hidden bg-paper ring-1 ring-black/10 shadow-2xl shadow-[rgba(11,16,32,0.25)]">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 border-b border-gray-200">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="ml-3 flex-1 truncate rounded-md bg-paper px-3 py-1 text-[11px] font-mono text-gray-500 ring-1 ring-gray-200">{url}</span>
        </div>
        <div className="aspect-[16/10] flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-rose-50 via-paper to-violet-50">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-violet-600 text-paper font-display text-2xl font-semibold flex items-center justify-center shadow-lg mb-4">
            {monogram}
          </div>
          <div className="font-display text-lg font-semibold text-gray-900">{name}</div>
          <div className="text-xs text-gray-500 mt-1 max-w-xs">{tagline}</div>
        </div>
      </div>
    </div>
  );
}
