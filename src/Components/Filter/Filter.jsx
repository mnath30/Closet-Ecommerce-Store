import './filter.css'
const Filter=()=>{
    return(
        <div className="flex-column">
                    <button className="btn-link padding-sm">Clear All Filters</button>  
                    <hr/>            
                    <h3 className="padding-sm">Filters</h3>
                    <h3 className="padding-sm">Price Range</h3>
                    <input className="padding-sm" type="range" min="1" max="100" value="50"/>
                    <p className="padding-sm">Price under: 500</p>
                    <h3 className="padding-sm">Category</h3>
                    <div className="padding-sm">
                        <input type="checkbox" id="all categories" name="all categories" checked/>
                        <label for="all categories">All Categories</label>
                        <br/>
                        <input type="checkbox" id="category 1" name="category 1"/>
                        <label for="category 1">Category 1</label>
                        <br/>
                        <input type="checkbox" id="category 2" name="category 2"/>
                        <label for="category 2">Category 2</label>
                        <br/>
                        <input type="checkbox" id="category 3" name="category 3"/>
                        <label for="category 3">Category 3</label>
                    </div>
                    <h3 className="padding-sm">Rating</h3>
                    <div className="padding-sm">
                        <input type="radio" id="4 stars and above"
                         name="rating" value="4 stars and above"/>
                        <label for="4 stars and above">4 Stars & above</label>
                        <br/>
                        <input type="radio" id="3 stars and above"
                         name="rating" value="3 stars and above"/>
                        <label for="3 stars and above">3 Stars & above</label>
                        <br/>
                        <input type="radio" id="2 stars and above"
                         name="rating" value="2 stars and above"/>
                        <label for="2 stars and above">2 Stars & above</label>
                        <br/>
                        <input type="radio" id="1 stars and above"
                         name="rating" value="1 stars and above"/>
                        <label for="1 stars and above">1 Stars & above</label>
                    </div>
                    <h3 className="padding-sm">Sort By</h3>
                    <div className="padding-sm">
                        <input type="radio" id="New Arrivals"
                         name="sorting" value="New Arrivals"/>
                        <label for="New Arrivals">New Arrivals</label>
                        <br/>
                        <input type="radio" id="Popularity"
                         name="sorting" value="Popularity"/>
                        <label for="Popularity">Popularity</label>
                        <br/>
                        <input type="radio" id="Price - High to Low"
                         name="sorting" value="Price - High to Low"/>
                        <label for="Price - High to Low">Price - High to Low</label>
                        <br/>
                        <input type="radio" id="Price - Low to High"
                         name="sorting" value="Price - Low to High"/>
                        <label for="Price - Low to High">Price - Low to High</label>
            </div>
        </div>
    )
}

export {Filter}