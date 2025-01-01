```javascript
const query = { name: /John/i }; // Case-insensitive search

db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```
This code snippet attempts a case-insensitive search using a regular expression. However, depending on the MongoDB version and indexing, this might lead to unexpected behavior.  If the `name` field isn't indexed appropriately, it won't use the index effectively, leading to slow query performance, especially on large datasets.