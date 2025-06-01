package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.ElementActions;
import com.qa.util.WaitMethods;

import cucumber.api.Scenario;

public class AddEmployeePage {

	
	WebDriver driver;
	Scenario scenario;

	// page object repo

	@FindBy(xpath = "//span[text()='PIM']")
	WebElement pimPageLink;

	@FindBy(xpath = "//span/child::h6[text()='PIM']")
	WebElement pimPageTitle;

	// Naviga to Add Employee Page

	@FindBy(xpath = "//a[text()='Add Employee']")
	WebElement addEmployeeLink;

	@FindBy(xpath = "//input[@name='firstName']")
	WebElement empFirstNameField;;

	@FindBy(xpath = "//input[@name='middleName']")
	WebElement empMiddleNameField;

	@FindBy(xpath = "//input[@name='lastName']")
	WebElement empLastName;

	@FindBy(xpath = "//button[text()=' Save ']")
	WebElement saveButton;

	@FindBy(xpath = "//label[text()='Employee Name']/following::input[1]")
	WebElement searchbyEmpNameField;

	@FindBy(xpath = "//button[text()=' Search ']")
	WebElement SearchButton;

	@FindBy(xpath = "//div[@class='oxd-table-row oxd-table-row--with-border oxd-table-row--clickable']/child::div[3]")
	WebElement searhedAmpFnameandMName;

	@FindBy(xpath = "//a[text()='Employee List']")
	WebElement employeeListlink;

	@FindBy(xpath = "//button[@class='oxd-icon-button oxd-table-cell-action-space']/child::i[1]")
	WebElement editEmployeeButton;
	
	@FindBy(xpath = "//i[@class='oxd-icon bi-trash']")
	WebElement deleteEmpButton;
	
	@FindBy(xpath = "//button[text()=' Yes, Delete ']")
	WebElement confirmDeleteButton;
	
	
	
	
	/**
	 * @param driver
	 * @param scenario
	 * 
	 *            POM page factory constructor
	 */
	public AddEmployeePage(WebDriver driver, Scenario scenario) {

		this.driver = driver;
		this.scenario = scenario;
		PageFactory.initElements(driver, this);
	}

	/**
	 * @return
	 * 
	 * 		Method to navigate to the PIM page
	 */
	public String navigateToPIMPage() {

		ElementActions.clickElement(driver, pimPageLink, scenario);
		return ElementActions.getText(driver, pimPageTitle, scenario);
	}

	/**
	 * Method to navigate to the add employee page
	 */
	public void navigateToAddEmployeePage() {
		ElementActions.clickElement(driver, addEmployeeLink, scenario);

	}

	/**
	 * @param firstName
	 * @param middleName
	 * @param lastName
	 * 
	 *            Method to create a new employee
	 */
	public void addnewEmployee(String firstName, String middleName, String lastName) {

		ElementActions.sendKeys(driver, empFirstNameField, scenario, firstName);

		ElementActions.sendKeys(driver, empMiddleNameField, scenario, middleName);

		ElementActions.sendKeys(driver, empLastName, scenario, lastName);

		ElementActions.clickElement(driver, saveButton, scenario);
	}

	/**
	 * Method to navigate to the employee list page
	 */
	public void navigateToEmployeeListPage() {

		ElementActions.clickElement(driver, employeeListlink, scenario);
	}

	
	/**
	 * @param fName
	 * @param mName
	 * @param lName
	 * @return
	 * 
	 * Method to seach employee by name
	 */
	public String searchEmployeeByname(String fName, String mName, String lName) {

		ElementActions.sendKeys(driver, searchbyEmpNameField, scenario, fName + " " + mName + " " + lName);

		ElementActions.clickElement(driver, SearchButton, scenario);

		return ElementActions.getText(driver, searhedAmpFnameandMName, scenario);

	}

	/**
	 * @param fNameAppendValue
	 * @param mNameAppendValue
	 * @param lNameAppendValue
	 * 
	 * Method to update already added emplyee details
	 */
	public void editEmpInfo(String fNameAppendValue, String mNameAppendValue, String lNameAppendValue) {
		ElementActions.clickElement(driver, editEmployeeButton, scenario);
		WaitMethods.staticWait(5000);
		ElementActions.sendKeys(driver, empFirstNameField, scenario, fNameAppendValue);
		WaitMethods.staticWait(5000);
		ElementActions.sendKeys(driver, empMiddleNameField, scenario, mNameAppendValue);
		WaitMethods.staticWait(5000);
		ElementActions.sendKeys(driver, empLastName, scenario, lNameAppendValue);
		WaitMethods.staticWait(5000);
		ElementActions.clickElement(driver, saveButton, scenario);

	}
	
	/**
	 * Method to delete the searched employee
	 * 
	 */
	public void deleteSearchedEmp(){
		
		ElementActions.clickElement(driver, deleteEmpButton, scenario);
		ElementActions.clickElement(driver, confirmDeleteButton, scenario);
		
	}
}
