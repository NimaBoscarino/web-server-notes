# Week 2 Day 2!

## Web Servers 101

Topics
======

1. Intro to Web Servers (Express-less demo)
2. Intro to Express
3. What is "middleware?"
4. Intro to Server-side view templates with EJS

Let's start off with a bit of HTTP review.

HTTP: Hypertext transfer protocol

When we make an HTTP request we need a VERB + PATH

e.g GET /people
e.g. POST /dogs {some data}

POST /dogs {breed: 'German Shepherd'}
GET /dogs?breed="German Shepherd"

HTTP is a resource-based protocol

HTTP is a stateless protocol
- there's no cache holding data
  - everything the server needs should be sent with the request

Github downloader project:
- HTTP requests made to a black box (magic!)
- today we open that box!

This is *backend* development

NODEMON - restarts the server