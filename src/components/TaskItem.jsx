import React from 'react'
import { PRIORITY_CONFIG } from '../utils/priorityDetector'

const TaskItem = ({ task, onToggle, onDelete }) => {
  const pc = PRIORITY_CONFIG[task.priority]

  return (
    <div style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: '12px', padding: '14px 16px',
      display: 'flex', alignItems: 'center', gap: '12px',
      opacity: task.done ? 0.5 : 1,
      transition: 'opacity 0.2s, border-color 0.2s',
      borderColor: task.done ? 'var(--border)' : 'var(--border)',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = task.done ? 'var(--border)' : '#7c6af7'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Check button */}
      <button
        onClick={() => onToggle(task.id)}
        style={{
          width: '22px', height: '22px', borderRadius: '50%',
          border: `2px solid ${task.done ? '#22c55e' : 'var(--muted)'}`,
          background: task.done ? '#22c55e' : 'none',
          cursor: 'pointer', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.82rem', color: '#fff', transition: 'all 0.2s'
        }}
      >
        {task.done ? '✓' : ''}
      </button>

      {/* Task body */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontSize: '0.95rem',
          textDecoration: task.done ? 'line-through' : 'none',
          color: task.done ? 'var(--muted)' : 'var(--text)'
        }}>
          {task.text}
        </div>
        <div style={{ display: 'flex', gap: '8px', marginTop: '5px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Priority badge */}
          <span style={{
            padding: '2px 9px', borderRadius: '99px',
            fontSize: '0.7rem', fontWeight: 700,
            background: pc.bg, color: pc.color, border: `1px solid ${pc.border}`
          }}>
            {pc.label}
          </span>
          <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>Added {task.created}</span>
        </div>
      </div>

      {/* Delete button */}
      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: 'none', border: 'none', color: 'var(--muted)',
          cursor: 'pointer', fontSize: '1rem', padding: '4px',
          opacity: 0.5, transition: 'opacity 0.2s, color 0.2s'
        }}
        onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = '#f43f5e' }}
        onMouseLeave={e => { e.currentTarget.style.opacity = 0.5; e.currentTarget.style.color = 'var(--muted)' }}
      >
        🗑
      </button>
    </div>
  )
}

export default TaskItem
