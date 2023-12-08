import IceCreamList from "./IceCreamList";
import NewIceCreamForm from "./NewIceCreamForm"

const IceCreamControl = () => {
    const [IceCream, setIceCream] = useState([
        {
            flavor:'Chocolate',
            buckets: 4,
            pints: 130,
            id: '1'
        },
        {
            flavor:'Rocky Road',
            buckets: 4,
            pints: 130,
            id: '2'
        },
        {
            flavor:'Cookies and Cream',
            buckets: 4,
            pints: 130,
            id: '3'
        },
        {
            flavor:'Unicorn',
            buckets: 4,
            pints: 130,
            id: '4'
        }
  
    ]);
    return (
        <div>
        <IceCreamList/>
        </div>
        <div>
        <NewIceCreamForm/>
        </div>
    )

}

export default IceCreamControl;
