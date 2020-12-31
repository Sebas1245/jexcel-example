# JexcelExample

This project provides a working example of Jexcel using Angular. This example is based on work done by [jainpradeep].

## Important aspects of the implementation
- This example works with **Angular v11** and **Jexcel v3.3.0**(https://bossanova.uk/jexcel/v3/)
- Create a typings.d.ts file that declares the interface Jexcel with a type of **any** .
- Add [**"./node_modules/jexcel/dist/jexcel.css"**] and [**"./node_modules/jsuites/dist/jsuites.css"**] to the styles options and [**"./node_modules/jexcel/dist/jexcel.js"**] and [**"./node_modules/jsuites/dist/jsuites.js"**] to the scripts options on the build settings inside **angular.json**