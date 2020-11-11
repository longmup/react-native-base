# REACT NATIVE BASE

## Structure project
- android/: Source native android
- ios/: Source native ios
- libraries/: Custom libs
- .eslintrc.js: Convention config file
- index.js: Root file of project
- package.json: Define project info and version of libs
- app/: Source react native project
    - res/: Resource of project
        - images/: Project images
        - strings/: Project text
        - styles/:
            - AppStyles.js: General project styles
            - Colors.js: Define all colors
            - Sizes.js: Define all sizes
            - Images.js: require all images
    - src/: Source code of project
        - api/: Define api request and environment config
        - components/: General component
        - redux/: Redux config
        - router/: Router config
        - screens/: UI component
        - utils/: Support files
        - App.js: Main file
