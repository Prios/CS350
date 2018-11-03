// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  
  firebase: {
    apiKey: "AIzaSyCFrhBY9b612kd0Q-GO7MniaUx6efHkZ4M",
    authDomain: "se-proejct.firebaseapp.com",
    databaseURL: "https://se-proejct.firebaseio.com",
    projectId: "se-proejct",
    storageBucket: "se-proejct.appspot.com",
    messagingSenderId: "486295101089"
  }
};
