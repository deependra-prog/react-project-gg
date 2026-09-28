// ============================================================
// ASTERIN — PROJECT DATA
// Add a new project by appending an object here.
// No component changes needed. `cover` should point to a file
// inside public/assets/images/work/
// ============================================================

export const projects = [
  {
    slug: 'playworld-season-launch',
    title: 'PLAYWORLD — SEASON LAUNCH',
    category: 'COMMERCIAL WORK',
    cat: 'commercial',
    year: '2026',
    cover: '/assets/images/work/work-minecraft.jpg',
    description: 'Full launch campaign for a new Minecraft season — trailer, key art and rollout.',
    long: 'When PLAYWORLD opened its new season, ASTERIN handled the entire launch pipeline: cinematic trailer edit, key visual system, countdown socials and the live premiere stream package. The result was the network’s biggest opening weekend to date.',
    gallery: [
      '/assets/images/work/work-minecraft.jpg',
      '/assets/images/work/work-motion.jpg',
      '/assets/images/work/work-design.jpg'
    ],
    video: null,
    info: {
      client: 'PLAYWORLD Network',
      role: 'Campaign, Edit, Motion, Key Art',
      deliverables: 'Launch trailer / Key visuals / Social system',
      timeline: '6 weeks'
    }
  },
  {
    slug: 'creator-growth-90',
    title: 'CREATOR GROWTH — 90 DAYS',
    category: 'YOUTUBE WORK',
    cat: 'youtube',
    year: '2026',
    cover: '/assets/images/work/work-youtube.jpg',
    description: 'A 90-day YouTube system that took a gaming creator from hobby to full-time.',
    long: 'We rebuilt the channel end-to-end: positioning, upload cadence, packaging and retention editing. Ninety days later the channel had tripled its watch time and unlocked its first brand deals.',
    gallery: [
      '/assets/images/work/work-youtube.jpg',
      '/assets/images/work/work-edit.jpg',
      '/assets/images/work/work-design.jpg'
    ],
    video: null,
    info: {
      client: 'Gaming Creator (YT)',
      role: 'Strategy, Editing, Packaging',
      deliverables: '32 videos / Thumbnail system / Channel audit',
      timeline: '90 days'
    }
  },
  {
    slug: 'reel-machine',
    title: 'THE REEL MACHINE',
    category: 'SOCIAL MEDIA',
    cat: 'social',
    year: '2025',
    cover: '/assets/images/work/work-social.jpg',
    description: 'A short-form content engine for an influencer — 30 reels a month, one visual language.',
    long: 'We designed a repeatable reels system: hooks, caption language, grade and motion identity. The influencer’s team now ships daily short-form without burning out, with a consistent red-black brand signature.',
    gallery: [
      '/assets/images/work/work-social.jpg',
      '/assets/images/work/work-edit.jpg',
      '/assets/images/work/work-motion.jpg'
    ],
    video: null,
    info: {
      client: 'Lifestyle Influencer (IG)',
      role: 'Short-form system, Editing, Direction',
      deliverables: '30 reels / month + templates',
      timeline: 'Ongoing'
    }
  },
  {
    slug: 'night-shift',
    title: 'NIGHT SHIFT',
    category: 'VIDEO EDITING',
    cat: 'editing',
    year: '2025',
    cover: '/assets/images/work/work-edit.jpg',
    description: 'Long-form documentary-style edit with cinematic grade and sound design.',
    long: 'A 24-minute documentary cut from 11 hours of raw footage. We built the story arc, the grade and the soundscape — quiet, dark, deliberate — and delivered in broadcast and vertical formats.',
    gallery: [
      '/assets/images/work/work-edit.jpg',
      '/assets/images/work/work-youtube.jpg',
      '/assets/images/work/work-motion.jpg'
    ],
    video: null,
    info: {
      client: 'Independent Filmmaker',
      role: 'Edit, Grade, Sound Design',
      deliverables: '24min film / 6 cutdowns',
      timeline: '5 weeks'
    }
  },
  {
    slug: 'redline-identity',
    title: 'REDLINE IDENTITY',
    category: 'GRAPHIC DESIGN',
    cat: 'design',
    year: '2025',
    cover: '/assets/images/work/work-design.jpg',
    description: 'Brand identity for a creator collective — logo system, posters, stream kit.',
    long: 'A complete identity built on black, signal red and hard geometry: wordmark, poster grid, stream overlays, merch marks and a typography system the team can run without us.',
    gallery: [
      '/assets/images/work/work-design.jpg',
      '/assets/images/work/work-motion.jpg',
      '/assets/images/work/work-social.jpg'
    ],
    video: null,
    info: {
      client: 'Creator Collective',
      role: 'Identity, Art Direction',
      deliverables: 'Brand book / Poster system / Stream kit',
      timeline: '4 weeks'
    }
  },
  {
    slug: 'hosting-grid',
    title: 'THE HOSTING GRID',
    category: 'SERVER HOSTING',
    cat: 'servers',
    year: '2026',
    cover: '/assets/images/work/work-motion.jpg',
    description: 'Building the ASTERIN hosting grid — Mumbai & Frankfurt nodes, network and panel.',
    long: 'We designed and deployed the infrastructure behind PLAYWORLD: high-clock Ryzen nodes, NVMe Gen4 RAID, 1 Tbps DDoS mitigation and a control panel built for owners. This is the work behind the work — hardware, network and automation running 24/7.',
    gallery: [
      '/assets/images/work/work-motion.jpg',
      '/assets/images/work/work-minecraft.jpg',
      '/assets/images/work/work-edit.jpg'
    ],
    video: null,
    info: {
      client: 'ASTERIN Infrastructure',
      role: 'Hardware, Network, Panel, Automation',
      deliverables: '2 nodes / DDoS shield / Control panel',
      timeline: '8 weeks'
    }
  }
]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

export const relatedProjects = (project, count = 3) =>
  projects
    .filter((p) => p.slug !== project.slug)
    .sort((a, b) => (b.cat === project.cat ? 1 : 0) - (a.cat === project.cat ? 1 : 0))
    .slice(0, count)
