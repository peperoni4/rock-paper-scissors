# rock-paper-scissors

Rock Paper Scissors game written using JS

Since I've just learned new way of problem solving approach I will try to apply it in this project.

1. Understanding the problem
   > My current task is to write the console application that will play the RPS game. The game has three shapes to choose from: rock, paper or scissors. Each player choose the shape to show. Depending on the pair of these shapes there might be 3 results: win, loss or tie. The winner gets 1 point. The game continues until someone scores 3 points. Tie appears when the players chose same shapes.
   > Winning combinations (arrow points to the winner>):
   - R <= S
   - S <= P
   - P <= R
2. Plan

   1. Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
      > For now we will be using console interface to display everything.
   2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?
      > We have only one input from user - the shape.
   3. What’s the desired output?
      > Message to the user with the results for the current round.
   4. Given your inputs, what are the steps necessary to return the desired output?
      > The program should take the input from the player. Then we should generate the shape for the computer that is playing against our player. After that we need to conclude who is the winner and output the results of the current round to the console.

3. Pseudocode:

   The step 4 in the Planning stage described all algorithm for this game. So I will just rewrite it using the pseudocode.

```
SET playerScore = 0
SET computerScore = 0
WHILE playerScore < 3 and computerScore < 3
    playerShape = READ shape from keyboard
    computerShape = GET random shape
    roundResult = DETERMINE round winner
    CASE roundResult OF
        "P": INCREMENT playerScore;
        "C": INCREMENT computerScore;
    ENDCASE
ENDWHILE

IF playerScore == 3 THEN
    PRINT Congratulate player with the victory
ELSE
    PRINT Inform the player that he lost
```

### Skills practiced:

1. I applied the problem-solving framework to this project and from my experience with it I can say that it is much easier to solve problems using this framework than with the default trial and error method.
   Understanding the problem and writing the algorithm with the pseudocode gives you a lot of room for thinking about the problem and analyzing potential pitfalls in my implementation, before actually writing any line of code, which saves a lot of time.
   Also, it's worth noting the divide and conquer method, where I divided the big problem into small subproblems and solved them first, wired them together, and, as a result, got my big problem solved.
2. I practiced some Javascript basics, such as variables, loops, conditionals and strings.
