import express from "express";
const app = express();


////routig for user search using  query parameter

// app.get("/product", (req, res) => {
//   console.log(req.query);
//   res.send(
//     `<h1>product page user search for ${req.query.search}</h1>`
//   );
// });

//// in product page you have display total result and specifiy page nnumber you can easyle get 
app.get("/product", (req, res) => {
  res.send(
    `<h1>product page  number is${req.query.page} total is resulat ${req.query.limt}</h1>`
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server runing on http://localhost:${PORT}`);
});
