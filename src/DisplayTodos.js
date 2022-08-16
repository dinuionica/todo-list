/* The component that displays all todos of the list */
function DisplayTodos(props) {

    /* The function that checks if the current list item
       was clicked, and if so it deletes the current item
       from the list with todos */
    const handleClick = (event, key) => {

        /* create the new todos array */
        let newArrayTodos = []
        for (let i = 0; i < props.todoList.length; ++i) {
            if (i != key) {
                newArrayTodos.push(props.todoList[i]);
            }
        }
        /* update the array of todos */
        props.setData(newArrayTodos)

    };

    return (
        /* return the list of todos */
        <div className="d-flex justify-content-center">
            <div>
                {
                    /* return the current item and the desired event */
                    props.todoList.map((element, key) => (
                        <div
                            id="cspace"
                            onClick={event => {
                                handleClick(event, key)
                            }} key={key}>
                            {element}
                        </div>
                    ))
                }
            </div >
        </div >
    )
}
export default DisplayTodos;