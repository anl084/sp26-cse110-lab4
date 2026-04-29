1. line 9 will not have an error and will print what the result is if add is not 0;
2. line 13 will end up in an undefined if add is not true, but it will print out something if true
3. In this case, you should not use var as it ignores block scope and thinsg can get messy from there.
4. the result is printed by line 9, if add is not 0
5. it will throw an reference error
6. nothing as the fact you try to reassign a const variable throws an error;
7. if the if statement never runs, then we would just get a reference error, if not we will never reach there.