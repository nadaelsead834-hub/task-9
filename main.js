// ==================== Example 1 ====================
console.log("===== Example 1 =====");
var userNameDB1 = "Nour Ahmed";
var passwordDB1 = "739214";
var userName1 = prompt("Example 1 - Enter User Name:");
if (userName1 == userNameDB1) {
    var userPassword1 = prompt("Example 1 - Enter Password:");
    if (userPassword1 == passwordDB1) {
        console.log("Correct");
        console.log("Welcome");
        // ==================== Example 2 ====================
        console.log("===== Example 2 =====");
        var userNameDB2 = "Omar Ali";
        var passwordDB2 = "482951";
        var userName2 = prompt("Example 2 - Enter User Name:");
        if (userName2 == userNameDB2) {
            var userPassword2 = prompt("Example 2 - Enter Password:");
            if (userPassword2 == passwordDB2) {
                console.log("Correct");
                console.log("Welcome");
                // ==================== Example 3 ====================
                console.log("===== Example 3 =====");
                var userNameDB3 = "Salma Hassan";
                var passwordDB3 = "615738";
                var userName3 = prompt("Example 3 - Enter User Name:");
                if (userName3 == userNameDB3) {
                    var userPassword3 = prompt("Example 3 - Enter Password:");
                    if (userPassword3 == passwordDB3) {
                        console.log("Correct");
                        console.log("Welcome");
                    } else {
                        console.log("Wrong Password");
                    }
                } else {
                    console.log("Wrong User Name");
                }
            } else {
                console.log("Wrong Password");
            }
        } else {
            console.log("Wrong User Name");
        }
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Wrong User Name");
}