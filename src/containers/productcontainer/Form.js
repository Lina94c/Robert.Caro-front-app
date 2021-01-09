import React from 'react';
<<<<<<< HEAD
import { InputField, TextField } from "../../components/Index";
=======
import { InputField, TextField } from "../../components/";
>>>>>>> 6f6133484c50b7a0208496f75701a5b9c5e304c2


const Form = ({ handleSubmit, handleChange, handleImagesChange, product }) => {
    const descriptionLength =
      (product.description && product.description.length) || 0;
    return (
      <div>
        <form className="uk-width-1-1" onSubmit={handleSubmit}>
          <InputField
            name="title"
            value={product.title}
            placeholder="Nombre de producto"
            handleChange={handleChange}
          />
          <InputField
            name="price"
            value={product.price}
            placeholder="precio"
            handleChange={handleChange}
          />
          <TextField
            name="description"
            value={product.description}
            hint={`${descriptionLength}/50`}
            handleChange={handleChange}
          />
          <TextField
            name="images"
            value={product.images?.join(",")}
            handleChange={handleImagesChange}
            hint="separar imágenes por comas"
          />
          <button 
          onClick= {handleSubmit}
          type="submit" className="uk-button uk-button-primary">
          Crear producto
          </button>
        </form>
      </div>
    );
  };
  export default Form;