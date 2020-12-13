import "./Search.css";

export default function Search() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleSubmit(event) {
    
  }
  

  return (
    <div className="Search">
      <div className="row">
        <div className="col-auto">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              className="form-control-sm"
              type="text"
              placeholder="Enter a city"
              onChange={handleCity}
            />
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              id="search"
            >
              Search
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-sm"
              id="current-location"
            >
              Current Location
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
