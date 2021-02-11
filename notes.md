
#Tips for running webpack
npx: if webpack is installed locally instead of globally then "webpack" isn't known in the environment, you get a message saying "The term 'webpack' is not recognized as the name of a cmdlet, function, script file, or operable program." but by using npx you can then use any binaries of any npm modules that were installed.
module-bind: webpack needs to know how to compile typescript and the ts-loader allows it to do that. 
resolve-extensions: webpack only looks at certain file types when an import statement doesn't include the file type and .ts is not one of them by default. resolve-extensions tells webpack to try looking for a file with .ts when the extension isn't provided.
output-library: by default none of the exports are available on the command line, but I wanted to be able to use the exports of the entry point, and output-library lets you do that.
`npx webpack --module-bind ts=ts-loader --resolve-extensions .ts --mode production --output-library sandbox`