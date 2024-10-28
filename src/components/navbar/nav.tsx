import './Nav.css';

export default function Nav() {
    return (
        <div className="nav">
            <div className={"nav-brand"}>
                <h1>MV.</h1>
                <h4 className={"nav-title"}>Desenvolvedor FullStack</h4>
            </div>
            <div className="nav-links">
                <p className={"version"} >v0.0.1</p>
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/contact" className="nav-link">Contact</a>
            </div>
        </div>
    )
}