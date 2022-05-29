## Overview of Achievements in this Project
- **Expose minimal need for API**: Limit Google Maps API surface area by limiting which methods can be called. We do this by creating a new class CustomMaps, and it had a `private` variable, then added a few public methods inside

- **Created a generic interface**: So that we don't have a direct dependency between all classes that would show a map marker, we used an Interface. In this case, Mappable needs to be satisfied if a model (ex. User, Company) want to show up on the map.

- **Pattern**: A typescript file will have: 1. interface definitions for working with a class, 2. class definition. Causes low coupling and high code reuse

- **Get Typescript to show errors more easily**: By optionally "implements" an interface with one of our models


### Tools
- `node-ts index.ts` (will run and compile typescript)
- `parcel index.html` (will run and compile typescript)
- `tsc -w` (run tsc build command and watch for changes)
