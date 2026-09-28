import { Link } from 'react-router-dom'

// Large cinematic card used inside the horizontal scroll showcase.
export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card" data-cursor="VIEW">
      <Link to={`/work/${project.slug}`} className="project-card-link">
        <div className="pc-media">
          <img src={project.cover} alt={project.title} loading="lazy" />
          <span className="pc-cat">{project.category}</span>
        </div>
        <div className="pc-info">
          <span className="pc-index">PROJECT {String(index + 1).padStart(2, '0')}</span>
          <h3 className="pc-title">{project.title}</h3>
          <span className="pc-year">{project.year}</span>
        </div>
      </Link>
    </article>
  )
}
