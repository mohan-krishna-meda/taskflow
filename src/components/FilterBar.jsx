import React from 'react'

const FILTERS = [
  { key: 'all',     label: 'All'         },
  { key: 'high',    label: '🔴 High'     },
  { key: 'medium',  label: '🟡 Medium'   },
  { key: 'low',     label: '🟢 Low'      },
  { key: 'done',    label: '✅ Done'     },
  { key: 'pending', label: '⏳ Pending'  },
]

const FilterBar = ({ active, onChange }) => (
  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
    {FILTERS.map(f => (
      <button
        key={f.key}
        onClick={() => onChange(f.key)}
        style={{
          padding: '6px 16px', borderRadius: '99px',
          border: `1.5px solid ${active === f.key ? '#a78bfa' : 'var(--border)'}`,
          background: active === f.key ? 'rgba(167,139,250,.1)' : 'none',
          color: active === f.key ? '#a78bfa' : 'var(--muted)',
          fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer',
          transition: 'all 0.2s'
        }}
      >
        {f.label}
      </button>
    ))}
  </div>
)

export default FilterBar
