// Reference display only: checkout is always charged in EUR.
const SOURCE='https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml';
const FALLBACK={rate:1.1215,date:'2026-10-20',source:'ECB'};
let cached=null,checkedAt=0;
function parseRate(xml){const date=xml.match(/time=['"](\d{4}-\d{2}-\d{2})['"]/),usd=xml.match(/currency=['"]USD['"]\s+rate=['"]([\d.]+)['"]/);const rate=Number(usd?.[1]);if(!date||!Number.isFinite(rate)||rate<=0)throw Error('Invalid exchange rate');return{rate,date:date[1],source:'ECB'}}
module.exports=async function handler(req,res){
 if(req.method!=='GET')return res.status(405).json({error:'Method not allowed'});
 try{if(!cached||Date.now()-checkedAt>6*60*60*1000){const response=await fetch(SOURCE,{signal:AbortSignal.timeout(4000)});if(!response.ok)throw Error('Exchange rate unavailable');cached=parseRate(await response.text());checkedAt=Date.now()}res.setHeader('Cache-Control','public, s-maxage=21600, stale-while-revalidate=3600');return res.json({...cached,approximate:true})}
 catch{res.setHeader('Cache-Control','public, s-maxage=300');return res.json({...cached||FALLBACK,approximate:true,stale:true})}
};
module.exports.parseRate=parseRate;
