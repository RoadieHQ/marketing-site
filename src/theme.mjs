/*
 * These are tailwind variables which are used by JS code. Theoretically, this is not DRY and
 * we will have to keep these variables in sync with Tailwind.
 *
 * The alternative is to use resolveConfig as explained here.
 * https://tailwindcss.com/docs/configuration#referencing-in-java-script
 * That method ends up adding 250KB to the build.
 *
 * Aparently, it is possible to use something like babel-plugin-preval to cut this extra 
 * weight down, but it's not clear how to use that package in Gatsby and it doesn't seem too
 * bad to just copy/paste 3 non critical values instead.
 */
export default {
  COLORS_PRIMARY_500: '#f97316',
  COLORS_PRIMARY_600: '#ea580c',
  COLORS_GRAY_500: '#737373',
  BREAKPOINTS_MD: '48rem',
  BREAKPOINTS_LG: '64rem',
  BREAKPOINTS_XL: '80rem',
  BREAKPOINTS_2XL: '96rem',
};
