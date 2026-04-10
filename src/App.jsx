import React, { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskItem  from './components/TaskItem'
import StatsBar  from './components/StatsBar'
import FilterBar from './components/FilterBar'
import { detectPriority } from './utils/priorityDetector'

// Sample seed tasks to demo the app
const SEED_TASKS = [
  { id: 1, text: 'Submit B.Tech project report by today',         done: false, created: '09:00 AM' },
  { id: 2, text: 'Review React.js concepts for interview',        done: false, created: '10:15 AM' },
  { id: 3, text: 'Update GitHub profile and pin projects',        done: false, created: '11:00 AM' },
  { id: 4, text: 'Buy groceries this evening',                    done: true,  created: '08:30 AM' },
  { id: 5, text: 'Critical: fix login bug before deadline today', done: false, created: '01:00 PM' },
].map(t => ({ ...t, priority: detectPriority(t.text) }))

let nextId = 6

function timeNow() {
  const d = new Date()
  let h = d.getHours(), m = d.getMinutes(), ap = h >= 12 ? 'PM' : 'AM'
  h = h % 12 || 12
  return `${h}:${String(m).padStart(2, '0')} ${ap}`
}

function App() {
  const [tasks,  setTasks]  = useState(SEED_TASKS)
  const [filter, setFilter] = useState('all')

  // Add a new task
  const handleAdd = (text) => {
    const newTask = {
      id:       nextId++,
      text,
      done:     false,
      priority: detectPriority(text),
      created:  timeNow(),
    }
    setTasks(prev => [newTask, ...prev])
  }

  // Toggle done/undone
  const handleToggle = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))
  }

  // Delete a task
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  // Apply active filter
  const visible = tasks.filter(t => {
    if (filter === 'high')    return t.priority === 'high'   && !t.done
    if (filter === 'medium')  return t.priority === 'medium' && !t.done
    if (filter === 'low')     return t.priority === 'low'    && !t.done
    if (filter === 'done')    return t.done
    if (filter === 'pending') return !t.done
    return true // 'all'
  })

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 16px 60px' }}>

      {/* Header */}
      <header style={{ textAlign: 'center', padding: '40px 0 24px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800 }}>
          Task<span style={{
            background: 'linear-gradient(135deg,#7c6af7,#a78bfa,#38bdf8)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>Flow</span>
        </h1>
        <p style={{ color: 'var(--muted)', marginTop: '6px', fontSize: '0.9rem' }}>
          Smart to-do app that auto-detects task priority from your words
        </p>
      </header>

      {/* Add task input */}
      <TaskInput onAdd={handleAdd} />

      {/* Stats & progress */}
      <StatsBar tasks={tasks} />

      {/* Filter buttons */}
      <FilterBar active={filter} onChange={setFilter} />

      {/* Task list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {visible.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--muted)' }}>
            <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🎉</div>
            <div>No tasks here — all clear!</div>
          </div>
        ) : (
          visible.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

    </div>
  )
}

export default App
