import Butter from 'buttercms';

class ButterCMS {
  constructor(API_KEY) {
    this.API_KEY = API_KEY;
    this.butter = Butter(API_KEY);
  }

  async getPostAll(page, page_size = 10, exclude_body = true) {
    try {
      let options = { page, page_size, exclude_body, preview: 1 };
      let result = await this.butter.post.list(options);
      let data = await result.data;

      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPost(slug) {
    try {
      let result = await this.butter.post.retrieve(slug);
      let data = await result.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getCollection(collection_name, params){
    try {
      let result = await this.butter.content.retrieve(collection_name, params);
      let data = await result.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default ButterCMS;
