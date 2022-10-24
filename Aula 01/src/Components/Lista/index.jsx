const Lista= ({children}) => {

    return (

        <ul>
            {children.map ( (item, index) => <li key={index}> {item} </li>) }
        </ul>

    )

}

export default Lista;