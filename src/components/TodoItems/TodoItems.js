import React from "react";

const TodoItems = (props)=>{
    // function bse way
    const {items , deleteItem} = props
    let length = items.length;

    const ListItems = length ? (
        items.map(item =>{
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={ ()=> deleteItem(item.id)}>&times;</span>
                </div>
            );
        })
    ) : (
        <div>No Data Found</div>
    )
    return (
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems