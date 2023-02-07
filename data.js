import { Parser } from "@json2csv/plainjs";
import axios from "axios";
import fs from "fs";

try {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  const parser = new Parser();
  const csv = parser.parse(res.data);
  fs.writeFileSync("output.csv", csv);
} catch (err) {
  console.error(err);
}
