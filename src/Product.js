import { Link } from "react-router-dom";

const imageSize = {

    'normal' : 100,
    'cart' : 50,
    'detailed' : 500

}

export default function Product(props) {

    const { id, category, description, image, price, title, view = 'normal' } = props
    
    
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <img src={image} alt="not available" width={imageSize[view]} height={imageSize[view]} />
                    </td>
                    <td>
                        <Link to={`/${id}`} >{title}</Link><br/>
                        { view === 'cart' ? null : category }<br />
                        {price}<br />
                        { view === 'cart' ? null : description }<br />

                    </td>
                </tr>
            </tbody>
        </table>
    )
}
  
 