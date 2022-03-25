import './filter.css'
const Filter=()=>{
    const rating=[{id:"4-stars-and-above",ratinglabel:"4 stars and above"},
    {id:"3-stars-and-above",ratinglabel:"3 stars and above"},
    {id:"2-stars-and-above",ratinglabel:"2 stars and above"},
    {id:"1-stars-and-above",ratinglabel:"1 stars and above"}]
    const category=[{isChecked:true,categoryname:"All Categories"},
    {isChecked:false,categoryname:"Category 1"},
    {isChecked:false,categoryname:"Category 2"},
    {isChecked:false,categoryname:"Category 3"},
    {isChecked:false,categoryname:"Category 4"}]
    const sortingCategory=[{id:"New-Arrivals",categoryname:"New Arrivals"},
    {id:"Popularity",categoryname:"Popularity"},
    {id:"Price-high-to-low",categoryname:"Price - High to Low"},
    {id:"Price-low-to-high",categoryname:"Price - Low to High"}
    ]


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
                {category.map(element=>(<>
                    <input type="checkbox" id={element.categoryname} name={element.categoryname} checked={element.isChecked}/>
                    <label htmlFor={element.categoryname}>{element.categoryname}</label>
                    <br/>
                </>))}
            </div>
            <h3 className="padding-sm">Rating</h3>
            <div className="padding-sm">
                {rating.map(element=>(<>
                    <input type="radio" id={element.id} name="rating" value={element.id}/>
                    <label htmlFor={element.id}>{element.ratinglabel}</label>
                    <br/>    
                </>))}
                        
            </div>
            <h3 className="padding-sm">Sort By</h3>
            <div className="padding-sm">
                {sortingCategory.map(element=>(<>
                    <input type="radio" id={element.id} name="sorting" value={element.id}/>
                    <label htmlFor={element.id}>{element.categoryname}</label>
                    <br/>
                </>))}
            </div>
        </div>
    )
}

export {Filter}