import { IProduct } from "../interfaces/product";
import { formatCurrency, slugify } from "../utils/tool";

export default function ProductItem({ product }: { product: IProduct }) {
    const imageSrc = product.image ? `data:image/png;base64,${product.image}` : 'images/logo_dannygreen_biomarkt.png';
    return (
        <div className="col-3 text-center">
            <div className="card card-hover">
                <a href={`/products/${product.default_code}-${slugify(product.name)}`} className="text-decoration-none">
                    <img src={imageSrc} className="card-img" />
                    <div className="card-body">
                        <h4 className="card-title">[{product.default_code}] {product.name}</h4>
                        <h5 className="card-text">{formatCurrency(product.list_price)} / {product?.uom_id[1].toLowerCase()}</h5>
                        {/* <a href="#" className="btn btn-primary">See Profile</a> */}
                    </div>
                </a>
            </div>
        </div>

    )
}