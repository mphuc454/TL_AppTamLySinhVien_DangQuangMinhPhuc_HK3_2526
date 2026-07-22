// import Constants from "expo-constants";
// import * as Notifications from "expo-notifications";
// import { Platform } from "react-native";

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//     shouldShowBanner: true,
//     shouldShowList: true,
//   }),
// });

// export const sendPushNotification = async (
//   token: string,
//   title: string,
//   body: string,
// ) => {
//   await fetch("https://exp.host/--/api/v2/push/send", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Accept-Encoding": "gzip, deflate",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       to: token,
//       sound: "default",
//       title,
//       body,
//     }),
//   });
// };

// export async function registerForPushNotificationsAsync() {
//   if (Platform.OS === "android") {
//     await Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }
//   let token;
//   const { status: existingStatus } = await Notifications.getPermissionsAsync();

//   let finalStatus = existingStatus;

//   if (existingStatus !== "granted") {
//     const { status } = await Notifications.requestPermissionsAsync();
//     finalStatus = status;
//   }

//   if (finalStatus !== "granted") {
//     alert("Failed to get push token for push notification!");
//     return;
//   }

//   try {
//     const projectId =
//       Constants?.expoConfig?.extra?.eas?.projectId ??
//       Constants?.easConfig?.projectId;
//     if (!projectId) {
//       throw new Error("Project ID not found");
//     }
//     token = (
//       await Notifications.getExpoPushTokenAsync({
//         projectId,
//       })
//     ).data;
//     console.log(token);
//   } catch (e) {
//     token = `${e}`;
//   }
//   return token;
// }
