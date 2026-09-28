import { Link, useParams } from 'react-router-dom'
import { getProject, relatedProjects } from '../data/projects.js'
import ProjectGallery from '../components/work/ProjectGallery.jsx'
import ProjectCard from '../components/work/ProjectCard.jsx'
import ScrollReveal from '../components/ScrollReveal.jsx'
import NotFound from './NotFound.jsx'

export default function Project() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <NotFound />

  return (
    <main className="page project-page">
      <section className="project-hero">
        <div className="project-hero-media">
          <img src={project.cover} alt={project.title} />
          <div className="project-hero-dim" />
        </div>
        <div className="project-hero-copy">
          <ScrollReveal as="span" variant="up" className="kicker">{project.category} — {project.year}</ScrollReveal>
          <ScrollReveal as="h1" variant="clip" className="mega-title">{project.title}</ScrollReveal>
          <ScrollReveal as="p" variant="up" delay={120} className="lead">{project.description}</ScrollReveal>
        </div>
      </section>

      <section className="project-body">
        <div className="project-info">
          {Object.entries(project.info).map(([key, value]) => (
            <div className="project-info-row" key={key}>
              <span>{key.toUpperCase()}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <ScrollReveal as="p" variant="up" className="project-long">{project.long}</ScrollReveal>
      </section>

      {project.video && (
        <section className="project-video">
          <video src={project.video} controls playsInline poster={project.cover} />
        </section>
      )}

      <ProjectGallery images={project.gallery} title={project.title} />

      <section className="related">
        <ScrollReveal as="h3" variant="clip" className="related-title">RELATED PROJECTS</ScrollReveal>
        <div className="related-row">
          {relatedProjects(project).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <Link to="/work" className="link-arrow back-link" data-cursor="GO">← BACK TO WORK</Link>
      </section>
    </main>
  )
}
