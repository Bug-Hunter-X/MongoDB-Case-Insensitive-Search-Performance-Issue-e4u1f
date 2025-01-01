# MongoDB Case-Insensitive Search Performance Issue

This repository demonstrates a common performance issue encountered when performing case-insensitive searches in MongoDB using regular expressions without appropriate indexing.  The example uses JavaScript and the MongoDB Node.js driver.

## Problem

The provided `bug.js` file contains a query that attempts a case-insensitive search using a regular expression.  While functionally correct, this approach can be significantly slower for large datasets if the `name` field is not properly indexed.

## Solution

The solution (`bugSolution.js`) demonstrates the proper approach. It involves creating an index on the `name` field with case-insensitive options. This allows MongoDB to efficiently utilize the index during case-insensitive searches, leading to performance improvements.

## How to Reproduce

1. Clone this repository.
2. Make sure you have MongoDB and Node.js with the MongoDB driver installed.
3. Insert a large number of documents into your MongoDB collection.
4. Run `bug.js`. Observe the query time.
5. Run `bugSolution.js`. Observe the improved query time.