# How to creaete Custom Footer with icon links
1. Eject the default footer in the theme config:
   ```bash
   npx docusaurus swizzle @docusaurus/theme-classic Footer --danger
   ```
2. Get into the folder `src/theme/Footers`, add the file `CustomIconLinks.js`
3. To use the icon from the cdns pf external sources (Academicon), use need to install `react-helmet` to be able for picking components (`className`) from the cdns
   ```bash
   npm install react-helmet
   ```