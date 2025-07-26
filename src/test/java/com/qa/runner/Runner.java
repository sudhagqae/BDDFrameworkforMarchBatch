package com.qa.runner;

import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

/**
 * @author DiyaBala
 *
 */

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features", glue = { "com.qa.stepdefnition" },
plugin = { "pretty", "json:target/cucumber-reports/Cucumber.json" },tags={ "@ClaimsCRUD "},monochrome = true)

//json:target/cucumber-reports/Cucumber.json
//html:target/cucumber-reports/Cucumber.html
//@employeeCRUD5TCS, @buzzCRUD5TCS
public class Runner {
	
	

}
