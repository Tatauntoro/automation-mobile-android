# Webdriver.io Android Setup Guide

This guide covers preparation, installation, and configuration before testing Android applications using WebDriverIO and Appium.
<p align="right">(<a href="#top">back to top</a>)</p>

## Tools
Appium & Webdriver.io

## Prerequisites
1. **Node.js and NPM**
   - Install Node.js (LTS version recommended) from [nodejs.org](https://nodejs.org/)
   - Verify installation:
     ```sh
     node -v
     npm -v
     ```

2. **Java Development Kit (JDK)**
   - Install JDK (8 or higher) from [Oracle JDK](https://www.oracle.com/java/technologies/javase-downloads.html)
   - Verify installation:
     ```sh
     java -version
     ```

3. **Android SDK**
   - Download and install Android Studio from [developer.android.com](https://developer.android.com/studio)
   - Install SDK tools and platform tools from the SDK Manager in Android Studio
   - Set environment variables:
     ```sh
     export ANDROID_HOME=$HOME/Library/Android/sdk
     export PATH=$PATH:$ANDROID_HOME/emulator
     export PATH=$PATH:$ANDROID_HOME/tools
     export PATH=$PATH:$ANDROID_HOME/tools/bin
     export PATH=$PATH:$ANDROID_HOME/platform-tools
     ```

4. **Appium**
   - Install Appium globally:
     ```sh
     npm install -g appium
     ```
   - Verify installation:
     ```sh
     appium -v
     ```

5. **Android Emulator or Real Device**
   - Set up an Android emulator via Android Studio, or connect a real Android device with USB debugging enabled.

6. **ADB (Android Debug Bridge)**
   - ADB is part of the Android SDK Platform-Tools. Ensure it is installed and available in your PATH:
     ```sh
     adb version
     ```

## Project Setup

1. **Initialize Project**
   - Create Your Own Directory
   ```sh
   mkdir [path-to-directory]
   cd [path-to-directory]
   ```
   - Or Clone Repository
   ```sh
    $ git clone git@github.com:Tatauntoro/automation-mobile-android.git
    $ cd automation-mobile-android
    ```
   - Then, Initialize Webdriver.io
    ```sh
    npm init wdio@latest .
    ```

- Choose '**E2E Testing - of Web or Mobile Applications**' and press Enter
- Choose '**On my local machine**' and press Enter
- Select '**Mobile - native, hybrid and mobile web apps, on Android or iOS**' option, press Enter
- Select '**Android - native**' option, press Enter
- Select '**Mocha**' framework
- Choose '**No**' for Compiler
- Choose '**No**' for Generate some test
- Select '**spec**' reporter
- Skip for plugin and press enter
- Choose '**No**' for Visual Testing
- Add '**appium**' service
- Choose '**Yes**' for npm install


2. **Install WebDriverIO CLI Manually**
    (This is if you want installed manually on dev or local)
    ```sh
   npm install --save-dev @wdio/cli
   npx wdio --version # prints e.g. `8.13.10`
    ```

3. **Run Configuration Wizard**
    ```sh
   npx wdio config
    ```
- Choose '**E2E Testing - of Web or Mobile Applications**' and press Enter
- Choose '**On my local machine**' and press Enter
- Select '**Mobile - native, hybrid and mobile web apps, on Android or iOS**' option, press Enter
- Select '**Android - native**' option, press Enter
- Select '**Mocha**' framework
- Choose '**No**' for Compiler
- Choose '**No**' for Generate some test
- Select '**spec**' reporter
- Skip for plugin and press enter
- Choose '**No**' for Visual Testing
- Add '**appium**' service
- Choose '**Yes**' for npm install

4. **Install Required Packages**
    ```sh
    npm install --save-dev @wdio/appium-service @wdio/spec-reporter wdio-mocha-framework
    ```


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- TECH STACKS -->

## Tech Stacks

[![NodeJS][NodeJS]][NodeJS-url]
[![JavaScript][JavaScript]][JavaScript-url]
[![WDIO][WDIO]][WDIO-url]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- RUNNING API AUTOMATION TESTS -->

## Running Tests

Start Appium Server, run:

```sh
$ appium
```

To run Complete Order, run:

```sh
$ npm run orderComplete
```

To run Unsuccessfull Delivery Order, run:

```sh
$ npm run orderUnsuccessfull
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

Contact:

> Tata Untoro -> untorotata@gmail.com

## Acknowledgments

The template of this source come from this one [here](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[JavaScript-url]: https://js.org/
[NodeJS-url]: https://nodejs.org/
[WDIO-url]: https://webdriver.io/
[JavaScript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[NodeJS]: https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white
[WDIO]: https://img.shields.io/badge/-webdriverio-FF5733.svg?style=for-the-badge&logo=webdriverio&logoColor=white

<!-- CONTACT -->

## Webdriver.io Official Website:

For more detail documentation you can go to [webdriver.io](https://webdriver.io/docs/gettingstarted)

