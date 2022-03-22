import './category-card.css'

const GenderCategoryCard = ({ source, information, caption }) => {
    return (
            <div className="card card-horiz flex-column">
                <div>
                    <img className="responsive-img" src={source} alt={information} />
                </div>
                <div className="card-body">
                    <h5 className="card-header txt-center">{caption}</h5>
                </div>
            </div>
    );

};

export {GenderCategoryCard}
