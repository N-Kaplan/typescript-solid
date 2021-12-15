# Title: Using TypeScript
***
Introduction to TypeScript and SOLID at BeCode training

***

- Repository: `typescript-solid`
- Type of Challenge: `Learning Challenge`
- Duration: `2 days: 14/12/2021-15-12/2021`
- Deployment strategy : `NA`
- Team challenge : `solo`

## Learning objectives
- Installing Typescript
- Installing Parcel
- Work with TypeScript
- Understanding SOLID principles for better

## Personal notes

SOLID principles:

0. **Single Responsibility principle** : only changes to a single part of the specifications should be able to affect the class' specifications. (no 'God objects' which know and do everything.).
1. **Open-Closed principle**: classes should be open for extension, closed for modification.
    Dependencies: pass 1 object to another as a parameter.<br>
    BLACKBOX principle: it should be possible to guess a function's purpose through its signature.
2. **Liskov principle**: objects in a program should be replaceable with instances of their subtypes. [further reading](https://reflectoring.io/lsp-explained/). <br>
   POLYMORPHISM: 2 different classes using the same interface are functionally interchangeable.<br>
   Design by contract: assumes all client components that invoke an operation on a server component will meet the preconditions specified as required for that operation.<br>
3. **Interface segregation principle**: interfaces should be precise and modular.<br>
    Guideline: make sure interfaces don't include unnecessary dependencies.
4. **Dependency inversion principle**:High level modules should not depend on low-level modules. Both should depend on abstractions (abstract classes or concepts), rather than on concrete types.<br>
    Achieve this through: 
   - Pass in dependencies in the form of constructor/function parameters to the higher level module from the lower level module.
   - Have the higher level module accept this dependency in the type of an interface. <br/><br/>
   Results:
   - Easier testing & clear boundaries of dependencies.
   - Low coupling, allowing for varying implementation or subsequent changes in requirements, while the contract between the modules remains the same.
