# Short Response Assignment Feedback

## Checklist

- [ ] Grammar free
- [ ] Answers all parts of the question
- [ ] Accurately uses technical terminology
- [ ] Is easy to comprehend
- [ ] Uses markdown

## Score Summary

**Total Score: 0/24 (0%)**

- **Prompt 1**: Technical 0/3 + Writing 0/3 = 0/6
- **Prompt 2**: Technical 0/3 + Writing 0/3 = 0/6
- **Prompt 3**: Technical 0/3 + Writing 0/3 = 0/6
- **Prompt 4**: Technical 0/3 + Writing 0/3 = 0/6

**Status**: ❌ Below 75% threshold - Must be revised and resubmitted

## Overview Takeaways

This submission is incomplete - all four short response prompts are left blank. To complete this assignment, you need to provide answers to all four prompts addressing factory functions vs classes, private properties/methods, static properties/methods, and identifying the bug in the Vault class.

---

## Detailed Feedback by Prompt

### Prompt 1: Factory Functions vs Classes

**Technical Score: 0/3**  
**Writing Quality Score: 0/3**  
**Total: 0/6**

#### Issues

- ❌ No response provided
- ❌ Does not address any part of the prompt

#### What You Need to Do

You need to explain:
1. What are the drawbacks of factory functions? (e.g., memory inefficiency, method duplication)
2. Why are classes better? (e.g., prototype-based method sharing, better organization)

---

### Prompt 2: Private Properties/Methods

**Technical Score: 0/3**  
**Writing Quality Score: 0/3**  
**Total: 0/6**

#### Issues

- ❌ No response provided
- ❌ Does not address any part of the prompt

#### What You Need to Do

You need to explain:
1. What factors should be considered when making something private? (e.g., protecting internal state, preventing external modification)
2. Provide an example (e.g., a BankAccount class with a private balance)

---

### Prompt 3: Static Properties/Methods

**Technical Score: 0/3**  
**Writing Quality Score: 0/3**  
**Total: 0/6**

#### Issues

- ❌ No response provided
- ❌ Does not address any part of the prompt

#### What You Need to Do

You need to explain:
1. What factors should be considered when making something static? (e.g., belongs to the class, not instances, shared across all instances)
2. Provide an example (e.g., a static method that validates email, or a static property tracking total across instances)

---

### Prompt 4: Vault Class Bug

**Technical Score: 0/3**  
**Writing Quality Score: 0/3**  
**Total: 0/6**

#### Issues

- ❌ No response provided
- ❌ Does not address any part of the prompt

#### What You Need to Do

You need to:
1. Identify the mistake (the `listSecrets()` method returns the array reference directly)
2. Explain why it's a problem (allows external code to mutate the private array, breaking encapsulation)
3. Suggest a fix (return a copy using spread operator: `return [...this.#secrets];`)

---

## Action Items for Revision

1. **Complete all four responses**: Each prompt requires a 2-5 sentence response
2. **Use markdown formatting**: Use bold, italics, and code blocks to enhance readability
3. **Proofread**: Check for spelling and grammar errors before submitting
4. **Provide examples**: Include code examples where appropriate to illustrate your points
5. **Review the README**: The assignment instructions provide guidance on what to include

---

## Resources for Improvement

- Review the class materials on factory functions vs classes
- Review the materials on private fields and static properties/methods
- Look at the BankAccount class you're implementing - it uses both private fields and static properties, which can serve as examples
- Use markdown preview in VS Code (Command/Control + Shift + V) to check formatting
- Consider using a grammar checker before submitting

---

## Summary

This assignment requires written responses to four prompts about OOP concepts in JavaScript. All prompts are currently blank and need to be completed. Aim for 2-5 concise sentences per response, use proper markdown formatting, and include examples where appropriate. Once completed, this will help demonstrate your understanding of these important OOP concepts.
