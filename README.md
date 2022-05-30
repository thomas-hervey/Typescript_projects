## Types
TODO (see types project)

## Overview of Achievements in this Project
- **Expose minimal need for API**: Limit Google Maps API surface area by limiting which methods can be called. We do this by creating a new class CustomMaps, and it had a `private` variable, then added a few public methods inside

- **Created a generic interface**: So that we don't have a direct dependency between all classes that would show a map marker, we used an Interface. In this case, Mappable needs to be satisfied if a model (ex. User, Company) want to show up on the map.

- **Pattern**: A typescript file will have: 1. interface definitions for working with a class, 2. class definition. Causes low coupling and high code reuse

- **Get Typescript to show errors more easily**: By optionally "implements" an interface with one of our models


### Tools
- `node-ts index.ts` (will run and compile typescript)
- `parcel index.html` (will run and compile typescript)
- `tsc -w` (run tsc build command and watch for changes)


## When to Use...
## Abstract Class vs Interface
- Usually use interface + a class. Use an abstract class when we 1. don't want an instance of the parent class, 2. the child classes are very close to the parent class.
### enums
- To let other engineers know that a group of properties are closely related. It often doesn't make a huge different from objects, but it helps clarfy the options within an object

## Inheritance vs Composition
- Inheritance is when we have an abstract class CsvFileReader with a child class MatchReader (see /stats/inheritance for the pattern), which extended functionality
- Composition is generally easier. Composition was when we have a MatchReader class that used an interface to control what classes could be passed into the constructor of MatchReader (see /stats for the pattern).
- Which to use? "is a" relationship (use inheritance) vs "has a " relationship (use composition)
  - "MatchReader is a CsvFileReader"
  - "MatchReader has a reference to CsvFileReader"
