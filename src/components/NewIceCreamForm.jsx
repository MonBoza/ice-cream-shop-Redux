import { v4 } from 'uuid';

function NewIceCreamForm({ onSubmit }) {
    const handleNewIceCreamFormSubmission = (event) => {
        event.preventDefault();
        const flavor = event.target.flavor.value;
        const buckets = parseInt(event.target.buckets.value);
        const scoops = buckets * 130;
        const newIceCream = {
            flavor,
            buckets,
            scoops,
            id: v4(),
        };
        onSubmit(newIceCream);
    }

    return (
        <>
            <form onSubmit={handleNewIceCreamFormSubmission}>
                <div>
                    <label htmlFor="flavor">Flavor:</label>
                    <input type="text" name="flavor" id="flavor" placeholder="flavor" required />
                </div>
                <div>
                    <label htmlFor="buckets">Buckets:</label>
                    <select 
                    name="buckets" id="buckets" defaultValue="1" required>
                        {[1, 2, 3, 4].map((bucket) => (
                            <option key={bucket} value={bucket}>
                                {bucket}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Add Ice Cream</button>
            </form>
        </>
    );
}

export default NewIceCreamForm;