import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GIfExpertApp = () => {

const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

// console.log(categories)

const onAddCategory = (NewCategory)=>{
  // console.log(NewCategory);

  if(categories.includes(NewCategory)) return;
  setCategories([NewCategory,...categories])
}
  return (
    <>

{/*Titulo*/}
        <h1>GifExpertApp</h1>
{/*input*/}
<AddCategory 
    onNewCategory ={onAddCategory}
// setCategories={setCategories}
>

</AddCategory>

<button onClick={onAddCategory}>Agregar</button>

<ol>
  {categories.map(category =>{
     return  <li key={category}>{category}</li>
  })} 
  {/* <li>ABC</li> */}

</ol>


{/*Listado de gift*/}

    </>
  )
}
