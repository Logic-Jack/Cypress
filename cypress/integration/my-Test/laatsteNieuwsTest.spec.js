/// <reference types="cypress" />


describe('ga naar het laatste nieuws', () =>{
    beforeEach(() => {
        cy.visit("https://www.demorgen.be/")
    });
    it('get first article', () => {
        let title= "" 
        cy.get('article[data-position="1"]').first()
        .children('a')
        .children('header')
        .children('div')
        .children('span')
        .children('h3')
        .children('span')
        .first().invoke('text').then((text1) =>{
            cy.get('article[data-position="1"]').first().children('a').click();  

            cy.get('[data-element-id="article-element-headertitle"]').should(($h1) => {
                const text2 = $h1.text();               
                expect(text2).to.contains(text1);
                expect(text2).to.eq(text1);
            })
        });        
    });
})