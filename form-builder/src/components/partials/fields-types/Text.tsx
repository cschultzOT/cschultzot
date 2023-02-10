import { useState } from "react"

const Text = ({params, handleOnChange}) => {
    const [isEditable, setIsEditable] = useState(false)
    const {id,label,name,type,required,value,placeholder} = params
    return  (
        <div className="form-group">
            <label htmlFor={id} onClick={() => setIsEditable(!isEditable)}>{label}</label>
            {isEditable ? (
                <>
                    
                </>
            ) : (<></>)}
            <input id={id} className="form-control" type={type} name={name} value={value} />
        </div>
    )
}
export default Text