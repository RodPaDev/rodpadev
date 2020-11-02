import Butter from 'buttercms'

export default class ButterCMS {
  API_KEY: string = null
  butter = null

  constructor(API_KEY: string) {
    this.API_KEY = API_KEY;
    this.butter = Butter(API_KEY)
  }

  async getPostAll(page: number, page_size: number = 10, exclude_body = true) {
    try {
      let options: object = { page, page_size, exclude_body }
      let result: object = await this.butter.post.list(options)

      return result
    } catch (error) {
      console.log(error)
    }
  }

  async getPost(slug: string) {
    try {
      // let options: object = { page, page_size, exclude_body: true }
      let result: object = await this.butter.post.retrieve(slug)

      return result
    } catch (error) {
      console.log(error)
    }
  }

  printKey(){
    console.log(this.API_KEY)
  }
}
