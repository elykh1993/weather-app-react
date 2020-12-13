import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-auto">
          <form className="form-inline" id="city-search">
            <input
              className="form-control-sm"
              type="text"
              id="city-input"
              placeholder="Enter a city"
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
