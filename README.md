# Web Servers 101

### As always, remember to read the documentation!
Here are some starting resources:
1) [Express: Getting Started](https://expressjs.com/en/starter/installing.html) 
2) [Routing with Express.js](https://expressjs.com/en/guide/routing.html) 
3) [EJS templating](http://ejs.co/)
4) [What is Express Middleware?](https://expressjs.com/en/guide/using-middleware.html)
5) [How do I write middleware?](https://expressjs.com/en/guide/writing-middleware.html)

-----
Let's star off with a bit of HTTP review.

HTTP: Hypertext transfer protocol

When we make an HTTP request we need a VERB + PATH
e.g GET /people
e.g. POST /dogs {some data}


HTTP is a **resource-based** protocol
- we are asking for access to a specific resource (e.g. all dogs, or one person)
HTTP is a stateless protocol
- everything the server needs should be sent with the request

In lecture we played around with the HTTP module that Node provides, and saw that creating specific routes is a huge pain. For examples, look in the `nodetest` folder at the `server.js` file. So we choose a framework that abstracts those problems away for us. Enter... Express!

Express is good for:
1) Routing
    - "I'm trying to find a resource... it kind of looks like this..."
    - Pattern matching of routes + resources
2) Middleware
    - anything that needs to happen between the request and the response
    - e.g. parsing form data into easier-to-use formats

With Express we saw that it's fairly simple to set up new routes with the routing middleware. We can even set up general **patterns** for routes that Express will use to *match* to requests. For example...

```js
app.get('/people/:id', function(req, res) {
    let id = req.params.id // I can get his parameter
    let person = // ... find user by id ...
    res.json({person: person}) // or some other response
})
```

Take a look at the `ExpressDemo` folder for more examples.

Often we'll want our web servers to return HTML pages containing that might have been pulled from a database, another API, etc. In these cases, we'd like to have a **"template"** system that lets us specify the general form of certain web pages (e.g. a profile page) which we can fill in with the required data.

Let's consider a Wikipedia article page. This page requires data (title, images, etc.), and our template engine will combine the data and the template to generate a nice HTML page to serve to the browser.
    
    TEMPLATE ENGINE:
        ---> Give me data
        ---> Fill in the template with
            - title
            - images
            - authors
            - edit status (e.g. locked, open)
        ---> RETURNS AN HTML FILE EVENTUALLY
    
The template engine we're using is EJS. EJS lets us embed arbitrary Javascript expressions, and it also lets up easily pass in template variables into the render function. Again, take a look at the `ExpressDemo` folder for examples. And look at the documentation!!

There's also some things that I didn't cover, such as using the `fs` module to display html files when using `http` instead of `express`. If you're interested in that, please take a look at other lecture notes by instructors like Don Burks (found on Compass).

Enjoy 🤖💻

- Nima Boscarino ([@NimaBoscarino](http://twitter.com/NimaBoscarino))

