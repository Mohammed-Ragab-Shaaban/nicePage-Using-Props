import './Section2.css';


export default function Section2(prop) {
   
    return(
            
               
                        <div className='card position-relative'>
                            <div className={`${prop.bgColor} price text-white text-center`}>
                                <p>{prop.aboveDivP1}</p>
                                <h1>{prop.aboveDivPice}</h1>
                                <p>{prop.aboveDivP2}</p>
                            </div>
                            <div className='planFeatures p-3'>
                            {prop.children}
                             <button>Choose Plan</button>
                            </div>
                        </div>

         
      
    )
}
