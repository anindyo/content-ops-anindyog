# Basic operations

Read this topic to learn about insert and read operations. Sections in this topic show how to insert a new document into an existing database and how to retrieve a document.

## Insert documents

Use an *insert* operation to store information into an Apache CouchDB instance. The `nano` library provides the `insert` method to perform insert operations.

The following code illustrates a simple insert operation to store a new document:

```javascript
// Connect to the acme-records database
const client = nanoconnect.use('acme-records');
// Define the document where "_id" is set to "ew"
const doc_ew = {"_id": "ew", "first_name": "Emma", "last_name": "Woodhouse", "account_type": "platinum"};
// Use the insert method to insert the document
const result = await client.insert(doc_ew);
// Print the result
console.log(result);
```
The output in your terminal window looks similar to this:
```bash
{ ok: true, id: 'ew', rev: '1-9770--' }
```
For more information about the `insert` method, see [nano API reference](https://www.npmjs.com/package/nano#database-functions).

### Full file

The following code is a complete, standalone file that performs an insert operation:

```javascript
import nano from 'nano';
// Follow secure coding practices
// The <connection URI> string contains sensitive access details
const nanoconnect = nano('<connection URI>');
// Connect to the acme-records database
const client = nanoconnect.use('acme-records');
// Define the document
const doc_ew = {"_id": "ew", "first_name": "Emma", "last_name": "Woodhouse", "account_type": "platinum"};
// Insert the document
const result = await client.insert(doc_ew);
console.log(result);
```

## Retrieve documents

Use the *get* method of the `nano` library to retrieve documents by document IDs from an Apache CouchDB instance. 

The following code illustrates how to retrieve an existing document by ID:

```javascript
// Connect to the acme-records database
const client = nanoconnect.use('acme-records');
// Use the get method to retrieve a document
// "ew" is the ID of the document you want to retrieve
const result = await client.get("ew");
// Print the result
console.log(result);
```
### Full file

The following code is a complete, standalone file that retrieves a document by ID:

```javascript
import nano from 'nano';
// Follow secure coding practices
// The <connection URI> string contains sensitive access details
const nanoconnect = nano('<connection URI>');
// Connect to the acme-records database
const client = nanoconnect.use('acme-records');
// Retrieve the document 
const result = await client.get("ew");
// Print the result
console.log(result);
```
