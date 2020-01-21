import path from "path";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import alias from "rollup-plugin-alias";
import postcss from "rollup-plugin-postcss";

const aliases = () => ({
  resolve: [".svelte", ".js", ".scss", ".css"],
  entries: [
    {
      find: /^@smui\/([^\/]+)$/,
      replacement: path.resolve(
        __dirname,
        "node_modules",
        "@smui",
        "$1",
        "index.js"
      )
    },
    {
      find: /^@smui\/([^\/]+)\/(.*)$/,
      replacement: path.resolve(__dirname, "node_modules", "@smui", "$1", "$2")
    }
  ]
});

const postcssOptions = () => ({
  extensions: [".scss", ".sass"],
  extract: false,
  minimize: true,
  use: [
    [
      "sass",
      {
        includePaths: [
          "./src/theme",
          "./node_modules",
          path.resolve(__dirname, "..", "node_modules")
        ]
      }
    ]
  ]
});

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
      name: "budibaseStandardComponents",
      sourcemap: "inline"
    }
  ],
  plugins: [
    alias(aliases()),
    svelte({
      hydratable: true
    }),
    resolve(),
    postcss(postcssOptions())
  ]
};
