// This works around a bug where the search dialog is not properly removed from the
// page because we are working with Gatsby's client side refreshes. The search dialog
// expects a page refresh to occur when navigating.
// https://github.com/algolia/autocomplete/blob/45944e4c9f4e695039ab18e41284ff3d621774b7/packages/autocomplete-js/src/createAutocompleteDom.ts#L40
//
// Ideally we would be calling the onDetachedOverlayClose link from the GitHub URL
// above but that seems to be a private function.
const destroySearchOverlay = () => {
  document.body.classList.remove('aa-Detached');
};

export default destroySearchOverlay;
