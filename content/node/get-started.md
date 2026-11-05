# Get started with the Node.js library

This section shows how to install the Nano library and use it to connect to an existing Apache CouchDB database.

## Prerequisites

1. Install and configure an Apache CouchDB instance.
1. Secure your Apache CouchDB instance with industry-standard authentication.
1. Create databases and documents with the default Apache CouchDB management tool.
1. Ensure your local development system contains the following dependencies:
   1. Node.js v16.20.1 or later
   1. Node Package Manager (npm) 10.0.0 or later

## Download and install

1. Create a Node.js project.
   > **Tip:** If you already created a project to work with your Apache CouchDB instance, go to the project root, and then skip to step 2.
     1. In your shell, run the following command to create a new directory (for example, `couchdb_project`):
        ```bash
        mkdir couchdb_project
        ```
     2. Go to the new directory:
        ```bash
        cd couchdb_project
        ```
     3. Run the following command:
        ```bash
        npm init -y
        ```
        The command creates a `package.json` file.

2. To install the library, run the following command:
   ```bash
   npm install nano
   ```
   The command performs the following actions:
   * Downloads the `nano` package and its dependencies
   * Saves the library in the `node_modules` directory
   * Records the dependency information in the `package.json` file

## Connect to Apache CouchDB

1. In the Node.js project directory (`couchdb_project` in the example above), create a JavaScript file (for example, `documentops.js`).
2. In the file, type the following code to establish a connection to your Apache CouchDB instance:

   ```javascript
   import nano from 'nano';
   // Follow secure coding practices
   // The <connection URI> string contains sensitive access details
   const nanoconnect = nano('<connection URI>');
   // Connect to the acme-records database
   const client = nanoconnect.use('acme-records');
   // Access the document where "_id" is ef
   const doc_ef = await client.get('ef');
   console.log(doc_ef);
   ```
  This code connects to the `acme-records` database and retrieves the document with the ID `ef`. 
3. From your project directory, run the following command:
    ```bash
    node documentops.js
    ```
   The command prints the contents of the document in the terminal.
