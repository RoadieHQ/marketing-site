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
 * bad to just copy/paste some non critical values instead.
 */
module.exports = {
  BREAKPOINTS_MD: '768px',
};
