export default function Card({children}) {
  return (
    <div className="card" style={{ width: "18rem"}}>
      {children ? <div>{children}</div> : <div></div>}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="https://getbootstrap.com/docs/4.3/components/card/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
