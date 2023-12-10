import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { myTheme } from './teheme'
import StudioNavbar from './app/components/StudioNavbar'
import Logo from './app/components/Logo'
import schemaTypes from './sanity/schemas'


export default defineConfig({
  basePath: "/admin",
  name: 'SITEWIZARD_Content_Studio',
  title: 'SiteWizard Content Studio- Horizon Property',
  projectId: "xzcm1tzx",
  dataset: "production",
  apiVersion: "2023-12-03",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar
    }
  },
  theme: myTheme,
})
