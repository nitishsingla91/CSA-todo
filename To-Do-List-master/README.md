You can access the Application from below URL :
https://priceless-mclean-2d5b4b.netlify.app/

To run the Application using below command : 
live-server --port=8081 --host=127.0.0.1

I didn"t use any framework, Its simple JS using Webcomponents.
Follow the youtube tutorial which you have shared, then decompose the application into sub-components.

Steps:
1. Follow the tutorial - Ready the Simple App  - app.js & Index.html
2. Implement the Local Storage
3. Configure the Offline Support using Service Worker
4. Decompose the application, Make the Custom Components
5. Manifest
6. Add to Home Screen Option
7. Webpack implementation
    -> Entry -app.js
    -> output - Dist Folder (Available at root directory)
    -> Loaders -. babel-loader,css-loader,url-loader
    -> Plugins - HTMLWebpackPlugin,uglifyJsPlugin
8. Deployment -
     First tried with firebase, at the end Deployed at Netlify 
