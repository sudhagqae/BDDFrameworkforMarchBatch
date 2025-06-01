$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BuzzCURD.feature");
formatter.feature({
  "line": 1,
  "name": "Buzz CRUD Operations",
  "description": "",
  "id": "buzz-crud-operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "I am able to add edit and  delete the  comments",
  "description": "",
  "id": "buzz-crud-operations;i-am-able-to-add-edit-and--delete-the--comments",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@buzzCRUD5TCS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to BUzz after log in with Admin user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Post the comment as \"\u003cComment\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify that comment time user and comment text is posted correctly as \"\u003cComment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on like",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify the like count is updated as Expected count \"\u003clikecount\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Edit the post with updated comment\"\u003cupdatedComment\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify that updated comment\"\u003cupdatedComment\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I delete the Post",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "buzz-crud-operations;i-am-able-to-add-edit-and--delete-the--comments;",
  "rows": [
    {
      "cells": [
        "Comment",
        "likecount",
        "updatedComment"
      ],
      "line": 15,
      "id": "buzz-crud-operations;i-am-able-to-add-edit-and--delete-the--comments;;1"
    },
    {
      "cells": [
        "OrangeHRM is very good software",
        "1",
        "sandip"
      ],
      "line": 16,
      "id": "buzz-crud-operations;i-am-able-to-add-edit-and--delete-the--comments;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 148500,
  "status": "passed"
});
formatter.before({
  "duration": 55600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I am able to add edit and  delete the  comments",
  "description": "",
  "id": "buzz-crud-operations;i-am-able-to-add-edit-and--delete-the--comments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@buzzCRUD5TCS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to BUzz after log in with Admin user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Post the comment as \"OrangeHRM is very good software\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "verify that comment time user and comment text is posted correctly as \"OrangeHRM is very good software\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on like",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify the like count is updated as Expected count \"1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I Edit the post with updated comment\"sandip\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify that updated comment\"sandip\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I delete the Post",
  "keyword": "Then "
});
formatter.match({
  "location": "BuzzCURDSteps.navigate_to_BUzz_after_log_in_with_Admin_user()"
});
formatter.write("Starting the Orange HRM Application");
formatter.write("Loggin into the Orange HRM Application");
formatter.embedding("image/png", "embedded0.png");
formatter.write("Navigating to BuZZ pageafter log in ....");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 24696934600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OrangeHRM is very good software",
      "offset": 21
    }
  ],
  "location": "BuzzCURDSteps.post_the_comment_as(String)"
});
formatter.write("Posting a new comment");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 5452974400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OrangeHRM is very good software",
      "offset": 71
    }
  ],
  "location": "BuzzCURDSteps.verify_that_comment_time_user_and_comment_text_is_posted_correctly_as(String)"
});
formatter.write("Verifying expected comment is equal to actual comment");
formatter.result({
  "duration": 87447200,
  "status": "passed"
});
formatter.match({
  "location": "BuzzCURDSteps.i_click_on_like()"
});
formatter.write("Clicking on like button");
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 5267551700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 54
    }
  ],
  "location": "BuzzCURDSteps.i_verify_the_like_count_is_updated_as_Expected_count(String)"
});
formatter.write("Veuirfy the expected count is equal to actual count ");
formatter.result({
  "duration": 57485000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandip",
      "offset": 37
    }
  ],
  "location": "BuzzCURDSteps.i_Edit_the_post_with_updated_comment(String)"
});
formatter.write("Edit the posted comment");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 6007934100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sandip",
      "offset": 30
    }
  ],
  "location": "BuzzCURDSteps.i_verify_that_updated_comment(String)"
});
formatter.write("Verify that entire commnet has appended text");
formatter.result({
  "duration": 59617600,
  "status": "passed"
});
formatter.match({
  "location": "BuzzCURDSteps.i_delete_the_Post()"
});
formatter.write("Deleting the added and updated post ");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 5896745800,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 816209300,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 155300,
  "status": "passed"
});
formatter.uri("EmployeeCURD.feature");
formatter.feature({
  "line": 1,
  "name": "Employee CRUD and Search Operations",
  "description": "",
  "id": "employee-crud-and-search-operations",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "I am able to add edit and search and delete the  employee",
  "description": "",
  "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@employeeCRUD5TCS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to PIM after log in with Admin user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Add employee with  first name as \"\u003cfName\u003e\" and mname as \"\u003cmName\u003e\" and lName as \"\u003cLname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I  verify employeeAdded in list with  first name as \"\u003cfName\u003e\" and mname as \"\u003cmName\u003e\" and lName as \"\u003cLname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on Edit button and update below values and save the Data",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "updatedmName",
        "1"
      ],
      "line": 10
    },
    {
      "cells": [
        "updatedLname",
        "1"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I search the employee and ensure that it is searched using below values",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "AutU1Fname1"
      ],
      "line": 13
    },
    {
      "cells": [
        "updatedmName",
        "AutU1Mname1"
      ],
      "line": 14
    },
    {
      "cells": [
        "updatedlName",
        "AutU1Lname1"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I select and Delete the Updated Employee and verify employee is not  in search result",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;",
  "rows": [
    {
      "cells": [
        "fName",
        "mName",
        "Lname"
      ],
      "line": 19,
      "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;;1"
    },
    {
      "cells": [
        "AutU1Fname",
        "AutU1Mname",
        "AutU1Lname"
      ],
      "line": 20,
      "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 77500,
  "status": "passed"
});
formatter.before({
  "duration": 21500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "I am able to add edit and search and delete the  employee",
  "description": "",
  "id": "employee-crud-and-search-operations;i-am-able-to-add-edit-and-search-and-delete-the--employee;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@employeeCRUD5TCS"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to PIM after log in with Admin user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Add employee with  first name as \"AutU1Fname\" and mname as \"AutU1Mname\" and lName as \"AutU1Lname\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I  verify employeeAdded in list with  first name as \"AutU1Fname\" and mname as \"AutU1Mname\" and lName as \"AutU1Lname\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I click on Edit button and update below values and save the Data",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "1"
      ],
      "line": 9
    },
    {
      "cells": [
        "updatedmName",
        "1"
      ],
      "line": 10
    },
    {
      "cells": [
        "updatedLname",
        "1"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I search the employee and ensure that it is searched using below values",
  "rows": [
    {
      "cells": [
        "updatefNamevalue",
        "AutU1Fname1"
      ],
      "line": 13
    },
    {
      "cells": [
        "updatedmName",
        "AutU1Mname1"
      ],
      "line": 14
    },
    {
      "cells": [
        "updatedlName",
        "AutU1Lname1"
      ],
      "line": 15
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I select and Delete the Updated Employee and verify employee is not  in search result",
  "keyword": "And "
});
formatter.match({
  "location": "EmployeeCURDSteps.navigate_to_PIM_after_log_in_with_Admin_user()"
});
formatter.write("Starting the Orange HRM Application");
formatter.write("Loggin into the Orange HRM Application");
formatter.embedding("image/png", "embedded6.png");
formatter.write("Navigating to the PIM page ....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded7.png");
formatter.result({
  "duration": 26119706900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutU1Fname",
      "offset": 36
    },
    {
      "val": "AutU1Mname",
      "offset": 62
    },
    {
      "val": "AutU1Lname",
      "offset": 88
    }
  ],
  "location": "EmployeeCURDSteps.i_Add_employee_with_first_name_as_and_mname_as_and_lName_as(String,String,String)"
});
formatter.write("Navigating to the add new employee page .......");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded8.png");
formatter.result({
  "duration": 11539638900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AutU1Fname",
      "offset": 53
    },
    {
      "val": "AutU1Mname",
      "offset": 79
    },
    {
      "val": "AutU1Lname",
      "offset": 105
    }
  ],
  "location": "EmployeeCURDSteps.i_verify_employeeAdded_in_list_with_first_name_as_and_mname_as_and_lName_as(String,String,String)"
});
formatter.write("Navigating to Employee List Page.....");
formatter.write("Searching the newly added amp in the list....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded9.png");
formatter.result({
  "duration": 11527032300,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeCURDSteps.i_click_on_Edit_button_and_update_below_values_and_save_the_Data(DataTable)"
});
formatter.write("Editing the searched employee details....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded10.png");
formatter.result({
  "duration": 31624240000,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeCURDSteps.i_search_the_employee_and_ensure_that_it_is_searched_using_below_values(DataTable)"
});
formatter.write("Navigating to Employee List Page to confirm updated values.....");
formatter.write("Searching the Updated employee Info.....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded11.png");
formatter.result({
  "duration": 11978558000,
  "status": "passed"
});
formatter.match({
  "location": "EmployeeCURDSteps.i_select_and_Delete_the_Updated_Employee_and_verify_employee_is_not_in_search_result()"
});
formatter.write("Deleting the searched employee.....");
formatter.write("Taking a Screenshot.....");
formatter.embedding("image/png", "embedded12.png");
formatter.result({
  "duration": 10507222700,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 904852100,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 276200,
  "status": "passed"
});
});