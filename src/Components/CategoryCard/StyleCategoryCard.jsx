import "./category-card.css"

const StyleCategoryCard=({source,information,caption})=>{
    return(
        <>
            <div className="card square-card flex-column">
                <img className="responsive-img square-img" src={source} alt={information}/>
                <h5 className="card-header">{caption}</h5>
            </div>
        </>
    )
}

export {StyleCategoryCard};