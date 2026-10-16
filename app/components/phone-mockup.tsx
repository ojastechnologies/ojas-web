import Image from "next/image";
import { IconType } from "react-icons";

/**
 * Stylised phone frame that presents a mobile app by its icon, name, and
 * real feature list. Used where no store screenshots are bundled with the site.
 */
export function PhoneMockup({
  icon,
  name,
  subtitle,
  features,
  dark = true,
}: {
  icon: string;
  name: string;
  subtitle: string;
  features: { Icon: IconType; label: string }[];
  dark?: boolean;
}) {
  return (
    <div className="relative mx-auto w-[220px]">
      <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-tr from-cyan-500/25 to-violet-500/25 blur-2xl pointer-events-none" />
      <div className={`relative rounded-[2.4rem] p-2 shadow-2xl ${dark ? "bg-ink-700 ring-1 ring-white/15" : "bg-gray-900"}`}>
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-50 to-white aspect-[9/19]">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-gray-900" />
          <div className="pt-12 px-4 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-white shadow-md ring-1 ring-gray-100 flex items-center justify-center p-1.5 mb-3">
              <Image src={icon} alt={`${name} app icon`} width={44} height={44} />
            </div>
            <div className="text-[13px] font-bold text-gray-900 leading-tight">{name}</div>
            <div className="text-[10px] text-gray-500 mt-0.5 mb-4">{subtitle}</div>
            <div className="w-full space-y-1.5">
              {features.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-xl bg-white ring-1 ring-gray-100 px-2.5 py-2 text-left">
                  <span className="w-6 h-6 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10.5px] font-medium text-gray-700 leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
