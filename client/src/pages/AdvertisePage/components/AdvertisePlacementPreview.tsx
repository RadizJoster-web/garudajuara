import { useState } from "react";
import type { AdPlacementOption } from "../../../assets/dataContent/advertiseData";

interface AdvertisePlacementPreviewProps {
  tagline: string;
  heading: string;
  description: string;
  placements: AdPlacementOption[];
}

export default function AdvertisePlacementPreview({
  tagline,
  heading,
  description,
  placements,
}: AdvertisePlacementPreviewProps) {
  const [selectedId, setSelectedId] = useState(placements[0]?.id || "");

  const activePlacement =
    placements.find((p) => p.id === selectedId) || placements[0];

  return (
    <section className="space-y-8">
      <div className="space-y-2">
        <div className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
          // {tagline}
        </div>
        <h2 className="font-display text-2xl sm:text-4xl font-bold text-dark dark:text-light">
          {heading}
        </h2>
        <p className="font-body text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Placement options selector */}
        <div className="lg:col-span-5 space-y-3">
          {placements.map((item) => {
            const isActive = item.id === selectedId;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`p-5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                  isActive
                    ? "bg-primary/10 border-primary shadow-sm"
                    : "bg-white dark:bg-slate-900/60 border-slate-200/80 dark:border-slate-800 hover:border-slate-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold text-sm text-dark dark:text-light">
                    {item.name}
                  </h3>
                  <span className="font-mono text-[11px] text-primary font-semibold">
                    {item.dimensions}
                  </span>
                </div>
                <p className="font-body text-xs text-slate-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Live Visual Preview Display */}
        <div className="lg:col-span-7 p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="font-mono text-xs font-semibold text-slate-400">
              SIMULASI TAMPILAN INTERAKTIF
            </span>
            <span className="px-2 py-0.5 rounded bg-primary/20 text-primary font-mono text-[11px]">
              {activePlacement?.dimensions}
            </span>
          </div>

          {/* Render Mock Preview based on type */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 min-h-64 flex flex-col justify-center">
            {activePlacement?.previewType === "header" && (
              <div className="space-y-3">
                <div className="w-full h-20 rounded-xl bg-gradient-to-r from-primary/30 via-red-600/20 to-primary/30 border-2 border-dashed border-primary flex items-center justify-center font-mono text-xs font-bold text-white">
                  [ BANNER AD - BILLBOARD 970x250 ]
                </div>
                <div className="h-4 w-3/4 bg-slate-800 rounded animate-pulse" />
                <div className="h-3 w-1/2 bg-slate-800 rounded animate-pulse" />
              </div>
            )}

            {activePlacement?.previewType === "article" && (
              <div className="space-y-3">
                <div className="h-3 w-full bg-slate-800 rounded" />
                <div className="h-3 w-5/6 bg-slate-800 rounded" />
                <div className="w-full h-32 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border-2 border-dashed border-primary flex items-center justify-center font-mono text-xs font-bold text-primary">
                  [ IN-ARTICLE NATIVE WIDGET BANNER 300x250 ]
                </div>
                <div className="h-3 w-4/5 bg-slate-800 rounded" />
              </div>
            )}

            {activePlacement?.previewType === "sponsored" && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 font-mono text-[10px] font-bold uppercase">
                  [ SPONSORED EDITORIAL ARTICLE ]
                </span>
                <h4 className="font-display font-bold text-base text-white">
                  Bagaimana Inovasi Sepatu Olahraga Brand Anda Meningkatkan
                  Performa Atlet
                </h4>
                <div className="h-3 w-full bg-slate-800 rounded" />
              </div>
            )}

            {activePlacement?.previewType === "takeover" && (
              <div className="p-4 rounded-xl bg-gradient-to-br from-red-950 via-slate-900 to-slate-950 border-2 border-primary space-y-3 text-center">
                <span className="px-3 py-1 rounded-full bg-primary text-white font-mono text-xs font-bold">
                  FULL SITE & MATCHDAY TAKEOVER BRANDING
                </span>
                <p className="font-body text-xs text-slate-300">
                  Custom Skin Header + Floating Footer + Social Feed Integration
                </p>
              </div>
            )}
          </div>

          <div className="space-y-1">
            <div className="font-display font-semibold text-sm text-white">
              Direkomendasikan Untuk:
            </div>
            <div className="font-body text-xs text-slate-400">
              {activePlacement?.recommendedFor}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
