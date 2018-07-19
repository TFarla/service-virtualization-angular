# Service Virtualization Angular

This repository is an example of service virtualization in an angular 6 application.

>Service virtualization is the simulation of interfaces – not the virtualization of systems. Service virtualization lets you automatically execute tests even when the application under test’s dependent system components (APIs, third-party applications, etc.) cannot be properly accessed or configured for testing. By simulating these dependencies, you can ensure that your tests will encounter the appropriate dependency behavior and data each and every time that they execute.  It’s commonly used when integration tests or end-to-end tests need to interact with dependent system components that are:
>
>- Unreliable, evolving, or not yet completed
>- Beyond your scope of control (e.g., operated by another company or division
>- Available for testing only in limited capacity or at inconvenient time
>- Challenging to provision or configure in a test environment
>- Simultaneously needed by different teams with varied test data setup and other requirement
>- Too restricted or costly to use for automated regression testing

[source](https://www.tricentis.com/blog/2017/03/28/how-to-make-service-virtualization-a-reality-for-testers/)
# Getting started
```
# install dependencies
npm i

# run mountebank
npm run mb &

# serve the angular application on http://localhost:4200
npm run ng serve
```

After running these commands visit http://localhost:4200 and if all went well you should be greeted by the angular logo and a button "Fetch post". Click on that button and you might notice the following output in the terminal:

```bash
info: [https:4546 proxy] ::ffff:127.0.0.1:34894 => GET /posts/1
```
Angular sends the HTTP _Get /posts/1_ via a webpack proxy towards Mountebank. Mountebank is configured to proxy traffic towards https://jsonplaceholder.typicode.com/ and store the response in a cache. Mountebank will serve the response from cache on future requests.

![service virtualization in action](https://user-images.githubusercontent.com/4613944/42948129-29c29c1a-8b6f-11e8-8b87-9530895b53a8.png)

# unit tests
Service virtualization is a pain to set up in unit test because there are no build in utilities for Angular to wait on network latency. Angular does provide utilities to mock/stub services that use rxjs (the HttpClientModule for example) which is a lot easier to use.

