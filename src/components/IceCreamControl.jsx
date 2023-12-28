import { useState, useEffect } from "react";
import IceCreamDetails from "./IceCreamDetails.jsx";
import NewIceCreamForm from "./NewIceCreamForm.jsx";
import NavBar from "./NavBar.jsx";
import IceCreamList from "./IceCreamList.jsx";
import { useDispatch, useSelector } from 'react-redux';
import iceCreamSlice, {  addIceCream, sellScoop, restockIceCream, iceCreamSelector} from '../redux/iceCreamSlice';




const IceCreamControl = () => {
    const iceCream = useSelector(iceCreamSelector);

    const dispatch = useDispatch();

    const [showIceCream, setShowIceCream] = useState(false);
    const [selectedIceCream, setSelectedIceCream] = useState(null);
    const [showAddFlavorForm, setShowAddFlavorForm] = useState(false);

    useEffect(() => {
        if (selectedIceCream) {
            setSelectedIceCream(iceCream.find((item) => item.id === selectedIceCream.id));
        }
    }, [iceCream, selectedIceCream]);

    const handleShowAddFlavorForm = () => {
        setShowAddFlavorForm(true);
    }

    const handleShowFavoriteIceCream = () => {
        setShowIceCream(true);
        setSelectedIceCream(null);
    };

    const handleHome = () => {
        setShowIceCream(false);
        setSelectedIceCream(null);
        setShowAddFlavorForm(false);
    }

    const handleRestock = () => {
        dispatch(restockIceCream(selectedIceCream));
      

    };
    const handlePurchase = () => {
        dispatch(sellScoop(selectedIceCream));
    };

    const handleAddingNewIceCreamToList = (newIceCream) => {
        dispatch(addIceCream(newIceCream));
        setShowAddFlavorForm(false);
    };

    const filteredFlavors = showIceCream
        ? iceCream.filter((item) => item.flavor === 'chocolate')
        : iceCream;

    return (
        <>
            <div>
                <NavBar
                    onShowFavoriteFlavorClick={handleShowFavoriteIceCream}
                    onHomeClick={handleHome}
                    onAddFlavorClick={handleShowAddFlavorForm}
                />
            </div>
            <div>
                {showAddFlavorForm ? (
                    <NewIceCreamForm onSubmit={handleAddingNewIceCreamToList} />
                ) : selectedIceCream ? (
                    <IceCreamDetails
                        iceCream={selectedIceCream}
                        onHandleRestockClick={handleRestock}
                        onPurchaseClick={handlePurchase}
                    />
                ) : (
                    <>
                        <IceCreamList iceCream={filteredFlavors} onItemClick={setSelectedIceCream} />
                    </>
                )}
            </div>
        </>
    );
};


export default IceCreamControl;