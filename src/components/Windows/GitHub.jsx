import MacWindows from './MacWindows'
import githubData from '../../assets/githubb/github.json'
import './github.scss'

function GitCard({ data }) {
  return (
    <div className="card">
      <img className="card-image" src={data.image} alt={data.title} />
      <div className="card-content">
        <h2>{data.title}</h2>
        <p>{data.description}</p>

        <div className="tags">
          {data.tech.map((tag,idx) => <span className="tag" key={idx}>{tag}</span>)}
        </div>

       <a href={data.repo} target="_blank" rel="noreferrer">Repository ↗</a>
      </div>
    </div>
  )
}

function GitHub({ onClose }) {
  return (
    <MacWindows onClose={onClose}>
      <section className="github-window">
        <h1>Projects</h1>
        <div className="cards">
          {githubData.map((project) => <GitCard key={project.id} data={project} />)}
        </div>
      </section>
    </MacWindows>
  )
}

export default GitHub
