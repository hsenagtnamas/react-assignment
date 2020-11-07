export default function InputText (props){

    let { label, name, value, onChange  } = props

    return (
        <label>
            {label} : <input name={name} value={value} onChange = { (elem) => onChange (elem.target.value) }/><br/>
        </label>

    )
}