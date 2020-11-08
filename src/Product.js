import { Link } from "react-router-dom";

export default function Product(props) {

    const { id, category, description, image, price, title, view = 'normal' } = props
    
    
    return (
        <div>
            { view === 'cart' ? null : 
                <div className='row' >
                    <h3><Link to={`/${id}`} >{title}</Link><br/></h3>
                </div>
            }
        <div className='row' >
            <div className = { view === 'cart' ? 'col col col-sm-2' : 'col col-sm-4' } >
                <img className="img-fluid" src={image} alt="not available" />
            </div>
            <div className = { view === 'cart' ? 'col col-sm-10' : 'col col-sm-8' } >
                { view === 'cart' ? <Link to={`/${id}`} >{title}</Link> : null }
                { view === 'cart' ? null : category }<br />
                {price}<br />
                { view === 'cart' ? null : <blockquote>{description}</blockquote> }<br />

            </div>
        </div>
        <div className='row' ><br/></div>
        </div>
    )
}
  
 