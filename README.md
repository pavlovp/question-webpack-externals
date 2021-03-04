App is simple React app.
Lib is library exporting React components. 

Requirements:
- App should be able to invoke code from Lib
- App and Lib should be built separately - lib should be resolved in runtime
- There should be no duplicates in terms of vendor code (App and Lib should reuse the same instance of React)
