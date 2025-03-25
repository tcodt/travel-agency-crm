import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./utils/customThemeUi.ts";

// import createCache from "@emotion/cache";
// import rtlPlugin from "stylis-plugin-rtl";
// import { CacheProvider } from "@emotion/react";

// const cacheRtl = createCache({
//   key: "muirtl",
//   stylisPlugins: [rtlPlugin],
// });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <CacheProvider value={cacheRtl}> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </CacheProvider> */}
  </StrictMode>
);
