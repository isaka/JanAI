declare const NODE: string
declare const CORTEX_API_URL: string
declare const SETTINGS: SettingComponentProps[]
declare const DEFAULT_MODEL_SOURCES: any
declare const CORTEX_API_KEY: string

interface Core {
  api: APIFunctions
  events: EventEmitter
}
interface Window {
  core?: Core | undefined
  electronAPI?: any | undefined
}
