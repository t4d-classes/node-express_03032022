## Requirements

1. Within the class code folder (not inside `node-demos`), create a new folder named `data-client`.

2. Within the folder add a `package.json` and install the following packages.

- commander
- node-fetch

3. Implement the following commands. The commands will call the JSON server from the earlier demo to get the data requested.

The following command returns all cars.

```bash
node ./index.js all cars
```

The following command returns one car with an id of 1.

```bash
node ./index.js one cars 1
```

The following command returns one car with an id of 1.

```bash
node ./index.js add cars "make:Ford,model:T,year:1928,color:blue,price:800"
```


4. Ensure the JSON server (from the earlier demo) is running in one terminal, and run this program in another terminal to verify the commands work as expected.