import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";


import { Button, Table } from "react-bootstrap";
import { ModalType } from "../../types/ModalType";

import ProductModal from "../ProductModal/ProductModal";
import { EditButton } from "../EditButtonProps/EditButtonProps";
import { DeleteButton } from "../DeleteButtonProps/DeleteButtonProps";


const ProductTable = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    const [refreshData, setRefreshData] = useState(false);

    useEffect(() => {

        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fetchProducts();
    }, [refreshData]);

    console.log(JSON.stringify(products, null, 2));


//Se inicializa un producto vacio cuando vallamos a crear uno nuevo, para evitar "undefined"

        const initializeNewProduct = (): Product => {
        return {
            id: 0,
            title: "",
            price: 0,
            description: "",
            category: "",
            image: "",
            };
    };

    //Producto seleccionado que se va a pasar como prop al Modal
        const [product, setProduct] = useState<Product>(initializeNewProduct);
    
           //Manejo de Modal
        const [showModal, setShowModal] = useState(false);
        const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
        const [title, setTitle] = useState("");

    ///LOGICA
        const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal)
        setProduct(prod);
        setShowModal(true);
    };


  return (
    <div className="m-3">

        {/* Botón para que cuando el usuario haga click llame a la función que declaramos */}
            <Button onClick={() => handleClick("Nuevo Producto",
                initializeNewProduct(), ModalType.CREATE)}>
                Nuevo Producto
            </Button>

    {isLoading ? <Loader/>: (
           
        <Table>
            <thead>
                <tr>
                    <th> TITULO </th>
                    <th> PRECIO </th>
                    <th> DESCRIPCION </th>
                    <th> CATEGORIA </th>
                    <th> IMAGEN </th>
                    <th> EDITAR</th>
                    <th> BORRAR </th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        
                        <td> {product.title} </td>
                        <td> {product.price} </td>
                        <td> {product.description} </td>
                        <td> {product.category} </td>
                        <td> <img src={product.image} alt={product.title} style={{width: '50px'}} /> </td>
                        <td> <EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}/> </td>
                        <td> <DeleteButton onClick={() => handleClick("Borrar producto", product, ModalType.DELETE)} /> </td>

                    </tr>
                ))}
            </tbody>

        </Table>

    )}

    {showModal && (
        <ProductModal 
        show = {showModal}
        onHide={() => setShowModal(false)}
        title={title}
        modalType={modalType}
        prod={product}
        refreshData={setRefreshData}
        />
        
    )}

    
    </div>
  )
}

export default ProductTable;

