# React Router Dom Nested Route Params Not Rendering

This repository demonstrates a bug in React Router Dom where route parameters are not correctly rendered within nested routes.  The issue occurs when trying to access parameters passed to a parent route from a child route.  The expected behavior is that the parameters would be available in both the parent and child components, but this is not consistently happening.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Navigate to `/users/123`. Note the incorrect rendering within the `UserProfile` component.

## Expected Behavior

The `UserProfile` component should correctly display the user ID (123). 

## Actual Behavior

The `UserProfile` component does not display the user ID, indicating a problem with parameter passing in nested routes.

## Solution

The solution involves using the `useParams` hook correctly within the nested route component, as shown in `bugSolution.js`