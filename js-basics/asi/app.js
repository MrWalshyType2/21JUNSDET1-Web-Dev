/* Automatic Semicolon Insertion (ASI)
   
   JS will auto insert semicolons where it deems them necessary, this happens
   in the following cases:
   - Two lines are separated by a line terminator (end of line) unless
     the next line results in valid JS
   - Two statements are seperated by closing braces (})
   - Line terminator (end of line) follows a 
     control flow statement (BREAK, RETURN, THROW, CONTINUE)

   Semi-colons do not need to be used for:
   - if statements
   - for statements
   - while statements (do-while does require a terminating semicolon)
   - end of named function blocks
   - end of class block
*/
{
  return // semicolon auto inserted
  5;
}

let foo // semicolon auto inserted
let bar;

let foo, bar // semicolon auto inserted

var a // semicolon auto inserted
b 
= 3 // semicolon auto inserted

