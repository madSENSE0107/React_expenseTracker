# installing tailwind with react
I had trouble generating the configuration file while using the compatibility package. I updated my tailwindcss, postcss, and autoprefixer packages to the latest versions and this allowed me to generate a configuration successfully. I then downgraded my packages back to the compatibility versions.

npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init -p

npm uninstall tailwindcss postcss autoprefixer
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

# usecontext
Accepts a context object (the value returned from React.createContext) and returns the current context value for that context
## from daveceddia blog
Then, we render the NumberContext.Provider with some contents, and pass a value prop to it. It will make this value available to all of its descendants, and their descendants. The whole subtree will be able to use the Consumer (or useContext) to read out the value.