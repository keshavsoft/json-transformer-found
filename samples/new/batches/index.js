import transform from "../../../src/index.js";

import source from "./structure.json" with { type: "json" };
import recipe from "./data.json" with { type: "json" };

const start = () => {
  try {
    const result = transform(source, recipe);
    console.log("StockItems[0]:", result?.StockItems?.[0]);
    console.log("StockItems[1]:", result?.StockItems?.[1]);
    console.log("StockItems[7]:", result?.StockItems?.[7]);
  } catch (err) {
    console.log("error : ", err);
  };
};

start();
