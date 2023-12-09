import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white": "#fff",
    "--my-black": "#1a1a1a",
    "--sitewizard-brand": "#385AE0",
    "--my-red": "#1a1a1a",
    "--my-yellow": "#1a1a1a",
    "--my-green": "#1a1a1a",

}

export const myTheme = buildLegacyTheme({
    "--black": props["--my-black"],
    "--white": props["--my-white"],

    "--brand-primary": props["--sitewizard-brand"],

    "--default-button-primary-color": props["--sitewizard-brand"],

    "--state-info-color": props["--sitewizard-brand"],


    "--focus-color": props["--sitewizard-brand"]

})