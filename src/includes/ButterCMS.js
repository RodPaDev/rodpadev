import Butter from 'buttercms'

class ButterCMS {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.butter = Butter(API_KEY)
  }

  async getPostAll(page, page_size = 10, exclude_body = true) {
    try {
      let options = { page, page_size, exclude_body, preview: 1 }
      let result = await this.butter.post.list(options)
      

      return result
    } catch (error) {
      console.log(error)
    }
  }

  async getPost(slug) {
    try {
      // let options = { page, page_size, exclude_body: true }
      let result = await this.butter.post.retrieve(slug)

      return result
    } catch (error) {
      console.log(error)
    }
  }

  printKey(){
    console.log(this.API_KEY)
  }
}

export default ButterCMS;