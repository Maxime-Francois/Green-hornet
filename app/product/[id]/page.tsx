import { product } from "@/app/utils/product";
import ProductDetails from "./ProductDetails";
import Container from "@/app/components/Container";

interface Iprams {
  id:string;
}

const Product = ({params}: { params: Iprams}) => {
  console.log("params", params);
  
  return (
    <div className="p-8">
      <Container>
      <ProductDetails product = {product}/>
       </Container>
    </div>
  )
}

export default Product