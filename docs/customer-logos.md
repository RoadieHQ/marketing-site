# Customer logos

Permission must be obtained from each customer before their logo is used on the website. It is standard language in our order form, but customers sometimes require edits or deletions are required. Be sure to check the final version of the signed order form before adding a customer logo to the website.

## Steps to add a logo

1. Source a high-quality version of the logo with a transparent background. Some companies have official brand assets which must be used. Try searching for "<customer logo> name brand" to find these.
2. Find the Figma file called "Website" and open the "Logos" page in that file.
3. Add the logo to this page and resize it to match the existing set of logos.
4. Open the "Fill" panel in the Figma sidebar and drag the Exposure and Contrast sliders all the way to the left.
5. Rename the image to "<customer name>-monochrome" using the left panel in Figma.
6. Export the image as a `1x png` file and move it into the `content/assets/home/customer-logos` directory of the marketing site.
7. Upload the png image to https://convertio.co/png-webp/, download the resulting `.webp` version and place it in the same folder.
8. Edit the code in `src/components/landing/CustomerLogoCloud.js` to add the logo.
