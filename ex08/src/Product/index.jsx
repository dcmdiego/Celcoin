import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "./product.css"

const Product = () => {
  const { idProduct } = useParams();

  const [recipe, setRecipe] = useState(null);

  useEffect(() => {

    const request = axios.get(`http://localhost:1234/recipes/${idProduct}`);
    request.then((response) => {
        setRecipe(response.data);
    })

  }, []);

  const buildRecipe= () => {

    if (!recipe) return <h1>Carregando a receita, aguarde!</h1>

    // return recipe.map(info => {
        
    //     return (
    //         console.log(info)
    //     )

    // })

    const passos = recipe.steps.map(passo => {
        return (
            <li>{passo}</li>
        )
    })

    const ingredientes = recipe.ingredients.map(ingrediente => {

        return (
            <span>{ingrediente} </span>
        )
    })

    return (

        <>
        <h1>{recipe.title}</h1>
        <ul>
            <li>Ingredientes: {ingredientes}</li>
            <li>Tempo de preparo: {recipe.time} minutos</li>

        </ul>
        <ul>
            Passo a passo:
            <br/>
            {passos}
        </ul>
        </>
    )

  }

  const recipeComponent = buildRecipe();

  return (

    <div className="Product">
        {recipeComponent}

        <Link to={"/"}>
            <button>Voltar</button>
        </Link>

    </div>


  )
};

export default Product;
