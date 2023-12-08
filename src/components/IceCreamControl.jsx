import IceCreamList from "./IceCreamList.jsx";
import NewIceCreamForm from "./NewIceCreamForm.jsx";
import { useState } from "react";

const IceCreamControl = () => {
    const [iceCream, setIceCream] = useState([
        {
            flavor:'chocolate',
            buckets: 4,
            pints: 130,
            id: '1'
        },
        {
            flavor:'rocky road',
            buckets: 4,
            pints: 130,
            id: '2'
        },
        {
            flavor:'cookies and cream',
            buckets: 4,
            pints: 130,
            id: '3'
        },
        {
            flavor:'unicorn',
            buckets: 4,
            pints: 130,
            id: '4'
        }
  
    ]);
    const [handleShowFavorite, setShowIceCream] = useState(false);
    const [selectedIceCream, setSelectedFlavor] = useState(null);
  
    const handleShowFavoriteIceCream= () => {
      setShowIceCream(true);
      setSelectedIceCream(null);
    }
    const showIceCream = (iceCream) => {
        setShowIceCream(false);
        setSelectedIceCream(iceCream);
    }

    const handleAddingNewIceCreamToList = (newIceCream) => {
        setIceCream((prevIceCream) => {
            const updateIceCream = [...prevIceCream, newIceCream];
            return updatedIceCream;

        });
    };
  

    const filteredFlavors = showIceCream ? iceCream.filter(() => iceCream.flavor === 'chocolate') : iceCream;
    return (
        <>
        <div>
            
          < IceCreamList iceCream={selectedIceCream} />
          <button onClick={handleShowFavoriteIceCream}>ShowMostPopular</button>
          <button onClick={showIceCream}>Show All IceCream</button>
        
        </div>
       
        <div>
                <NewIceCreamForm onSubmit={handleAddingNewIceCreamToList}/>
            </div>
            </>
    )

}

export default IceCreamControl;
