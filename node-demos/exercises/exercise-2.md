# Exercise 2

## Requirements

### Part 1

1. Create a new module named `file-data`. Implement functionality comparable to `http-data` using the file system instead of REST API calls.

2. The data should be stored in a file named `data.json`.

3. Replace the `http-data` module in the `data-client` main file with the new `file-data` module.

4. Ensure all operations continue to work.

### Part 2

5. Update the data client to use the following configuration file. Use the `js-yaml` package from NPM.

```yaml
config:
  source: http
  url: http://localhost:3050
  file: data.json
```

6. The valid values for `source` are "http" and "file".

7. When the `source` is set to "http", the `url` should be used to call the JSON Server powered REST API.

8. When the `source` is set to "file", the `file` should be used to read and write data from the file.

9. Read the configuration file synchronously when starting the program.

10. Ensure all operations with both sources work correctly.