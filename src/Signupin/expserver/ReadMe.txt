//To Run me Install(node must be there ;0)

—>npm i mongoose
—>npm install express
—>npm install hbs
—>npm install nodemon
-> npm install dotenv
-> npm install cors
->npm install jsonwebtoken //not used so far
->npm install cookie-parser
->npm install js-cookie
-->npm install react-icons
--> npm install react-phone-number-input --save
--> npm install firebase
// After Installation run the MongoServer

-->
//to run mongoose:
brew services start mongodb-community@5.0
//to stop mongoose:
brew services stop mongodb-community@5.0
-->then start mongodb compass and get the server connected "27017" as mentioned in handling.js

-->
//To run the file come inside Express directory and hit the command given below

--> node expres.js
or 
--> nodemon expres.js
//In case nodemon doesn't work then try
-->sudo npm install nodemon -g

//-------------------->In the end(npm i mongoose express hbs nodemon dotenv cors jsonwebtoken cookie-parser js-cookie react-icons react-phone-number-input firebase)<---------------------//

//For Windows to activate nodemon
1)start window powershell
2)Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
3) npm install -g nodemon  

-->npm init -y

-------
-> react router dom
-> bootstrap
-> bootstrap css code

---->For ICONS

npm install react-icons --save

https://react-icons.github.io/react-icons

https://react-icons.github.io/react-icons/icons?name=bs -->Classname is bs



---->For Tokens
npm install react-jwt OR npm install jsonwebtoken
import { useJwt } from "react-jwt";
OR
require('jsonwebtoken');
OR
require('react-jwt');

For this Project:
npm install jsonwebtoken

---->For Cookies storing tokens and reading them in the backend
const cookieparser= require("cookie-parser");
app.use(cookieparser());

npm install cookie-parser

----> If required
npm audit fix --force

--->Phone number
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

