import React, {useState, useEffect} from 'react';

const getStoredCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));

    if (storedCart) {
        return storedCart;
    }
    return [];
};

const Page = ({match}) => {
    const [date, setDate] = useState('');
    const [cart, setCart] = useState(() => getStoredCart());

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date) {
            setCart((cart) => cart.concat({
                date,
                url: match.url
            }));
            setDate('');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="picker">
                    <label htmlFor="date">Select da te:</label>
                    <input
                        type="date"
                        id="date"
                        onChange={e => setDate(e.target.value)}
                        value={date}
                    />
                </div>
                <button type="submit">Add to cart</button>
            </form>

            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        Date: {item.date}, url: {item.url}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Page;