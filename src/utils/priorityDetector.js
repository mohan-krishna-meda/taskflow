// Smart priority detection based on keyword matching
// This mimics NLP-style intent classification using curated keyword sets

const HIGH_KEYWORDS = [
  'urgent', 'asap', 'critical', 'deadline', 'due', 'today',
  'emergency', 'immediately', 'priority', 'must', 'important',
  'crucial', 'now', 'overdue', 'fix', 'bug'
]

const MEDIUM_KEYWORDS = [
  'review', 'check', 'update', 'follow', 'meeting', 'call',
  'send', 'reply', 'prepare', 'finish', 'schedule', 'plan',
  'discuss', 'submit', 'read'
]

/**
 * Detects task priority from natural language text
 * @param {string} text - Task description
 * @returns {'high' | 'medium' | 'low'}
 */
export function detectPriority(text) {
  const lower = text.toLowerCase()
  if (HIGH_KEYWORDS.some(kw => lower.includes(kw)))   return 'high'
  if (MEDIUM_KEYWORDS.some(kw => lower.includes(kw))) return 'medium'
  return 'low'
}

export const PRIORITY_CONFIG = {
  high:   { label: '🔴 HIGH',   color: '#f43f5e', bg: 'rgba(244,63,94,.15)',  border: 'rgba(244,63,94,.3)'  },
  medium: { label: '🟡 MEDIUM', color: '#fbbf24', bg: 'rgba(251,191,36,.12)', border: 'rgba(251,191,36,.3)' },
  low:    { label: '🟢 LOW',    color: '#22c55e', bg: 'rgba(34,197,94,.12)',  border: 'rgba(34,197,94,.3)'  },
}
