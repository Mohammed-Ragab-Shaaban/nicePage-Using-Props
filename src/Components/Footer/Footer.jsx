import './Footer.css';


export default function Footer(){
    return(
        <div className='foot' style={{backgroundColor:"#333"}}>
            <div className="container text-white text-center p-5">
                <p className="mb-5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                <p><a href="#">Website Templates</a> created with <a href="#">Website Builder Software</a>.</p>
            </div>
        </div>
    )
}