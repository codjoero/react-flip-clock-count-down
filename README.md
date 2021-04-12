# react flip clock timer (Count down)

Based on the chinese version:
http://xiaxiangfeng.github.io/flip-clock/index.html
https://www.npmjs.com/package/react-flip-clock
https://github.com/xiaxiangfeng/react-flip-clock

## Installation

```npm
npm i react-flip-clock-count-down
```

Examples

### Using webpack

```js
import Clock from "react-flip-clock-count-down";

const Index = () => {
  return (
    <div>
      <Clock endTime={1618237200000} />
    </div>
  );
};

render(<Index />, document.getElementById("app"));
```

### Custom Styles

#### You can override this

```css
/*Width and Height*/
.flip-clock-wrapper ul {
  width: 60px;
  height: 90px;
}

/*Background colours*/
.flip-clock-wrapper .inn {
  background-color: #502d2d;
  font-size: 70px;
}
```

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
