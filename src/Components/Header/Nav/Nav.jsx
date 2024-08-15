import Images from './Images/defaultLogo.png';
import './Nav.css';

export default function NavBar(){
    return(
        
        <div className="container">
            <div className="p-3 d-flex flex-wrap gap-3">
                <img className="me-auto" src={Images}/>
                <a href='#'>Home</a>
                <a href='#'>About Company</a>
            </div>
        </div>
    )
}