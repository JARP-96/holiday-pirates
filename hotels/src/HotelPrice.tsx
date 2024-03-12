
import { Price } from "./interfaces";
export const HotelPrice: React.FC<{ price: Price }> = ({ price }) => {
    const { value, symbol } = price
    return (
        <div>
            {value} {symbol}
        </div>
    );
}