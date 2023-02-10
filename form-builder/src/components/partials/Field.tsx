import Text from "./fields-types/Text";

function Field({field, handleOnChange}) {
    const {id, label, name, options, required, rows, type, value} = field

    return (
        <>
            <div className={`wrapper border border-dark} p-2`}>
                {( type === "text" ) ? 
                    (<Text params={field} handleOnChange={handleOnChange} /> )
                    :
                    ( type === "hidden" ) ?
                    (<input type={type} name={name} value={value} />) 
                    : 
                    (type === "textarea" ) ? (
                        <div className="form-group">
                        <div>
                            <label htmlFor={id}>{label}</label>
                            <textarea id={id} className="form-control" name="ReasonforContact" rows={rows}></textarea>
                        </div>
                    </div>
                ) 
                :
                (type === "submit" ) ? (
                    <div>
                        <input id={id} className="btn btn-primary" type={type} value={value} />
                    </div>
                ) 
                : 
                (<></>)
                }
            </div>
        </>

    )
    
    
}

export default Field