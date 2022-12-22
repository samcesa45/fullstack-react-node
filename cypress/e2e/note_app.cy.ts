describe('Note app', function(){
  beforeEach( function() {
    cy.request('POST', 'http://localhost:8000/api/testing/reset')
    const user = {
      name:'Matti Luukkainen',
      username:'mluukkai',
      password:'salainen'
    }
    cy.request('POST', 'http://localhost:8000/api/users/', user)
    cy.visit('http://localhost:3000')
  })
  it('front page can be opened',  function(){
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2022')
  })

  it('user can login', function(){
    cy.contains('login').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()

    cy.contains('Matti Luukkainen logged-in')
  })

//test when a new note is created
describe('when logged in', function(){
  describe('and several notes exist', function () {
    beforeEach(function() {
      cy.login({username:'mluukkai', password:'salainen'})
      cy.createNote({content:'first note', important:false})
      cy.createNote({content:'second note', important:false})
      cy.createNote({content:'third note', important:false})
    })

    it('one of those can be made important', function () {
      cy.contains('second note').parent().find('button').as('theButton')
        cy.get('@theButton').click()
        cy.get('@theButton')
          .should('contain', 'make not important')

    })

  })

})




  //test for failed login test
  it('login fails with wrong password', function() {
     cy.contains('login').click()
     cy.get('#username').type('mluukkai')
     cy.get('#password').type('wrong')
     cy.get('#login-button').click()

    //  cy.get('.text-red-500').should('contain','wrong credentials')
    cy.contains('wrong credentials')

    cy.get('html').should('not.contain', 'Matti Luukkainen logged-in')
    
})


})
