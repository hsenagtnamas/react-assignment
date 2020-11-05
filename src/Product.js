import { Link } from "react-router-dom";

export default function Product(props) {

    const { id, category, description, image, price, title } = props
    
    
    return (
        <table>
            <tbody>
                <tr>
                    <td><img src={image} alt="Image not available" width="50" height="50" /></td>
                    <td>
                        <Link to={`/productDetails/${id}`} >{title}}</Link><br/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
  
 