import "./empty-page.css"

const EmptyPage=({item})=>{
  const {source,information,message} = item
  return (
    <div className="flex-column txt-center">
      <img className="empty-page-img" src={source} alt={information}/>
      <h2 className="empty-page-heading">{message}</h2>
    </div>
  )
}

export { EmptyPage }