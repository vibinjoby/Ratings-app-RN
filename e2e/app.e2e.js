/* eslint no-undef: 0 */
describe('Ratings app', () => {
  // NOTE: Before executing the e2e tests delete the latest user,review and restaurant or after executing
  beforeAll(async () => {
    await device.launchApp({ newInstance: true })
  })
  // STEP:-1 : SIGN UP AS OWNER AND CREATE YOUR RESTAURANT

  it('should get past welcome screen', async () => {
    // Sign up as a owner
    await element(by.id('signupBtn')).tap()
  })

  it('should sign up as a owner', async () => {
    await element(by.id('rightTab')).tap()
    await element(by.id('fullName')).replaceText('vibincanada')
    await element(by.id('email')).replaceText('vibin2canada@gmail.com')
    await element(by.id('password')).replaceText('Password123!')
    await element(by.id('scrollContainer')).scrollTo('bottom')
    await element(by.id('confirmPassword')).replaceText('Password123!')

    await element(by.id('signupBtn')).tap()
  })

  it('should create a new restaurant', async () => {
    await element(by.id('addRestaurant')).tap()

    await element(by.id('restaurantName')).replaceText('Test restaurant')
    await element(by.id('address')).replaceText('toptal toronto office')
    await element(by.id('email')).replaceText('vibin@toptal.com')
    await element(by.id('ctNumber')).replaceText('4372671998')

    await element(by.id('saveBtn')).tap()
  })

  it('should logout', async () => {
    await element(by.id('logoutBtn')).tap()
    await element(by.id('positiveBtn')).tap()
  })

  // STEP:-2 : SIGN IN AS CUSTOMER AND ADD YOUR REPLY

  it('should get past welcome screen', async () => {
    // Sign in as a customer
    await element(by.id('loginBtn')).tap()
  })

  it('should login as a customer', async () => {
    await element(by.id('email')).replaceText('chinchuv93@gmail.com')
    await element(by.id('password')).replaceText('*1Vibinjoby#')
    await element(by.id('signinBtn')).tap()
  })

  it('should find the last restaurant added and select it', async () => {
    await element(by.id('restaurantContainer')).scrollTo('bottom')
    await element(by.text('Test restaurant')).tap()
    await element(by.id('addReviewIc')).tap()
  })

  it('should add a review', async () => {
    await element(by.id('stars4')).tap()
    await element(by.id('comments')).replaceText('This is a testing review so please ignore!!')
    await element(by.id('datePicker')).tap()
    await element(by.text('OK')).tap()
    await element(by.id('doneBtn')).tap()
  })

  it('should go back one screen to Home screen', async () => {
    await device.pressBack()
  })

  it('should logout', async () => {
    await element(by.id('logoutBtn')).tap()
    await element(by.id('positiveBtn')).tap()
  })

  // STEP:-3 : SIGN IN AS OWNER AND POST YOUR REPLY
  it('should get past welcome screen', async () => {
    // Sign in as a owner
    await element(by.id('loginBtn')).tap()
  })

  it('should login as a owner', async () => {
    await element(by.id('middleTab')).tap()
    await element(by.id('email')).replaceText('vibin2canada@gmail.com')
    await element(by.id('password')).replaceText('Password123!')
    await element(by.id('signinBtn')).tap()
  })

  it('should find the created restaurant added and select it to reply to user', async () => {
    await element(by.text('Test restaurant')).tap()
    await element(by.id('replyBtn')).tap()
    await element(by.id('replyInput')).replaceText(
      'Hi! Thanks for taking time to post your reviews..we very much appreciate it',
    )
    await element(by.id('sendBtn')).tap()
  })

  it('should go back one screen to Home screen', async () => {
    await device.pressBack()
  })

  it('should logout', async () => {
    await element(by.id('logoutBtn')).tap()
    await element(by.id('positiveBtn')).tap()
  })

  // STEP:-4 : SIGN IN AS ADMIN AND EDIT YOUR RESPONSES and DELETE USERS AND THE REVIEWS
  it('should get past welcome screen', async () => {
    // Sign in as a admin
    await element(by.id('loginBtn')).tap()
  })

  it('should login as a owner', async () => {
    await element(by.id('rightTab')).tap()
    await element(by.id('email')).replaceText('admin')
    await element(by.id('password')).replaceText('admin')
    await element(by.id('signinBtn')).tap()
  })
  it('should select users from home screen', async () => {
    await element(by.text('Users')).tap()
    await element(by.id('deleteIc2')).tap()
    await element(by.id('positiveBtn')).tap()
  })

  it('should go back one screen to Home screen', async () => {
    await device.pressBack()
  })

  it('should select restaurants from home screen', async () => {
    await element(by.text('Restaurants')).tap()
  })

  it('should find the last restaurant added and select it', async () => {
    await element(by.text('Test restaurant')).tap()
  })

  it('should edit the review and owner reply', async () => {
    await element(by.id('threeDots')).tap()
    await element(by.text('Edit Response')).tap()

    await element(by.id('customerRespId')).replaceText('Sample response')
    await element(by.id('star4')).tap()
    await element(by.id('ownerRespId')).replaceText('Sample owner reply')
    await element(by.id('save')).tap()
  })

  it('should edit the review and owner reply', async () => {
    await element(by.id('threeDots')).tap()
    await element(by.text('Delete Review')).tap()
  })

  it('should go back one screen to Home screen', async () => {
    await device.pressBack()
  })
})
