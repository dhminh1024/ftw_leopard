## Step 1 Create css

```javascript
---
to: intro-html/style.css
---
h1 {
  color: red;
}
```

```javascript
---
to: intro-html/index.html
inject: true
before: "title"
---
<link rel="stylesheet" href="style.css">
```
