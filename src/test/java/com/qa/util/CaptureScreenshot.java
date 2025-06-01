package com.qa.util;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

//select the method and press alt+shift+j ---to get the comments

/**
 * @author DiyaBala this class has common method to capture screenshot
 *
 */
public class CaptureScreenshot {
	
	/** This method will capture the screenshot and return it in byte format to embed in cucumber report
	 * @param driver
	 * @return
	 */
	public static byte[] captureImage(WebDriver driver) {

		TakesScreenshot srcShot = (TakesScreenshot) driver;

		byte[] srcFile = srcShot.getScreenshotAs(OutputType.BYTES);

		return srcFile;

	}

}
