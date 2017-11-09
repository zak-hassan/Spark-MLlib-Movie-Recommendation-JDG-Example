import MovieRating from "./movieRating/containers/MovieRatingView.jsx";
import AddRating from "./addRating/containers/AddRatingView.jsx";


export const VIEWS_CONFIG = {
  CONFIG: [
    // Insert views and their path mappings
    {component: MovieRating, path: '/'},
    {component: AddRating, path: '/addRating'}
  ],
};

export const NAVBAR_CONFIG = {
  categories: [
    {title: 'Movie Rating', link: '/'},
    {title: 'Add Rating', link: '/addRating'}
  ],
  titleSrc: {
    path: 'assets/img/brand.svg',
    alt: 'Radanalytics Spark Mlib MovieRec'
  }
};

export const MODALS = {
  FEEDBACK_MODAL : "001",
  CONFIG_HELP_MODAL: "002"
};
