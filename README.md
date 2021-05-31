## echart option to base64 service

give [echart](https://github.com/apache/incubator-echarts) option and return the base64 with png format with node.

## usage

```
git clone https://github.com/buuug7/echarts-option-to-base64.git
```

## example

```javascript
fetch("http://localhost:3000/echarts-option-to-base64", {
  method: "post",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    width: 800,
    height: 400,
    option: option,
  }),
})
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  });
```
