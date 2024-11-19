





let div = document.querySelector(".container")

fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((res)=>{
    res.products.map((item)=>{
        console.log(item);
        div.innerHTML +=`
        <div class="card">
                <img src="${item.thumbnail}" alt="">
                <p>${item.title}</p>
                <p class="price">Rs.${item.price}</p>
                <a  onclick="data(${item.id})" href="seemore.html">See more...</a>
            </div>
        `
    })
    
}).catch((erro)=>{
   console.log(erro);
   
})


function data(id){
     localStorage.setItem("id", id)
     window.location = "seemore.html"
     
}


































