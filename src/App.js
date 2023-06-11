import Card from "./component/Card";


const imageList = [
  {svg: <svg className="card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap">
	<title>Placeholder</title>
		<rect width="100%" height="100%" fill="#868e96"></rect>
			<text x="35%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
	</svg>},
  {svg: ''}
]

export default function App() {
  const cards = imageList.map(({svg}, index) => {
    if (svg) {
      return (<Card key={index}>{svg}</Card>)
    } else return <Card key={index}/>
  })
  return (
    <div className="cards">{cards}</div>
  );
}
