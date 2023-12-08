import { v4 } from 'uuid';

function NewIceCreamForm({ onSubmit }) {
    const handleNewIceCreamFormSubmission = (event) => {
        event.preventDefault();
        const newIceCream = {
            flavor: event.target.flavor.value,
            buckets: parseInt(event.target.buckets.value),
            pints: parseInt(event.target.pints.value),
            id: v4(),
        };
        onSubmit(newIceCream);
    }
return (
    <>
    <form onSubmit={handleNewIceCreamFormSubmission}>
    <div>
          <label for="flavor">Flavor:</label>
          <input type="text" name="flavor" placeholder="flavor" required />
        </div>
        <div>
          <label htmlFor="buckets">Buckets:</label>
          <select name="buckets" defaultValue="1" required>
            {[1, 2, 3, 4].map((bucket) => (
              <option key={bucket} value={bucket}>
                {bucket}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewIceCreamForm;