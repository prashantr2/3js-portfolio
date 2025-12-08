import React from 'react'

export default function Button({ name, isBeam = false, containerClass }) {
  try {
    return (
      <div className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </div>
    )
  } catch (error) {
    // Log the error for debugging and show a simple fallback UI
    // (For more robust handling, consider using a React Error Boundary.)
    // eslint-disable-next-line no-console
    console.error('Error rendering Button component:', error)
    return (
      <></>
    )
  }
}
