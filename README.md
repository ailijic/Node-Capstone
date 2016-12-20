[![build status](https://api.travis-ci.org/ailijic/capstone-node.svg)](http://travis-ci.org/ailijic/capstone-node)
[![Coverage Status](https://coveralls.io/repos/github/ailijic/capstone-node/badge.svg?branch=master)](https://coveralls.io/github/ailijic/capstone-node?branch=master)
# Node Capstone Project I 
## Epic
Automate the scheduling of shifts for the ERA Central up-call desk using a web portal.
## User Stories
### Level I
- As a user, I should be able to sign up to the shift portal
- As a user, I should be able to log in to the shift portal
- As a user, I should be able to log in with my Google account
- As a user, I should be able to see what days and times I am scheduled
- As a user, I should be able to select what days I can not work
- As a user, I should not be scheduled for back-to-back shifts
- As a user, I should know when the schedule is going to be finalized
- As a user, I should be able to set my avalability for any future month, up to a year
- As a user, shifts are distributed fairly
- As a user, I can see which shifts are still open and sign up for them if I want
- As a user, I should get an email when I have a shift coming up

### Level II
- As a user, I can easily filter out blocks e.g. weekends, weekdays, mornings, ...
- As a user, I should be able to see my shifts on my Google Calendar
- As a user, I should be able to be scheduled at multiple offices
  * As a user, I should not be scheduled to work at conflicting times in different offices
  * As a user, I should not be scheduled to work back-to-back shifts
- As a user, I can select "days I want to work", "days I can work", and "days I cant work"
- As a user, I should get a text message when I have a shift comming up

### Level III
- As a user, I will get a call when my shift starts to verify I am there

## Administrator Stories:
### Level I
- As an admin, I should be able to sign up
- As an admin, I should be able to log in
- As an admin, I should be able to manually edit the schedule after it is finalized

### Level II
- As an admin, I can manually create accounts
- As an admin, I can manually create accounts via a CSV
- As an admin, I can manually import accounts from Google
- As an admin, I can set a priority for users that I want to work more often

### Level III
- As an admin, shift priority is given to users that are not late or absent

## Screen List
- Sign in Page
- Sign up Page
- User Settings
- Calendar showing shifts
- Show open shifts
- Show date when shifts will be finalized
- Select shifts and times that you want to work
- Admin Calendar to edit shifts
- Admin Settings
- Admin edit users
