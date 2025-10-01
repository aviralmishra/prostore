import { cn } from '@/lib/utils';

const ProductPrice = ({
    price,
    className,
}: {
    price: number;
    className?: string;
}) => {
    const formattedPrice = price.toFixed(2);
    const [intPart, floatPart] = formattedPrice.split('.');

    return (
        <div className={cn('text-2xl', className)}>
            <span className="text-xs align-super">$</span>
            {intPart}
            <span className="text-xs align-super">.{floatPart}</span>
        </div>
    );
};

export default ProductPrice;
