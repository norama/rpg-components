const CircularProgress = () => (
  <div style={{ transform: 'scale(0.4)', translate: '10px' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="64px"
      height="64px"
      viewBox="0 0 128 128"
    >
      <g>
        <path
          fill="#ffffff"
          d="M26.9 65.08c3.87 21.1 21.26 37 42.13 37 23.72 0 41.6-20.58 42.95-45.88 1-18.84-9.45-37.5-32.57-47.88A52.2 52.2 0 0 0 47.08 5c22.23-6.02 41.53.02 54.6 10.66 8.2 6.46 16.12 15.33 19.32 24.4a67.13 67.13 0 0 1 3.77 19.85c0 34.4-26.87 62.3-61.26 62.3A62.27 62.27 0 0 1 2.05 70.1c.57-15.82 19.83-18.23 24.83-5.02z"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="1080ms"
          repeatCount="indefinite"
        ></animateTransform>
      </g>
    </svg>
  </div>
)

export default CircularProgress
