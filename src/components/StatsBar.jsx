import React from 'react'

const StatsBar = ({ tasks }) => {
  const total   = tasks.length
  const high    = tasks.filter(t => t.priority === 'high' && !t.done).length
  const pending = tasks.filter(t => !t.done).length
  const done    = tasks.filter(t => t.done).length
  const pct     = total ? Math.round((done / total) * 100) : 0

  const stats = [
    { value: total,   label: 'Total',   color: '#a78bfa' },
    { value: high,    label: 'High',    color: '#f43f5e' },
    { value: pending, label: 'Pending', color: '#fbbf24' },
    { value: done,    label: 'Done',    color: '#22c55e' },
  ]

  return (
    <div style={{ marginBottom: '16px' }}>
      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '12px' }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: 'var(--card)', border: '1px solid var(--border)',
            borderRadius: '10px', padding: '12px', textAlign: 'center'
          }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '2px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div style={{
        background: 'var(--card)', border: '1px solid var(--border)',
        borderRadius: '10px', padding: '14px 16px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '8px' }}>
          <span>Today's Progress</span>
          <span style={{ fontWeight: 700, color: pct === 100 ? '#22c55e' : 'var(--accent2)' }}>{pct}%</span>
        </div>
        <div style={{ height: '8px', background: 'var(--border)', borderRadius: '99px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: 'linear-gradient(90deg, #7c6af7, #22c55e)',
            borderRadius: '99px',
            transition: 'width 0.4s ease'
          }} />
        </div>
      </div>
    </div>
  )
}

export default StatsBar
