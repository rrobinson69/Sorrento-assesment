import {useState} from 'react'
export function Button ( props ) {
    //store number of clicks
    const [click,setClick] = useState(0)
    const update = ( ) => {
        setClick( click + 1 )
    }
    return (
        <button className="button" onClick={update}>
            { "clicked " + click + " times"}
        </button>
    )
}
export default Button