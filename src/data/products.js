// ============================================================
// ASTERIN — PRODUCT DATA
// category: 'servers' | 'digital' | 'creative'
// Pricing lives in pricing.js keyed by product slug.
// ============================================================

export const products = [
  {
    slug: 'playworld',
    name: 'PLAYWORLD',
    category: 'servers',
    tagline: 'Flagship Minecraft network hosting.',
    description: 'The network we run ourselves, offered to your community: high-clock nodes, NVMe worlds, DDoS shield and a control panel built for owners, not sysadmins.',
    image: '/assets/images/work/work-minecraft.jpg',
    specs: [
      { label: 'RAM', value: 'Up to 32 GB DDR4 ECC' },
      { label: 'CPU', value: 'Ryzen 9 7950X · 5.7 GHz' },
      { label: 'STORAGE', value: 'NVMe Gen4 RAID' },
      { label: 'BANDWIDTH', value: '1 Gbps unmetered' },
      { label: 'LOCATION', value: 'Mumbai · Frankfurt' },
      { label: 'UPTIME', value: '99.9% SLA' }
    ],
    features: [
      'Instant deploy in under 60 seconds',
      'DDoS protection up to 1 Tbps',
      'One-click modpacks & plugin packs',
      'Automatic off-site backups',
      'Full FTP, console & MySQL access',
      'Human support that plays Minecraft'
    ]
  },
  {
    slug: 'creator-vps',
    name: 'CREATOR VPS',
    category: 'servers',
    tagline: 'Your bots, panels and streams — hosted.',
    description: 'A managed VPS for creator infrastructure: Discord bots, community panels, whitelist systems, stream tools and websites, kept alive and updated by us.',
    image: '/assets/images/work/work-edit.jpg',
    specs: [
      { label: 'RAM', value: '8–16 GB DDR4' },
      { label: 'CPU', value: 'Ryzen 7 · 8 cores' },
      { label: 'STORAGE', value: '512 GB NVMe' },
      { label: 'BANDWIDTH', value: '1 Gbps unmetered' },
      { label: 'LOCATION', value: 'Mumbai · Frankfurt' },
      { label: 'UPTIME', value: '99.9% SLA' }
    ],
    features: [
      'Preconfigured Discord bot hosting',
      'Community & whitelist panels',
      'Automatic updates & hardening',
      'Daily backups',
      'Root access available',
      'Managed or unmanaged'
    ]
  },
  {
    slug: 'nightgrade-presets',
    name: 'NIGHTGRADE',
    category: 'digital',
    tagline: 'The ASTERIN editing look, packaged.',
    description: 'Our signature color grade as a preset pack — deep blacks, signal reds, clean skin tones. For Premiere, Resolve and mobile editors.',
    image: '/assets/images/work/work-edit.jpg',
    specs: [
      { label: 'FORMAT', value: 'Premiere / Resolve / VN' },
      { label: 'PRESETS', value: '24 grades + 12 looks' },
      { label: 'LUTS', value: '18 .cube LUTs' },
      { label: 'UPDATES', value: 'Lifetime' }
    ],
    features: [
      'Signature red/black grade',
      'Skin-tone safe looks',
      'Vertical & cinematic variants',
      'Install guide included'
    ]
  },
  {
    slug: 'redline-stream-kit',
    name: 'REDLINE STREAM KIT',
    category: 'creative',
    tagline: 'A stream identity in one download.',
    description: 'Overlays, alerts, panels, stingers and offline screens in the ASTERIN visual language — editable, animated and ready for OBS.',
    image: '/assets/images/work/work-design.jpg',
    specs: [
      { label: 'FORMAT', value: 'OBS / Streamlabs' },
      { label: 'ASSETS', value: '40+ animated & static' },
      { label: 'RESOLUTION', value: '1080p / 4K' },
      { label: 'UPDATES', value: 'Lifetime' }
    ],
    features: [
      'Animated overlays & stingers',
      'Alert boxes & panels',
      'Offline & starting screens',
      'Editable source files'
    ]
  }
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

export const relatedProducts = (product, count = 3) =>
  products.filter((p) => p.slug !== product.slug).slice(0, count)
