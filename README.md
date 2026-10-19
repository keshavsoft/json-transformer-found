# JSON Transformer

Transform a source JSON value with a separate JSON recipe:

```js
const result = transform(source, recipe);
```

The source contains the incoming data. The recipe says which source keys to keep, how to rename them, and how to process nested values. The transformer returns the shaped JSON result.

## Run a sample

Use a recent Node.js version that supports JSON import attributes:

```bash
npm install
npm run sample
```

`sample` runs the receipt example. `npm run sample:stock-items` runs the StockItems example.

In the sample folders, the filenames are historical: `structure.json` is the **source**, and `data.json` is the **recipe**. The examples call the public entry point at `src/index.js`.

## Small example

Given a source value:

```json
{
  "date": { "type": "Date", "value": "20260401" },
  "amount": { "type": "Amount", "value": "1020.00" }
}
```

And a recipe:

```json
{
  "transform": {
    "date": { "valueKey": "value" },
    "amount": { "valueKey": "value" }
  }
}
```

The result is:

```json
{
  "date": "20260401",
  "amount": "1020.00"
}
```

## Visual documentation

Open the [HTML documentation](docs/index.html) for the visual overview, [V3 engine guide](docs/v3.html), and [receipt walkthrough](docs/receipts.html).

## Current implementation

`src/index.js` re-exports `src/v3/index.js`. `src/v1` and `src/v2` are earlier implementations; they are not selected by the package entry point. The npm package version (`1.3.1`) and the internal source folder version (`v3`) are separate version labels.

The recipe currently supports `transform`, `alterKey`, `valueKey`, and `valueType: "array"`. See the walkthrough for their precise behavior and current limitations.
