export function List (props) {
    const ListItems = props.items.map( (thing) => {
    return(
        <li>Fruit: {thing.name} Colour: {thing.colour}</li> 
        )
    } )
    return(
        <div className="list">
            <ul>
                {ListItems}
            </ul>
        </div>
    )
}
export default List