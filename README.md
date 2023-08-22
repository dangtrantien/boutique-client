# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Link Deploy

This project was deploy here: [https://boutique-client.onrender.com](https://boutique-client.onrender.com)

### This project has following structures:

```
public
  ├─ favicon.ico
  ├─ index.html
  ├─ logo192.png
  ├─ logo512.png
  ├─ manifest.json
  └─ robots.txt
src
  ├─ asset
  │   └─ images
  │       │─ banner1.jpg
  │       │─ product_1.png
  │       │─ product_2.png
  │       │─ product_3.png
  │       │─ product_4.png
  │       └─ product_5.png
  ├─ components
  │   │─ Auth
  │   │   │─ AuthLayout.js
  │   │   │─ AuthLayout.module.css
  │   │   │─ SigninForm.js
  │   │   └─ SignupForm.js
  │   │─ Cart
  │   │   │─ Cart.js
  │   │   │─ Cart.module.css
  │   │   │─ CartBill.js
  │   │   │─ CartBill.module.css
  │   │   │─ CartList.js
  │   │   └─ CartList.module.css
  │   │─ Checkout
  │   │   │─ Checkout.js
  │   │   │─ Checkout.module.css
  │   │   │─ CheckoutBill.js
  │   │   │─ CheckoutBill.module.css
  │   │   │─ CheckoutForm.js
  │   │   └─ CheckoutForm.module.css
  │   │─ History
  │   │   │─ OrderDetail.js
  │   │   │─ OrderDetail.module.css
  │   │   │─ OrderDetailList.js
  │   │   │─ OrderDetailList.module.css
  │   │   │─ OrderList.js
  │   │   └─ OrderList.module.css
  │   │─ Home
  │   │   │─ CategoryList.js
  │   │   │─ CategoryList.module.css
  │   │   │─ Features.js
  │   │   │─ Features.module.css
  │   │   │─ HomeBanner.js
  │   │   │─ HomeBanner.module.css
  │   │   │─ ProductDetail.js
  │   │   │─ ProductDetail.module.css
  │   │   │─ TopTrendingList.js
  │   │   └─ TopTrendingList.module.css
  │   ├─ Layout
  │   │   │─ Footer.js
  │   │   │─ Footer.module.css
  │   │   │─ Navbar.js
  │   │   └─ Navbar.module.css
  │   ├─ ProductDetail
  │   │   │─ ProductDetail.js
  │   │   │─ ProductDetail.module.css
  │   │   │─ ProductDetailForm.js
  │   │   │─ ProductDetailForm.module.css
  │   │   │─ RelateList.js
  │   │   └─ RelateList.module.css
  │   ├─ Shop
  │   │   │─ Category.js
  │   │   │─ Category.module.css
  │   │   │─ ProductList.js
  │   │   │─ ProductList.module.css
  │   │   │─ Shop.js
  │   │   └─ Shop.module.css
  │   └─ UI
  │      │─ Overlay
  │      │   │─ Livechat
  │      │   │   │─ Livechat.js
  │      │   │   │─ Livechat.module.css
  │      │   │   │─ LivechatForm.js
  │      │   │   └─ LivechatForm.module.css
  │      │   │─ Modal.js
  │      │   └─ Modal.module.css
  │      │─ Banner.js
  │      │─ Banner.module.css
  │      │─ Error.js
  │      │─ Error.module.css
  │      │─ IsLoading.js
  │      └─ IsLoading.module.css
  ├─ hooks
  │   └─ use-http.js
  │─ pages
  │   ├─ Auth
  │   │   │─ Signin.js
  │   │   └─ Signup.js
  │   ├─ Layout
  │   │   │─ MainLayout.js
  │   │   └─ MiniLayout.js
  │   ├─ Order
  │   │   │─ History.js
  │   │   └─ OrderDetail.js
  │   ├─ Shop
  │   │   │─ Cart.js
  │   │   │─ Checkout.js
  │   │   │─ ProductDetail.js
  │   │   └─ Shop.js
  │   └─ Home.js
  │─ store
  │   ├─ product
  │   │   └─ product-slice.js
  │   ├─ user
  │   │   └─ user-slice.js
  │   └─ store.js
  │─ App.js
  │─ index.css
  └─ index.js
.gitignore
package-lock.json
package.json
```

- public: Folder contains root HTML for the Website.
- src: Folder contains main code for building the Website:
  - .css & .module.css: File CSS contains code for styling the Website.
  - images: Folder contains image using in the Website.
  - Auth: Folder contains file to create structure for the Signin page and the Signup page.
  - Cart: Folder contains file to create structure for the Cart page.
  - Checkout: Folder contains file to create structure for the Checkout page.
  - History: Folder contains file to create structure for the History page.
  - Home: Folder contains file to create structure for the Home page.
  - Layout: Folder contains file to create navbar and footer for the Website.
  - ProductDetail: Folder contains file to create structure for the Product-detail page.
  - Shop: Folder contains file to create structure for the Shop page.
  - Livechat: Folder contains file to create an overlay live chat container.
  - Modal.js: File contains code to create an overlay container.
  - Banner.js: File contains code to display the banner of the page.
  - Error.js: File contains code to display the 404 page.
  - IsLoading.js: File contains code to create loading status before display a page.
  - use-http.js: File contains code to fetch data with Hooks.
  - Signin.js: File contains code to display the Signin page.
  - Signup.js: File contains code to display the Signup page.
  - Layout: Folder contains file to display the layout of the Website.
  - History.js: File contains code to display the History page.
  - OrderDetail.js: File contains code to display the Order-detail page.
  - Cart.js: File contains code to display the Cart page.
  - Checkout.js: File contains code to display the Checkout page.
  - ProductDetail.js: File contains code to display the Product-detail page.
  - Shop.js: File contains code to display the Shop page.
  - Home.js: File contains code to display the Home page.
  - store: Folder contains file to storing data with redux for the Website.
  - App.js & index.js: File contains code to create router path for the Website.
- .gitignore: File contains code to ignore some folder when pushing project on Github.
- package.json & package-lock.json: File contains libraries code for building the Website.
