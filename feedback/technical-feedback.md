# Technical Coding Feedback

## Overview Takeaways

This submission appears to be incomplete. All class definitions are empty, containing only the class declarations without any implementation. To complete this assignment, you'll need to implement all five classes (Rectangle, Vehicle, PasswordManager, TodoList, and BankAccount) according to the requirements in the README.

## Inline Feedback

### Rectangle Class

**Lines 1-3**: The `Rectangle` class is declared but contains no implementation. You need to:
- Add a constructor that accepts `length` and `width` parameters
- Implement `getArea()` method that returns `length * width`
- Implement `getPerimeter()` method that returns the sum of all four sides
- Implement `isSquare()` method that returns `true` if length equals width

### Vehicle Class

**Lines 5-7**: The `Vehicle` class is declared but contains no implementation. You need to:
- Add a constructor that accepts `type`, `capacity`, and optional `color` (defaults to "black")
- Initialize `passengers` as an empty array
- Implement `paint(color)` method that updates and returns the color
- Implement `addPassenger(passenger)` method that adds passengers up to capacity

### PasswordManager Class

**Lines 9-11**: The `PasswordManager` class is declared but contains no implementation. You need to:
- Add a constructor that accepts a `password` parameter
- Store the password as a **private field** (`#password`) - this is critical for the tests
- Implement `checkPassword(attempt)` method that compares the attempt with the private password
- Implement `setPassword(oldPassword, newPassword)` method that updates the password if oldPassword matches

### TodoList Class

**Lines 13-15**: The `TodoList` class is declared but contains no implementation. You need to:
- Add a constructor that accepts a `title` parameter
- Store items as a **private field** (`#items = []`)
- Implement `addItem(description)` method that adds items and returns the new length
- Implement `removeItem(description)` method that removes and returns the item, or `null` if not found
- Implement `getItems()` method that returns a **copy** of the array (use spread operator: `[...this.#items]`)

### BankAccount Class

**Lines 17-19**: The `BankAccount` class is declared but contains no implementation. You need to:
- Add a constructor that accepts `firstName`, `lastName`, and optional `balance` (defaults to 0)
- Store balance as a **private field** (`#balance`)
- Create a **static property** to track total balance across all instances (`static totalBalance = 0` or `static #totalBalance = 0`)
- Implement `showBalance()` method that returns a formatted message
- Implement `deposit(amount)` method that adds to balance and returns formatted message
- Implement `withdraw(amount)` method that subtracts from balance (if sufficient funds) and returns formatted message
- Implement `static getTotalHoldings()` method that returns the total balance

## Code Quality Observations

### Current Status

- **Incomplete**: All classes are empty and need full implementation
- **Structure**: The class declarations and module.exports are correctly set up, which is a good start

### Next Steps

1. **Start with Rectangle**: This is the simplest class - implement it first to build confidence
2. **Review the README**: The README contains detailed requirements and examples for each class
3. **Run Tests Frequently**: Use `npm test` to check your progress as you implement each class
4. **Focus on Private Fields**: Pay special attention to using `#` for private fields in PasswordManager, TodoList, and BankAccount
5. **Test Edge Cases**: Make sure to handle edge cases like empty arrays, zero balances, and capacity limits

## Summary

This assignment requires implementing five classes with specific requirements. Start with the simpler classes (Rectangle, Vehicle) and work your way up to the more complex ones (BankAccount). The README provides excellent examples and the test file shows exactly what behavior is expected. Don't hesitate to ask for help if you get stuck on any particular class!

