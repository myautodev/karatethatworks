Feature: testing this shit

  Scenario: create a oes

    Given driver 'https://www.e-joburg.org.za/'
    When click("//b[contains(text(),'Login')]")
    And  input("//input[@placeholder='Username']", 'Navendrin')
    And  input("//input[@placeholder='Password']", 'Password@1')
    And click("//button[@type='submit']")
#    Then waitForUrl('https://github.com/karatelabs/karate')
    And waitForUrl('https://www.e-joburg.org.za/home')