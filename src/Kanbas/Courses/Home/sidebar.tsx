function HomeSideBar(){
    return (
        <div>
            <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: '250px' }}>
            <h3>
                Course Status
            </h3>
            <button className="btn btn-secondary ">Unpublish</button>
            <button className="btn btn-secondary ">Publish</button>
            <ul className="no-list-style">
                <li><a href="#" className="btn btn-secondary d-block w-100 mb-2">item 1</a></li>
                <li><a href="#" className="btn btn-secondary d-block w-100 mb-2">item 2</a></li>
                <li><a href="#" className="btn btn-secondary d-block w-100 mb-2">item 3</a></li>
                <li><a href="#" className="btn btn-secondary d-block w-100 mb-2">item 4</a></li>
                <li><a href="#" className="btn btn-secondary d-block w-100 mb-2">item 5</a></li>
                <li><a href="#" className="btn btn-secondary d-block w-100 mb-2">item 6</a></li>
            </ul>
          </div>
        </div>
    );
}

export default HomeSideBar;