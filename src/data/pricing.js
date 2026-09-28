// ============================================================
// ASTERIN — PRICING (single source of truth)
// Edit prices HERE only. Keyed by product or service slug.
// `highlight: true` marks the recommended plan.
// ============================================================

export const pricing = {
  playworld: {
    currency: '$',
    period: '/mo',
    note: 'All plans include DDoS protection, NVMe storage and backups.',
    plans: [
      {
        name: 'COBBLE',
        price: '4.99',
        tagline: 'Start a world with friends.',
        features: ['4 GB DDR4 RAM', '40 GB NVMe', 'Up to 15 players', 'Basic DDoS protection', 'Daily backups', 'Game panel access'],
        highlight: false
      },
      {
        name: 'IRON',
        price: '9.99',
        tagline: 'For growing communities.',
        features: ['8 GB DDR4 RAM', '100 GB NVMe', 'Up to 40 players', 'Full DDoS protection', '6h off-site backups', 'Modpack support', 'Priority support'],
        highlight: true
      },
      {
        name: 'NETHERITE',
        price: '19.99',
        tagline: 'Networks & serious servers.',
        features: ['16 GB DDR4 ECC', '250 GB NVMe Gen4', 'Unlimited players', '1 Tbps DDoS shield', 'Hourly backups', 'Dedicated IP', 'Managed setup included'],
        highlight: false
      }
    ]
  },

  'creator-vps': {
    currency: '$',
    period: '/mo',
    note: 'Managed plans include updates, hardening and monitoring.',
    plans: [
      {
        name: 'SPARK',
        price: '7.99',
        tagline: 'One bot, one panel.',
        features: ['8 GB RAM', '512 GB NVMe', '1 Gbps', 'Unmanaged', 'Weekly backups'],
        highlight: false
      },
      {
        name: 'SIGNAL',
        price: '14.99',
        tagline: 'Full creator stack.',
        features: ['16 GB RAM', '1 TB NVMe', '1 Gbps', 'Fully managed', 'Daily backups', 'Discord support'],
        highlight: true
      },
      {
        name: 'ASTER',
        price: '29.99',
        tagline: 'Communities at scale.',
        features: ['32 GB RAM', '2 TB NVMe', 'Dedicated IP', 'Fully managed', 'Hourly backups', 'Setup & migrations included'],
        highlight: false
      }
    ]
  },

  'server-management': {
    currency: '$',
    period: '/mo',
    note: 'Every plan starts with a free server audit.',
    plans: [
      {
        name: 'CARE',
        price: '49',
        tagline: 'We keep it alive.',
        features: ['24/7 monitoring', 'Updates & patches', 'Backups verification', 'Monthly report'],
        highlight: false
      },
      {
        name: 'GROWTH',
        price: '129',
        tagline: 'We make it better.',
        features: ['Everything in CARE', 'Plugin tuning & config', 'Security & permissions', 'Staff system setup', 'Season planning'],
        highlight: true
      },
      {
        name: 'EMPIRE',
        price: '299',
        tagline: 'We run it with you.',
        features: ['Everything in GROWTH', 'Dedicated engineer', 'Event production', 'Custom plugin development', 'Weekly strategy call'],
        highlight: false
      }
    ]
  }
}

export const getPricing = (slug) => pricing[slug] || null
