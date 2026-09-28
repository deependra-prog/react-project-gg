import ScrollReveal from '../ScrollReveal.jsx'

export default function ProjectGallery({ images = [], title }) {
  if (!images.length) return null
  return (
    <div className="project-gallery">
      {images.map((src, i) => (
        <ScrollReveal key={src + i} variant="scale" delay={i * 80} className={`pg-item ${i % 2 ? 'offset' : ''}`}>
          <img src={src} alt={`${title} — frame ${i + 1}`} loading="lazy" />
        </ScrollReveal>
      ))}
    </div>
  )
}
