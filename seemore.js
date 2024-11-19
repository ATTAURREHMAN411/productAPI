console.log("ATTA UR REHMAN");

let data = localStorage.getItem("id")
let div = document.querySelector(".container")



fetch(`https://dummyjson.com/products/${data}`)
.then((res)=> res.json())
.then((res) => {
    console.log(res);
    
    div.innerHTML +=`
     <div class="card">
            <img src="${res.images}" alt="">
            <div class="text">
           <h3>Title: ${res.title}</h3>
            <h3>Price: Rs. <span>${res.price}</span></h3>
            <h3>Category: ${res.category}</h3>
            <h3>ShoppInformation: ${res.shippingInformation}</h3>
            <h3>Descruption: ${res.description}</h3>
            <h3>Dimensions: Depth: <span>${res.dimensions.depth}</span>  Width: <span>${res.dimensions.width}</span>  Height: <span>${res.dimensions.height}</span></h3>
            <h3 class="rating"><span class="Rat">Rating:</span> ⭐⭐⭐⭐⭐ <span class="r-span">/${res.rating}</span></h3>
            <button  onclick=" order()" class="addtocart">Add to Cart</button>
            </div>
        </div>`
    
}).catch((erro)=>{
      console.log(erro);
      
})

function order(){
    swal("Order Compelete !", "You order will reach you!", "success");
}

















