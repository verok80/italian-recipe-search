import imageTwo from './fruit.png'
function MyRecipesComponent({label, image,calories,ingridients,mealType}){

    return(<div>
        <div className='container'>
<h2>{label}</h2>
        </div>
        <div className='container'>
            <p>{mealType}</p>
        </div>
        <div className='container'>
        <img src={image} alt="dish"  width="400px"/>
        </div>
        <ul className='container list'>
            {ingridients.map(ingridient =>(
                <li>
                <img src={imageTwo} alt="icon" className='icon'/>    
                    {ingridient}</li>
            )
            )}
            </ul>
            <div className="container">
            <p>{calories.toFixed()} calories</p>
            </div>
        </div>
    )
}
export default MyRecipesComponent;