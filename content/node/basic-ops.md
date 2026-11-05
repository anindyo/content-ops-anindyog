# Basic operations

Read this topic to learn about insert and read operations. Sections in this topic show how to insert a new document into an existing database and how to retrieve a document.

## Insert documents

Use an *insert* operation to store information into an Apache CouchDB instance. The `nano` library provides the `insert` method to perform insert operations.

The following code illustrates a simple insert operation to store a new document:

```javascript
// Connect to the acme-records database
const client = nanoconnect.use('acme-records');
// Define the document where "_id" is ew
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

## Retrieve documents
