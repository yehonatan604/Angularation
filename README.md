# Rock Band E-commerce Website

This project was generated with Angular version 14.2.5, using Firebase as backend.

This is an E-commerce rock band website that sells tour tickets & merchandise. 
A User that using the system for the first time will have to register with his personal details in order to make purchases.
Admin has his own private section where he can edit the store invetory - normal users cant access this protected route.

The software's main view is divided into 5 sections:

# Home  

This is the default page.
users can buy tour tickets in that section.
when hovering on a tour, a user can see how much time left for the concert, price & tickets left.
a concert that is out of tickets wont be selectable, & will be marked as "Sold Out".

# Store  

This is the store section.
users can buy albums & merchandise in that section.
after adding items to the list, the user can click "Add To Cart" to push the items to his personal shopping cart. 

# Cart 

This is the Shopping Cart section.
users can potentially purchase their selected items - if they do - the cart will get emptied and saved in sales DB.
this area is restricted, only logged-in users can access it.

# Login/Register 

This is the Login/Register Forms section.
users can log in & register, if the entered info passes validations.

# About

this is just a normal About section.

# Admin

hidden section that can be accessed only by the admin.
the admin can edit the store invetory in that section.
