export default function List() {
    
  let products = ['Tomatoes','Pasta','Coconut']
  
  return (
      <div>
        <h4>Products</h4>
          {
            products.map((product, i)=> {
              return (
                <div className="food" key={i}>
                  <img src={`/food${i}.png`} alt={product} className="food-img"/>
                  <h4>{product} $40</h4>
                </div>
              )
            })
          }
      </div>
    )
  }