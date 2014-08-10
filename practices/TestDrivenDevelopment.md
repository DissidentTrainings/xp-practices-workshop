# Test Driven Development

> Test-driven development (TDD) is a software development process that relies on the repetition of a very short development cycle: first the developer writes an (initially failing) automated test case that defines a desired improvement or new function, then produces the minimum amount of code to pass that test, and finally refactors the new code to acceptable standards. Kent Beck, who is credited with having developed or 'rediscovered' the technique, stated in 2003 that TDD encourages simple designs and inspires confidence.

[WP](http://en.wikipedia.org/wiki/Test-driven_development)

## Contents 

Three pillars of TDD

* Trusworthiness 
* Maintainability 
* Readability 

### Trustworthiness

* Don't rely on things that can change in each test execution. Don't use timers or random numbers in tests. If this randomness causes failing tests from time to time, developers stop trusting them. A test that fails from time to time should be seen as an indication of an intermittent problem in the system under test, not a problem in the test.
* Don't make assumptions on or introduce dependencies to the environment. If the tests depend on the file system, the graphics card or the phase of the moon, the tests will become fragile and fail for the wrong reason.
* Don't overspecify the test. Have a clear vision of what the test is verifying. Don't add a bunch of asserts unless you have a very specific reason for adding them. Usually, each test should contain only one assert. Tests that are overspecified will often fail for reasons that are not related to the test itself. What happens then? Developers will stop trusting the tests!

### Maintainability

Treat your test code with the same care as your production code!
 
### Readability

* Avoid using loops and logic. It should be obvious for the reader what the test does. If a test contains loops, if's, logic and other constructs, the reader needs to think in order to understand the test.
* Use the smallest possible dataset. If you develop an algorithm, use the smallest possible dataset needed to verify the algorithm. This will make it easier to read the test, and execution will be faster.
* Avoid using magic numbers. If a test contains cryptic numbers, the axe murderer will wonder whether the number has a meaning. Use the lowest possible number so that it's obvious that the number is just an arbitrary input number.

## References

* [C2 Wiki: Test Driven Development](https://c2.com/cgi/wiki?TestDrivenDevelopment)
* [http://tddaddict.blogspot.de/](http://tddaddict.blogspot.de/2014/01/pillars-of-unit-tests.html)
* [Hames Carr](http://blog.james-carr.org/2006/11/03/tdd-anti-patterns/)