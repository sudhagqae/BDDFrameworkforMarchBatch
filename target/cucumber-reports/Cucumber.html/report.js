$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Dashboard.feature");
formatter.feature({
  "line": 1,
  "name": "Dashboard Widgets tests",
  "description": "",
  "id": "dashboard-widgets-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 67300,
  "status": "passed"
});
formatter.before({
  "duration": 26200,
  "status": "passed"
});
formatter.before({
  "duration": 25400,
  "status": "passed"
});
formatter.before({
  "duration": 20600,
  "status": "passed"
});
formatter.before({
  "duration": 18600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I am able to view correct information at Time at Work widget",
  "description": "",
  "id": "dashboard-widgets-tests;i-am-able-to-view-correct-information-at-time-at-work-widget",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@DashboardTests"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I log in with Admin user and I am at Dashboard Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I view the Time at work widget at Dashboard Page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I check below values from the widget showing correct values",
  "rows": [
    {
      "cells": [
        "WidgetinfoTitle",
        "ExpectedValue"
      ],
      "line": 8
    },
    {
      "cells": [
        "lastpunchedinTime",
        "Not Punched In"
      ],
      "line": 9
    },
    {
      "cells": [
        "currentTime",
        "0h 0m Today"
      ],
      "line": 10
    },
    {
      "cells": [
        "CurrentWeekspan",
        "Jul 28 - Aug 03"
      ],
      "line": 11
    },
    {
      "cells": [
        "TotalWeekHoursmins",
        "0h 0m"
      ],
      "line": 12
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DashboardSteps.i_log_in_with_Admin_user_and_I_am_at_Dashboard_Page()"
});
formatter.write("Staarting the Orange HRM Application");
formatter.write("Logging in to ORange HRM Application");
formatter.embedding("image/png", "embedded0.png");
formatter.result({
  "duration": 18092999400,
  "status": "passed"
});
formatter.match({
  "location": "DashboardSteps.i_view_the_Time_at_work_widget_at_Dashboard_Page()"
});
formatter.write("verify Time at Work Widget Title ");
formatter.embedding("image/png", "embedded1.png");
formatter.result({
  "duration": 5216164000,
  "status": "passed"
});
formatter.match({
  "location": "DashboardSteps.i_check_below_values_from_the_widget_showing_correct_values(DataTable)"
});
formatter.write("verifying the data from Time at widget ");
formatter.write("\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d\u003d");
formatter.write("0h 0m Today");
formatter.write("0h 0m Today");
formatter.embedding("image/png", "embedded2.png");
formatter.result({
  "duration": 6290814800,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 855340200,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 399600,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 142700,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 291200,
  "status": "passed"
});
formatter.write("Closing the Application");
formatter.after({
  "duration": 265700,
  "status": "passed"
});
});