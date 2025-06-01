package com.qa.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.ElementActions;

import cucumber.api.Scenario;

//page object repository- Elements located using  @find by annotation
//page class constructor
//page operation methods

/**
 * @author DiyaBala
 * login page factory class with element repository and page operation methods
 */
public class Loginpage {
	
	//page object repository- Elements located using  @find by annotation
	
	WebDriver driver;
	Scenario  scenario;


	
	@FindBy(xpath = "//input[@name='username']")
	WebElement userNameField;
	
	@FindBy(xpath="//input[@name='password']")
	WebElement passwordField;
	
	@FindBy(xpath="//button[@type='submit']")
	WebElement loginButton;
	
	
	@FindBy(xpath="//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
	WebElement homepageTitle;
	
	
	/**
	 * @param driver
	 * 
	 * page class constructor
	 * 
	 * this is constructor of class which will initialize  global variable
	 */

	public Loginpage (WebDriver driver,Scenario scenario) {

		this.driver = driver;
		this.scenario=scenario;
		PageFactory.initElements(driver, this);
	}
	
	/**
	 * @param username
	 * @param password
	 * @param texttoType
	 * @return
	 * 
	 * this method return type is String method name should start always small 
	 * letter but method name is logApp means that A should be captital
	 * 
	 * 
	 * this will enter user name and password from config file and return the homepage title   
	 * this page operation method
	 * 
	 * variable name & class name should start with small letter
	 * 
	 */
	public String logintoApplication(String username, String password )
	{
		ElementActions.sendKeys(driver, userNameField, scenario,username);
		ElementActions.sendKeys(driver, passwordField,scenario,password);
		ElementActions.clickElement(driver, loginButton, scenario);
		
		
		return ElementActions.getText(driver, homepageTitle, scenario);
	}
}
