<<<<<<< HEAD
var Box={
    price:0,
    calories:0,
    
     small:{
        price:300,
        calories:0,
     },
     large:{
        price:380,
        calories:0,
     },
     extra_large:{
       price:450,
       calories:0,
     },
     rice:{
       price:0,
       calories:80,
     },
     pasta:{
       price:0,
       calories:100,
     },
     salad:{
       price:0,
       calories:60,
     },
     pig:{
        price:60,
        calories:100
     },
     meet:{
        price:80,
        calories:150,
     },
     chicken:{
        price:40,
        calories:80,
     },
     shrimp:{
       price:100,
       calories:120, 
     },
     bread_crumbs:{
       price:15,
       calories:10,
     },
     extra_souse:{
       price:20,
       calories:5,
     },
     tofu:{
        price:20,
        calories:10,
     },
    
     calculate: function (size,garnish) {
          this.price = ChinaBox[size].price; 
          this.calories = ChinaBox[garnish].calories;
          if (ChinaBox[size]=="small") {
             this.calories =this.calories*1;
          }  else if(ChinaBox[size]=="large"){
                this.calories=this.calories *2;
          }else{ 
                this.calories=this.calories *3;
          }
    
          var checkboxArr = document.querySelectorAll ('input[name="add"]:checked');
            for (var i=0;i<checkboxArr.length;i++){
                var type = checkboxArr[i].id;
                this.price+= ChinaBox[type].price;
                this.calories+= ChinaBox[type].calories;
                
            }
            ChinaBox.result(this.price,this.calories);
       },
    
    
     
       result: function (price,calories) {
          document.getElementById("prise").innerHTML = price;
          document.getElementById("calories").innerHTML = calories;
       },
       result_all: function(){
          this.price=0;
          this.calories=0;
       }
    }
    
    
    document.getElementById("form").addEventListener('submit', (e)=>{
        e.preventDefault();
        var sizeBox = (document.querySelector('input[name="size"]:checked').value);
        var garnishBox = (document.querySelector('input[name="garnish"]:checked').value);
        ChinaBox.calculate(sizeBox,garnishBox);
    })
=======
var ChinaBox={
price:0,
calories:0,
basket: 0,

small:{
   price:300,
   calories:250,
},
large:{
   price:380,
   calories:400,
},

rice:{
   price:0,
   calories:50,
},
pasta:{
   price:0,
   calories:75,
},

pig:{
   price:60,
   calories:100
},
meet:{
   price:80,
   calories:150,
},
chicken:{
   price:40,
   calories:80,
},

bread_crumbs:{
   price:15,
   calories:10,
},
extra_souse:{
   price:20,
   calories:5,
},


calculate: function (size,garnish) {
      this.price = ChinaBox[size].price; 
      this.calories = ChinaBox[garnish].calories;
      if (ChinaBox[size]=="small") {
         this.calories =this.calories*1;
      }  else if (ChinaBox[size]=="large"){
            this.calories=this.calories *2;
      }else{ 
            this.calories=this.calories *3;
      }

      var checkboxArr = document.querySelectorAll ('input[name="add"]:checked');
      for (var i=0;i<checkboxArr.length;i++){
            var type = checkboxArr[i].id;
            this.price+= ChinaBox[type].price;
            this.calories+= ChinaBox[type].calories;
            
      }
      ChinaBox.result(this.price,this.calories);
   },



   result: function (price,calories) {
      document.getElementById("prise").innerHTML = price;
      document.getElementById("calories").innerHTML = calories;
   },
   result_all: function(){
      this.price=0;
      this.calories=0;
   }
}


document.getElementById("form").addEventListener('submit', (e)=>{
   e.preventDefault();
   var sizeBox = (document.querySelector('input[name="size"]:checked').value);
   var garnishBox = (document.querySelector('input[name="garnish"]:checked').value);
   ChinaBox.calculate(sizeBox,garnishBox);
})
>>>>>>> 0fa6911... Commit
