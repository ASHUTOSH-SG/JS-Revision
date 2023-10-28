// variable and constant
//--------------------------------------------------VAR--------------------------------------------------------
//var = it can be re-assigned a value and it can also be declared again  (Global scope)
//=> Never use var in your code instead of let because of block and functional scope issues.

var accountCity = "jaipur";
//------------------------------------------------CONST------------------------------------------------------
//const = can't be re-assigned a value and can't be declared again  (block scope)

const AccountID = 144553;

//--------------------------------------------------LET-----------------------------------------------------
//let = can be re-assigned a value but can't be declared again (block scope)
// block scope ex if { scope}, meaning it is limited to the block (e.g., a function or a code section) in which it is defined, and you cannot have multiple variables with the same name in the same scope.

let AccountEmail = "ashutosh19@gmail.com";

// You can reassign a new value to the variable
AccountEmail = "newemail@example.com";
// However, you cannot redeclare it with the same name in the same scope   using let
//let Account_email = "anotheremail@example.com"; // This will result in an error

//-----------------------------------------------------DIRECT----------------------------------------------------

// we can also declare variable without let const var but avoid it
accountName = "saving";

//we can also declare variaable without assingn the value

let AccoutType; //undefine

//console.table([group of variables you want to show in tabular form])
console.table([AccountID, accountCity, AccountEmail, AccoutType]);
