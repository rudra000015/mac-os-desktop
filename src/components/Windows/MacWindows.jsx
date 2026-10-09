import { Rnd } from 'react-rnd'
import '../window.scss'
function MacWindows({ children, height = "40vh", width = "40vw", onClose }) {
    return (
        <Rnd
            bounds="parent"
            maxWidth="100%"
            maxHeight="100%"
            default={{ x: 40, y: 50, width: width, height: height }}
            minWidth={280}
            minHeight={240}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <button className="red-dot" type="button" aria-label="Close window" onClick={onClose}></button>
                        <div className="yellow-dot"></div>
                        <div className="green-dot"></div>
                    </div>
                </div>
                <div className="main-content">{children}</div>
            </div>
        </Rnd>
    )
}

export default MacWindows
