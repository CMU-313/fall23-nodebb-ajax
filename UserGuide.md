# User Guide for Courses Features

This user guide provides detailed instructions on how to create a new course and add student to a course, as well as how to test them. 

## Table of Contents

1. **Introduction**
   - Overview of New Features
   
2. **How to Use the New Features**
   - Step-by-Step Instructions

3. **Automated Tests**
   - Location of Tests
   - Description of Tests
   - Test Coverage Explanation

## 1. Introduction

### Overview of New Features

As a user registered as an instructor (admin), he/she can create a course in the homepage of NodeBB, as well as adding students to a specific course. For student users, they can see what courses they are in and click and see what's in the course. Only instructors can create courses and add students to courses. Each users' username has been appended a role type.

## 2. How to Use the New Features

### Creating a New Course

To create a new course in the system, follow these steps: 

1. Log in to your instructor account 
2. Navigate to the "Courses" section in the app.
3. Click on "Create Course."
4. Enter course code in the text box.
5. Click "Create Class."

### Adding a Student to a Course

To add a student to a course, follow these steps:

1. Log in to your instructor account.
2. Navigate to the "Courses" section in the app.
3. Select the course to which you want to add a student.
4. Click on the "Add Student" button.
5. Enter the student's username and other required information.
6. Click "Save" to confirm.

### See What Course the User is in

To check and see what courses you are in, follow these steps: 

1. Log in to your student account 
2. Navigate to the "Courses" section in the app.

## 3. Automated Tests

### Location of Tests

The automated tests for the new features can be found in the `test` directory of the project. Specifically, you can locate them in the `test/courses.js` file. These tests are designed to ensure that the courses features function correctly.

### Description of Tests

The tests cover the following scenarios:

1. **Create a Tag:** This test ensures that you can create a new tag successfully by verifying that the necessary database updates and operations occur without errors.

2. **Rename a Tag:** This test checks if the renaming of tags works as expected, including any updates in the database.

3. **Add Student to Tag:** This test confirms that adding a student to a course works as expected and the related updates are present in the database.

4. **Delete Tags:** The third test confirms that the removal of tags proceeds without errors and that the associated data is correctly deleted from the system.

### Test Coverage Explanation

The tests are considered sufficient for covering the changes made to the tags feature because they evaluate all essential operations and potential scenarios:

- **Create:** Verifies the creation process.
- **Rename:** Ensures tags can be renamed without issues.
- **Update:** Checks if students can be added to courses.
- **Delete:** Validates that tags can be deleted, and all related data is cleaned up.

These tests help maintain the reliability and functionality of the tags feature by catching any regressions or issues that might arise due to future code changes.
