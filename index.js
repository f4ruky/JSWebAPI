fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].title);
    let tableData = "";
    objectData.map((value)=>{
        tableData+=`<tr>
        <td>${value.id}</td>
        <td>${value.title}</td>
        <td>${value.description}</td>
        <td>${value.category}</td>
        <td>${value.price}</td>
        <td> <img src="${value.image}"/></td>
        <td>${value.rating.rate}<br\> <br\>${value.rating.count}</td>
      </tr>`;

    });
    document.getElementById("table_body").innerHTML=tableData;
})
