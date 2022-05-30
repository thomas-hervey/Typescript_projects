## Overview
Most notes have been lifted to the parent README.md file

## Techniques & Lessons Learned
- Use `enums` to declare an object-like variable to describe a set of values that are all closely related. Mostly useful for other engineers, no technical advantage
- Used `tuple` when reading the CSV file. This described a single row of a CSV file. We had to convert to the appropriate type, then we used the entire tuple later on
- Used `/inheritance` to create an abstract generic class in order to define the types definition on the fly. Any time we referenced CsvFileReader, we needed to specify the arguments <T>. Then we used it with a child class MatchReader.
- Then we used `composition` instead of inheritance in order to make sure we separate concerns. MatchReader did the fancy logic, but conformed to interfaces.
- Then on top of this composition we used other `interfaces` to create an Analyzer and OutputTarget constraint that could be picked up by *any type of reader even though we only have MatchReader right now*
