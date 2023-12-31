class ModelPage {
  getModelTab() {
    return cy.get('.3D_model_tab', { timeout: 60000 })
  }

  getDownloadModelButton() {
    return cy.get('#download_traceparts_3d_model')
  }

  getIndividualDownloadButton() {
    return cy.get('#samtec-checkbox-3d-modal-download-individual-btn', { timeout: 60000 })
  }

  closeModelModal() {
    return cy.get('.modal-close', { timeout: 60000 }).click({ force: true })
  }

  downloadModel() {
    this.getModelTab().click()
    this.getDownloadModelButton().click()
    this.getIndividualDownloadButton().click()
    this.closeModelModal()
  }
}

export default ModelPage
