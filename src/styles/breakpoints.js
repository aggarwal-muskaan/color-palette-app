/*  eslint-disable*/
export default {
  // up(size) {
  //     const breakpoint = {
  //       xs: "576px",
  //       sm: "768px",
  //       md: "992px",
  //       lg: "1200px",
  //     };
  //     return `@media(min-width:${breakpoint[size]})`;
  //   },
  down(size) {
    const breakpoint = {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1600px",
    };
    return `@media(max-width:${breakpoint[size]})`;
  },
};
