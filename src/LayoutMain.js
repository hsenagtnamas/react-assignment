import { info } from "console";
import { Link } from "react-router-dom";

export default function LayoutMain(props) {

    const { left, footer, header } = props
    
    return (
        <div className='row' >

            <div className='row' > { header() } </div>

            <div className='row' >
                <div className = 'col col-sm-4'>
                    {left()}
                </div>

                <div className = 'col col-sm-8' >
                    <div className='row' >{ info() } </div>
                    <div className='row' >{ footer() } </div>
                </div>
            </div>
        </div>

    )
}
  
 