import React, { useState } from 'react'
import { detectPriority, PRIORITY_CONFIG } from '../utils/priorityDetector'

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState('')

  // Live preview of detected priority as user types
  const preview = text.trim() ? detectPriority(text) : null

  const handleAdd = () => {
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: '16px', padding: '20px', marginBottom: '20px'
    }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Add a task… (e.g. 'urgent: fix login bug before deadline')"
          style={{
            flex: 1, background: 'var(--bg)', border: '1.5px solid var(--border)',
            borderRadius: '10px', padding: '12px 14px', color: 'var(--text)',
            fontSize: '0.95rem', outline: 'none', fontFamily: 'inherit',
            borderColor: preview ? PRIORITY_CONFIG[preview].border : 'var(--border)',
            transition: 'border-color 0.2s'
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: '12px 22px', background: 'linear-gradient(135deg,#7c6af7,#a78bfa)',
            border: 'none', borderRadius: '10px', color: '#fff',
            fontWeight: 700, fontSize: '0.95rem', cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
        >
          + Add
        </button>
      </div>

      {/* Live priority preview */}
      {preview && (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem' }}>
          <span style={{ color: 'var(--muted)' }}>Detected priority:</span>
          <span style={{
            padding: '2px 10px', borderRadius: '99px', fontWeight: 700, fontSize: '0.75rem',
            background: PRIORITY_CONFIG[preview].bg,
            color: PRIORITY_CONFIG[preview].color,
            border: `1px solid ${PRIORITY_CONFIG[preview].border}`
          }}>
            {PRIORITY_CONFIG[preview].label}
          </span>
        </div>
      )}

      {/* Hint */}
      <div style={{ marginTop: preview ? '8px' : '10px', fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.6 }}>
        🤖 <strong style={{ color: 'var(--accent2)' }}>Smart Priority:</strong>&nbsp;
        Keywords like <em>urgent, deadline, ASAP, fix</em> → 🔴 High &nbsp;|&nbsp;
        <em>review, update, meeting</em> → 🟡 Medium &nbsp;|&nbsp;
        Everything else → 🟢 Low
      </div>
    </div>
  )
}

export default TaskInput
