function getCategories(){
    var data = fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); 
                })
                .then(data => {
                    console.log(data?.categories);
                    if(data?.categories){
                       const cardList = document.getElementById("card-list");
                       var foodHtml = "";
                       data?.categories.map((value, index)=>{
                        foodHtml+= `<div class="col-3">
                                        <div class="card">
                                            <div class="card-img">
                                            <img src="${value.strCategoryThumb}" alt="" srcset="">
                                            </div>
                                            <div class="card-title">
                                                <h2 class="text-center sphide" style="width: 268px;">${value.strCategory}</h4> 
                                            <div class="button-container">
                                                <span onclick="setCookie('category','${value.strCategory}',30);route('Bycategories')" class="btn">
                                                    View All &nbsp;
                                                    <svg viewBox="0 0 24 24" fill="none" width="20px" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
                                                </span>  
                                                </div>
                                            </div>
                                            </div>
                                        </div>`;
                       })
                       if(cardList){
                          cardList.innerHTML = foodHtml;
                       }
                    }else{

                    }
                   
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                }); 
}

function getListByCategory(){
    var currentCategory = getCookie('category');
    if(currentCategory){
      const categoryName = document.getElementById("category-name");
      if(categoryName){
        categoryName.innerHTML = currentCategory;
      }
    var data = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+currentCategory)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); 
                })
                .then(data => { 
                    if(data?.meals){
                       const cardList = document.getElementById("by-category-list");
                       var foodHtml = "";
                       data?.meals.map((value, index)=>{
                        foodHtml+= `<div class="col-3">
                                        <div class="card">
                                            <div class="card-img">
                                            <img src="${value.strMealThumb}" alt="" srcset="">
                                            </div>
                                            <div class="card-title">
                                                <h2 class="text-center sphide" style="width: 268px;">${value.strMeal}</h4> 
                                            <div class="button-container">
                                                <span onclick="setCookie('current_meal_id', '${value.idMeal}' ,30);route('details')" class="btn">
                                                    View Details &nbsp;
                                                    <svg viewBox="0 0 24 24" fill="none" width="20px" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
                                                </span>  
                                                </div>
                                            </div>
                                            </div>
                                        </div>`;
                       })
                       if(cardList){
                          cardList.innerHTML = foodHtml;
                       }
                    }else{

                    }
                   
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                }); 
            }
}

function getfavouritesList(){
    var favourites = getArrayCookie('favourites');

    console.log(favourites);
    if(favourites){
     
                       const cardList = document.getElementById("favourite-list");
                       var foodHtml = "";
                       favourites.map((value, index)=>{ 
                        const fav = JSON.parse(value);
                        foodHtml+= `<div class="col-3">
                                        <div class="card">
                                            <div class="card-img">
                                            <img src="${fav.image}" alt="" srcset="">
                                            </div>
                                            <div class="card-title">
                                                <h2 class="text-center sphide" style="width: 268px;">${fav.title}</h4> 
                                            <div class="flex-container">
                                            <div class="button-container flex-item">
                                                <span  onclick="setCookie('current_meal_id', '${fav.id}' ,30);route('details')" class="btn">
                                                    View Details &nbsp;
                                                    <svg viewBox="0 0 24 24" fill="none" width="20px" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
                                                </span>  
                                                <span onclick="deleteFromArrayCookie('favourites', ${index}, 30);getfavouritesList()" class="btn-delete"> 
                                                <svg fill="#c13313" viewBox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg" stroke="#c13313"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"></path></g></svg>
                                                </span>  
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>`;
                       })
                       if(cardList){
                          cardList.innerHTML = foodHtml;
                       } 
            }
}

function getMealDetails(){
    var meal = getArrayCookie('current_meal_id');
 
    if(meal){ 
        var data = fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+meal)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => { 
            if(data?.meals){
                var mealInfo = data.meals[0];
               const cardList = document.getElementById("details-section");
               var foodHtml = `<div class="row"> 
               <div class="col-4">
                   <img src="${mealInfo.strMealThumb}" width="100%" alt="" srcset="">
               </div>
               <div class="col-8">
                   <h1 class="text-light" style="font-size: xx-large;margin-left: 20px;" id="meal-name">${mealInfo.strMeal}</h1>
                   <p class="text-mute" style="margin-left: 20px;" id="meal-desc">${mealInfo.strInstructions}</p>
                   
                   <ul>
                       <li class="text-light mb-10">Category : <span class="text-mute" id="category-name">${mealInfo.strCategory}</span></li>
                       <li class="text-light mb-10">Area : <span class="text-mute" id="area-name">${mealInfo.strArea}</span></li>
                       <li class="text-light mb-10">Tags : <span class="text-mute" id="tag-name">${mealInfo.strTags}</span></li>
                   </ul>
   
                   <div class="flex-container" style="justify-content: left;margin-left: 20px;">
                       <div class="button-container flex-item" >
                           <a href="${mealInfo.strYoutube}" target="_blank" class="btn" id="watch_a">
                               Watch &nbsp;
                               <svg viewBox="0 0 24 24" width="24px"  fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM10.6935 15.8458L15.4137 13.059C16.1954 12.5974 16.1954 11.4026 15.4137 10.941L10.6935 8.15419C9.93371 7.70561 9 8.28947 9 9.21316V14.7868C9 15.7105 9.93371 16.2944 10.6935 15.8458Z" fill="#fff"></path> </g></svg>
                           </a>  
                           <a href="${mealInfo.strSource}" target="_blank" class="btn" id="source_a">
                               View source &nbsp;
                               <svg viewBox="0 0 24 24" fill="none" width="20px" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> 
                           </a> 
                       </div>
                   </div>
               </div>
           </div>`;
               if(cardList){
                  cardList.innerHTML = foodHtml;
               }
            }else{

            }
           
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });         
            }
}

function getFoodListBySearch(){
    console.log("occur");
    var explore = document.getElementById("explore");
    if(explore){
        console.log(explore.value);
    var data = fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+explore.value)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); 
                })
                .then(data => {
                     if(data?.meals){
                       const cardList = document.getElementById("card-search-list");
                       var foodHtml = "";
                       data?.meals.map((value, index)=>{
                         foodHtml+= `<div class="col-3">
                                        <div class="card">
                                            <div class="card-img">
                                            <img src="${value.strMealThumb}" alt="" srcset="">
                                            </div>
                                            <div class="card-title">
                                                <h2 class="text-center sphide" style="width: 268px;">${value.strMeal}</h4> 
                                            <div class="button-container">
                                                <span onclick="appendToArrayCookie('favourites', JSON.stringify({id: '${value.idMeal}', title: '${value.strMeal}', image: '${value.strMealThumb}'}), 30);" class="btn text-center">
                                                    Add to Watchlist &nbsp;
                                                    <svg viewBox="0 0 24 24" role="img"  width="18px" xmlns="http://www.w3.org/2000/svg" aria-labelledby="favouriteIconTitle" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="favouriteIconTitle">Favourite</title> <path d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"></path> </g></svg> 
                                                </span> 
                                                </div>
                                            </div>
                                            </div>
                                        </div>`;
                       })
                       if(cardList){
                          cardList.innerHTML = foodHtml;
                       }
                    }else{
                        const cardList = document.getElementById("card-search-list");
                        var foodHtml = `<div class="col-12">
                            <span class="text-center" style="display:block">
                              <img src="assets/media/chef.svg" />
                            </span>
                            <h3 class="text-light text-center">No dish found</h3>
                            </div>`;
                        if(cardList){
                          cardList.innerHTML = foodHtml;
                       }
                    }
                   
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                }); 
            }
}

// getCategories();