import MacWindows from './MacWindows'
import './resume.scss'
function Resume({ onClose }) {
  return (
    <MacWindows onClose={onClose}>
     <div className="resume-window">
        <iframe
          src="/sample_resume.pdf"
          title="Resume PDF"
        />
      </div>
    </MacWindows>
  )
}

export default Resume
