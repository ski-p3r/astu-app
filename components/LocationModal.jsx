import React from "react";
import { WebView } from "react-native-webview";

export default function LocationModal({ gps }) {
  const googleMapsURL = "https://www.google.com/maps/";

  return <WebView source={{ uri: googleMapsURL + gps }} />;
}
