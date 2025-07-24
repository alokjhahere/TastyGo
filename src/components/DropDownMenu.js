import ItemList from "./ItemList";

const DropDownMenu = (props) =>{
   
   const {title, itemCards, isOpen, setShowIndex} = props;
 

   const handleToggle =() =>{
    setShowIndex();
}

    
    return(
        <div className="dropdown-container">
            <div className="menu-header">
                <h4 className="title">{title}</h4>
                <button onClick={handleToggle} className="dropdown-toggle">
                    {isOpen?'▲' : '▼'}
                </button>
            </div>

            {isOpen && <ItemList itemCards = {itemCards}/>}
        </div>
    )
}

export default DropDownMenu;