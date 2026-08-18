import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "./ui-kit";
import part1 from "@/assets/crew-part1.mp4.asset.json";
import part2 from "@/assets/crew-part2.mp4.asset.json";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";

const clips = [
  {
    // default URL comes from asset metadata; we may override at runtime with a local public asset
    url: part1.url,
    stages: ["Drywall", "Plaster", "Painting", "House Siding"],
    note: "Interiors framed, boarded, skimmed, painted and clad.",
  },
  {
    url: part2.url,
    stages: ["Flooring", "Roofing", "Cleaning", "Lawn Care"],
    note: "Floors laid, roof sealed, site detailed and grounds finished.",
  },
];

type BuildJourneyProps = {
  showClipButtons?: boolean;
};

export function BuildJourney({ showClipButtons = true }: BuildJourneyProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [clip, setClip] = useState(0);
  const [progress, setProgress] = useState(0);
  const [videoError, setVideoError] = useState(false);
  // prefer public videos on first render to avoid initial 404 from asset metadata URLs
  const [resolvedUrls, setResolvedUrls] = useState<string[]>(["/video1.mp4", "/video2.mp4"]);

  const currentBase = clips[clip]!;
  const current = { ...currentBase, url: resolvedUrls[clip] };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.load();
    void v.play().catch(() => {});
    // reset any previous error when clip changes
    setVideoError(false);
    // reset progress when switching clips
    setProgress(0);
  }, [clip]);

  // On mount, prefer local public assets if present at /assets/crew-part1.mp4 etc.
  useEffect(() => {
    let mounted = true;
    (async () => {
      // Try multiple candidates per clip (public file, direct asset path, then asset.json url)
      const candidatesPerClip = [
        ["/video1.mp4", "/assets/crew-part1.mp4", part1.url],
        ["/video2.mp4", "/assets/crew-part2.mp4", part2.url],
      ];
      const newUrls: string[] = [];
      for (let i = 0; i < candidatesPerClip.length; i++) {
        let chosen = candidatesPerClip[i][candidatesPerClip[i].length - 1]; // default to last (asset.json url)
        for (const candidate of candidatesPerClip[i]) {
          try {
            const res = await fetch(candidate, { method: "HEAD" });
            if (res.ok) {
              chosen = candidate;
              break;
            }
          } catch (e) {
            // ignore and try next candidate
          }
        }
        newUrls.push(chosen);
      }
      if (mounted) setResolvedUrls(newUrls);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const stageIndex = Math.min(
    current.stages.length - 1,
    Math.floor(progress * current.stages.length),
  );

  // play/pause control removed; video auto-plays and advances

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <Eyebrow>One Continuous Build</Eyebrow>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Every service, one connected sequence
          </h2>
          <p className="mt-4 text-muted-foreground">
            Watch our crews carry a property from bare board to finished grounds — drywall, plaster,
            paint, siding, flooring, roofing, cleaning and lawn care.
          </p>
        </div>

        <div className="mt-10 glass-panel rounded-2xl p-2 sm:p-3">
          <div className="relative overflow-hidden rounded-xl bg-black">
            {!videoError ? (
              <video
                key={current.url}
                ref={videoRef}
                className="aspect-video w-full object-cover"
                muted
                playsInline
                autoPlay
                preload="auto"
                poster={hero}
                onError={() => setVideoError(true)}
                onTimeUpdate={(e) => {
                  const v = e.currentTarget;
                  if (v.duration) setProgress(v.currentTime / v.duration);
                }}
                onEnded={() => {
                  setProgress(0);
                  // small gap before starting next clip (300ms)
                  setTimeout(() => {
                    setClip((c) => (c + 1) % clips.length);
                  }, 300);
                }}
              >
                <source src={current.url} type="video/mp4" />
              </video>
            ) : (
              <img src={hero} alt="Video unavailable" className="aspect-video w-full object-cover" />
            )}

            {/* Logo overlay from src assets (on top) */}
            <img src={logo} alt="Kang logo" className="absolute left-4 top-4 h-10 w-auto opacity-95 z-50" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30" />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-2">
                {current.stages.map((s, i) => (
                  <span
                    key={s}
                    className={`rounded-full border px-3 py-1 text-xs sm:text-sm transition-colors duration-500 ${
                      i === stageIndex
                        ? "border-primary/60 bg-primary/20 text-primary"
                        : "border-white/10 bg-black/40 text-muted-foreground"
                    }`}
                  >
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">{current.note}</p>

              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-primary/60 to-primary"
                  style={{ width: `${Math.round(progress * 100)}%` }}
                />
              </div>
            </div>

            {/* Play/Pause control removed */}
          </div>
        </div>

        {showClipButtons ? (
          <div className="mt-4 flex gap-3">
            {clips.map((c, i) => (
              <button
                key={c.url}
                type="button"
                onClick={() => {
                  setProgress(0);
                  setClip(i);
                }}
                className={`flex-1 rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                  i === clip
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-white/10 text-muted-foreground hover:border-primary/30"
                }`}
              >
                <span className="block font-medium">Part {i + 1}</span>
                <span className="block text-xs">{c.stages.join(" · ")}</span>
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
