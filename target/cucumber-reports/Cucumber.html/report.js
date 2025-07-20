$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LeaveCRUD.feature");
formatter.feature({
  "line": 1,
  "name": "leave CRUD Operations",
  "description": "",
  "id": "leave-crud-operations",
  "keyword": "Feature"
});
formatter.before({
  "duration": 127500,
  "status": "passed"
});
formatter.before({
  "duration": 63100,
  "status": "passed"
});
formatter.before({
  "duration": 36500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I am able to add, edit and Delete  LeaveType",
  "description": "",
  "id": "leave-crud-operations;i-am-able-to-add,-edit-and-delete--leavetype",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@LeaveTypeCrud"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Navigate to LEave after log in with Admin user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate config and then select Leave Types",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Add the Leave with below field and values and I verify leave is displayed in leave list",
  "rows": [
    {
      "cells": [
        "LeaveTypeTitle",
        "SickLeave26"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I Edit the Leave type and change below values and I verify verify the leave name is changed to new name",
  "rows": [
    {
      "cells": [
        "LeaveTypeTitle",
        "SickLeave27"
      ],
      "line": 10
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Delete the Newly added Leave Type",
  "keyword": "And "
});
formatter.match({
  "location": "LeaveTypeCRUDSteps.navigate_to_LEave_after_log_in_with_Admin_user()"
});
formatter.write("Starting the Orange HRM Application");
formatter.write("Loggin into the Orange HRM Application");
formatter.embedding("image/png", "embedded0.png");
formatter.write("Navigating to Leave page");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 22018851400,
  "status": "passed"
});
formatter.match({
  "location": "LeaveTypeCRUDSteps.i_navigate_config_and_then_select_Leave_Types()"
});
formatter.write("navigate config and then select Leave Type");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 7527849000,
  "status": "passed"
});
formatter.match({
  "location": "LeaveTypeCRUDSteps.add_the_Leave_with_below_field_and_values_and_I_verify_leave_is_displayed_in_leave_list(DataTable)"
});
formatter.write("Adding the new leave Type");
formatter.embedding("image/png", "embedded3.png");
formatter.result({
  "duration": 8633944300,
  "status": "passed"
});
formatter.match({
  "location": "LeaveTypeCRUDSteps.i_Edit_the_Leave_type_and_change_below_values_and_I_verify_verify_the_leave_name_is_changed_to_new_name(DataTable)"
});
formatter.write("Editing the Leave type");
formatter.embedding("image/png", "embedded4.png");
formatter.result({
  "duration": 18458155800,
  "status": "passed"
});
formatter.match({
  "location": "LeaveTypeCRUDSteps.delete_the_Newly_added_Leave_Type()"
});
formatter.write("Deleting the Leave type");
formatter.embedding("image/png", "embedded5.png");
formatter.result({
  "duration": 5615705300,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 1073495600,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 756000,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 887600,
  "status": "passed"
});
});