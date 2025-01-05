import { useEffect, useState } from 'react'

function App () {
  const [follower, setFollower] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    console.log('effect')
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (follower) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [follower])

  return (
    <main>
      <div
        className='follower'
        style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: '0.8',
          pointerEvents: 'none',
          left: '-20px',
          top: '-20px',
          width: '40px',
          height: '40px',
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <button onClick={() => setFollower(!follower)}>{follower ? 'Disable' : 'Enable'} Cursor Follower</button>
    </main>
  )
}

export default App
