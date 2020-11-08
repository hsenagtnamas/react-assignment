export default function InputText (props){

    let { label, name, value, onChange, isValid, helpText  } = props

    return (
        <div className="form-group">
            <label htmlFor={name}>{label}: { isValid ? 'Ok' : helpText } </label>
            <input className="form-control" id={name} name={name} value={value} onChange = { (elem) => onChange (elem.target.value.trim()) }/><br/>
            
        </div>

    )
}
