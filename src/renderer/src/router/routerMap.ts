//路由
interface RouterMap {
  LayOut: string
  Analysis: string
  AnalysisFile: string
  FileImages: string
  GreyCalculate: string
  OringinCalculate: string
  [propname: string]: string
}

export const routerMap: RouterMap = {
  LayOut: '/LayOut',
  Analysis: '/Analysis',
  AnalysisFile: 'File',
  FileImages: 'FileImages',
  GreyCalculate: 'GreyCalculate',
  OringinCalculate: 'OringinCalculate'
}
