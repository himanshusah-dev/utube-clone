app.use(express.json({limit:"16kb" }))
//how much , which type of data are accept from the frontend - that are new  syntax , before that we are setup the the parser for that function , form se data send kiya 

express.multer  - that are use to handel the file pass from the frontend

express.urlencoded - that are handle the syntax of the url

express.static - use for handle the static file 
express.cookieParse()- handel cookies 

middleware - work like a middleman

cloudinary.js


user.module.js
video.module.js

middleware - multer.middleware.js

controllers

app.js -> route -> app.use -> user.router.js -> router.route("/register").post(registerUser)

# .some method
some method for check the empty value of the array