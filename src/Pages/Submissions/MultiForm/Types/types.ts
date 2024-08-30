export interface FormData {
  personalInfo: {
    name: string
    email: string
    phone: string
  }
  plan: {
    type: string
    cost: number
  }
  addOns: {
    onlineService: boolean
    largerStorage: boolean
    customizableProfile: boolean
  }
  summary: {
    agreement: boolean
  }
}
