# react-welcome-user
Outputs a welcome message to your user(s)

## Setup
Add the package to your project with:
``` bash
yarn add react-welcome-user
```

## Use

Import the component in your project. The `<Welcome />` component with no props will return:
``` html
<h1>Hello User!<h1>
```

The <Welcome /> component also accepts a user via props. For example `<Welcome user="Matt" />` will return:
``` html
<h1>Hello Matt!</h1>
```
