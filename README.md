# This is a Todo webApplication

Frontend is bootstrapped with reac.js and redux. For backend node.js, express and mongodb atlas is being used. 
For authorisation GoogleOauth20 api is used. To learn more about this api go to [here](https://developers.google.com/identity/protocols/oauth2)

## Setup

Before start the project kindly set followings:
1. .env for server 
    PORT=3000
    BASE_URL=http://127.0.0.1:3000
    MONGO_URL=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    COOKIE_KEY=
2. .env for react 
    PORT=4200
3. check if there is a file called setupProxy.js or not in thr src folder of react app if not then kindly create. Check [here](https://www.npmjs.com/package/http-proxy-middleware) to know how to create.
4. In server/controllers/auth.js authToProfile should redirect to "http://localhost:4200/"
5. In your google development console. Enable google+ api. Set the domain url http://localhost:3000 and redirect url http://localhost:3000/auth/redirect and get the client id and client secret to set in step 1.

That's it.

## Available Scripts

In the project directory you will find two sub directory server and your-todo-app. In server directory you can run:

### `npm install`

To install all the node modules required.

### `node server`

To start the server and it Runs the server in the development mode at [http://localhost:3000](http://localhost:3000)

Again in your-cd-app directory you can run:

### `npm install`

To install all the node modules required.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

In development environment http-proxy-middleware is used to proxy the react app to the server. You can learn more about this package [here](https://www.npmjs.com/package/http-proxy-middleware)

