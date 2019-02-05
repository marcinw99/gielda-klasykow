import { SheetsRegistry } from "jss";
import { createGenerateClassName } from "@material-ui/core/styles";

function createPageContext() {
  return {
    sheetsManager: new Map(),
    sheetsRegistry: new SheetsRegistry(),
    generateClassName: createGenerateClassName()
  };
}

export default function getPageContext() {
  if (!process.browser) {
    return createPageContext();
  }

  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
