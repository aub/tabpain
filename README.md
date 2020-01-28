## Ionic sample app demonstrating problem with dynamic tabs

This is an app created with `ionic start tabpain --type=react --capacitor`.

It is a simple app with three tabs, but where the routes used by the tabs are created
dynamically based on the current group, which is passed in the URL. Each tab has links
for switching between groups one and two, where the links use an IonItem with routerLink
set to remain on the same tab but switch the currently selected group.

## The problem

When switching between groups the tabs do not update properly and will link you to the wrong place.

## Steps

1. `npm run start`
1. Click around on the three tabs on the bottom, and note that switching between them works properly.
1. Also note that as you switch between the tabs, the URL updates properly and includes the current group name.
1. On one of the tabs, click the link to switch to whichever group you are _not_ currently on.
1. Note that the labels in the tab bar, the URL, and the heading within the tab have all changed to reflect the new group.
1. Look at the console and see that it indicates the tabs were last rendered with the new group.
1. Inspect the tabs and note that for the currently-selected one the href in the DOM has changed correctly but that for the others it didn't change even through they were re-rendered with the new group.
1. Click on any of the tabs and note that it sends you back to the originally-selected group rather than the one you switched to. This is even the case for the currently-selected tab where the DOM did seem to update correctly.

## What should have happened

When the tabs are re-rendered with the newly-selected group, clicking on them should link you to the group you selected.

