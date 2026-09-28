import { useMemo, useState } from 'react'
import { faq } from '../../data/faq.js'

// Interactive FAQ with smooth expand/collapse + search.
export default function FAQ() {
  const [query, setQuery] = useState('')
  const [openKey, setOpenKey] = useState(null)

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return faq
    return faq
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) => it.q.toLowerCase().includes(q) || it.a.toLowerCase().includes(q)
        )
      }))
      .filter((g) => g.items.length)
  }, [query])

  return (
    <div className="faq">
      <div className="faq-search">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SEARCH THE KNOWLEDGE BASE…"
          aria-label="Search FAQ"
        />
      </div>

      {groups.length === 0 && <p className="faq-empty">No results for “{query}”. Try “server”, “billing” or “editing”.</p>}

      {groups.map((group) => (
        <div className="faq-group" key={group.category}>
          <h3 className="faq-cat">{group.category}</h3>
          {group.items.map((it) => {
            const key = group.category + it.q
            const open = openKey === key
            return (
              <div className={`faq-item ${open ? 'open' : ''}`} key={key}>
                <button
                  className="faq-q"
                  onClick={() => setOpenKey(open ? null : key)}
                  aria-expanded={open}
                >
                  <span>{it.q}</span>
                  <i className="faq-plus" aria-hidden="true" />
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">
                    <p>{it.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}
