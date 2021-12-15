# typescript-solid
Introduction to TypeScript.

SOLID principles:

0. Single Responsibility principle : only changes to a single part of the specifications should be able to affect the class' specifications. (no 'God objects' which know and do everything.).
1. Open-Closed principle: classes should be open for extension, closed for modification.
    Dependencies: pass 1 object to another as a parameter.<br>
    BLACKBOX principle: it should be possible to guess a function's purpose through its signature.
2. Liskov principle: objects in a program should be replaceable with instances of their subtypes. [further reading](https://reflectoring.io/lsp-explained/).<br>
   POLYMORPHISM: 2 different classes using the same interface are functionally interchangeable.<br>
   Design by contract: assumes all client components that invoke an operation on a server component will meet the preconditions specified as required for that operation.<br>
