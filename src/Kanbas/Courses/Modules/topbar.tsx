function ModuleTopBar(){
    return (
        <div>
            <button className="btn btn-secondary ">Collapse All</button>
            <button className="btn btn-secondary ">Expand All</button>
            <button className="btn btn-secondary ">View Progress</button>
            <select className="btn btn-secondary ">
                <option>Publish All</option>
                <option>Unpublish All</option>
            </select>
            <button className="btn btn-warning " style={{backgroundColor: 'red', color: 'white'}}>+ Module</button>
        </div>
    )
}

export default ModuleTopBar;