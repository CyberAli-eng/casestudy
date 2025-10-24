import Link from 'next/link'

export default function Page() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>PrimeRole Case Studies Demo</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
        Testing environment for case studies
      </p>
      <Link 
        href="/case-studies" 
        style={{ 
          color: 'white', 
          backgroundColor: '#2a5bd7',
          padding: '12px 24px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '18px',
          fontWeight: '600'
        }}
      >
        View Case Studies →
      </Link>
    </div>
  )
}