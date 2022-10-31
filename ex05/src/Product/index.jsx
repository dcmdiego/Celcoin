import { useState } from "react";
import "./product.css"

const Product = (props) => {

    const {icon, name, price, updateTotal} = props

    const [selected, setSelected] = useState(false);

    const adjustedPrice = price.toFixed(2).toString().replace(".", ",");

    const handleSelect = () => {

        let isSelected = !selected;

        if (selected) {
            updateTotal(price * -1)
        } else {
            updateTotal(price)
        }

        setSelected(isSelected);

    }

    const checkSelected = () => {
        
        let classes = "product"

        if (selected) {
            classes = "product selected"
        }

        return classes

    }

    return (

        <div className={checkSelected()} onClick={handleSelect}>
            {icon} {name} - R$ {adjustedPrice}
        </div>

    );

}

export default Product;