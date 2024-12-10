# Cocktail Finder

A simple Angular application to display cocktail information fetched from the Cocktail DB API. The app allows users to search for cocktails, view their details, and submit feedback through a form. It also features a favorites system to store user preferences.

## Features

### Home Page:
- A welcome page with a brief introduction to the app.
- Navigation to other pages, including the cocktail search and feedback form.

### Cocktail Data Page:
- Displays a list of cocktails with their names and images.
- Fetches data dynamically from the [Cocktail DB API](https://www.thecocktaildb.com/).
- Shows additional details for each cocktail, including ingredients and instructions.

### Favorites Page:
- Users can add cocktails to their favorites list.
- Displays a list of all the cocktails that the user has added to their favorites.

### Feedback Form:
- A feedback form to collect user input (Name, Email, and Message).
- Implements form validation using Angular's Reactive Forms.

### Responsive Design:
- Optimized for both desktop and mobile screens to ensure a smooth user experience on any device.

## Technologies Used

- **Angular 16**: For building the single-page application.
- **Angular Router**: For client-side routing.
- **Reactive Forms**: For managing the feedback form with validation.
- **HTTP Client**: For consuming the Cocktail DB API.
- **CSS**: For styling the application and creating a responsive layout.
- **TypeScript**: For type-safe programming.
## API Reference

**Cocktail DB API**  
- **Base URL**: `https://www.thecocktaildb.com/api/json/v1/1`
- **Endpoints**:
  - `/search.php?s={search-term}`: Fetches a list of cocktails matching the search term.
  - `/lookup.php?i={idDrink}`: Fetches detailed information for a specific cocktail.

## Future Enhancements

- **Add Cocktail Search**: Enhance the app by adding a search feature for finding cocktails based on ingredients or names.
- **Pagination**: Implement pagination to display more cocktails when the user scrolls or clicks a "load more" button.
- **Favorites System**: Allow users to mark cocktails as favorites and store them for later.
- **Cocktail Comparison**: Implement a feature to compare multiple cocktails.
- **Animations and Enhanced UI**: Add animations, transitions, and improve the design with more detailed information cards.

## Live Demo

Check out the live demo of the app on vercel: https://cocktail-finder-sigma.vercel.app/

