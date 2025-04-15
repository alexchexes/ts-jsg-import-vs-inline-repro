import { createGenerator } from "ts-json-schema-generator";
import fs from "fs";

const type = "MyObject";
const mode = process.argv[2]; // "inline" or "import"
const path = `src/main-${mode}.ts`;

const config = {
  path,
  type,
};

const schema = createGenerator(config).createSchema(type);
fs.writeFileSync(`schema-${mode}.json`, JSON.stringify(schema, null, 2));
console.log(`Generated schema-${mode}.json from ${path}`);
