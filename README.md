# Simplr scripts

## Isolated development
1. add `public` directory and create an index.html file with the following content:
```
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <div id="root"></div>
  </body>
</html>
```
2. Create `src` directory and create `index.js` file with a following content:
```
import ReactDOM from 'react-dom';
ReactDOM.render(<Test>HELLO WORLD!</Test>, document.querySelector('#root'));
```

3. To start the app run `node ./bin/simplr-scripts.js [SCRIPT NAME]`

## To test the package as a dependency:
1. Install the package via npm command
```
npm install git+ssh://git@github.com:alec-simplr/simplr-scripts.git#v1.0.0
```
2. Add the following scripts to your app's `package.json`:
```
"scripts": {
  "start": "simplr-scripts start",
  "test": "simplr-scripts test",
  "build": "simplr-scripts build"
}
```
3. Run `npm run start` to start the app