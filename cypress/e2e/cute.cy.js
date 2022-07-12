describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.cutebabyvote.com/july-2022/?contest=photo-detail&photo_id=81010')
    cy.get('.photo_vote > .pc-image-info-box-button-btn-text').click()
    cy.get('.greenb > .pc-image-info-box-button-btn-text').contains("Thank you for vote! Please come back after 30 minutes to vote again.")
  })
})