const crypto=require('crypto');
const KEY='act:blocked-dates';
function config(){return{url:(process.env.KV_REST_API_URL||process.env.UPSTASH_REDIS_REST_URL||'').replace(/\/$/,''),token:process.env.KV_REST_API_TOKEN||process.env.UPSTASH_REDIS_REST_TOKEN||''}}
function configured(){const c=config();return Boolean(c.url&&c.token)}
function validDate(v){return /^\d{4}-\d{2}-\d{2}$/.test(String(v||''))}
async function command(parts){const c=config();if(!configured())return null;const path=parts.map(v=>encodeURIComponent(String(v))).join('/');const r=await fetch(`${c.url}/${path}`,{headers:{Authorization:`Bearer ${c.token}`},cache:'no-store'});if(!r.ok)throw new Error(`Availability storage failed (${r.status})`);const data=await r.json();return data.result}
async function blockedDates(){if(!configured())return[];const result=await command(['smembers',KEY]);return Array.isArray(result)?result.filter(validDate).sort():[]}
async function isBlocked(date){if(!configured()||!validDate(date))return false;return Number(await command(['sismember',KEY,date]))===1}
async function updateDates(action,dates){if(!configured())throw new Error('Availability storage is not configured.');const clean=[...new Set((dates||[]).filter(validDate))];if(!clean.length)return blockedDates();await command([action==='unblock'?'srem':'sadd',KEY,...clean]);return blockedDates()}
function adminAuthorized(value){const secret=String(process.env.ADMIN_PASSWORD||'');const input=String(value||'');if(!secret||secret.length!==input.length)return false;return crypto.timingSafeEqual(Buffer.from(secret),Buffer.from(input))}
module.exports={configured,validDate,blockedDates,isBlocked,updateDates,adminAuthorized};
