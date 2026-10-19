import transform from "../../../src/index.js";

import source from "./structure.json" with { type: "json" };
import recipe from "./data.json" with { type: "json" };

const start = () => {
  try {
    const result = transform(source, recipe);
    console.log("result:", result);
  } catch (err) {
    console.log("error : ", err);
  };
};

start();
