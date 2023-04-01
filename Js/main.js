// Filter Section

let filterStatus = false;

function filter_open() {
if(filterStatus===false){
        document.getElementById("filter").style.marginRight = "0%";
        filterStatus=true;
    }
else
    {
        document.getElementById("filter").style.marginRight = "-25%"
        filterStatus=false;
    }
}
let dropStatus = false;

function drop_open() {
if(dropStatus===false){
        document.getElementById("dropdown").style.marginLeft = "20%";
        dropStatus=true;
    }
else
    {
        document.getElementById("dropdown").style.marginLeft = "-30%"
        dropStatus=false;
    }
}

// Menu section
 let menubar=false;
 function openmenu(){
    if(menubar===false){
        d=document.getElementById("side_menu").style.marginLeft="0%";
        menubar=true;
        
    }
    else{
        d=document.getElementById("side_menu").style.marginLeft="-21%";
        menubar=false;
   
}
 }

    //  Object section
    let products =[
        {
            id: 1,
            product_name:"White Trouser",
            price:  499,
            category:"trouser",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fad%2F93%2Fad93b9a3622c98be6359b19faa633f8715ecb7b4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
    
        },
        {
            id: 2,
            product_name:"Relaxed Fit Short-sleeved shirt",
            price: 799.00,
            category: "shirt",
            pic: "https://lp2.hm.com/hmgoepprod?set=source[/fe/11/fe11dfaf0728cf5ca7ea9463120a7cf6fcee417f.jpg],origin[dam],category[men_shirts_casual],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
    
        },
        {
            id: 3,
            product_name:"Relaxed Fit Patterned resort shirt",
            price: 1599,
            category: "shirt",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F01%2F1a%2F011a625335e2be045af3adabac066ded8d143274.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
    
        },
        
        {
            id: 4,
            product_name:"Loose Fit Tailored trousers",
            price: "1,999",
            category: "trouser",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F5a%2F6b%2F5a6b1a600c58425a4920d7288fde2639a9040379.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
    
        },
        
        {
            id: 5,
            product_name:"Oversized Fit Rugby shirt",
            price: 1999,
            category: "oversixe-Tshirt",
            pic: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5e%2F30%2F5e30f492a8ac9132a8baa65578174bf98af5e5eb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
    
        },
        {
            id: 6,
            product_name:"Appliquéd baseball jacket",
            price: 4999,
            category: "jacket",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ff1%2Fed%2Ff1ed378af9d45c44d07467d075dbde3cfbf580e1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
    
        },
        {
            id: 7,
            product_name:"Slim Fit Twill trousers",
            price:1499,
            category: "trouser",
            pic: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa5%2F50%2Fa550b9b7e6e53200ccafa6ea0fee1df4ef3aeaf8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_trousers_slim_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
        },
        {
            id: 8,
            product_name:"Regular Fit T-shirt",
            price: 799.00 ,
            category: "Tshirt",
            pic: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]"
        },
        {
            id: 9,
            product_name:"Relaxed Fit Cargo trousers",
            price: "2,999" ,
            category: "trouser",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fad%2F93%2Fad93b9a3622c98be6359b19faa633f8715ecb7b4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        },
    
        {
            id: 10,
            product_name:"Regular Fit pyjama T-shirt and shorts",
            price: 1799.00 ,
            category: "short",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fff%2F23%2Fff23f7b9dad438f713b529c14eccc1da01954780.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_nightwearloungewear_pyjamas%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        },
        {
            id: 11,
            product_name:"Printed shorts",
            price: 1499,
            category: "short",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2a%2F0c%2F2a0c2931dbda9ad3f785b0be2d0532e19bf80d1f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_shorts_casual%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        },
       
        {
            id: 12,
            product_name:"Regular Fit Denim jacket",
            price: 2999,
            category: "jacket",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F6a%2F84%2F6a847f5b1e3fbc6aa7ad6f3fd7691e40693f6493.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        },
       
        {
            id: 13,
            product_name:"Regular Fit Nylon cargo shorts",
            price:1999.00,
            category: "short",
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fe5%2F45%2Fe5458c00c799b344c831823be899cdd81a14af7d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        },
       
        {
            id: 14,
            product_name:"Hooded denim jacket",
            price: 3599.00,
            category: "jacket",
         
            pic: "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc9%2F75%2Fc975e1f282ed5d77fffea3b871ca9a99a92c5c07.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_jackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        },
        {
            id: 15,
            product_name:"Oversized Fit Printed T-shirt",
            price: 499.00,
            category: "tshirt",
            pic:"https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F17%2F7c%2F177c6634560044777bb0363e29c21ab3dbe3ecda.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D"
        },
    ]
    
    function displayData(arr){

        document.getElementById("prod_container").innerHTML=""

        arr.forEach((product,index)=>{

            let card = document.createElement("div")
            card.classList.add("card_item");
    
            let imgcontainer = document.createElement('div')
            imgcontainer.classList.add("prod_img");
    
            let img = document.createElement("img");
            img.setAttribute("src",product.pic);
            imgcontainer.appendChild(img);
    
            let prod_info = document.createElement("div")
            prod_info.classList.add("prod_info");
    
            let title= document.createElement("h4");
            title.append(product.product_name);
            prod_info.appendChild(title)
    
            let para = document.createElement("p");
            para.append("₹"+product.price)
            prod_info.appendChild(para)
    
     
            card.appendChild(imgcontainer)
            card.appendChild(prod_info)
    
            document.getElementById("prod_container").appendChild(card);
        })
    }
    
    
    displayData(products)

    let filters = {
        product_name: null,
        category:null,
        min_price: null,
        max_price: null
    }

    function setfilter(property,Value){
        if(Value!==""){
            filters[property] =Value;
        }
        else{
            filters[property]=null
        }
    }

    function filterData(){
        let filterArr = products;
        
        if(filters.product_name!==null){
            filterArr = filterArr.filter((product,index)=>{
                return product.product_name.toLowerCase().includes(filters.product_name.toLowerCase())
            })
        }
        if(filters.category!==null){
            filterArr = filterArr.filter((product,index)=>{
                return product.category.toLowerCase() === filters.category.toLowerCase()
            })
        }

        if(filters.min_price!==null){
            filterArr = filterArr.filter((product,index)=>{
                return Number(product.min_price)>= Number(filters.min_price)
            })

        }
        displayData(filterArr);
        console.log(filterArr)
    }

    // function myFunction() {
    //     alert("Jay Shree Ram🚩🚩");
       
    //   }
    //   myFunction()