import { useState } from "react";
import IceCreamDetails from "./IceCreamDetails.jsx";
import NewIceCreamForm from "./NewIceCreamForm.jsx";
import NavBar from "./NavBar.jsx";
import React from "react";
import IceCreamList from "./IceCreamList.jsx";
import chocolate from "../assets/img/chocolate.jpg";
import cookiesandcream from "../assets/img/cookiesandcream.jpg";
import unicorn from "../assets/img/unicorn.jpg";
import rockyroad from "../assets/img/rockyroad.jpg";


const IceCreamControl = () => {
  const [iceCream, setIceCream] = useState([
    {
      flavor: 'chocolate',
      buckets: 1,
     scoops: 130,
      id: '1',
      image: chocolate,
      price: 4.99,
    },
    {
      flavor: 'rocky road',
      buckets: 1,
     scoops: 130,
      id: '2',
      image: rockyroad,
      price: 4.99,
    },
    {
      flavor: 'cookies and cream',
      buckets: 1,
     scoops: 130,
      id: '3',
      image: cookiesandcream,
      price: 4.99,
    },
    {
      flavor: 'unicorn',
      buckets: 1,
     scoops: 130,
      id: '4',
      image: unicorn,
      price: 4.99,
    },
  ]);

  const [handleShowFavorite, setShowIceCream] = useState(false);
  const [selectedIceCream, setSelectedFlavor] = useState(null);
  const [showAddFlavorForm, setShowAddFlavorForm] = useState(false);

  const handleShowAddFlavorForm = () => {
    setShowAddFlavorForm(true);
  }

  const handleShowFavoriteIceCream = () => {
    setShowIceCream(true);
    setSelectedFlavor(null);
  };

  const showIceCream = (iceCream) => {
    setShowIceCream(false);
    setSelectedFlavor(iceCream);
    setShowAddFlavorForm(false);
  };

  const handleHome = () => {
    setShowIceCream(false);
    setSelectedFlavor(null);
    setShowAddFlavorForm(false);
  }

  const handleRestock = () => {
    setIceCream((prevIceCream) => {
      const updatedIceCream = prevIceCream.map((item) => {
        return item.id === selectedIceCream.id
          ? {
              ...item,
              buckets: item.buckets + 1,
              scoops: item.scoops + 130,
            }
          : item;
      });
      const updatedItem = updatedIceCream.find((item) => item.id === selectedIceCream.id);
      setSelectedFlavor(updatedItem);
      return updatedIceCream;
    });
  };
  

  const handlePurchase = () => {
    setIceCream((prevIceCream) => {
      const updatedIceCream = prevIceCream.map((item) =>
        item.id === selectedIceCream.id && item.buckets > 0
          ? { ...item, scoops: item.scoops - 1 }
          : item
      );
     const updatedItem = updatedIceCream.find((item) => item.id === selectedIceCream.id);
     setSelectedFlavor(updatedItem);
      return updatedIceCream;
    });
  };
  

  const handleAddingNewIceCreamToList = (newIceCream) => {
    setIceCream((prevIceCream) => {
      const updatedIceCream = [...prevIceCream, newIceCream];
      return updatedIceCream;
    });
    setShowAddFlavorForm(false);
  };

  const filteredFlavors = handleShowFavorite
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
            <IceCreamList iceCream={filteredFlavors} onItemClick={showIceCream} />

          </>
        )}
      </div>
    </>
  );
}


export default IceCreamControl;