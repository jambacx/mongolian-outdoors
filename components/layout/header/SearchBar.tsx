const SearchBar = ({
  isOpen,
  closeSearchBar,
}: {
  isOpen: boolean;
  closeSearchBar: () => void;
}) => {
  return (
    <>
      <div
        className={`header-search-bar d-flex align-items-center ${
          isOpen ? "search-open" : ""
        }`}
      >
        <button className="search-close" onClick={closeSearchBar}>
          x
        </button>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="search-bar">
                <div className="contact-form-box contact-search-form-box">
                  <form action="#" method="post">
                    <input type="text" required placeholder="Search here..." />
                    <button type="submit">
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                  <p>
                    Type above and press Enter to search. Press Close to cancel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${isOpen ? "overlay-open" : ""}`}
      ></div>
    </>
  );
};

export default SearchBar;
