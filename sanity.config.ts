import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { myTheme } from './teheme'
import StudioNavbar from './app/components/StudioNavbar'
import Logo from './app/components/Logo'
import schemaTypes from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export default defineConfig({
  basePath: "/studio",
  name: 'SITEWIZARD_Content_Studio',
  title: 'SiteWizard Content Studio- Horizon Property',
  projectId,
  dataset,
  apiVersion,
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
