#!/usr/bin/env node
/* eslint no-console:0 */
const fs = require("fs");
const program = require("commander");
const clipboardy = require("clipboardy");
const { parse } = require("svgson");
const { version } = require("../package.json");

program
  .version(version, "-v, --version", "output the current version")
  .command("build <source> [size]", { isDefault: true })
  .description("generated a CSS box shadow property based a svg image")
  .action((source, size = 1) => {
    fs.readFile(source, (err, data) => {
      if (err) throw err;

      parse(data.toString()).then((svg) => {
        const boxShadow = svg.children
          .map(({ attributes: { x, y, fill } }) => {
            return `${x * size}px ${y * size}px 0 ${fill}`;
          })
          .join(", ");

        const cssProperties = `html {\n  width: ${size}px;\n  height: ${size}px;\n  box-shadow: ${boxShadow};\n}`;

        clipboardy.write(cssProperties).then(() => {
          console.log(`\n\x1b[32m✔︎\x1b[0m CSS copied to clipboard!\n`);
        });
      });
    });
  });

program.parse(process.argv);
