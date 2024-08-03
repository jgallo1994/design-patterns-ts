# Design Patterns

This TypeScript project demonstrates several design patterns with individual scripts for each pattern. The following design patterns are implemented: Singleton, Factory Method, Builder, Prototype, Adapter, Decorator, Strategy, Command, Facade, and Observer. Each pattern has its own script located in the src directory. While these are among the most commonly used design patterns, there are many more. For further exploration of additional patterns, consult Refactoring Guru.

Below you will find a description of each design pattern along with instructions on how to run the corresponding script.

## Top 10

1. **Singleton**
    - **Description**: The Singleton pattern ensures that a class has only one instance and provides a global point of access to that instance.
    - **Script**: `src/singleton.ts`
    - **Run Command**:

        ```bash
        npm run singleton
        ```

2. **Factory Method**
    - **Description**: The Factory Method pattern defines an interface for creating an object, but lets subclasses alter the type of objects that will be created.
    - **Script**: `src/factory.ts`
    - **Run Command**:

        ```bash
        npm run factory
        ```

3. **Builder**
    - **Description**: The Builder pattern separates the construction of a complex object from its representation so that the same construction process can create different representations.
    - **Script**: `src/builder.ts`
    - **Run Command**:

        ```bash
        npm run builder
        ```

4. **Prototype**
    - **Description**: The Prototype pattern specifies the kind of objects to create using a prototypical instance, and create new objects by copying this prototype.
    - **Script**: `src/prototype.ts`
    - **Run Command**:

        ```bash
        npm run prototype
        ```

5. **Adapter**
    - **Description**: The Adapter pattern allows an interface to be compatible with an existing interface. It acts as a bridge between two incompatible interfaces.
    - **Script**: `src/adapter.ts`
    - **Run Command**:

        ```bash
        npm run adapter
        
        ```

6. **Decorator**
    - **Description**: The Decorator pattern allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.
    - **Script**: `src/decorator.ts`
    - **Run Command**:

        ```bash
        npm run decorator
        
        ```

7. **Strategy**
    - **Description**: The Strategy pattern defines a family of algorithms, encapsulates each algorithm, and makes them interchangeable. The Strategy pattern lets the algorithm vary independently from clients that use it.
    - **Script**: `src/strategy.ts`
    - **Run Command**:

        ```bash
        npm run strategy
        ```

8. **Command**
    - **Description**: The Command pattern encapsulates a request as an object, thereby letting users parameterize clients with queues, requests, and operations.
    - **Script**: `src/command.ts`
    - **Run Command**:

        ```bash
        npm run command
        ```

9. **Facade**
    - **Description**: The Facade pattern provides a simplified interface to a complex subsystem, making it easier to use.
    - **Script**: `src/facade.ts`
    - **Run Command**:

        ```bash
        npm run facade
        ```

10. **Observer**
    - **Description**: The Observer pattern defines a dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.
    - **Script**: `src/observer.ts`
    - **Run Command**:

        ```bash
        npm run observer
        ```


## Running the Examples

To run any of the pattern examples, use the following commands in your terminal. Make sure you have Node.js and TypeScript installed.

1. Clone the repository:

    ```bash
  
    git clone git@github.com:jgallo1994/design-patterns-ts.git
    
    ```

2. Navigate to the project directory:

    ```bash
  
    cd design-patterns-demo
    
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the desired pattern example. For instance, to run the Singleton pattern:

    ```bash

    npm run singleton
    
    ```


Feel free to explore and modify the examples to better understand how each design pattern works.