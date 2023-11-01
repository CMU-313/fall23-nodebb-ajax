# User Guide for Courses Features

This user guide provides detailed instructions on how to create a new course with students added to it, as well as how to test them.

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

In this application, courses are the equivalent of tags in base NodeBB. Thus, we have reset the homepage of NodeBB to be the tags page (will now call this the courses page).

As a user registered as an instructor, he/she can create a course on the courses page via a new button. When the create course button is clicked, a modal will appear that gives the instructor the opportunity to name the course and add students to the course in the form of a comma separated list of usernames. When instructors visit the courses page, they will only see the courses they have created. When students visit the course page, they will only see the courses that they have been added to. Further, students do not have the option to create a course.

When a student or instructor clicks on a course, they can make posts in it just like posting to a specific tag in base NodeBB.

The last new feature just appends 'instructor' or 'student' to account usernames, so it is clear what role every poster has.

## 2. How to Use the New Features

### Creating a New Course and Adding Students

To create a new course in the system, follow these steps:

1. Log in to your instructor account
2. Navigate to homepage
3. Click on "Create Course."
4. Enter course name where indicated.
5. Enter the usernames of the students in the course as a comma separated list where indicated.
6. Click "Create Course"

### Seeing your Courses

To see the courses that you are a member of, follow these steps:

1. Navigate to homepage
2. Only courses that you are a member of will be shown (for instructors only courses they created, for students only courses that they were added to)

### See What Role a Poster Is (Student or Instructor)

To see what role a poster is, follow these steps:

1. Navigate to post
2. Look at the username of the poster; a suffix of '-student' indicates that they are a student while a suffix of '-instructor' indicates that they are an instructor

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
