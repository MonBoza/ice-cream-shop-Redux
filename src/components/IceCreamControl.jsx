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
      buckets: 4,
      pints: 520,
      id: '1',
      image: chocolate
    },
    {
      flavor: 'rocky road',
      buckets: 4,
      pints: 520,
      id: '2',
      image: rockyroad
    },
    {
      flavor: 'cookies and cream',
      buckets: 4,
      pints: 520,
      id: '3',
      image: cookiesandcream
    },
    {
      flavor: 'unicorn',
      buckets: 4,
      pints: 520,
      id: '4',
      image: unicorn
    },
  ]);

  const [handleShowFavorite, setShowIceCream] = useState(false);
  const [selectedIceCream, setSelectedFlavor] = useState(null);

  const handleShowFavoriteIceCream = () => {
    setShowIceCream(true);
    setSelectedFlavor(null);
  };

  const showIceCream = (iceCream) => {
    setShowIceCream(false);
    setSelectedFlavor(iceCream);
  };

  const handleHome = () => {
    setShowIceCream(false);
    setSelectedFlavor(null);
  }

  const handleRestock = () => {
    setIceCream((prevIceCream) => {
      const updatedIceCream = prevIceCream.map((item) => {
        return item.id === selectedIceCream.id ? {
          ...item,
          buckets: item.buckets + 1,
        } : item;
      })
      return updatedIceCream;
    });
  };

  const handlePurchase = () => {
    setIceCream((prevIceCream) => {
      const updatedIceCream = prevIceCream.map((item) =>
        item.id === selectedIceCream.id && item.buckets > 0
          ? { ...item, buckets: item.buckets - 1 }
          : item
      );
      return updatedIceCream;
    });
  };
  

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
        <NavBar
          onShowFavoriteFlavorClick={handleShowFavoriteIceCream}
          onHomeClick={handleHome}
        />
      </div>
      <div>
        {selectedIceCream ? (
          <IceCreamDetails
            iceCream={selectedIceCream}
            onHandleRestockClick={handleRestock}
            onHandlePurchaseClick={handlePurchase}
          />
        ) : (
          <>
            <IceCreamList iceCream={filteredFlavors} onItemClick={showIceCream} />
            <NewIceCreamForm onSubmit={handleAddingNewIceCreamToList} />
          </>
        )}
      </div>
    </>
  );
}

export default IceCreamControl;