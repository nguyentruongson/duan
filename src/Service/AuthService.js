import axios from 'axios';
export default class AuthService {
  constructor() {
    this.login = this.login.bind(this)
    this.loginSocial = this.loginSocial.bind(this)
    this.logout = this.logout.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.setProfile = this.setProfile.bind(this)
    this.domain = 'https://juzdrive.com'
    // this.domain = 'http://ec2-13-251-13-125.ap-southeast-1.compute.amazonaws.com:1996';
    //this.domain = 'http://localhost:1996'
    //this.domain =  'https://api-test.tensorlab.dev'
  }

   login(username, password, callback) {
      let setProfile = this.setProfile;
      axios.post(`${this.domain}/api/sigin`, {
        username: username,
        password: password
      })
      .then(function (response) {
        setProfile(response.data.data);
        callback(true);
      })
      .catch(function (error) {
        console.log(error)
        callback(false)
      });
  }

  loginSocial(type, loginObject, callback) {
      let setProfile = this.setProfile;
      axios.post(`${this.domain}/api/${type}/sign`, loginObject)
      .then(function (response) {
        setProfile(response.data.data);
        callback(true);
      })
      .catch(function (error) {
        console.log(error)
        callback(false)
      });
  }

  loggedIn(){
    // Checks if there is a saved token and it's still valid
    const profile = this.getProfile()
    // console.log('profile ====> ',profile)
    return profile!=null;
  }

  setProfile(profile){
    localStorage.setItem('profile', profile.token)
  }

  getProfile(){
    const profile = localStorage.getItem('profile')
    return profile ? localStorage.profile : null
  }

  logout(){
  	// console.log('LogOut');
    localStorage.removeItem('profile');
    window.location.replace("/");
  }

  _checkStatus(response) {
    // raises an error in case response status is not a success
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

}
