import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from '@react-native-google-signin/google-signin';

export default function() {

    GoogleSignin.configure({
        scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
        //webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
    });

    return (
        <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={async () => {
          console.log("Onpress");
            try {
              console.log("SI");
              await GoogleSignin.hasPlayServices();
              console.log("Play services");
              const userInfo = await GoogleSignin.signIn();
              console.log("NO");
              console.log(JSON.stringify(userInfo, null, 2));
              //setState({ userInfo });
            } catch (error) {
              console.log(error)
              if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
              } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
              } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
              } else {
                // some other error happened
              }
            }
          }}
        //disabled={this.state.isSigninInProgress}
        />
    );
}

/*
https://www.youtube.com/watch?v=vojHmGUGUGc
https://github.com/react-native-google-signin/google-signin#expo-installation
https://docs.expo.dev/workflow/customizing/
https://docs.expo.dev/develop/development-builds/create-a-build/
https://docs.expo.dev/build/setup/
https://expo.dev/accounts/patryck/projects/ProyectoFinal/builds/b258ce96-7327-4b18-ae9b-82c34549ce8e

antes inicie sesion con eas expo
Conecte celular
Luego escanee con la camara el codigo que me llevo a una pagina de expo para instalar la app, al parecer asi se enlazo con mi expo del celular, 
eas build --profile development --platform android
Luego copie link
npx expo start --dev-client
escanee con expo go este
*/