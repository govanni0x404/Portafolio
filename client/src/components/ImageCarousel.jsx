import { useState } from 'react'

export default function ImageCarousel({ images, title }) {
  const [index, setIndex] = useState(0)
  const total = images.length
  const current = images[index]

  const go = (step) => setIndex((i) => (i + step + total) % total)

  return (
    <div className="relative mb-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900">
      <img
        src={current.src}
        alt={current.alt || `Imagen de ${title}`}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top"
      />

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Imagen anterior"
            className="absolute top-1/2 left-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/60 text-white hover:bg-slate-900/80"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Imagen siguiente"
            className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/60 text-white hover:bg-slate-900/80"
          >
            ›
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-slate-900/50 px-2 py-1">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ver imagen ${i + 1} de ${total}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
