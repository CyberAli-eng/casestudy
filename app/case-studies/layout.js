// import PrimeroleHeader from '../components/PrimeroleHeader'
// import PrimeroleFooter from '../components/PrimeroleFooter'


export default function CaseStudiesLayout({ children }) {
  return (
    <div>
      {/* <primeroleheader /> */}
      
      <header style={{ 
        background: '#1e293b', 
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        marginBottom: '0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ margin: 0, fontSize: '1.5rem' }}>PrimeRole - Add header it is a dummy header Case Studies</h1>
          <nav style={{ marginTop: '10px' }}>
            <a href="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</a>
            <a href="/case-studies" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>All Case Studies</a>
          </nav>
        </div>
      </header>
          
      <main>{children}</main>
    </div>
  )
}