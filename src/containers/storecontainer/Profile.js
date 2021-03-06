import React, {Component} from "react";
import {Link} from "react-router-dom";
import AppContext from "../../AppContext";
import { ProductCard } from "../../components/Index";
import { getProducts, getProductsByUser, deleteProduct } from "../../services/productWs";
import { denormalizeData, normalizeData } from "../../utils/dataUtils";
import store from "../../images/store.jpg"


class StoreProfile extends Component{
    static contextType = AppContext;

    componentDidMount(){
        const {products,user} = this.context.state;
        const {setProducts} = this.context;
        const {history} = this.props;
        
            if(denormalizeData(products).length < 1){
                getProductsByUser(`${user._id}`).then(res=>{
                    const {result} = res.data  
                    const products = normalizeData(result)
                    console.log(history)
                    setProducts(products)
                })
            }
        }

    onDeleteProduct=(id,index)=>{
    let {products} = this.context.state;
    
    deleteProduct(id).then(
        res=>{
            console.log("done")
            delete products[id]
            this.setState({products})
        }).catch(err=>{console.log("error")})

}

    render(){
        const {products, user} = this.context.state
        return(
            <div> 
            <div className="uk-card uk-card-default uk-card-body uk-margin-small">
            <h1> <span uk-icon="icon: home; ratio: 2" ></span>Bienvenido a tu tienda</h1>
            <p>Ahora podrás editar, crear o eliminar productos cuando gustes</p>
            <Link to={`/product/new`} class="uk-button uk-button-default" type="button">
            Crear producto
            </Link>
            </div>
            <div className="uk-section">
                <div className="uk-container">
                <div className="uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s">
                    {denormalizeData(products).map((product, index) => (
                    <ProductCard key={index} {...product} index={index} userId={user._id} onDelete={this.onDeleteProduct} />
                    ))}
                </div>
                </div>
         

            </div>
            </div>
        )
    }
}

export default StoreProfile;