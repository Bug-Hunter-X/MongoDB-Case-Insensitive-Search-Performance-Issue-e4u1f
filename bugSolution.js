```javascript
// Create an index for case-insensitive searching
db.collection('users').createIndex( { name: 'text', caseSensitive: false } );

const query = { name: { $regex: 'John', $options: 'i' } }; //Alternative case-insensitive approach

db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```
This improved code snippet addresses the performance issue by creating a case-insensitive text index on the `name` field.  The `$regex` operator with the `$options: 'i'` flag also provides a case-insensitive search but benefits from the index.  Using either the `text` index or the `$regex` operator with the `i` option will yield a fast query. Choose whichever syntax fits your application better.