
    console.log("Example of triangle as object \n\n")

    // ----- Triangle (Variables Example) -----
   
           // All of these 3 individual variables describe only 1 thing
       let base = 20;
       let height = 7;
       const PI = 3.1415;
   
   
   // ----- Triangle (Objects Example) -----
           
           // Instead we make 1 var called triangle, which contains 3 variables inside of it
           // These variables are also known as properties
       // declare var and assign object to it using {}
   
           // - parenthesis ( )
           // - braces { }
           // - brackets [ ]
   
       let triangle1 = {
   
           // create object properties/state
           base : 20,
           height : 7,
           Pi : 3.1415,
   
                   // object behaviour
                   // functions will be covered later but all they are, are essentially a 
                   // set of instructions that work together to achieve some functionality
                   calculateArea : function() {
               return (base * 0.5) * height + "cm";
           }
       };
   
   
   // ----- Difference in refencing and functionality -----
   
       console.log("Display variables by a refencing 1 by 1:");
       console.log(base + " " + height + " " + PI);
   
       console.log("\n");
   
       console.log("Display properties by referencing object");
       console.log(triangle1);
   
       console.log("\n");
   
           // destructing object simply means referencing each object property as 
           // a seperate variable
       console.log("Display properties by destructuring object");
       console.log(triangle1.base + " " + triangle1.height + " " + triangle1.Pi);
   
           // calling the calculateArea functionality
   