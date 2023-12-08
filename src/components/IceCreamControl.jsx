import IceCreamDetails from "./IceCreamDetails.jsx";
import NewIceCreamForm from "./NewIceCreamForm.jsx";
import { useState } from "react";

const IceCreamControl = () => {
    const [iceCream, setIceCream] = useState([
        {
            flavor: 'chocolate',
            buckets: 4,
            pints: 520,
            id: '1',
        },
        {
            flavor: 'rocky road',
            buckets: 4,
            pints: 520,
            id: '2',
        },
        {
            flavor: 'cookies and cream',
            buckets: 4,
            pints: 520,
            id: '3',
        },
        {
            flavor: 'unicorn',
            buckets: 4,
            pints: 520,
            id: '4',
        },
    ]);

    const [handleShowFavorite, setShowIceCream] = useState(false);
    const [selectedIceCream, setSelectedFlavor] = useState(null);

    const handleShowFavoriteIceCream = () => {
        setShowIceCream(true);
        setSelectedIceCream(null);
    };

    const showIceCream = (iceCream) => {
        setShowIceCream(false);
        setSelectedIceCream(iceCream);
    };

    const handleHome = () => {
        setShowIceCream(false);
        setSelectedIceCream(iceCream)
    }

    const handleRestock = () => {
        setIceCream((prevIceCream) => {
            const updatedIceCream = prevIceCream.map((item) => {
                return item.id === selectedIceCream.id ? {
                    ...item,
                    buckets: item.buckets + 1,
                } : item;
            })
            const updateItem = updatedIceCream.find((item) => item.id === selectedIceCream.id);
            return updatedIceCream
        });
    };

    const handlePurchase = () => {
        setIceCream((prevIceCream) => {
            const updatedIceCream = prevIceCream.map((item) => {
                return item.id === selectedIceCream.id && item.buckets > 0 ? {
                    ...item,
                    buckets: item.quantity - 1,
                } : item
            });
            const updateItem = updatedIceCream.find((item) => item.id === selectedIceCream.id);
            setSelectedFlavor
            return updatedIceCream
        });

        const handleAddingNewIceCreamToList = (newIceCream) => {
            setIceCream((prevIceCream) => {
                const updatedIceCream = [...prevIceCream, newIceCream];
                return updatedIceCream;
            });
        };

        const filteredFlavors = handleShowFavorite
            ? iceCream.filter((item) => item.flavor === 'chocolate')
            : iceCream;

        return (
            <>
           
            <div>
                <nav>
                    <button
                </nav>
            </div>
                <div>
                    <IceCreamDetails iceCream={selectedIceCream} />
                    <button onClick={handleShowFavoriteIceCream}>Show Favorite Ice Cream</button>
                </div>

                <div>
                    <NewIceCreamForm onSubmit={handleAddingNewIceCreamToList} />
                </div>
            </>
        );
    };
}

    export default IceCreamControl;