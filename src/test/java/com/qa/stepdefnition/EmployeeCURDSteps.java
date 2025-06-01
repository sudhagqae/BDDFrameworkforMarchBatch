package com.qa.stepdefnition;

import com.qa.base.Base;
import com.qa.pages.AddEmployeePage;
import com.qa.pages.Loginpage;
import com.qa.util.CaptureScreenshot;
import com.qa.util.ReadProperties;
import com.qa.util.WaitMethods;

import cucumber.api.DataTable;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class EmployeeCURDSteps extends Base {

	Scenario scenario;
	Loginpage objLoginpage;
	AddEmployeePage objAddEmployeePage;

	@Before
	public void startApplication(Scenario scenario) {
		this.scenario = scenario;

	}
	
	
	@Given("^Navigate to PIM after log in with Admin user$")
	public void navigate_to_PIM_after_log_in_with_Admin_user() throws Throwable {
	   
		scenario.write("Starting the Orange HRM Application");
		driver = initializeWebDriver();
		WaitMethods.staticWait(5000);
		objLoginpage = new Loginpage(driver, scenario);
		scenario.write("Loggin into the Orange HRM Application");
		objLoginpage.logintoApplication(ReadProperties.getAppUserName(), ReadProperties.getAppPassword());
		WaitMethods.staticWait(5000);
		scenario.embed(CaptureScreenshot.captureImage(driver), "image/png");
		scenario.write("Navigating to the PIM page ....");
		objAddEmployeePage = new AddEmployeePage(driver, scenario);
		WaitMethods.staticWait(5000);
		String actualPIMPageTittle = objAddEmployeePage.navigateToPIMPage();
		WaitMethods.staticWait(5000);
		scenario.write("Taking a Screenshot.....");
		scenario.embed(CaptureScreenshot.captureImage(driver), "image/png");
		Assert.assertEquals("PIM", actualPIMPageTittle);
	    
	}

	@When("^I Add employee with  first name as \"([^\"]*)\" and mname as \"([^\"]*)\" and lName as \"([^\"]*)\"$")
	public void i_Add_employee_with_first_name_as_and_mname_as_and_lName_as(String fName, String mName, String Lname) throws Throwable {
	    
		scenario.write("Navigating to the add new employee page .......");
		objAddEmployeePage.navigateToAddEmployeePage();
		objAddEmployeePage.addnewEmployee(fName, mName, Lname);
		WaitMethods.staticWait(10000);
		scenario.write("Taking a Screenshot.....");
		scenario.embed(CaptureScreenshot.captureImage(driver), "image/png");
	}

	@Then("^I  verify employeeAdded in list with  first name as \"([^\"]*)\" and mname as \"([^\"]*)\" and lName as \"([^\"]*)\"$")
	public void i_verify_employeeAdded_in_list_with_first_name_as_and_mname_as_and_lName_as(String fName, String mName, String Lname) throws Throwable {
	    
		scenario.write("Navigating to Employee List Page.....");
		objAddEmployeePage.navigateToEmployeeListPage();
		scenario.write("Searching the newly added amp in the list....");
		String actualSearchedFNameandLName = objAddEmployeePage.searchEmployeeByname(fName, mName, Lname);
		WaitMethods.staticWait(10000);
		scenario.write("Taking a Screenshot.....");
		scenario.embed(CaptureScreenshot.captureImage(driver), "image/png");
		Assert.assertEquals(fName + " " + mName, actualSearchedFNameandLName);
	}

	@When("^I click on Edit button and update below values and save the Data$")
	public void i_click_on_Edit_button_and_update_below_values_and_save_the_Data(DataTable empEditInfoTable) throws Throwable {
	    
		scenario.write("Editing the searched employee details....");
		objAddEmployeePage.editEmpInfo(empEditInfoTable.raw().get(0).get(1), empEditInfoTable.raw().get(1).get(1),
				empEditInfoTable.raw().get(2).get(1));
		WaitMethods.staticWait(10000);
		scenario.write("Taking a Screenshot.....");
		scenario.embed(CaptureScreenshot.captureImage(driver), "image/png");
	}

	@Then("^I search the employee and ensure that it is searched using below values$")
	public void i_search_the_employee_and_ensure_that_it_is_searched_using_below_values(DataTable searchEditedEmpTable) throws Throwable {
	   
		scenario.write("Navigating to Employee List Page to confirm updated values.....");
		objAddEmployeePage.navigateToEmployeeListPage();
		scenario.write("Searching the Updated employee Info.....");
		objAddEmployeePage.searchEmployeeByname(searchEditedEmpTable.raw().get(0).get(1), searchEditedEmpTable.raw().get(1).get(1),
				searchEditedEmpTable.raw().get(2).get(1));
		WaitMethods.staticWait(10000);
		scenario.write("Taking a Screenshot.....");
		scenario.embed(CaptureScreenshot.captureImage(driver), "image/png");
	}

	@Then("^I select and Delete the Updated Employee and verify employee is not  in search result$")
	public void i_select_and_Delete_the_Updated_Employee_and_verify_employee_is_not_in_search_result() throws Throwable {
	    
		scenario.write("Deleting the searched employee.....");
		objAddEmployeePage.deleteSearchedEmp();
		WaitMethods.staticWait(10000);
		scenario.write("Taking a Screenshot.....");
		scenario.embed(CaptureScreenshot.captureImage(driver), "image/png");
	}
	
	@After
	public void closeApplication() {
		scenario.write("Closing the Application");
		closeBrowser();
	}
}
