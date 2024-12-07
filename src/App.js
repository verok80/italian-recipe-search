import { useEffect, useState } from 'react';
import imageOne  from './authentic-italian-pasta.jpg';
import imageThree from './food-cover_16675248.png'
import './App.css';
import MyRecipesComponent from './MyRecipesComponent';
   




function App() {

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordEntered, setWordEntered] = useState("pasta")

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordEntered}&app_id=1f595820&app_key=%20410ba818c2b360be560855d2082c11cf%09&cuisineType=Italian`);
      const data = await response.json()
      setMyRecipes(data.hits)
    }
    getRecipe()
  }, [wordEntered])

const myRecipeSearch = (e) => {
  setMySearch(e.target.value)
}
const finalSearch = (e)=>{
  e.preventDefault()
  setWordEntered(mySearch)
}

  return (
    <div className="App">
      <div className='container'>
      <img className="imgOne" src={imageOne} alt="Pasta"/>
      <h1>Find An Italian Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit = {finalSearch}>
          <input className='search' onChange = {myRecipeSearch} placeholder='Search...' value ={mySearch}/>
        </form>
      </div>
      <div className='container'>
        <button onClick={finalSearch}>
          <img src={imageThree} alt="icon" width="50px"/>
        </button>
      </div>

      {myRecipes.map((element, index) =>(
        <MyRecipesComponent key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingridients={element.recipe.ingredientLines}
        mealType ={element.recipe.mealType}
        />
      ))}
    </div>
  );
}

export default App;
