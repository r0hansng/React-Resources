/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

import PropTypes from 'prop-types';

function List(props){
    
    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //                 {id: 2, name: "orange", calories: 45}, 
    //                 {id: 3, name: "banana", calories: 105}, 
    //                 {id: 4, name: "coconut", calories: 159}, 
    //                 {id: 5, name: "pineapple", calories: 37}]

    const category = props.category
    const itemList = props.items
    

    const listItems = itemList.map((item) => <li key={item.id}>{item.name} : <b>{item.calories}</b></li>)

    return(
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    )
}

List.PropTypes = {
    category: PropTypes.string,
    // We use arrayOf because we are working with an array and we use .shape() because we want to tell React that what are we going to pass in the object
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                calories: PropTypes.number})),
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List