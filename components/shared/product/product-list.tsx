import ProductCard from './product-card';
import { Product } from '@/types';

type ProductListProps = {
    data: Product[];
    title?: string;
};

const ProductList = ({ data, title }: ProductListProps) => {
    return (
        <div className="my-10">
            <h2 className="h2-bold mb-4">{title}</h2>
            {data.length > 0 ? (
                <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data.map((product: Product) => (
                        <ProductCard
                            key={product.slug}
                            product={product}
                        ></ProductCard>
                    ))}
                </div>
            ) : (
                <div>No products found</div>
            )}
        </div>
    );
};

export default ProductList;
