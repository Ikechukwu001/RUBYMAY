"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = useMemo(
    () => [
      { id: 1,  src: "/mayone.jpeg",       alt: "A serene treatment space with soft lighting" },
      { id: 2,  src: "/maytwo.jpeg",       alt: "Tranquil ambiance with calming details" },
      { id: 3,  src: "/maythree.jpeg",     alt: "Premium oils and wellness essentials" },
      { id: 4,  src: "/mayfour.jpeg",      alt: "A restorative massage moment in progress" },
      { id: 5,  src: "/mayfive.jpeg",      alt: "Warm textures and soft tones" },
      { id: 6,  src: "/maysix.jpeg",       alt: "A beautifully prepared treatment setup" },
      { id: 7,  src: "/mayseven.jpeg",     alt: "A quiet corner designed for relaxation" },
      { id: 8,  src: "/mayeight.jpeg",     alt: "Signature body care details arranged with care" },
      { id: 9,  src: "/maynine.jpeg",      alt: "Soft lighting for a calm private session" },
      { id: 10, src: "/mayten.jpeg",       alt: "A luxurious wellness environment" },
      { id: 11, src: "/mayeleven.jpeg",    alt: "Gentle hands working with intention" },
      { id: 12, src: "/maytwelve.jpeg",    alt: "A clean and serene room prepared for a session" },
      { id: 13, src: "/maythirteen.jpeg",  alt: "Warmly lit atmosphere for deep relaxation" },
      { id: 14, src: "/mayfourteen.jpeg",  alt: "Soft towels and session essentials" },
      { id: 15, src: "/mayfiften.jpeg",   alt: "A moment of calm before the session begins" },
      { id: 16, src: "/maysixteen.jpeg",   alt: "The private space set with care" },
      { id: 17, src: "/mayseventeen.jpeg", alt: "Detail of a soothing treatment in progress" },
      { id: 18, src: "/mayeighteen.jpeg",  alt: "Comfort and privacy in every corner" },
      { id: 19, src: "/maynineteen.jpeg",  alt: "A peaceful moment of body restoration" },
      { id: 20, src: "/maytwenty.jpeg",    alt: "Warm ambiance crafted for your ease" },
      { id: 21, src: "/maytwentyone.jpeg", alt: "Refined setting for a one-on-one session" },
      { id: 22, src: "/maytwentytwo.jpeg", alt: "Soft details that define the experience" },
      { id: 23, src: "/maytwentythree.jpeg", alt: "Care and intention in every detail" },
      { id: 24, src: "/maytwentyfour.jpeg",  alt: "A still moment of total relaxation" },
    ],
    []
  );

  const openLightbox = (index) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goNext = () => setSelectedIndex((i) => (i + 1) % images.length);
  const goPrev = () => setSelectedIndex((i) => (i - 1 + images.length) % images.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [selectedIndex]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <section className="bg-white py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-[#c4622d]">
              Gallery
            </p>
            <h1 className="mt-4 font-['Cormorant_Garamond'] text-4xl font-light italic leading-[1.1] tracking-[-0.01em] text-[#1a1612] md:text-5xl">
              A glimpse into the atmosphere
            </h1>
            <div className="mt-3 h-px w-10 bg-[#c4622d]" />
            <p className="mt-6 text-base leading-8 text-[#6b6259]">
              Explore the space, the details, and the softness of the
              experience. Every image reflects the calm, privacy, and refined
              care behind each session.
            </p>
            <p className="mt-2 text-sm text-[#9e9389]">
              {images.length} images · Click any to enlarge
            </p>
          </div>

          {/* Masonry-style grid — 5 columns desktop, 3 tablet, 2 mobile */}
          <div className="mt-14 columns-2 gap-4 sm:columns-3 md:columns-4 lg:columns-5 lg:gap-5">
            {images.map((image, index) => (
              <button
                type="button"
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group relative mb-4 block w-full overflow-hidden rounded-xl lg:mb-5"
                aria-label={`Open image: ${image.alt}`}
              >
                {/* Aspect ratio varies every few cards to create masonry rhythm */}
                <div
                  className={`relative w-full overflow-hidden ${
                    index % 7 === 0 ? "aspect-[3/4]" :
                    index % 7 === 1 ? "aspect-square" :
                    index % 7 === 2 ? "aspect-[4/5]" :
                    index % 7 === 3 ? "aspect-[3/4]" :
                    index % 7 === 4 ? "aspect-square" :
                    index % 7 === 5 ? "aspect-[2/3]" :
                                      "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    priority={image.id <= 5}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a1612]/0 transition-all duration-300 group-hover:bg-[#1a1612]/35" />

                  {/* Hover label */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full border border-white/40 bg-white/15 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm">
                      View
                    </span>
                  </div>

                  {/* Image number */}
                  <div className="absolute bottom-3 right-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-black/30 px-2 py-1 text-[10px] font-medium text-white/80 backdrop-blur-sm">
                      {index + 1} / {images.length}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
          onClick={closeLightbox}
          aria-modal="true"
          role="dialog"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close lightbox"
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[75vh] overflow-hidden rounded-2xl">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                quality={100}
                priority
              />
            </div>

            {/* Caption row */}
            <div className="mt-4 flex items-center justify-between px-1">
              <p className="text-sm text-white/70">{selectedImage.alt}</p>
              <p className="text-xs text-white/40">
                {selectedIndex + 1} / {images.length} · Esc to close · ← → to navigate
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}