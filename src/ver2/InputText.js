export default function InputText (props){

    let { label, name, value, onChange  } = props

    return (
        <div className="form-group">
            <label for={name}>{label}:</label>
            <input className="form-control" id={name} name={name} value={value} onChange = { (elem) => onChange (elem.target.value) }/><br/>

        </div>

    )
}
