(function () {
  window.updateStructuredData = function (lang) {
    const c=SITE_CONTENT[lang]||SITE_CONTENT.en, base='https://aboutculturethings.com';
    const graph=[
      {'@type':['TourOperator','LocalBusiness'],'@id':base+'/#business',name:'About Culture Things',url:base+'/',email:'aboutculturethings@gmail.com',areaServed:['Lisbon','Sintra','Cascais','Fátima','Nazaré','Óbidos'],availableLanguage:['English','Spanish','Portuguese'],sameAs:['https://www.instagram.com/aboutculturethings/','https://www.tripadvisor.co.uk/Attraction_Review-g189158-d28016472-Reviews-About_Culture_Things-Lisbon_Lisbon_District_Central_Portugal.html']},
      {'@type':'WebSite','@id':base+'/#website',url:base+'/',name:'About Culture Things',inLanguage:Object.values(SITE_CONTENT.languages)},
      {'@type':'WebPage','@id':base+'/?lang='+lang+'#page',url:base+'/?lang='+lang,name:c.metaTitle,description:c.metaDescription,inLanguage:SITE_CONTENT.languages[lang],isPartOf:{'@id':base+'/#website'},about:{'@id':base+'/#business'}},
      {'@type':'FAQPage','@id':base+'/?lang='+lang+'#faq',mainEntity:c.faq.map(x=>({'@type':'Question',name:x[0],acceptedAnswer:{'@type':'Answer',text:x[1]}}))}
    ];
    TOURS_CONFIG.tours.filter(t=>t.active).forEach(t=>graph.push({'@type':'TouristTrip','@id':base+'/#tour-'+t.id,name:t.name[lang]||t.name.en,description:c.tours[t.id].line,touristType:'Small-group cultural tour',provider:{'@id':base+'/#business'},offers:{'@type':'Offer',price:t.price,priceCurrency:'EUR',availability:'https://schema.org/InStock',url:base+'/experiences/'+t.id+'/'}}));
    document.getElementById('structured-data').textContent=JSON.stringify({'@context':'https://schema.org','@graph':graph});
  };
  if(window.ACT_LANG) updateStructuredData(window.ACT_LANG);
}());
