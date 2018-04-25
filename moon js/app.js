//use Moon Router with Moon

Moon.use(MoonRouter);


Moon.component("Home", {
   template:
   `<div>
   <h1>Moon.js Calculator App </h1>
   <p>This is the homepage of your application. Click Calculator to use the Calculator</p>
   </div>`
});

Moon.component("Calculator", {
   data: () => ({
      number1: 1,
      number2: 2

   }),
   template://input text box areas
   `<div>
   <h1>Calculator</h1>
   <input type="number" m-model="number1">
   *
   <input type="number" m-model="number2">
   =
   <span>{{total}}</span>
   </div>`,
   
   computed: {
      total: {
         get: function() {//math:  (%  * / + -) change to any math operator to change calculation operation.
            return +this.get("number1") * +this.get("number2");
         }
      }
   }
   
});

/*
**********Add second calculator*******
**********Add second calculator*******
**********Add second calculator*******

Moon.component("Calculator", {
   data: () => ({
      number1: 1,
      number2: 2

   }),
   template://input text box areas
   `<div>
   <h1>Calculator</h1>
   <input type="number" m-model="number1">
   *
   <input type="number" m-model="number2">
   =
   <span>{{total}}</span>
   </div>`,
   
   computed: {
      total: {
         get: function() {//math:  (%  * / + -) change to any math operator to change calculation operation.
            return +this.get("number1") * +this.get("number2");
         }
      }
   }
   
});
**********END OF second calculator*******
**********END OF second calculator*******
**********END OF second calculator*******

*/


//create a router with the two following routes:
//set "/" route to use the "Home component"
//set "/calculator" route to use the "Calculator" component
const router = new MoonRouter({
   map: {
      "/": "Home",
      "/calculator": "Calculator"

   }
});

//create new instance of moon work inside of #moom
//and pass in the router for Moon to use
new Moon({
   el: "#app",
   router: router
});


