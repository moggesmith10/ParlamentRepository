# Parlament Browser
## Setup

```
#Install dependencies
npm install

npx expo start #For Expo Go
OR
npx expo run:android #For android
OR
npx expo run:ios #For ios
```

## Development
This application was developed using a Android Studio emulator, and is untested on IOS.

## Features

 - Ability to browse parlament members, both online and offline
 - Search functionality
 - Display full name, adress and city

Note that I have not had time to implement Avatar functionality

## Quirks
Due to problem with my development environment I have had trouble accessing the lagtinget API, and have such added offline functionality aswell. This project also uses both TypeScript and JavaScript, with the former mostly being used for native classes while the latter is used for React implementations. This was done due to time constraint, otherwise it would mostly or only be Typescript