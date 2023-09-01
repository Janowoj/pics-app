function App() {

    return <div>App</div>

}

export default App;

// React has no tools, objects, functions for making HTTP requests
// React only cares about showing content and handling user events
// This is kind of good! We can write a lot of business logic
// and data fetching without worrying about React

// Spme HTTP methods:
//  GET - Get some information from a server
//  POST - Tell the server to create some new record
//  PUT - Tell the server to completely update some existing record
//  PATCH - Tell the server to partially update some existing record
//  DELETE - Tell the server to delete some existing record

// HTTP requests and response are divided into three parts:
//  1. Status Line with URL - Where are we making the request to?
//  2. Headers - Metadata about the request
//  3. Body - Data we are sending to the server or receiving from the server

// HTTP Status Codes:

//  200 - OK
//  201 - Created
//  202 - Accepted
//  204 - Deleted (No Content)

//  300 - Multiple Choices
//  301 - Moved Permanently
//  304 - Not Modified

//  400 - Bad Request
//  401 - Unauthorized
//  403 - Forbidden
//  404 - Not Found
//  405 - Method Not Allowed
//  422 - Unprocessable Entity

//  500 - Internal Server Error

// HTTP Requests and Responses TAKES TIME.
// Time diagram:
// 1. Open TCP connection (e.g. user enters a seach term and presses enter)
// 2. Send request
// 3. Wait for response - it takes some time!
// 4. Receive response
// 5. Close TCP connection

// we cannot make request like this:
//  const fatchData = () => {
// const reponse = makeRequest()}
